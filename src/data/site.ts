export const siteConfig = {
  name: "Servidrone",
  legalName: "Gibosa M2R SL",
  defaultLocale: "ca",
  localeMap: {
    ca: "ca_ES",
    es: "es_ES",
    en: "en_US",
  },
  themeColor: "#f2f5f2",
  location: {
    locality: "Tarragona",
    region: "Catalunya",
    country: "ES",
    areaServed: "Catalunya",
  },
  business: {
    type: "ProfessionalService",
    priceRange: "$$",
    services: [
      "Levantaments topografics amb dron",
      "Models digitals 3D del terreny",
      "Aplicacions agricoles amb dron",
      "Cartografia tecnica",
      "Inspeccions aeries",
    ],
  },
  socialImageAlt: "Vista aeria de camps i terreny capturada amb dron a Tarragona",
} as const;

export const getSiteUrl = () => {
  const value = import.meta.env.PUBLIC_SITE_URL?.trim();
  return value ? value.replace(/\/$/, "") : "";
};
