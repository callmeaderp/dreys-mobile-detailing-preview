// Helper for building internal URLs that respect Astro's `base` config.
// BASE_URL always has a trailing slash (e.g. "/" or "/my-repo/").
// `u("/about/")` → "/about/" (no base) or "/my-repo/about/" (with base).

export const u = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
};
