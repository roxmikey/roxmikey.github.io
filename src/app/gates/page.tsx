import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { Checklist } from "@/components/Checklist";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { ServiceJsonLd } from "@/components/JsonLd";
import { QuoteButton, CallButton } from "@/components/Buttons";
import gateImg from "../../../public/images/sliding-gate.svg";
import motorImg from "../../../public/images/gate-motor.svg";

export const metadata = pageMetadata({
  title: "Automatic Gate Repairs & Gate Motor Installation Brisbane",
  description:
    "Automatic gate repairs, sliding and swing gate motors, solar gates, safety beams and gate automation across Brisbane Northside. Honest fault finding and quality installations.",
  path: "/gates/",
});

const serviceGroups: { heading: string; items: { title: string; text: string }[] }[] = [
  {
    heading: "Repairs & automation",
    items: [
      { title: "Automatic gate repairs", text: "Fault finding and repair of sliding and swing gates that have stopped, slowed, or started misbehaving - electrical, electronic or mechanical." },
      { title: "Sliding gate motors", text: "Supply, installation and replacement of sliding gate motors sized for the weight and length of your gate, with racks and limits set correctly." },
      { title: "Swing gate motors", text: "Single and double swing gate operators - articulated arm, linear and underground styles - installed to suit your posts, piers and gate leafs." },
      { title: "New gate automation", text: "Have a manual gate? We can automate it: motor, safety beams, remotes and access control, wired or solar." },
      { title: "Solar gate systems", text: "Solar-powered gate kits for properties without convenient mains power, with correctly sized panels and batteries for reliable operation." },
      { title: "Preventative servicing", text: "Scheduled servicing to keep gates smooth, safe and reliable - especially worthwhile for heavy commercial and body corporate gates." },
    ],
  },
  {
    heading: "Safety & detection",
    items: [
      { title: "Safety beams", text: "Photoelectric safety beams installed, aligned and repaired so your gate stops or reverses when a car or person is in its path." },
      { title: "Loop detectors", text: "In-ground induction loops for free exit and safety on driveways, commercial entries and car parks." },
    ],
  },
  {
    heading: "Access & control",
    items: [
      { title: "Remote controls", text: "Genuine and compatible remotes supplied and programmed, including recovering access when all remotes are lost." },
      { title: "Keypads", text: "Wired and wireless entry keypads with PIN codes you control - handy for family, tenants, cleaners and deliveries." },
      { title: "Intercom systems", text: "Audio and video intercoms so you can see and speak to visitors before letting them through the gate." },
      { title: "Smart access", text: "Smartphone-controlled gate access - open the gate from anywhere and see activity from your phone." },
      { title: "Access control", text: "Fobs, proximity readers, timers and auto-close configured for how your household or business actually uses the gate." },
      { title: "Commercial gate systems", text: "Heavier-duty motors and access systems for warehouses, factories, schools, car parks and body corporates - built for high cycle counts." },
    ],
  },
];

const problems = [
  "Gate not opening or closing",
  "Gate stopping halfway",
  "Motor running but the gate not moving",
  "Remote controls not working",
  "Gate reversing unexpectedly",
  "Safety beam faults",
  "No power to the motor",
  "Noisy or slow operation",
  "Damaged rack or mechanical components",
  "Gate coming off its track",
];

const faqs = [
  {
    q: "My gate motor runs but the gate doesn't move. What's wrong?",
    a: "On sliding gates this is commonly a stripped or misaligned drive rack, a worn pinion gear, or the motor being left in manual release. On swing gates it can be a failed arm or clutch. It's usually repairable - we identify the actual cause before replacing anything.",
  },
  {
    q: "Do I need to replace the whole motor if my gate stops working?",
    a: "Often not. Many faults come down to limits, safety beams, control boards, batteries or mechanical wear. We fault-find first and only recommend a new motor when repair genuinely isn't the economical option.",
  },
  {
    q: "Can you automate my existing manual gate?",
    a: "In most cases, yes. If the gate itself is sound and swings or slides freely, it can usually be automated with a suitable motor, safety beams and remotes. We'll assess the gate, posts and power options and recommend the right setup.",
  },
  {
    q: "What if there's no power near my gate?",
    a: "Solar gate kits are a proven option for rural driveways and properties where trenching power to the gate isn't practical. Correctly sized panels and batteries are the key to making solar reliable.",
  },
];

export default function GatesPage() {
  return (
    <>
      <ServiceJsonLd
        name="Automatic gate repairs and gate motor installation"
        description="Automatic gate repairs, gate motor installation, gate automation, safety beams and access control across Brisbane Northside."
        path="/gates/"
      />
      <PageHero
        eyebrow="Gate services"
        title={
          <>
            Automatic Gate Repairs &amp; <span className="text-amber">Motors</span>
          </>
        }
        text="Sliding, swing, cantilever and pedestrian gates - repaired, automated and serviced across Brisbane Northside. If it rolls, swings or should open on its own, we work on it."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <Reveal>
          <Eyebrow>What we cover</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-10">Gate services in detail</h2>
        </Reveal>
        <div className="space-y-14">
          {serviceGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="display text-2xl font-semibold tracking-wide text-graphite mb-5">{group.heading}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((s) => (
                  <div key={s.title} className="card-rail rounded-lg border border-line bg-paper p-6 pt-7">
                    <h4 className="display text-xl font-bold uppercase mb-1.5">{s.title}</h4>
                    <p className="text-sm text-graphite leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Eyebrow>Sound familiar?</Eyebrow>
            <h2 className="text-4xl sm:text-5xl mb-4">Common gate problems we fix</h2>
            <p className="text-graphite leading-relaxed mb-6">
              Most gate faults have a handful of likely causes, and an experienced eye finds them
              quickly. If your gate is doing any of these, it&apos;s worth a call:
            </p>
            <Checklist items={problems} />
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <QuoteButton />
              <CallButton />
            </div>
          </Reveal>
          <Reveal>
            <Image src={motorImg} alt="Gate motor" className="rounded-lg border border-line" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <Faq faqs={faqs} />
        </Reveal>
        <Reveal>
          <Image src={gateImg} alt="Automatic sliding gate" className="rounded-lg border border-line lg:sticky lg:top-24" />
        </Reveal>
      </section>

      <CtaBand
        heading="Gate not behaving?"
        text="Describe what it's doing - or not doing - and we'll tell you what it's likely to be and what fixing it involves."
      />
    </>
  );
}
