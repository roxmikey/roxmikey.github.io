import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { QuoteButton, CallButton } from "@/components/Buttons";
import { Eyebrow, EyebrowDark } from "@/components/Eyebrow";
import { ServiceCard } from "@/components/ServiceCard";
import { Checklist } from "@/components/Checklist";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import heroImg from "../../public/images/hero-gate.svg";
import gateImg from "../../public/images/sliding-gate.svg";
import doorImg from "../../public/images/garage-door.svg";

export const metadata = pageMetadata({
  title: `Automatic Gate & Garage Door Specialists Brisbane | ${site.name}`,
  description:
    "Automatic gate repairs, gate motor installation, garage door repairs and access control across Brisbane Northside. Honest fault finding, quality motors, residential and commercial.",
  path: "/",
});

/* ---- icon set (inline SVG keeps the site dependency-free) ---- */
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const I = {
  gate: (
    <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}><path d="M3 8h18M3 16h18M6 8v8m4-8v8m4-8v8m4-8v8M2 19h20" /></svg>
  ),
  motor: (
    <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}><rect x="6" y="6" width="12" height="10" rx="2" /><circle cx="12" cy="11" r="2.5" /><path d="M3 19h18" strokeDasharray="2.5 2.5" /></svg>
  ),
  door: (
    <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}><rect x="4" y="4" width="16" height="16" rx="1.5" /><path d="M4 8.5h16M4 13h16M4 17.5h16" /></svg>
  ),
  spanner: (
    <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}><path d="M14.5 6.5a4 4 0 0 0-5.3 5L4 16.7 7.3 20l5.2-5.2a4 4 0 0 0 5-5.3l-2.6 2.6-2-2 2.6-2.6Z" /></svg>
  ),
  keypad: (
    <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M10 7h.01M14 7h.01M10 11h.01M14 11h.01M10 15h.01M14 15h.01" strokeWidth="2.6" /></svg>
  ),
  beam: (
    <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}><rect x="3" y="9" width="4" height="6" rx="1" /><rect x="17" y="9" width="4" height="6" rx="1" /><path d="M7 12h10" strokeDasharray="2.5 2.5" /></svg>
  ),
  remote: (
    <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}><rect x="8" y="8" width="8" height="13" rx="2" /><path d="M12 12h.01M12 16h.01" strokeWidth="2.6" /><path d="M9 5a4.2 4.2 0 0 1 6 0M7 2.8a7.4 7.4 0 0 1 10 0" /></svg>
  ),
  intercom: (
    <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="9" r="2.5" /><path d="M9 16h6" /></svg>
  ),
  building: (
    <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}><path d="M4 21V5l7-2v18M11 21h9V9l-9-2M20 21H2" /><path d="M6.5 8h.01M6.5 12h.01M6.5 16h.01M15 12h.01M15 16h.01" strokeWidth="2.4" /></svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}><path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z" /><path d="m9 11.5 2.2 2.2L15.5 9" /></svg>
  ),
};

const services = [
  { title: "Automatic Gate Repairs", text: "Fault finding and repairs for sliding and swing gates that stop, stutter or won't move.", href: "/gates/", icon: I.gate },
  { title: "Gate Motor Installations", text: "New motors and replacements for existing gates - sized correctly for the gate and the site.", href: "/gates/", icon: I.motor },
  { title: "Garage Door Repairs", text: "Sectional, roller and tilt door repairs, from noisy operation to doors that won't budge.", href: "/garage-doors/", icon: I.door },
  { title: "Garage Door Motors", text: "Supply and installation of quality garage door openers, with remotes programmed on the spot.", href: "/garage-doors/", icon: I.motor },
  { title: "Preventative Servicing", text: "Scheduled servicing that keeps gates and doors reliable and catches wear before it becomes a breakdown.", href: "/servicing/", icon: I.spanner },
  { title: "Access Control Systems", text: "Keypads, fobs, readers and smartphone access for homes, body corporates and business premises.", href: "/access-control/", icon: I.keypad },
  { title: "Safety Beams & Sensors", text: "Photoelectric beams and loop detectors installed, aligned and repaired for safe automatic operation.", href: "/access-control/", icon: I.beam },
  { title: "Remotes & Smart Access", text: "Remote supply, programming and smartphone control for gates and garage doors.", href: "/access-control/", icon: I.remote },
  { title: "Intercoms & Keypads", text: "Audio and video intercoms and entry keypads so you control who comes through the gate.", href: "/access-control/", icon: I.intercom },
  { title: "Commercial Gates & Doors", text: "Heavier-duty motors, roller doors and access systems for warehouses, car parks and sites.", href: "/gates/", icon: I.building },
];

const whyUs = [
  { title: "Hands-on experience", text: "Extensive real-world experience with gates, doors, motors and automation - not just sales." },
  { title: "Honest fault finding", text: "We diagnose the actual problem and recommend the practical fix, not the most expensive one." },
  { title: "Quality components", text: "Motors and parts from recognised brands, chosen to suit the gate or door they're driving." },
  { title: "Clear communication", text: "You'll know what's wrong, what it costs and when we'll be there - in plain English." },
  { title: "Reliable workmanship", text: "Installed and adjusted properly the first time, so it keeps working long after we leave." },
  { title: "Residential & commercial", text: "From single home garages to commercial gates and car park entries across Brisbane." },
];

const process = [
  { step: "Contact us", text: "Call or send a quote request - photos help." },
  { step: "Describe the job", text: "Tell us the issue or what you'd like installed." },
  { step: "We assess", text: "We look at the gate, door or site properly." },
  { step: "Clear recommendation", text: "You get a straightforward quote or advice." },
  { step: "Job completed", text: "Repair or installation done, tested and tidy." },
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-ink rack-texture text-bone overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="flex items-center gap-3 mb-5 text-sm font-medium tracking-wide text-mist">
              <span className="beacon" aria-hidden="true" />
              Servicing {site.serviceAreaLabel}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
              Automatic Gate &amp;
              <br />
              Garage Door <span className="text-amber">Specialists</span>
            </h1>
            <p className="text-lg text-mist max-w-xl leading-relaxed mb-8">
              {site.name} installs, repairs and services automatic gates, gate motors, garage doors
              and access control across Brisbane - for homes, body corporates and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <QuoteButton />
              <CallButton dark />
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-lg text-sm text-bone/90">
              {["Local Brisbane service", "Experienced technicians", "Quality motors & components", "Residential & commercial"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-4 bg-amber shrink-0" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src={heroImg}
              alt="Automatic sliding gate installation"
              priority
              className="rounded-lg border border-line-dark shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-3">Gates, doors &amp; access - covered</h2>
          <p className="text-graphite max-w-2xl mb-10 leading-relaxed">
            One call covers the whole system: the gate or door itself, the motor driving it, and the
            keypads, remotes and safety gear around it.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* ================= GATES ================= */}
      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Eyebrow>Automatic gates</Eyebrow>
            <h2 className="text-4xl sm:text-5xl mb-4">Every gate type, every fault</h2>
            <p className="text-graphite leading-relaxed mb-6">
              We work on sliding gates, swing gates, cantilever gates and pedestrian gates -
              residential, commercial and solar-powered - along with the motors and control gear
              that drive them.
            </p>
            <Checklist
              items={[
                "Fault finding", "Motor replacement", "Gate automation",
                "Remote programming", "Safety beam repairs", "Limit setup",
                "Control board replacement", "Mechanical repairs", "Access control integration",
              ]}
            />
            <div className="mt-8">
              <Link href="/gates/" className="display text-lg font-semibold text-amber-deep hover:underline underline-offset-4">
                Explore gate services →
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <Image src={gateImg} alt="Automatic sliding gate" className="rounded-lg border border-line" />
          </Reveal>
        </div>
      </section>

      {/* ================= GARAGE DOORS ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal className="lg:order-2">
          <Eyebrow>Garage doors</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-4">Sectional, roller &amp; tilt doors</h2>
          <p className="text-graphite leading-relaxed mb-6">
            From residential sectional doors to commercial roller doors, we repair, service and
            motorise them - including springs, cables, rollers and tracks.
          </p>
          <Checklist
            items={[
              "Garage door repairs", "Motor replacement", "New motor installation",
              "Spring & cable repairs", "Roller replacement", "Track alignment",
              "Remote programming", "Safety checks", "Preventative servicing",
              "Smart garage door control",
            ]}
          />
          <div className="mt-8">
            <Link href="/garage-doors/" className="display text-lg font-semibold text-amber-deep hover:underline underline-offset-4">
              Explore garage door services →
            </Link>
          </div>
        </Reveal>
        <Reveal className="lg:order-1">
          <Image src={doorImg} alt="Sectional garage door" className="rounded-lg border border-line" />
        </Reveal>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-steel rack-texture text-bone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <Reveal>
            <EyebrowDark>Why choose us</EyebrowDark>
            <h2 className="text-4xl sm:text-5xl mb-10 max-w-2xl">
              A trade business that treats your gate like its own
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {whyUs.map((w) => (
              <Reveal key={w.title}>
                <div className="border-l-[3px] border-amber pl-5">
                  <h3 className="text-2xl mb-1.5">{w.title}</h3>
                  <p className="text-mist text-[0.95rem] leading-relaxed">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <Reveal>
          <Eyebrow>Brands we work with</Eyebrow>
          <h2 className="text-4xl mb-8">Quality motors &amp; components</h2>
        </Reveal>
        {/* Brand list is edited in src/config/site.ts - add names there and they appear here. */}
        <ul className="flex flex-wrap gap-3">
          {site.brands.map((b) => (
            <li
              key={b}
              className="display text-2xl font-semibold tracking-wide border border-line bg-paper rounded-md px-6 py-3.5 text-graphite"
            >
              {b}
            </li>
          ))}
        </ul>
        <p className="text-sm text-graphite mt-4">
          …and most other common gate and garage door motor brands. Not sure what you have? A photo
          of the motor sticker is all we need.
        </p>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="text-4xl sm:text-5xl mb-12">Simple from first call to finished job</h2>
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">
            {process.map((p, i) => (
              <li key={p.step} className="relative">
                <span className="display text-5xl font-bold text-line select-none" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl mt-1 mb-1.5">{p.step}</h3>
                <p className="text-sm text-graphite leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= SERVICE AREA ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <Reveal>
          <Eyebrow>Where we work</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-4">Brisbane Northside &amp; surrounds</h2>
          <p className="text-graphite max-w-2xl mb-8 leading-relaxed">
            We&apos;re based locally and service homes and businesses across Brisbane&apos;s
            northside, including:
          </p>
        </Reveal>
        {/* Suburbs are edited in src/config/site.ts */}
        <ul className="flex flex-wrap gap-2 mb-6">
          {site.suburbs.slice(0, 18).map((s) => (
            <li key={s} className="rounded-full border border-line bg-paper px-4 py-1.5 text-sm text-graphite">
              {s}
            </li>
          ))}
          <li>
            <Link
              href="/service-areas/"
              className="inline-block rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-bone hover:bg-steel transition-colors"
            >
              + {site.suburbs.length - 18} more suburbs
            </Link>
          </li>
        </ul>
        <p className="text-sm text-graphite">{site.areaNote}</p>
      </section>

      {/* ================= REVIEWS (placeholders) ================= */}
      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <Reveal>
            <Eyebrow>Reviews</Eyebrow>
            <h2 className="text-4xl sm:text-5xl mb-3">What customers say</h2>
            <p className="text-sm text-graphite mb-10 max-w-2xl">
              The reviews below are placeholders - replace them with real customer feedback (with
              permission) as it comes in, or link to your Google reviews.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Placeholder review - replace with a genuine customer comment about a gate repair.",
              "Placeholder review - replace with a genuine customer comment about a garage door motor installation.",
              "Placeholder review - replace with a genuine customer comment about servicing or access control.",
            ].map((r, i) => (
              <figure key={i} className="card-rail rounded-lg border border-line bg-bone p-6 pt-7">
                <div className="flex gap-1 mb-3 text-amber" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1.5 12.6 7l6 .6-4.5 4 1.3 5.9L10 14.4l-5.4 3.1L5.9 11.6 1.4 7.6l6-.6L10 1.5Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-graphite text-[0.95rem] leading-relaxed">{r}</blockquote>
                <figcaption className="mt-4 font-semibold display tracking-wide text-lg">
                  Customer name <span className="text-graphite font-normal text-sm normal-case">(placeholder)</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
