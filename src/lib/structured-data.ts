import { siteConfig } from "@/data/site";
import type { FaqItem, ServicePageContent } from "@/data/content-types";
import {
  getAbsoluteUrl,
  getLocalizedPath,
  routeLabels,
  type Locale,
  type RouteKey,
} from "@/lib/routes";

const websiteId = `${siteConfig.siteUrl}/#website`;
const organizationId = `${siteConfig.siteUrl}/#organization`;

const getCommonItems = (locale: Locale) => [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.siteUrl,
    name: siteConfig.name,
    inLanguage: locale,
  },
  {
    "@context": "https://schema.org",
    "@type": siteConfig.business.type,
    "@id": organizationId,
    name: siteConfig.legalName,
    url: siteConfig.siteUrl,
    areaServed: {
      "@type": "AdministrativeArea",
      name: siteConfig.location.areaServed,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.locality,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    email: siteConfig.business.email,
    telephone: siteConfig.business.telephone,
    priceRange: siteConfig.business.priceRange,
    serviceType: siteConfig.business.services,
  },
];

const buildFaqSchema = (faqItems: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const buildHomeStructuredData = ({
  locale,
  metaTitle,
  metaDescription,
  faqItems,
  modifiedTime,
}: {
  locale: Locale;
  metaTitle: string;
  metaDescription: string;
  faqItems: FaqItem[];
  modifiedTime: string;
}) => {
  const pageUrl = getAbsoluteUrl(getLocalizedPath(locale, "home"));

  return [
    ...getCommonItems(locale),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: metaTitle,
      description: metaDescription,
      inLanguage: locale,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      dateModified: modifiedTime,
    },
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: routeLabels.home[locale],
      itemListElement: (["topography", "agriculture", "inspections"] as Exclude<RouteKey, "home">[]).map(
        (routeKey, index) => ({
          "@type": "Offer",
          position: index + 1,
          name: routeLabels[routeKey][locale],
          url: getAbsoluteUrl(getLocalizedPath(locale, routeKey)),
        }),
      ),
    },
    buildFaqSchema(faqItems),
  ];
};

export const buildServiceStructuredData = ({
  locale,
  content,
  modifiedTime,
}: {
  locale: Locale;
  content: ServicePageContent;
  modifiedTime: string;
}) => {
  const pageUrl = getAbsoluteUrl(getLocalizedPath(locale, content.routeKey));
  const homeUrl = getAbsoluteUrl(getLocalizedPath(locale, "home"));

  return [
    ...getCommonItems(locale),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: content.metaTitle,
      description: content.metaDescription,
      inLanguage: locale,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      dateModified: modifiedTime,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: routeLabels[content.routeKey][locale],
      name: routeLabels[content.routeKey][locale],
      description: content.metaDescription,
      provider: { "@id": organizationId },
      areaServed: {
        "@type": "AdministrativeArea",
        name: siteConfig.location.areaServed,
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: pageUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: routeLabels.home[locale],
          item: homeUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: routeLabels[content.routeKey][locale],
          item: pageUrl,
        },
      ],
    },
    buildFaqSchema(content.faqItems),
  ];
};
