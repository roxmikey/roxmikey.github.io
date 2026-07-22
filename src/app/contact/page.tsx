import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { Eyebrow, EyebrowDark } from "@/components/Eyebrow";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Reveal } from "@/components/Reveal";

export const metadata = pageMetadata({
  title: "Contact Us & Request a Quote",
  description:
    "Request a quote for automatic gate or garage door repairs, servicing or installation in Brisbane. Call, email or send photos through our quote form.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink rack-texture text-bone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <EyebrowDark>Contact</EyebrowDark>
          <h1 className="text-5xl sm:text-6xl mb-5 max-w-3xl">
            Let&apos;s Get It <span className="text-amber">Sorted</span>
          </h1>
          <p className="text-lg text-mist max-w-2xl leading-relaxed">
            Call us, email us, or fill in the quote form - photos of the gate, door or motor help
            us give you an accurate answer faster.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        {/* Contact details */}
        <Reveal>
          <Eyebrow>Reach us directly</Eyebrow>
          <div className="space-y-6">
            <div>
              <h2 className="display text-xl font-bold uppercase mb-1">Phone</h2>
              <a href={site.phoneHref} className="text-2xl font-semibold text-amber-deep hover:underline underline-offset-4">
                {site.phone}
              </a>
              <p className="text-sm text-graphite mt-1">The fastest way to reach us for urgent problems.</p>
            </div>
            <div>
              <h2 className="display text-xl font-bold uppercase mb-1">Email</h2>
              <a href={`mailto:${site.email}`} className="text-lg font-medium text-amber-deep hover:underline underline-offset-4 break-all">
                {site.email}
              </a>
            </div>
            <div>
              <h2 className="display text-xl font-bold uppercase mb-2">Business hours</h2>
              <ul className="space-y-1.5">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-6 max-w-xs text-[0.95rem]">
                    <span className="text-graphite">{h.days}</span>
                    <span className="font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="display text-xl font-bold uppercase mb-1">Service area</h2>
              <p className="text-[0.95rem] text-graphite leading-relaxed">
                {site.serviceAreaLabel}. {site.areaNote}
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-amber border border-line bg-paper p-5">
              <h2 className="display text-lg font-bold uppercase mb-1">Urgent repairs</h2>
              <p className="text-sm text-graphite leading-relaxed">
                Car stuck behind a dead gate, or a door that won&apos;t secure the property? Call
                rather than emailing, and tick the &quot;urgent&quot; box if you use the form.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Quote form */}
        <Reveal>
          <div className="rounded-lg border border-line bg-paper p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl mb-2">Request a quote</h2>
            <p className="text-graphite mb-7 leading-relaxed">
              Tell us about the job and we&apos;ll come back to you with a straight answer -
              usually the same business day.
            </p>
            <QuoteForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
