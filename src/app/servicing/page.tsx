import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { Checklist } from "@/components/Checklist";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { ServiceJsonLd } from "@/components/JsonLd";
import techImg from "../../../public/images/technician.svg";

export const metadata = pageMetadata({
  title: "Gate & Garage Door Servicing, Repairs & Fault Finding Brisbane",
  description:
    "Preventative servicing, fault finding and repairs for automatic gates, gate motors and garage doors across Brisbane Northside. Keep your gate or door safe and reliable.",
  path: "/servicing/",
});

const benefits = [
  { title: "Improved reliability", text: "A serviced gate or door simply works when you need it - fewer no-go mornings, fewer stuck evenings." },
  { title: "Safer operation", text: "Safety beams, closing force and reversal are tested and adjusted, so the system protects people, pets and vehicles." },
  { title: "Reduced wear", text: "Lubrication, alignment and balance take strain off the motor and moving parts, so everything wears slower." },
  { title: "Early problem detection", text: "Cracked springs, fraying cables and tired batteries get spotted during a service - not at 6 am on a workday." },
  { title: "Longer component life", text: "Motors and gearboxes last significantly longer when they're not fighting a binding gate or an unbalanced door." },
  { title: "Fewer breakdowns", text: "Most emergency call-outs we see would have been caught by a routine service months earlier." },
];

const checklist = [
  "Motor operation and drive performance",
  "Gate or door movement, balance and travel",
  "Hinges, rollers and tracks",
  "Chains, racks and drive components",
  "Springs and cables",
  "Safety beams and obstruction reversal",
  "Limit settings and closing force",
  "Remote controls and wall buttons",
  "Control boards and wiring connections",
  "Backup and remote batteries",
  "Solar panels and charging systems",
  "Manual release operation",
  "Mounting points and fasteners",
];

export default function ServicingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Gate and garage door servicing and repairs"
        description="Preventative servicing, fault finding and repairs for automatic gates and garage doors across Brisbane Northside."
        path="/servicing/"
      />
      <PageHero
        eyebrow="Servicing & repairs"
        title={
          <>
            Fault Finding, Repairs &amp; <span className="text-amber">Servicing</span>
          </>
        }
        text="Automatic gates and garage doors are machines - and machines that get looked after keep working. We service, diagnose and repair systems of all ages across Brisbane Northside."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow>Fault finding first</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-4">Diagnose properly, then fix the real problem</h2>
          <p className="text-graphite leading-relaxed mb-4">
            A gate that stops halfway can be a safety beam, a limit setting, a control board, a flat
            battery or a mechanical bind - five different fixes at five different costs. Guessing is
            expensive. We work through the system methodically, find the actual fault, and tell you
            plainly what it needs.
          </p>
          <p className="text-graphite leading-relaxed">
            Where a repair makes sense, we repair. Where a component is genuinely at the end of its
            life, we&apos;ll say so and quote the replacement - your call, made with real
            information.
          </p>
        </Reveal>
        <Reveal>
          <Image src={techImg} alt="Technician servicing a gate motor" className="rounded-lg border border-line" />
        </Reveal>
      </section>

      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <Reveal>
            <Eyebrow>Why service regularly</Eyebrow>
            <h2 className="text-4xl sm:text-5xl mb-10">What a regular service buys you</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {benefits.map((b) => (
              <Reveal key={b.title}>
                <div className="border-l-[3px] border-amber pl-5">
                  <h3 className="text-2xl mb-1.5">{b.title}</h3>
                  <p className="text-graphite text-[0.95rem] leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <Reveal>
          <Eyebrow>On the checklist</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-4">What we inspect during a service</h2>
          <p className="text-graphite max-w-2xl mb-8 leading-relaxed">
            Every system is different, but a thorough service works through the whole chain - power,
            control, drive, and the gate or door itself. Depending on your setup, that includes:
          </p>
        </Reveal>
        <div className="rounded-lg border border-line bg-paper p-6 sm:p-8">
          <Checklist items={checklist} columns={3} />
        </div>
      </section>

      <CtaBand
        heading="When was yours last serviced?"
        text="If you can't remember, it's due. Book a service and we'll get your gate or door running smoothly - and catch anything that's on its way out."
      />
    </>
  );
}
