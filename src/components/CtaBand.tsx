import { site } from "@/config/site";
import { QuoteButton, CallButton } from "./Buttons";

/** Closing call-to-action band used at the bottom of every page. */
export function CtaBand({ heading, text }: { heading?: string; text?: string }) {
  return (
    <section aria-label="Get in touch" className="bg-steel rack-texture text-bone">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h2 className="text-4xl sm:text-5xl mb-4">{heading ?? site.cta.closingHeading}</h2>
        <p className="text-mist max-w-2xl mx-auto mb-8 leading-relaxed">{text ?? site.cta.closingText}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <QuoteButton />
          <CallButton dark />
        </div>
      </div>
    </section>
  );
}
