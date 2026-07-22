import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { ServiceJsonLd } from "@/components/JsonLd";
import { Checklist } from "@/components/Checklist";
import accessImg from "../../../public/images/access-control.jpg";

export const metadata = pageMetadata({
  title: "Access Control Brisbane - Keypads, Intercoms & Smart Access",
  description:
    "Keypads, intercoms, remotes, proximity readers, fobs and smartphone access for gates, garage doors and commercial entrances across Brisbane Northside.",
  path: "/access-control/",
});

const groups: { heading: string; blurb: string; items: { title: string; text: string }[] }[] = [
  {
    heading: "Ways in",
    blurb: "The everyday tools people use to open the gate or door.",
    items: [
      { title: "Remote controls", text: "Handheld and visor remotes supplied and programmed - including replacing lost remotes and clearing old codes so they no longer work." },
      { title: "Keypads", text: "PIN-code entry for gates, pedestrian gates and garage doors. Give family, tenants or trades their own codes and change them any time." },
      { title: "Key fobs", text: "Simple tap-to-enter fobs - quick to issue, quick to cancel, ideal for body corporates and workplaces." },
      { title: "Proximity readers", text: "Card and fob readers for controlled entries, with individual credentials you can add and remove as people come and go." },
      { title: "Smartphone access", text: "Open the gate or garage from your phone, share access with visitors, and see when the door was used - from anywhere." },
      { title: "Intercoms", text: "Audio and video intercoms so you can see and speak to whoever is at the gate before letting them in." },
    ],
  },
  {
    heading: "Vehicle & pedestrian flow",
    blurb: "Getting cars and people through smoothly - and safely.",
    items: [
      { title: "Vehicle access", text: "Automated driveway and car park entries: readers at car-window height, loop detectors and correctly timed gates." },
      { title: "Exit buttons", text: "Push-to-exit buttons for pedestrian gates and controlled doors, wired to release cleanly every time." },
      { title: "Safety beams", text: "Photoelectric beams that stop a closing gate or door when a car, bike or person is in its path - essential on any automated entry." },
      { title: "Loop detectors", text: "In-ground loops that detect vehicles for free-exit, auto-open or safety hold-open functions." },
    ],
  },
  {
    heading: "Automation logic",
    blurb: "Making the system behave the way your site actually works.",
    items: [
      { title: "Timers", text: "Hold gates open during business hours and lock them down after - automatically, on a schedule you set." },
      { title: "Automatic closing", text: "Auto-close timers set to sensible delays, so the gate is never accidentally left open overnight." },
      { title: "Residential systems", text: "Simple, reliable access for homes: remotes for the family, a keypad for the kids, an intercom for the front gate." },
      { title: "Commercial systems", text: "Multi-user access for businesses, schools, warehouses and body corporates - with credentials you can manage, not shared keys you can't." },
    ],
  },
];

export default function AccessControlPage() {
  return (
    <>
      <ServiceJsonLd
        name="Access control systems"
        description="Keypads, intercoms, remotes, readers and smartphone access integrated with gates, garage doors and commercial entrances across Brisbane."
        path="/access-control/"
      />
      <PageHero
        eyebrow="Access control"
        title={
          <>
            Control Who Gets <span className="text-amber">In</span>
          </>
        }
        text="Keypads, intercoms, remotes, readers and smartphone access - integrated with your automatic gates, pedestrian gates, garage doors and commercial entrances."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow>One connected system</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-4">Access control that works with your gates and doors</h2>
          <p className="text-graphite leading-relaxed mb-4">
            Access control isn&apos;t a separate box on the wall - it&apos;s the layer that ties your
            automatic gate, pedestrian gate, garage door and building entries into one system. A
            keypad can open the driveway gate, a fob can release the pedestrian gate, and your phone
            can do both from the other side of the city.
          </p>
          <p className="text-graphite leading-relaxed mb-6">
            Because we install and repair the gates and motors themselves, we integrate access
            control properly: wired into the right inputs, with safety beams and auto-close
            configured so convenience never comes at the cost of safety.
          </p>
          <Checklist
            items={[
              "Works with automatic gates",
              "Works with pedestrian gates",
              "Works with garage doors",
              "Works with commercial entrances",
            ]}
          />
        </Reveal>
        <Reveal>
          <Image src={accessImg} alt="Access control keypad" className="rounded-lg border border-line" />
        </Reveal>
      </section>

      {groups.map((group, gi) => (
        <section key={group.heading} className={gi % 2 === 0 ? "bg-paper border-y border-line" : ""}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-18">
            <Reveal>
              <Eyebrow>{group.heading}</Eyebrow>
              <p className="text-graphite max-w-2xl mb-8 leading-relaxed">{group.blurb}</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.items.map((s) => (
                <div key={s.title} className="card-rail rounded-lg border border-line bg-paper p-6 pt-7">
                  <h3 className="display text-xl font-bold uppercase mb-1.5">{s.title}</h3>
                  <p className="text-sm text-graphite leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        heading="Want smarter access?"
        text="Tell us how people come and go at your place - we'll recommend a setup that's convenient for you and a dead end for everyone else."
      />
    </>
  );
}
