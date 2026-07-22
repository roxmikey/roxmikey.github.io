import Link from "next/link";
import { site } from "@/config/site";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 display text-lg font-semibold tracking-wide transition-colors";

export function QuoteButton({ className = "" }: { className?: string }) {
  return (
    <Link href="/contact/" className={`${base} bg-amber text-ink hover:bg-[#ffb81f] ${className}`}>
      {site.cta.quote}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export function CallButton({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <a
      href={site.phoneHref}
      className={`${base} border-2 ${
        dark
          ? "border-line-dark text-bone hover:border-amber hover:text-amber"
          : "border-ink/20 text-ink hover:border-amber-deep hover:text-amber-deep"
      } ${className}`}
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c1 .3 2 .5 3 .6a2 2 0 0 1 1.6 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {site.cta.call} {site.phone}
    </a>
  );
}
