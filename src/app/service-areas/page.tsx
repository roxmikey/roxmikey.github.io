import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata = pageMetadata({
  title: "Service Areas - Brisbane Northside Gate & Garage Door Service",
  description:
    "Brisbane Access Solutions services automatic gates and garage doors across Brisbane Northside, including Chermside, Aspley, Strathpine, North Lakes and surrounding suburbs.",
  path: "/service-areas/",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title={
          <>
            Brisbane Northside &amp; <span className="text-amber">Surrounds</span>
          </>
        }
        text="We're a local operation, which means realistic travel times, local knowledge and a technician who's probably worked in your street before."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <Reveal>
          <Eyebrow>Suburbs we cover</Eyebrow>
          <h2 className="text-4xl sm:text-5xl mb-4">Gate and garage door service near you</h2>
          <p className="text-graphite max-w-2xl mb-10 leading-relaxed">
            Our core service area is Brisbane&apos;s northside and the neighbouring Moreton Bay
            suburbs. If you&apos;re close to any of the areas below, you&apos;re well inside our
            patch.
          </p>
        </Reveal>
        {/* The suburb list is edited in src/config/site.ts - add or remove lines there. */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {site.suburbs.map((s) => (
            <li
              key={s}
              className="card-rail rounded-md border border-line bg-paper px-4 py-3 text-[0.95rem] font-medium"
            >
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-graphite max-w-2xl leading-relaxed">{site.areaNote}</p>
      </section>

      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl mb-4">Local service, without the run-around</h2>
            <p className="text-graphite max-w-3xl leading-relaxed">
              Being based on the northside means we can usually get to you promptly, quote
              accurately because we know the area&apos;s common gate and door setups, and come back
              quickly if a job ever needs a follow-up visit. Whether it&apos;s automatic gate
              repairs, garage door repairs or a new motor installation, you&apos;re dealing with a
              local business - not a call centre.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
