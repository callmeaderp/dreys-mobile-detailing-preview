// Service catalog — drives navigation, service index, and per-service pages.
// Each service has its own page, Service schema, and detailed content.

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
      "Professional mobile auto detailing in Victor, NY and the Rochester area. Interior and exterior detailing that comes to you. Serving Ontario County and the Finger Lakes since 2019.",
    summary:
      "Full interior and exterior detailing performed at your home or office, anywhere in Ontario County and the greater Rochester area.",
    intro:
      "Every auto detail at Drey's starts with a careful inspection and a conversation about your goals for the vehicle. Whether you need a maintenance wash, a deep interior reset after a long winter, or a full show-ready detail on a weekend car, we bring every tool, product, and gallon of water with us. No shop drop-off, no waiting room — we pull up to your driveway in Victor, Farmington, Canandaigua, Pittsford, or anywhere else in the region and treat your vehicle like it's our own.",
    features: [
      "Completely mobile — we bring water, power, and every tool we need",
      "Hand-wash only, two-bucket method with pH-balanced shampoos",
      "Thorough interior vacuum, including seats, carpets, trunk, and crevices",
      "Steam extraction for upholstery stains and matted carpets",
      "Leather cleaning and conditioning on every package with leather surfaces",
      "Door jambs, wheel wells, and tailpipes detailed as standard",
      "All work performed by the owner — never a rotating crew",
    ],
    pricing: [
      {
        name: "Maintenance Wash",
        priceFrom: "From $85",
        description:
          "Our monthly-plan favorite — keeps your car looking showroom-fresh between full details.",
        includes: [
          "Foam pre-wash + hand wash",
          "Wheel & tire cleaning",
          "Windows inside & out",
          "Quick interior wipe-down and vacuum",
          "Spray wax for gloss and protection",
        ],
      },
      {
        name: "Full Detail",
        priceFrom: "From $275",
        description:
          "Our flagship detail for daily drivers that need a thorough reset inside and out.",
        includes: [
          "Clay bar decontamination of all painted surfaces",
          "Deep interior vacuum and steam clean",
          "Leather conditioning or fabric protection",
          "Tire dressing and wheel well detailing",
          "Hand-applied sealant for 3–6 months of protection",
        ],
      },
      {
        name: "Restoration Detail",
        priceFrom: "Custom quote",
        description:
          "Classics, project cars, and vehicles that haven't seen real care in years.",
        includes: [
          "Multi-stage paint decontamination",
          "Paint correction when needed (separate quote)",
          "Full interior tear-down and deep clean",
          "Engine bay detailing available",
          "Recommendations for long-term maintenance",
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
      "Professional ceramic coating installation in Victor, NY and Rochester. Long-term paint protection, hydrophobic finish, and deep gloss. Serving the Finger Lakes since 2019.",
    summary:
      "Long-term paint protection with a deep, glossy, hydrophobic finish — installed carefully over properly prepared paint.",
    intro:
      "A ceramic coating is only as good as the prep underneath it. Every ceramic install at Drey's begins with a full decontamination wash, iron fallout removal, clay bar, and — if the paint needs it — a paint correction step to remove swirls and defects so the coating locks onto truly clean paint. We use professional-grade coatings that are rated for multi-year protection, and we don't cut corners on prep to hit a lower price point.",
    features: [
      "Multi-stage decontamination before every application",
      "Optional paint correction for older or neglected finishes",
      "Coating installed in a controlled, dust-free environment",
      "Hydrophobic, self-cleaning finish",
      "Deep, mirror-like gloss",
      "Significantly easier to wash and maintain",
      "Post-install maintenance wash schedule included",
    ],
    pricing: [
      {
        name: "1-Year Coating",
        priceFrom: "From $550",
        description:
          "A great entry point to ceramic — perfect for leased vehicles or newer paint in excellent shape.",
        includes: [
          "Full decontamination wash",
          "Iron fallout remover + clay bar",
          "1-year ceramic coating applied by hand",
          "Glass and wheel coating optional add-on",
        ],
      },
      {
        name: "Multi-Year Coating",
        priceFrom: "From $950",
        description:
          "Our most popular ceramic package — long-term protection with a dramatic gloss boost.",
        includes: [
          "Everything in the 1-year package",
          "Single-stage paint correction included",
          "Multi-year ceramic coating (2–5 year ratings available)",
          "Wheel face coating included",
        ],
      },
      {
        name: "Show Car Coating",
        priceFrom: "Custom quote",
        description:
          "For enthusiasts who want the best possible finish on their vehicle.",
        includes: [
          "Multi-stage paint correction",
          "Premium long-life coating system",
          "Glass, wheel, and trim coating",
          "Annual inspection and maintenance visit",
        ],
      },
    ],
    keywords: [
      "ceramic coating Victor NY",
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
      "Expert paint correction and swirl removal in Victor, NY and Rochester. Single, two, and three-stage correction using machine polishing. Serving Ontario County and the Finger Lakes.",
    summary:
      "Remove swirl marks, scratches, oxidation, and bring true clarity and depth back to your paint.",
    intro:
      "Paint correction is the careful removal of a microscopic layer of clear coat to level out swirls, scratches, water spots, and oxidation. When it's done right, the difference is dramatic — a car with correction looks wet and glossy under every light, not just bright sun. We measure paint thickness before and during every correction to make sure we remove only what's needed, and we match the cut of the polish to the defects and the paint hardness.",
    features: [
      "Paint thickness measured with a digital gauge before any correction",
      "Matched pad and polish combinations for your specific paint",
      "Single, two, and three-stage correction available",
      "Before/after documentation on every job",
      "Swirl, scratch, water spot, and oxidation removal",
      "Almost always paired with a protective coating or sealant",
    ],
    pricing: [
      {
        name: "Gloss Enhancement (1-step)",
        priceFrom: "From $400",
        description:
          "Removes light swirls and marring, adds significant gloss — great for newer cars with minor defects.",
        includes: [
          "Wash, decontamination, and clay bar",
          "Single-stage machine polish",
          "Sealant applied to protect the work",
        ],
      },
      {
        name: "Two-Stage Correction",
        priceFrom: "From $750",
        description:
          "Our most popular correction tier — removes the majority of swirls and scratches.",
        includes: [
          "Full prep including iron fallout removal",
          "Compound + polish steps",
          "Paint thickness readings throughout",
          "Coating or sealant recommended",
        ],
      },
      {
        name: "Show-Quality Correction",
        priceFrom: "Custom quote",
        description:
          "For serious enthusiasts — near-perfect finish under any lighting.",
        includes: [
          "Multi-stage compound, polish, and refine",
          "Extended time on each panel",
          "Full before/after documentation",
          "Paired with a multi-year ceramic coating",
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
      "Mobile boat detailing and marine detailing in Victor, NY and the Finger Lakes. Oxidation removal, gelcoat polishing, interior cleaning. We come to your slip, storage lot, or home.",
    summary:
      "Full-service marine detailing for power boats, sailboats, and pontoons — at your slip, storage lot, or driveway.",
    intro:
      "Marine environments are brutal on gelcoat and metal. Sun, water, and time produce oxidation that makes hulls look chalky and dull long before the boat is actually old. We perform full marine detailing across the Finger Lakes region — Canandaigua Lake, Honeoye Lake, Seneca Lake, Conesus, Hemlock, and Lake Ontario — removing oxidation, polishing gelcoat, detailing interiors, and applying marine-grade sealants that actually stand up to the environment.",
    features: [
      "Gelcoat oxidation removal and machine compounding",
      "Marine-grade sealants and ceramic coatings",
      "Vinyl seat cleaning, conditioning, and mildew treatment",
      "Hull bottom cleaning (where water access permits)",
      "Metal polishing — stainless, chrome, and aluminum",
      "Service at slip, storage, or your home",
      "Pre-season and post-season packages available",
    ],
    pricing: [
      {
        name: "Wash & Protect",
        priceFrom: "From $10/ft",
        description:
          "A maintenance-level detail to keep your boat looking fresh during the season.",
        includes: [
          "Full exterior wash and rinse",
          "Spray-on sealant for gloss and bead",
          "Interior wipe-down and vacuum",
          "Windows and metal polish",
        ],
      },
      {
        name: "Oxidation Removal + Polish",
        priceFrom: "From $28/ft",
        description:
          "Our flagship marine detail — brings dull, chalky hulls back to deep gloss.",
        includes: [
          "Machine compounding to remove oxidation",
          "Polish step for clarity and gloss",
          "Marine-grade sealant applied",
          "Interior deep clean and vinyl condition",
        ],
      },
      {
        name: "Marine Ceramic Coating",
        priceFrom: "Custom quote",
        description:
          "Long-term protection for gelcoat — hydrophobic, UV-resistant, and dramatically easier to maintain.",
        includes: [
          "Full prep and oxidation removal",
          "Marine-specific ceramic coating",
          "Multi-year protection",
          "Annual inspection visit included",
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
      "Mobile RV detailing in Victor, NY, Rochester, and the Finger Lakes. Oxidation removal, wash and wax, roof cleaning, interior deep clean. Class A, C, travel trailers, and fifth wheels.",
    summary:
      "Full detailing for RVs, travel trailers, fifth wheels, and campers — at your storage lot or driveway.",
    intro:
      "An RV detail is really three jobs in one: a very large exterior with heavy oxidation from sun exposure, a roof that needs specialized cleaning to protect seals and membranes, and a lived-in interior that needs the same care as a home. We bring our mobile setup to your RV wherever it's stored — on your property, at a storage lot in Farmington or Canandaigua, or at a seasonal site in the Finger Lakes.",
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
        priceFrom: "From $8/ft",
        description:
          "Seasonal maintenance — wash, wax, and a clean roof.",
        includes: [
          "Full exterior hand wash",
          "Spray wax for gloss",
          "Roof rinse and clean",
          "Tires and wheels cleaned and dressed",
        ],
      },
      {
        name: "Full RV Detail",
        priceFrom: "From $18/ft",
        description:
          "Our most popular RV package — exterior and interior reset.",
        includes: [
          "Machine compound for oxidation",
          "Long-lasting sealant",
          "Roof deep clean",
          "Interior vacuum, wipe-down, and deep clean",
          "Seals and slide-outs inspected and conditioned",
        ],
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
      "Power sports vehicles need a different approach than cars. Exposed chrome, raw aluminum, painted plastics, rubber seals, and electronics all sit inches from each other. We use the right chemistry and the right technique for each surface — no pressure-washing sensitive electronics, no harsh chemicals on raw metals, no machine polishing where hand work is safer.",
    features: [
      "Motorcycle detailing — chrome, paint, and leather all treated properly",
      "ATV & UTV deep cleaning after mud and trail use",
      "Snowmobile detailing — salt removal and pre-storage protection",
      "Chrome and metal polishing by hand",
      "Plastic and vinyl conditioning",
      "Chain cleaning and lube (motorcycles)",
      "Seasonal storage prep available",
    ],
    pricing: [
      {
        name: "Motorcycle Detail",
        priceFrom: "From $150",
        description:
          "Full motorcycle detail — chrome, paint, leather, and engine bay.",
        includes: [
          "Hand wash and rinse",
          "Chrome and metal polish",
          "Paint sealant",
          "Leather cleaning and conditioning",
          "Chain clean and lube",
        ],
      },
      {
        name: "ATV / UTV / Side-by-Side",
        priceFrom: "From $175",
        description:
          "Full detail for off-road vehicles — mud, dust, and trail residue removed carefully.",
        includes: [
          "Exterior wash and detail",
          "Plastic and vinyl conditioning",
          "Wheel and tire detailing",
          "Engine bay cleaning (where safe)",
        ],
      },
      {
        name: "Snowmobile Detail",
        priceFrom: "From $150",
        description:
          "Spring cleanup or pre-storage detail to protect against salt corrosion.",
        includes: [
          "Full exterior clean",
          "Salt removal and neutralization",
          "Metal polish",
          "Storage-prep sealant",
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
