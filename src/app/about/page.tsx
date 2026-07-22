import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Checklist } from "@/components/Checklist";

export const metadata = pageMetadata({
  title: "About Us - Local Gate & Garage Door Technicians",
  description:
    "Brisbane Access Solutions is a hands-on local business specialising in automatic gates, garage doors, motors and access control across Brisbane Northside.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            The People Behind the <span className="text-amber">Gate</span>
          </>
        }
        text="A local Brisbane business built on hands-on trade experience with gates, garage doors, motors and automation - and on giving customers straight answers."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
        <Reveal>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-5">Practical experience, applied honestly</h2>
          <div className="space-y-4 text-graphite leading-relaxed">
            <p>
              {site.name} was built around one idea: gates and garage doors are machines, and
              machines deserve technicians who actually understand them. Our background is hands-on
              trade work with automatic gates, garage doors, motors, access control and the
              electrical and mechanical systems that tie them together.
            </p>
            <p>
              {/* EDIT ME: Replace this placeholder with your real business history - e.g. how the
                  business started, years in the industry, and any licences or qualifications you
                  hold. Don't publish specific claims unless they're accurate. */}
              [Placeholder - add your business history here: how the business started, background in
              the industry, and any licences or qualifications you&apos;d like to mention.]
            </p>
            <p>
              What that experience means for you is simple: faster fault finding, fewer parts
              replaced on a guess, and installations done the way we&apos;d want them done at our
              own homes. We work on residential gates and garages, body corporate entries and
              commercial premises across Brisbane Northside.
            </p>
            <p>
              We won&apos;t tell you you need a new motor when a $40 part will fix it - and
              we&apos;ll tell you plainly when a system genuinely is at the end of its life. That
              straightforwardness is why customers call us back and pass our number on.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-lg border border-line bg-paper p-6 sm:p-8 lg:sticky lg:top-24">
            <h3 className="display text-2xl font-bold uppercase mb-5">What we stand on</h3>
            <Checklist
              columns={1}
              items={[
                "Hands-on industry experience",
                "Deep knowledge of gates, doors, motors and automation",
                "Genuine fault-finding ability",
                "Quality workmanship, done once",
                "Straightforward advice - no upselling",
                "Residential and commercial experience",
              ]}
            />
          </div>
        </Reveal>
      </section>

      <CtaBand
        heading="Have a job in mind?"
        text="Whether it's a stubborn gate, a tired garage door motor or a new installation, we're happy to talk it through."
      />
    </>
  );
}
