import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = pageMetadata({
  title: "Website Terms & Conditions",
  description: `Terms and conditions for use of the ${site.name} website.`,
  path: "/terms/",
});

/**
 * PLACEHOLDER LEGAL CONTENT
 * A sensible starting point for a small Australian business website - not
 * legal advice. Have it reviewed by a professional before relying on it.
 */
export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <h1 className="text-5xl mb-3">Website Terms &amp; Conditions</h1>
      <p className="text-sm text-graphite mb-10">
        Last updated: 22nd July 2026
      </p>
      <div className="space-y-8 text-graphite leading-relaxed [&_h2]:text-2xl [&_h2]:text-ink [&_h2]:mb-2">
        <section>
          <h2>About this website</h2>
          <p>
            This website is operated by {site.name} in Queensland, Australia. By using it, you
            accept these terms.
          </p>
        </section>
        <section>
          <h2>General information only</h2>
          <p>
            Content on this site describes our services in general terms. It is not a quote,
            technical advice for your specific equipment, or a safety assessment of your gate or
            door. Pricing and recommendations are always confirmed after assessing the actual job.
          </p>
        </section>
        <section>
          <h2>Safety</h2>
          <p>
            Automatic gates, garage doors, springs and cables can cause serious injury. Nothing on
            this website should be taken as instruction to repair, adjust or test this equipment
            yourself. Repairs should be performed by an experienced technician.
          </p>
        </section>
        <section>
          <h2>Intellectual property</h2>
          <p>
            The content, branding and imagery on this website belong to {site.name} or are used
            with permission, and may not be reproduced without consent.
          </p>
        </section>
        <section>
          <h2>Liability</h2>
          <p>
            To the extent permitted by law, including the Australian Consumer Law, we are not
            liable for loss arising from reliance on general information published on this website.
            Nothing in these terms excludes rights that cannot be excluded under Australian law.
          </p>
        </section>
        <section>
          <h2>Changes</h2>
          <p>We may update this website and these terms from time to time without notice.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to {site.email}.
          </p>
        </section>
      </div>
    </div>
  );
}
