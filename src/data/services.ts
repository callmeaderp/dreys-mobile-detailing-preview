// Service catalog — drives navigation, service index, and per-service pages.
// Each service has its own page, Service schema, and detailed content.
// Pricing comes from the owner's real booking-system catalog (April 2026):
// Basic Full Detail $249 · Paint Enhancement $375 · Undrdog 5-for-5 $499
// (+$100 Pro+) · Polishing & Paint Correction $275 (shop only) · Marine $25/ft.
// RV and Power Sports never had published prices — those stay custom-quote.

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  // Meta description for SEO
  metaDescription: string;
  // Hero summary shown on page + service cards
  summary: string;
  // Icon emoji used in cards (fast, no image dependency)
  icon: string;
  // Service categories — longer paragraph intro for service page
  intro: string;
  // Feature bullets displayed on service page
  features: string[];
  // Pricing tiers or "starting at" guidance
  pricing: Array<{
    name: string;
    priceFrom?: string;
    description: string;
    includes: string[];
    // Marks the tier that gets the "Most Popular" badge
    popular?: boolean;
  }>;
  // Keywords this page targets
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "auto-detailing",
    title: "Auto Detailing in Victor, NY",
    shortTitle: "Auto Detailing",
    icon: "🚗",
    metaDescription:
      "Professional mobile auto detailing in Victor, NY and the Rochester area. Full details starting at $249 — interior and exterior detailing that comes to you. Serving Ontario County and the Finger Lakes since 2019.",
    summary:
      "Full interior and exterior detailing performed at your home or office, anywhere in Ontario County and the greater Rochester area.",
    intro:
      "Every auto detail at Drey's starts with a careful inspection and a conversation about your goals for the vehicle. Whether you need a thorough reset on a daily driver, a deep interior clean after a long winter, or a show-ready finish on a weekend car, we bring every tool, product, and gallon of water with us. No shop drop-off, no waiting room — we pull up to your driveway in Victor, Farmington, Canandaigua, Pittsford, or anywhere else in the region and treat your vehicle like it's our own.",
    features: [
      "Completely mobile — we bring water, power, and every tool we need",
      "Hand-wash only, two-bucket method with pH-balanced shampoos",
      "Thorough interior vacuum, including seats, carpets, trunk, and crevices",
      "Deep cleaning for upholstery stains and matted carpets",
      "Leather cleaning and conditioning on vehicles with leather surfaces",
      "Door jambs, wheel wells, and tailpipes detailed as standard",
      "All work performed by the owner — never a rotating crew",
    ],
    pricing: [
      {
        name: "Basic Full Detail",
        priceFrom: "Starting at $249",
        description:
          "Our flagship detail — a thorough, comprehensive clean from the glossy exterior to an immaculate interior. Plan on about four hours on site.",
        includes: [
          "Full hand wash and dry",
          "Deep interior vacuum — seats, carpets, trunk, and crevices",
          "Interior surfaces cleaned and protected",
          "Wheels, tires, and door jambs detailed",
          "Windows inside and out",
        ],
        popular: true,
      },
      {
        name: "Paint Enhancement Detail Package",
        priceFrom: "Starting at $375",
        description:
          "Everything in the Basic Full Detail, plus a one-step machine polish that removes up to 50–60% of minor scratches, wash-induced marring, and holograms.",
        includes: [
          "Everything in the Basic Full Detail",
          "One-step machine polish to refine the paint",
          "Removes up to 50–60% of minor defects",
          "Deep gloss boost with protection applied",
        ],
      },
      {
        name: "Maintenance Plans",
        priceFrom: "Ask for pricing",
        description:
          "Keep your vehicle showroom-fresh between full details with recurring visits on a schedule that fits — and save.",
        includes: [
          "Recurring wash and interior refresh",
          "Scheduled around your calendar",
          "Discounted rate for repeat visits",
          "Ask about monthly and seasonal options",
        ],
      },
    ],
    keywords: [
      "auto detailing Victor NY",
      "car detailing Victor NY",
      "mobile car detailing Rochester NY",
      "auto detailing Ontario County",
      "car detailing Finger Lakes",
    ],
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating in Victor, NY",
    shortTitle: "Ceramic Coating",
    icon: "💎",
    metaDescription:
      "Professional Undrdog ceramic coating installation in Victor, NY and Rochester, starting at $499. Multi-year paint protection, hydrophobic finish, and deep gloss. Serving the Finger Lakes since 2019.",
    summary:
      "Undrdog ceramic coatings installed over properly prepared paint — long-term protection with a deep, glossy, hydrophobic finish.",
    intro:
      "A ceramic coating is only as good as the prep underneath it. Every ceramic install at Drey's begins with a full strip wash, decontamination, and a one-step compound/polish that improves the paint and refines defects by up to 50–60% — so the coating locks onto truly clean paint. We install Undrdog coatings: the standard coating is rated for 2–3 years of protection, and the Undrdog Pro+ upgrade extends that to 3–5 years. We don't cut corners on prep to hit a lower price point.",
    features: [
      "Full strip wash and decontamination before every application",
      "One-step compound/polish included to refine the paint first",
      "Undrdog coatings rated for 2–3 years; Pro+ rated for 3–5 years",
      "Hydrophobic, self-cleaning finish",
      "Deep, mirror-like gloss",
      "Significantly easier to wash and maintain",
      "Basic interior detail or second correction pass included, based on your vehicle's needs",
    ],
    pricing: [
      {
        name: "Undrdog 5-for-5 Coating Special",
        priceFrom: "Starting at $499",
        description:
          "The right entry into ceramic protection: full prep, one-step polish, and a 2–3 year Undrdog coating. About five hours on site.",
        includes: [
          "Full strip wash and decontamination",
          "One-step compound/polish — refines defects up to 50–60%",
          "2–3 year Undrdog ceramic coating",
          "Basic interior detail or second correction step, depending on your needs",
        ],
      },
      {
        name: "Undrdog Pro+ Upgrade",
        priceFrom: "Starting at $599",
        description:
          "Everything in the 5-for-5 Special, upgraded to the Undrdog Pro+ coating rated for 3–5 years of protection — just $100 more.",
        includes: [
          "Everything in the 5-for-5 Coating Special",
          "Undrdog Pro+ coating, rated 3–5 years",
          "Best value per year of protection",
        ],
        popular: true,
      },
      {
        name: "Specialty & Marine Coatings",
        priceFrom: "Custom quote",
        description:
          "Boats, RVs, wheels, glass, and trim — ceramic protection sized to the job. Call or text and we'll spec it together.",
        includes: [
          "Marine-grade gelcoat coatings",
          "Wheel, glass, and trim add-ons",
          "Multi-vehicle and fleet pricing available",
        ],
      },
    ],
    keywords: [
      "ceramic coating Victor NY",
      "Undrdog ceramic coating",
      "ceramic coating Rochester NY",
      "paint protection Ontario County",
      "ceramic coating Finger Lakes",
    ],
  },
  {
    slug: "paint-correction",
    title: "Paint Correction in Victor, NY",
    shortTitle: "Paint Correction",
    icon: "✨",
    metaDescription:
      "Expert paint correction and swirl removal in Victor, NY and Rochester, starting at $275. Machine polishing that restores clarity and depth. Serving Ontario County and the Finger Lakes.",
    summary:
      "Remove swirl marks, scratches, oxidation, and bring true clarity and depth back to your paint.",
    intro:
      "Paint correction is the careful removal of a microscopic layer of clear coat to level out swirls, scratches, water spots, and oxidation. When it's done right, the difference is dramatic — corrected paint looks wet and glossy under every light, not just bright sun. Dedicated correction work is done at our shop in Victor, where controlled lighting and a dust-free space let us work the paint properly. If you'd rather not leave your vehicle, our mobile Paint Enhancement package brings a one-step polish to your driveway instead.",
    features: [
      "Machine polishing matched to your specific paint",
      "Swirl, scratch, water spot, and oxidation removal",
      "Dedicated correction work performed at our Victor shop — controlled lighting, no dust",
      "Mobile one-step paint enhancement available at your location",
      "Classic and exotic cars handled with manual tools only — no automatic machines",
      "Almost always paired with a protective coating or sealant",
    ],
    pricing: [
      {
        name: "Polishing & Paint Correction",
        priceFrom: "Starting at $275",
        description:
          "Professional correction work to restore and enhance your car's exterior — performed at our Victor shop for a controlled, flawless finish.",
        includes: [
          "Wash and full decontamination first",
          "Machine polishing to level defects",
          "Performed indoors at our Victor shop",
          "Protection applied to lock in the work",
        ],
      },
      {
        name: "Paint Enhancement Detail Package",
        priceFrom: "Starting at $375",
        description:
          "Our mobile option — a full detail plus a one-step polish that removes up to 50–60% of minor defects, done in your driveway.",
        includes: [
          "Full interior and exterior detail",
          "One-step machine polish",
          "Removes up to 50–60% of swirls and marring",
          "Completely mobile — we come to you",
        ],
        popular: true,
      },
      {
        name: "Multi-Stage Correction",
        priceFrom: "Custom quote",
        description:
          "For serious defects or show-quality goals — multiple compound and polish stages, quoted after we see the paint.",
        includes: [
          "Multi-stage compound, polish, and refine",
          "Extended time on every panel",
          "Best paired with a ceramic coating",
        ],
      },
    ],
    keywords: [
      "paint correction Victor NY",
      "swirl removal Rochester NY",
      "paint polishing Ontario County",
      "paint correction Finger Lakes",
    ],
  },
  {
    slug: "boat-detailing",
    title: "Boat & Marine Detailing in the Finger Lakes",
    shortTitle: "Boat & Marine",
    icon: "⛵",
    metaDescription:
      "Mobile boat detailing and marine detailing in Victor, NY and the Finger Lakes at $25 per foot. Hull and topside wash, interior clean, metal polish, gloss enhancement. We come to your slip, storage lot, or home.",
    summary:
      "Full-service marine detailing for power boats, sailboats, and pontoons — at your slip, storage lot, or driveway.",
    intro:
      "Marine environments are brutal on gelcoat and metal. Sun, water, and time produce oxidation that makes hulls look chalky and dull long before the boat is actually old. We perform full marine detailing across the Finger Lakes region — Canandaigua Lake, Honeoye Lake, Seneca Lake, Conesus, Hemlock, and Lake Ontario — washing hulls and topsides, deep-cleaning interiors, polishing metal, and applying a gloss enhancement that actually stands up to the environment.",
    features: [
      "Full exterior hull and topside wash",
      "Interior vinyl and surfaces cleaned and UV-protected",
      "Compartments vacuumed out and cleaned appropriately",
      "Metal polishing — stainless, chrome, and aluminum",
      "One-step gloss enhancement polish and sealant on the exterior",
      "Windows cleaned",
      "Service at your slip, storage lot, or home",
    ],
    pricing: [
      {
        name: "Basic Marine Detail",
        priceFrom: "$25 per foot",
        description:
          "Our complete marine detail, priced by boat length — a full-day service that resets your boat inside and out.",
        includes: [
          "Full exterior hull and topside wash",
          "Interior vinyl cleaned and UV-protected",
          "Compartments vacuumed and cleaned",
          "Metal polished — stainless, chrome, aluminum",
          "One-step gloss enhancement polish/sealant",
          "Windows cleaned",
        ],
        popular: true,
      },
      {
        name: "Oxidation Removal & Gelcoat Correction",
        priceFrom: "Custom quote",
        description:
          "For chalky, sun-dulled hulls — machine compounding that brings the gelcoat back to a deep gloss. Quoted by length and condition.",
        includes: [
          "Machine compounding to remove oxidation",
          "Polish step for clarity and gloss",
          "Marine-grade protection applied",
        ],
      },
      {
        name: "Marine Ceramic Coating",
        priceFrom: "Custom quote",
        description:
          "Long-term protection for gelcoat — hydrophobic, UV-resistant, and dramatically easier to maintain season over season.",
        includes: [
          "Full prep and oxidation removal",
          "Marine-specific ceramic coating",
          "Multi-year protection",
        ],
      },
    ],
    keywords: [
      "boat detailing Finger Lakes",
      "boat detailing Victor NY",
      "marine detailing Rochester NY",
      "Canandaigua Lake boat detailing",
      "gelcoat restoration Finger Lakes",
    ],
  },
  {
    slug: "rv-detailing",
    title: "RV & Camper Detailing in Western NY",
    shortTitle: "RV Detailing",
    icon: "🚐",
    metaDescription:
      "Mobile RV detailing in Victor, NY, Rochester, and the Finger Lakes. Wash and wax, oxidation removal, roof cleaning, interior deep clean. Class A, C, travel trailers, and fifth wheels — quoted by length.",
    summary:
      "Full detailing for RVs, travel trailers, fifth wheels, and campers — at your storage lot or driveway, quoted by length and condition.",
    intro:
      "An RV detail is really three jobs in one: a very large exterior with heavy oxidation from sun exposure, a roof that needs specialized cleaning to protect seals and membranes, and a lived-in interior that needs the same care as a home. We bring our mobile setup to your RV wherever it's stored — on your property, at a storage lot in Farmington or Canandaigua, or at a seasonal site in the Finger Lakes. Because size and condition vary so much, RV work is quoted per job — call or text with the length and a photo or two and we'll give you a fast, honest number.",
    features: [
      "Full exterior wash, compound, and seal",
      "Roof cleaning with membrane-safe products",
      "Oxidation removal on fiberglass sides",
      "Awning cleaning and UV treatment",
      "Interior deep clean — carpets, cabinetry, upholstery, bathroom",
      "Slide-out seal inspection and conditioning",
      "Tire, wheel, and undercarriage detailing",
    ],
    pricing: [
      {
        name: "RV Wash & Wax",
        priceFrom: "Quoted by length",
        description:
          "Seasonal maintenance — wash, wax, and a clean roof. Text us your RV's length for a fast quote.",
        includes: [
          "Full exterior hand wash",
          "Spray wax for gloss",
          "Roof rinse and clean",
          "Tires and wheels cleaned and dressed",
        ],
      },
      {
        name: "Full RV Detail",
        priceFrom: "Quoted by length",
        description:
          "Our most complete RV package — exterior compound and seal plus a full interior reset.",
        includes: [
          "Machine compound for oxidation",
          "Long-lasting sealant",
          "Roof deep clean",
          "Interior vacuum, wipe-down, and deep clean",
          "Seals and slide-outs inspected and conditioned",
        ],
        popular: true,
      },
      {
        name: "Pre-Storage / Winterization Detail",
        priceFrom: "Custom quote",
        description:
          "Prep your RV for winter storage or bring it out of hibernation in spring.",
        includes: [
          "Full exterior detail",
          "Roof sealant check and touch-up",
          "Interior deep clean with odor treatment",
          "Awning and slide-out conditioning",
        ],
      },
    ],
    keywords: [
      "RV detailing Victor NY",
      "RV detailing Rochester NY",
      "camper detailing Finger Lakes",
      "travel trailer detailing Ontario County",
      "fifth wheel detailing Western NY",
    ],
  },
  {
    slug: "power-sports-detailing",
    title: "Power Sports Detailing — Motorcycles, ATVs, UTVs, Snowmobiles",
    shortTitle: "Power Sports",
    icon: "🏍️",
    metaDescription:
      "Mobile power sports detailing in Victor, NY and the Finger Lakes — motorcycles, ATVs, UTVs, side-by-sides, and snowmobiles. We come to your garage or storage.",
    summary:
      "Specialist detailing for motorcycles, ATVs, UTVs, side-by-sides, and snowmobiles — done carefully, by hand, at your garage.",
    intro:
      "Power sports vehicles need a different approach than cars. Exposed chrome, raw aluminum, painted plastics, rubber seals, and electronics all sit inches from each other. We use the right chemistry and the right technique for each surface — no pressure-washing sensitive electronics, no harsh chemicals on raw metals, no machine polishing where hand work is safer. Every power sports job is quoted individually — call or text with what you ride and we'll give you a number.",
    features: [
      "Motorcycle detailing — chrome, paint, and leather all treated properly",
      "ATV & UTV deep cleaning after mud and trail use",
      "Snowmobile detailing — salt removal and pre-storage protection",
      "Chrome and metal polishing by hand",
      "Plastic and vinyl conditioning",
      "Seasonal storage prep available",
    ],
    pricing: [
      {
        name: "Motorcycle Detail",
        priceFrom: "Custom quote",
        description:
          "Full motorcycle detail — chrome, paint, and leather, each treated with the right products.",
        includes: [
          "Hand wash and rinse",
          "Chrome and metal polish",
          "Paint protection applied",
          "Leather cleaning and conditioning",
        ],
      },
      {
        name: "ATV / UTV / Side-by-Side",
        priceFrom: "Custom quote",
        description:
          "Full detail for off-road vehicles — mud, dust, and trail residue removed carefully.",
        includes: [
          "Exterior wash and detail",
          "Plastic and vinyl conditioning",
          "Wheel and tire detailing",
          "Engine bay cleaning (where safe)",
        ],
        popular: true,
      },
      {
        name: "Snowmobile Detail",
        priceFrom: "Custom quote",
        description:
          "Spring cleanup or pre-storage detail to protect against salt corrosion.",
        includes: [
          "Full exterior clean",
          "Salt removal and neutralization",
          "Metal polish",
          "Storage-prep protection",
        ],
      },
    ],
    keywords: [
      "motorcycle detailing Victor NY",
      "ATV detailing Rochester NY",
      "UTV detailing Finger Lakes",
      "snowmobile detailing Western NY",
      "power sports detailing Ontario County",
    ],
  },
];

// Helper: find a service by slug
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
