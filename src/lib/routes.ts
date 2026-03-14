import { getSiteUrl } from "@/data/site";

export const locales = ["ca", "es", "en"] as const;

export type Locale = (typeof locales)[number];
export type RouteKey = "home" | "topography" | "agriculture" | "inspections";

const routeSlugs: Record<RouteKey, Record<Locale, string>> = {
  home: {
    ca: "",
    es: "",
    en: "",
  },
  topography: {
    ca: "topografia-dron-tarragona",
    es: "topografia-con-dron-tarragona",
    en: "drone-surveying-tarragona",
  },
  agriculture: {
    ca: "aplicacions-agricoles-dron",
    es: "aplicaciones-agricolas-dron",
    en: "agricultural-drone-applications",
  },
  inspections: {
    ca: "inspeccions-aeries-dron",
    es: "inspecciones-aereas-dron",
    en: "aerial-drone-inspections",
  },
};

export const localeLabels: Record<Locale, string> = {
  ca: "Català",
  es: "Español",
  en: "English",
};

export const localePrefixes: Record<Locale, string> = {
  ca: "",
  es: "/es",
  en: "/en",
};

export const routeLabels: Record<RouteKey, Record<Locale, string>> = {
  home: {
    ca: "Inici",
    es: "Inicio",
    en: "Home",
  },
  topography: {
    ca: "Topografia amb dron",
    es: "Topografía con dron",
    en: "Drone surveying",
  },
  agriculture: {
    ca: "Aplicacions agrícoles",
    es: "Aplicaciones agrícolas",
    en: "Agricultural applications",
  },
  inspections: {
    ca: "Inspeccions aèries",
    es: "Inspecciones aéreas",
    en: "Aerial inspections",
  },
};

export const serviceRouteKeys: RouteKey[] = ["topography", "agriculture", "inspections"];

export const getLocalizedPath = (locale: Locale, routeKey: RouteKey) => {
  const prefix = localePrefixes[locale];
  const slug = routeSlugs[routeKey][locale];

  if (!slug) {
    return prefix ? `${prefix}/` : "/";
  }

  return prefix ? `${prefix}/${slug}/` : `/${slug}/`;
};

export const getAbsoluteUrl = (path: string) => new URL(path, `${getSiteUrl()}/`).toString();

export const getAlternateLinks = (routeKey: RouteKey) =>
  locales.map((locale) => ({
    lang: locale,
    href: getAbsoluteUrl(getLocalizedPath(locale, routeKey)),
  }));

export const getLocaleFromPath = (pathname: string): Locale => {
  if (pathname.startsWith("/es/") || pathname === "/es") return "es";
  if (pathname.startsWith("/en/") || pathname === "/en") return "en";
  return "ca";
};

export const getRouteKeyFromSlug = (locale: Locale, slug: string): RouteKey | null => {
  for (const routeKey of serviceRouteKeys) {
    if (routeSlugs[routeKey][locale] === slug) {
      return routeKey;
    }
  }

  return null;
};
