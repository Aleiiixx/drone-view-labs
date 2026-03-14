import type { Locale, RouteKey } from "@/lib/routes";

export type LinkContent = {
  label: string;
  href: string;
};

export type ServiceCard = {
  routeKey: Exclude<RouteKey, "home">;
  title: string;
  description: string;
  bullets: string[];
};

export type ComparisonRow = {
  focus: string;
  drone: string;
  traditional: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TableRow = {
  service: string;
  deliverables: string;
  fit: string;
};

export type HomeContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  primaryCta: LinkContent;
  secondaryCta: LinkContent;
  trustPoints: string[];
  servicesTitle: string;
  servicesDescription: string;
  serviceCards: ServiceCard[];
  whyTitle: string;
  whyItems: string[];
  deliverablesTitle: string;
  deliverablesDescription: string;
  deliverablesRows: TableRow[];
  sectorsTitle: string;
  sectors: string[];
  comparisonTitle: string;
  comparisonDescription: string;
  comparisonRows: ComparisonRow[];
  faqTitle: string;
  faqItems: FaqItem[];
  freshnessLabel: string;
};

export type ServicePageContent = {
  routeKey: Exclude<RouteKey, "home">;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroBullets: string[];
  primaryCta: LinkContent;
  secondaryCta: LinkContent;
  overviewTitle: string;
  overviewParagraphs: string[];
  deliverablesTitle: string;
  deliverables: string[];
  fitTitle: string;
  fitItems: string[];
  processTitle: string;
  processSteps: Array<{ title: string; description: string }>;
  faqTitle: string;
  faqItems: FaqItem[];
};

export type UiContent = {
  navFaq: string;
  navContact: string;
  footerTagline: string;
  footerCoverage: string;
  footerCoverageValue: string;
  footerContact: string;
  footerUpdated: string;
  formEyebrow: string;
  formTitle: string;
  formDescription: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formService: string;
  formLocation: string;
  formTimeline: string;
  formMessage: string;
  formSubmit: string;
  formPrivacy: string;
  formServicePlaceholder: string;
  formMessagePlaceholder: string;
  formTimelinePlaceholder: string;
  formLocationPlaceholder: string;
  contactEmail: string;
  contactPhone: string;
  contactArea: string;
  contactAreaValue: string;
  breadcrumbSeparator: string;
};

export type LocalizedRecord<T> = Record<Locale, T>;
