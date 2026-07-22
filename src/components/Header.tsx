"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
import logoDark from "../../public/images/logo-dark.png";

const nav = [
  { href: "/", label: "Home" },
  { href: "/gates/", label: "Gates" },
  { href: "/garage-doors/", label: "Garage Doors" },
  { href: "/access-control/", label: "Access Control" },
  { href: "/servicing/", label: "Servicing" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/about/", label: "About" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);
  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={`${site.name} - home`}>
            <Image src={logoDark} alt="" width={52} height={52} priority className="h-12 w-12 object-contain" />
            <span className="display text-2xl leading-none font-bold hidden min-[420px]:block">
              Brisbane
              <span className="block text-[0.62em] font-semibold tracking-[0.14em] text-graphite">
                Access Solutions
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`px-3 py-2 text-[0.95rem] font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-amber-deep"
                    : "text-ink/80 hover:text-ink hover:bg-bone"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact/"
              className="hidden sm:inline-flex items-center rounded-md bg-amber px-4 py-2.5 display text-base font-semibold tracking-wide text-ink hover:bg-[#ffb81f] transition-colors"
            >
              {site.cta.quote}
            </Link>
            {/* Click-to-call, always visible on mobile */}
            <a
              href={site.phoneHref}
              className="lg:hidden inline-flex items-center justify-center rounded-md border-2 border-ink/15 p-2.5 text-ink hover:border-amber-deep hover:text-amber-deep transition-colors"
              aria-label={`Call ${site.name} on ${site.phone}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c1 .3 2 .5 3 .6a2 2 0 0 1 1.6 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2.5 text-ink hover:bg-bone transition-colors"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="lg:hidden border-t border-line bg-paper max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
        >
          <ul className="px-4 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-md px-3 py-3 text-lg font-medium ${
                    isActive(item.href) ? "text-amber-deep bg-bone" : "text-ink hover:bg-bone"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 pb-2 flex flex-col gap-2">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-md bg-amber px-4 py-3 display text-lg font-semibold tracking-wide text-ink"
              >
                {site.cta.quote}
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink/15 px-4 py-3 display text-lg font-semibold tracking-wide text-ink"
              >
                {site.cta.call} {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
