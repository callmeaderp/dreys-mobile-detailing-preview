// Single source of truth for all business info — keeps NAP consistency
// across schema, footer, nav, contact page, metadata.

export const site = {
  name: "Drey's Mobile Detailing",
  legalName: "Drey's Mobile Detailing LLC",
  shortName: "DMD",
  tagline: "In Pursuit of Perfection",
  established: "2019",
  owner: "Andrew Drey",
  logoInitials: "A|D",
  url: "https://dreysmobiledetailing.com",
  // NAP — keep identical across every directory listing
  phone: {
    display: "(315) 584-2860",
    tel: "+13155842860",
    raw: "3155842860",
  },
  email: "mobiledetailing585@yahoo.com",
  address: {
    street: "6873 Chestnut Hill",
    locality: "Victor",
    region: "NY",
    postal: "14564",
    country: "US",
  },
  geo: {
    latitude: 42.9810,
    longitude: -77.4108,
  },
  // Areas served for local SEO
  serviceArea: [
    "Victor, NY",
    "Farmington, NY",
    "Canandaigua, NY",
    "Bloomfield, NY",
    "Pittsford, NY",
    "Fairport, NY",
    "Mendon, NY",
    "Honeoye Falls, NY",
    "Rochester, NY",
    "Ontario County, NY",
    "Finger Lakes, NY",
  ],
  hours: [
    { day: "Mon", open: "09:00", close: "17:00" },
    { day: "Tue", open: "09:00", close: "17:00" },
    { day: "Wed", open: "09:00", close: "17:00" },
    { day: "Thu", open: "09:00", close: "17:00" },
    { day: "Fri", open: "09:00", close: "17:00" },
    { day: "Sat", open: "By appointment", close: "" },
    { day: "Sun", open: "Closed", close: "" },
  ],
  priceRange: "$$",
  // Online booking (Square Appointments). Leave empty until the owner's
  // Square account exists — every "Book Online" CTA across the site renders
  // automatically once this URL is set, and stays hidden while it's empty.
  bookingUrl: "",
  social: {
    facebook: "https://www.facebook.com/dreysmobiledetailing/",
    instagram: "https://www.instagram.com/dreysmobiledetailing/",
  },
  // Google Analytics
  analytics: {
    ga4: "G-BF2FDR6KMM",
  },
} as const;

// Phone in tel: format for <a href="tel:...">
export const telHref = `tel:${site.phone.tel}`;
// SMS link (useful for "text us")
export const smsHref = `sms:${site.phone.tel}`;
// mailto link
export const mailHref = `mailto:${site.email}`;
// Online booking link, or null while booking isn't live yet
export const bookingHref: string | null = site.bookingUrl || null;
