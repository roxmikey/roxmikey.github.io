import { QuoteButton, CallButton } from "./Buttons";
import { EyebrowDark } from "./Eyebrow";

/** Dark intro band used at the top of inner pages. */
export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) {
  return (
    <section className="bg-ink rack-texture text-bone">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        <EyebrowDark>{eyebrow}</EyebrowDark>
        <h1 className="text-5xl sm:text-6xl mb-5 max-w-3xl">{title}</h1>
        <p className="text-lg text-mist max-w-2xl leading-relaxed mb-8">{text}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <QuoteButton />
          <CallButton dark />
        </div>
      </div>
    </section>
  );
}
