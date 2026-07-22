import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { Checklist } from "@/components/Checklist";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { ServiceJsonLd } from "@/components/JsonLd";
import { QuoteButton, CallButton } from "@/components/Buttons";
import doorImg from "../../../public/images/garage-door.svg";
import rollerImg from "../../../public/images/roller-door.svg";

export const metadata = pageMetadata({
  title: "Garage Door Repairs & Motor Installation Brisbane",
  description:
    "Garage door and roller door repairs, motor installation and replacement, springs, cables, tracks and servicing across Brisbane Northside. Residential and commercial.",
  path: "/garage-doors/",
});

const services = [
  { title: "Garage door repairs", text: "Sectional and tilt door repairs - panels, hinges, wheels, tracks and everything that makes the door run smoothly and quietly." },
  { title: "Roller door repairs", text: "Residential and commercial roller doors repaired, re-tensioned and re-aligned, including doors that have jumped their guides." },
  { title: "Motor installation", text: "New garage door openers supplied and installed, matched to the door's size and weight, with remotes programmed before we leave." },
  { title: "Motor replacement", text: "Old, noisy or failed opener? We replace it with a quality current-model motor and set travel limits and force correctly." },
  { title: "Remote programming", text: "Remotes and wall buttons supplied, coded and tested - including wireless keypads and car HomeLink setup where supported." },
  { title: "Broken springs", text: "Snapped torsion or extension springs replaced with correctly rated springs and the door re-balanced." },
  { title: "Damaged cables", text: "Frayed or snapped lifting cables replaced in pairs and tensioned evenly so the door lifts level." },
  { title: "Worn rollers", text: "Noisy, flat-spotted or seized rollers replaced so the door runs quietly in its tracks again." },
  { title: "Track alignment", text: "Bent or misaligned tracks straightened or replaced, so the door doesn't bind, jump or wear prematurely." },
  { title: "Door servicing", text: "Lubrication, balance check, fastener check, safety test and adjustment - cheap insurance against breakdowns." },
  { title: "Smart control", text: "Smartphone-controlled garage door openers, so you can open, close and check the door from anywhere." },
  { title: "Commercial roller doors", text: "Heavier commercial roller doors and three-phase operators repaired and serviced for warehouses and workshops." },
];

const problems = [
  "Door will not open",
  "Door will not close",
  "Motor runs but the door doesn't move",
  "Door is noisy or jerky",
  "Door sits uneven or crooked",
  "Remote control doesn't work",
  "Door reverses before closing",
  "Broken spring or cable",
  "Motor light flashes an error code",
  "Manual release not working correctly",
];

const faqs = [
  {
    q: "My garage door spring snapped. Can I still open the door?",
    a: "Don't try. The spring does almost all the lifting - without it, the door is dead weight and can fall, causing serious injury or damage. Leave the door where it is and call an experienced technician.",
  },
  {
    q: "Why does my door reverse before it closes fully?",
    a: "Usually the safety sensors are blocked or out of alignment, or the closing force and travel limits need adjustment. It's a common, quick fix - but it matters, because it's the door's main safety system.",
  },
  {
    q: "Is it worth repairing an old motor or should I replace it?",
    a: "It depends on age, parts availability and what's failed. We'll give you an honest assessment: sometimes a repair is the sensible fix, sometimes a modern motor is cheaper than chasing faults on an obsolete one.",
  },
  {
    q: "How often should a garage door be serviced?",
    a: "For a typical home, every 12 to 18 months keeps the door safe, quiet and reliable. Doors that cycle heavily - busy households, commercial premises - benefit from more frequent servicing.",
  },
];

export default function GarageDoorsPage() {
  return (
    <>
      <ServiceJsonLd
        name="Garage door repairs and motor installation"
        description="Garage door and roller door repairs, motor installation, springs, cables and servicing across Brisbane Northside."
        path="/garage-doors/"
      />
      <PageHero
        eyebrow="Garage door services"
        title={
          <>
            Garage Door Repairs &amp; <span className="text-amber">Motors</span>
          </>
        }
        text="Sectional, roller and tilt doors repaired, serviced and motorised across Brisbane Northside - from a squeaky home door to commercial roller doors."
      />

      {/* Safety warning */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-10">
        <div className="rounded-lg border-l-4 border-amber bg-paper border border-line p-5 sm:p-6 flex gap-4">
          <svg className="shrink-0 text-amber-deep mt-0.5" width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3 2.5 20h19L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M12 9.5v5M12 17.2v.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <div>
            <h2 className="display text-xl font-bold uppercase mb-1">Springs and cables are under high tension</h2>
            <p className="text-graphite text-[0.95rem] leading-relaxed">
              Garage door springs and lifting cables store a lot of energy and can cause serious
              injury if they let go. Please don&apos;t attempt to adjust, unwind or replace them
              yourself - these repairs should always be done by an experienced technician with the
              right tools.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <Reveal>
          <Eyebrow>What we cover</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-10">Garage door services in detail</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="card-rail rounded-lg border border-line bg-paper p-6 pt-7">
              <h3 className="display text-xl font-bold uppercase mb-1.5">{s.title}</h3>
              <p className="text-sm text-graphite leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Eyebrow>Sound familiar?</Eyebrow>
            <h2 className="text-4xl sm:text-5xl mb-4">Common garage door problems we fix</h2>
            <p className="text-graphite leading-relaxed mb-6">
              A garage door is the biggest moving thing in most homes, and it gives clear symptoms
              when something&apos;s wearing out. If yours is doing any of these, it&apos;s time for a
              look:
            </p>
            <Checklist items={problems} />
            <p className="mt-6 text-sm text-graphite leading-relaxed">
              <strong className="text-ink">A door that suddenly feels very heavy on the manual release is a red flag</strong>{" "}
              - it usually means a spring has failed. Stop using the door and get it checked.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <QuoteButton />
              <CallButton />
            </div>
          </Reveal>
          <Reveal>
            <Image src={rollerImg} alt="Roller door" className="rounded-lg border border-line" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <Faq faqs={faqs} />
        </Reveal>
        <Reveal>
          <Image src={doorImg} alt="Sectional garage door" className="rounded-lg border border-line lg:sticky lg:top-24" />
        </Reveal>
      </section>

      <CtaBand
        heading="Door playing up?"
        text="Tell us what the door is doing and we'll give you a straight answer on the likely cause and the fix."
      />
    </>
  );
}
