/**
 * ===========================================================================
 *  BRISBANE ACCESS SOLUTIONS - WEBSITE SETTINGS
 * ===========================================================================
 *
 *  This is the ONLY file you need to edit to update your business details.
 *  Everything here flows through to the whole website automatically:
 *  header, footer, contact page, SEO metadata and Google structured data.
 *
 *  HOW TO EDIT (no coding needed):
 *  1. Log in to github.com and open your website repository.
 *  2. Open  src/config/site.ts  and click the pencil icon (Edit).
 *  3. Change the text between the quotes "like this".
 *  4. Click "Commit changes". The site republishes itself in ~2 minutes.
 *
 *  RULES:
 *  - Keep the quotes around text values.
 *  - Keep the commas at the end of lines.
 *  - Lists use square brackets [ ] with each entry in quotes, separated
 *    by commas. Add or remove lines to add or remove entries.
 * ===========================================================================
 */

export const site = {
  // ------------------------------------------------------------------
  // BUSINESS BASICS
  // ------------------------------------------------------------------
  name: "Brisbane Access Solutions",
  tagline: "Automatic Gate & Garage Door Specialists",
  description:
    "Brisbane Access Solutions installs, repairs and services automatic gates, gate motors, garage doors and access control systems across Brisbane Northside and surrounding areas.",

  // ------------------------------------------------------------------
  // CONTACT DETAILS  (replace the placeholders before going live)
  // ------------------------------------------------------------------
  phone: "0498 524 378",            // shown on the website
  phoneHref: "tel:+61498524378",    // used by the call buttons (keep +61 format)
  email: "info@brisbaneaccesssolutions.com.au",

  // ------------------------------------------------------------------
  // BUSINESS HOURS
  // ------------------------------------------------------------------
  hours: [
    { days: "Monday – Friday", time: "8:00 am – 4:00 pm" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
  // Machine-readable hours for Google (schema.org). Mo-Fr 08:00-16:00.
  hoursSchema: ["Mo-Fr 08:00-16:00"],

  // ------------------------------------------------------------------
  // SERVICE AREA
  // ------------------------------------------------------------------
  serviceAreaLabel: "Brisbane Northside & surrounding areas",
  // Add or remove suburbs freely - one per line.
  suburbs: [
    "Albany Creek", "Aspley", "Bald Hills", "Boondall", "Bracken Ridge",
    "Bray Park", "Brendale", "Bridgeman Downs", "Brighton", "Carseldine",
    "Chermside", "Clayfield", "Deagon", "Eatons Hill", "Everton Park",
    "Ferny Grove", "Ferny Hills", "Geebung", "Kallangur", "Kedron",
    "Keperra", "Lawnton", "McDowall", "Mitchelton", "Murrumba Downs",
    "North Lakes", "Northgate", "Nundah", "Petrie", "Sandgate",
    "Stafford", "Strathpine", "Taigum", "Virginia", "Warner",
    "Wavell Heights", "Zillmere",
  ],
  areaNote:
    "Not on the list? We regularly travel across greater Brisbane - call us and we'll let you know if we can help.",

  // ------------------------------------------------------------------
  // BRANDS  (add or remove freely)
  // ------------------------------------------------------------------
  brands: ["Centsys", "ATA", "B&D", "Merlin"],

  // ------------------------------------------------------------------
  // CALL-TO-ACTION TEXT
  // ------------------------------------------------------------------
  cta: {
    quote: "Request a Quote",
    call: "Call Now",
    closingHeading: "Gate or garage door playing up?",
    closingText:
      "Tell us what's happening and we'll give you a straight answer - whether it needs a quick repair, a service, or a new motor.",
  },

  // ------------------------------------------------------------------
  // QUOTE / CONTACT FORM  (Formspree)
  // ------------------------------------------------------------------
  // 1. Create a free account at https://formspree.io
  // 2. Create a new form and copy its ID (looks like "abcdwxyz")
  // 3. Paste it between the quotes below.
  // Until an ID is entered, the forms show your phone and email instead.
  formspreeId: "",

  // ------------------------------------------------------------------
  // SOCIAL LINKS  (leave "" to hide a link)
  // ------------------------------------------------------------------
  social: {
    facebook: "",
    instagram: "",
    google: "", // link to your Google Business Profile
  },

  // ------------------------------------------------------------------
  // ADVANCED (usually no need to touch)
  // ------------------------------------------------------------------
  // Full public address of the site, used for SEO tags and the sitemap.
  // Update this when you connect a custom domain.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.github.io/brisbane-access-solutions",
  // Street address is optional for a mobile service business. If you have
  // premises you want listed on Google, fill these in; otherwise leave "".
  address: {
    street: "",
    suburb: "",
    state: "QLD",
    postcode: "",
  },
} as const;

export type Site = typeof site;
