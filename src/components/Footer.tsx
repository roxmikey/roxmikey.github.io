import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import logoLight from "../../public/images/logo-light.png";

const services = [
  "Automatic gate repairs",
  "Gate motor installation",
  "Garage door repairs",
  "Garage door motors",
  "Access control",
  "Preventative servicing",
];

const links = [
  { href: "/gates/", label: "Gate Services" },
  { href: "/garage-doors/", label: "Garage Door Services" },
  { href: "/access-control/", label: "Access Control" },
  { href: "/servicing/", label: "Servicing & Repairs" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/about/", label: "About" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/contact/", label: "Contact" },
];

export function Footer() {
  const socials = [
    { href: site.social.facebook, label: "Facebook" },
    { href: site.social.instagram, label: "Instagram" },
    { href: site.social.google, label: "Google" },
  ].filter((s) => s.href);

  return (
    <footer className="bg-ink text-mist rack-texture">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src={logoLight} alt="" width={48} height={48} className="h-11 w-11 object-contain" />
            <p className="display text-xl font-bold text-bone leading-tight">
              Brisbane
              <span className="block text-[0.62em] font-semibold tracking-[0.14em] text-mist">
                Access Solutions
              </span>
            </p>
          </div>
          <p className="text-sm leading-relaxed">{site.description}</p>
          {socials.length > 0 && (
            <ul className="flex gap-4 mt-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-bone hover:text-amber underline underline-offset-4">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="display text-base font-semibold tracking-[0.14em] text-bone mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="display text-base font-semibold tracking-[0.14em] text-bone mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-amber transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="display text-base font-semibold tracking-[0.14em] text-bone mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="text-bone hover:text-amber transition-colors font-medium">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-amber transition-colors break-all">
                {site.email}
              </a>
            </li>
            <li className="pt-2 text-mist">{site.serviceAreaLabel}</li>
          </ul>
          <h2 className="display text-base font-semibold tracking-[0.14em] text-bone mt-6 mb-3">Hours</h2>
          <ul className="space-y-1 text-sm">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4 max-w-[16rem]">
                <span>{h.days}</span>
                <span className="text-bone">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy/" className="hover:text-amber transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms/" className="hover:text-amber transition-colors">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
