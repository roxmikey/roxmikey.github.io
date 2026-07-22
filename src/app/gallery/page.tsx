import fs from "fs";
import path from "path";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMetadata({
  title: "Gallery - Our Gate & Garage Door Work",
  description:
    "Photos of automatic gate installations, gate motors, garage doors and access control work by Brisbane Access Solutions across Brisbane Northside.",
  path: "/gallery/",
});

/**
 * =====================================================================
 *  HOW THE GALLERY WORKS (no coding required)
 * =====================================================================
 *  Every image file inside  public/images/gallery/  automatically
 *  appears on this page. To manage photos:
 *
 *  ADD:    On github.com open public/images/gallery, click
 *          "Add file" -> "Upload files", drag your photos in,
 *          then click "Commit changes".
 *  REMOVE: Click a photo file, click the bin icon, commit.
 *
 *  The site rebuilds itself and the gallery updates in ~2 minutes.
 *
 *  CAPTIONS come from the file name:
 *      sliding-gate-motor-install.jpg  ->  "Sliding Gate Motor Install"
 *  So name your files descriptively, with dashes between words.
 *
 *  Supported: .jpg .jpeg .png .webp .gif .svg
 * =====================================================================
 */

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"]);

type GalleryImage = { src: string; caption: string };

function getGalleryImages(): GalleryImage[] {
  if (!fs.existsSync(GALLERY_DIR)) return [];
  return fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => {
      const name = path.basename(file, path.extname(file));
      const caption = name
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .trim();
      return { src: `/images/gallery/${file}`, caption };
    });
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Our Work, On <span className="text-amber">Site</span>
          </>
        }
        text="A look at recent gate, garage door and access control jobs. Every property is different - if yours is too, that's exactly the kind of job we like."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        {images.length === 0 ? (
          <div className="rounded-lg border border-line bg-paper p-10 text-center">
            <h2 className="text-3xl mb-3">Photos coming soon</h2>
            <p className="text-graphite max-w-xl mx-auto leading-relaxed">
              We&apos;re putting together photos of recent gate and garage door work. In the
              meantime, get in touch and we&apos;ll happily talk you through similar jobs we&apos;ve
              done.
            </p>
          </div>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {images.map((img) => (
              <li key={img.src} className="card-rail group rounded-lg border border-line bg-paper overflow-hidden">
                <div className="relative aspect-[4/3] bg-steel">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="display text-lg font-semibold uppercase tracking-wide px-5 py-3.5">
                  {img.caption}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <CtaBand
        heading="Want yours to look like this?"
        text="Send us a photo of your gate or garage and tell us what you're after - we'll come back with options and a quote."
      />
    </>
  );
}
