import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  path: "/privacy/",
});

/**
 * PLACEHOLDER LEGAL CONTENT
 * This is a sensible starting point for a small Australian service business,
 * but it is NOT legal advice. Have it reviewed by a professional before
 * relying on it.
 */
export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <h1 className="text-5xl mb-3">Privacy Policy</h1>
      <p className="text-sm text-graphite mb-10">
        Last updated: 22nd July 2026
      </p>
      <div className="space-y-8 text-graphite leading-relaxed [&_h2]:text-2xl [&_h2]:text-ink [&_h2]:mb-2">
        <section>
          <h2>Who we are</h2>
          <p>
            {site.name} (&quot;we&quot;, &quot;us&quot;) provides gate, garage door and access
            control services in Brisbane, Queensland. This policy explains how we handle personal
            information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy
            Principles.
          </p>
        </section>
        <section>
          <h2>What we collect</h2>
          <p>
            When you contact us or request a quote we may collect your name, phone number, email
            address, property address or suburb, details of your gate or garage door, and any
            photos you choose to send us. We collect this directly from you.
          </p>
        </section>
        <section>
          <h2>Why we collect it</h2>
          <p>
            We use your information to respond to enquiries, prepare quotes, schedule and perform
            work, invoice for completed jobs, and maintain service records for equipment we have
            worked on. We do not sell your information, and we do not use it for third-party
            marketing.
          </p>
        </section>
        <section>
          <h2>Online forms</h2>
          <p>
            Our website forms are processed by a third-party form provider (Formspree), which
            transmits your submission to us by email. Their handling of data is governed by their
            own privacy policy.
          </p>
        </section>
        <section>
          <h2>Storage and security</h2>
          <p>
            We take reasonable steps to protect personal information from misuse, loss and
            unauthorised access. Information is retained only as long as needed for the purposes
            above or as required by law.
          </p>
        </section>
        <section>
          <h2>Access and correction</h2>
          <p>
            You can request access to, or correction of, the personal information we hold about you
            by contacting us at {site.email}.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to {site.email} or raised by phone on{" "}
            {site.phone}.
          </p>
        </section>
      </div>
    </div>
  );
}
