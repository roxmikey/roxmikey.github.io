import { FaqJsonLd } from "./JsonLd";

/** Accessible FAQ accordion. Structured data matches the visible questions. */
export function Faq({ faqs, heading = "Common questions" }: { faqs: { q: string; a: string }[]; heading?: string }) {
  return (
    <div>
      <FaqJsonLd faqs={faqs} />
      <h2 className="text-3xl sm:text-4xl mb-6">{heading}</h2>
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-lg [&::-webkit-details-marker]:hidden">
              {f.q}
              <svg
                className="shrink-0 text-amber-deep transition-transform group-open:rotate-45"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </summary>
            <p className="mt-3 text-graphite leading-relaxed max-w-3xl">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
