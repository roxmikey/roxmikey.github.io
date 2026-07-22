import type { Metadata } from "next";
import { site } from "@/config/site";

/** Builds consistent per-page metadata: title, description, canonical, Open Graph. */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string; // e.g. "/gates/"
}): Metadata {
  const url = `${site.url}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_AU",
      images: [{ url: `${site.url}/images/og-image.svg`, width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}
