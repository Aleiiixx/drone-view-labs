export const siteConfig = {
  name: "Servidrone",
  legalName: "Gibosa M2R SL",
  siteUrl: "https://servidrone.cat",
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
    addressCountryName: "Spain",
  },
  business: {
    type: "ProfessionalService",
    priceRange: "$$",
    email: "info@servidrone.cat",
    telephone: "+34 622 00 13 26",
    services: [
      "Aixecaments topogràfics amb dron",
      "Models digitals 3D del terreny",
      "Aplicacions agrícoles amb dron",
      "Cartografia tècnica",
      "Inspeccions aèries",
    ],
  },
  socialImageAlt: "Vista aèria de camps i terreny capturada amb dron a Tarragona",
} as const;

export const getSiteUrl = () => {
  const value = import.meta.env.PUBLIC_SITE_URL?.trim();
  const normalized = value ? value.replace(/\/$/, "") : siteConfig.siteUrl;
  return normalized.replace(/\/$/, "");
};
