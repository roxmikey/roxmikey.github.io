"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { site } from "@/config/site";

/**
 * Quote request / contact form.
 * Submissions go to Formspree (https://formspree.io) - a free service that
 * emails you each enquiry. Set your form ID in src/config/site.ts.
 *
 * The submission logic lives in the `submitForm` function below so it can be
 * swapped later for email, Resend, SMTP or a custom API without touching the
 * rest of the form.
 */

type Status = "idle" | "sending" | "success" | "error";

const MAX_PHOTOS = 5;
const MAX_PHOTO_MB = 10;

async function submitForm(data: FormData): Promise<void> {
  const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Submission failed (${res.status})`);
  }
}

const inputCls =
  "w-full rounded-md border border-ink/20 bg-paper px-3.5 py-2.5 text-ink placeholder:text-mist focus:border-amber-deep aria-[invalid=true]:border-red-600";
const labelCls = "block font-medium mb-1.5";
const errCls = "mt-1.5 text-sm text-red-700";

function Field({
  label,
  error,
  children,
  hint,
  optional,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  hint?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <span className={labelCls}>
        {label}
        {optional && <span className="text-mist font-normal"> (optional)</span>}
      </span>
      {children}
      {hint && !error && <p className="mt-1.5 text-sm text-graphite">{hint}</p>}
      {error && (
        <p className={errCls} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [photoNote, setPhotoNote] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // If Formspree hasn't been configured yet, show contact details instead of
  // a form that can't send anywhere.
  if (!site.formspreeId) {
    return (
      <div className="rounded-lg border border-line bg-paper p-6">
        <h3 className="text-2xl mb-2">Get in touch directly</h3>
        <p className="text-graphite mb-4 leading-relaxed">
          The online form isn&apos;t switched on yet - but we&apos;re easy to reach. Call or email
          with a description of the issue and a photo or two if you can.
        </p>
        <p className="mb-1">
          <a href={site.phoneHref} className="font-semibold text-amber-deep underline underline-offset-4">
            {site.phone}
          </a>
        </p>
        <p>
          <a href={`mailto:${site.email}`} className="font-semibold text-amber-deep underline underline-offset-4 break-all">
            {site.email}
          </a>
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-line bg-paper p-8 text-center" role="status">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/15 text-amber-deep mb-4">
          <svg width="26" height="26" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-2xl mb-2">Request sent</h3>
        <p className="text-graphite leading-relaxed">
          Thanks - we&apos;ve received your details and will be in touch soon. If it&apos;s urgent,
          call us on{" "}
          <a href={site.phoneHref} className="font-semibold text-amber-deep underline underline-offset-4">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  function validate(form: HTMLFormElement): boolean {
    const fd = new FormData(form);
    const next: Record<string, string> = {};
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const suburb = String(fd.get("suburb") || "").trim();
    const description = String(fd.get("description") || "").trim();

    if (!name) next.name = "Enter your name.";
    if (!phone) next.phone = "Enter a phone number so we can reach you.";
    else if (!/^[0-9+()\s-]{8,}$/.test(phone)) next.phone = "That phone number doesn't look right - check the digits.";
    if (!email) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email address doesn't look right.";
    if (!suburb) next.suburb = "Enter your address or suburb.";
    if (!description) next.description = "Describe the issue or the work you need.";
    if (!fd.get("consent")) next.consent = "Tick the box so we're allowed to contact you.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = form.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return false;
    }
    return true;
  }

  function onPhotosChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (files.length > MAX_PHOTOS) {
      e.target.value = "";
      setPhotoNote(`Please choose up to ${MAX_PHOTOS} photos.`);
      return;
    }
    const tooBig = files.find((f) => f.size > MAX_PHOTO_MB * 1024 * 1024);
    if (tooBig) {
      e.target.value = "";
      setPhotoNote(`"${tooBig.name}" is larger than ${MAX_PHOTO_MB} MB - try a smaller photo.`);
      return;
    }
    setPhotoNote(files.length ? `${files.length} photo${files.length > 1 ? "s" : ""} attached.` : "");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    setStatus("sending");
    try {
      await submitForm(new FormData(form));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" error={errors.name}>
          <input name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-label="Name" className={inputCls} />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input name="phone" type="tel" autoComplete="tel" required aria-invalid={!!errors.phone} aria-label="Phone" className={inputCls} />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" error={errors.email}>
          <input name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-label="Email" className={inputCls} />
        </Field>
        <Field label="Address or suburb" error={errors.suburb}>
          <input name="suburb" autoComplete="street-address" required aria-invalid={!!errors.suburb} aria-label="Address or suburb" className={inputCls} />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="What is it?">
          <select name="equipment" aria-label="What is it?" className={inputCls} defaultValue="Gate">
            <option>Gate</option>
            <option>Garage door</option>
            <option>Roller door</option>
            <option>Access control</option>
            <option>Not sure</option>
          </select>
        </Field>
        <Field label="What do you need?">
          <select name="job_type" aria-label="What do you need?" className={inputCls} defaultValue="Repair">
            <option>Repair</option>
            <option>Service</option>
            <option>New installation</option>
            <option>Fault finding / advice</option>
          </select>
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Property type">
          <select name="property_type" aria-label="Property type" className={inputCls} defaultValue="Residential">
            <option>Residential</option>
            <option>Commercial</option>
          </select>
        </Field>
        <Field label="Brand" optional hint="e.g. Centsys, ATA, B&D, Merlin - check the motor sticker">
          <input name="brand" aria-label="Brand" className={inputCls} />
        </Field>
      </div>

      <Field label="Describe the issue or the work you need" error={errors.description}>
        <textarea
          name="description"
          rows={5}
          required
          aria-invalid={!!errors.description}
          aria-label="Describe the issue or the work you need"
          className={inputCls}
          placeholder="e.g. Sliding gate stops halfway and reverses. Motor is about 8 years old."
        />
      </Field>

      <Field
        label="Photos"
        optional
        hint={photoNote || `Up to ${MAX_PHOTOS} photos of the gate, door, motor or damage. Photos help us diagnose faster.`}
      >
        <input
          name="photos"
          type="file"
          accept="image/*"
          multiple
          onChange={onPhotosChange}
          aria-label="Photos"
          className="block w-full text-sm text-graphite file:mr-4 file:rounded-md file:border-0 file:bg-bone file:px-4 file:py-2.5 file:font-medium file:text-ink hover:file:bg-line cursor-pointer"
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Preferred contact method">
          <select name="contact_method" aria-label="Preferred contact method" className={inputCls} defaultValue="Phone call">
            <option>Phone call</option>
            <option>Text message</option>
            <option>Email</option>
          </select>
        </Field>
        <Field label="Preferred time" optional>
          <select name="preferred_time" aria-label="Preferred time" className={inputCls} defaultValue="Anytime">
            <option>Anytime</option>
            <option>Morning</option>
            <option>Afternoon</option>
          </select>
        </Field>
      </div>

      <label className="flex items-start gap-3 rounded-md border border-line bg-bone/60 p-4 cursor-pointer">
        <input type="checkbox" name="urgent" value="yes" className="mt-1 h-4.5 w-4.5 accent-[#9a6700]" />
        <span>
          <span className="font-semibold">This is urgent.</span>{" "}
          <span className="text-graphite">
            e.g. a vehicle is stuck in or out, or the door/gate won&apos;t secure the property.
          </span>
        </span>
      </label>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            required
            aria-invalid={!!errors.consent}
            className="mt-1 h-4.5 w-4.5 accent-[#9a6700]"
          />
          <span className="text-sm text-graphite leading-relaxed">
            I agree to {site.name} contacting me about this enquiry and storing the details I&apos;ve
            provided. See our{" "}
            <Link href="/privacy/" className="underline underline-offset-2 hover:text-ink">Privacy Policy</Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p className={errCls} role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-red-800">
          The form couldn&apos;t be sent - check your connection and try again, or call us on{" "}
          <a href={site.phoneHref} className="font-semibold underline underline-offset-2">
            {site.phone}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-md bg-amber px-6 py-3.5 display text-lg font-semibold tracking-wide text-ink hover:bg-[#ffb81f] disabled:opacity-60 transition-colors"
      >
        {status === "sending" ? "Sending…" : "Send quote request"}
      </button>
    </form>
  );
}
