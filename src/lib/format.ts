import type { Locale } from "@/lib/routes";

const dateLocales: Record<Locale, string> = {
  ca: "ca-ES",
  es: "es-ES",
  en: "en-US",
};

export const formatLongDate = (locale: Locale, date: Date) =>
  new Intl.DateTimeFormat(dateLocales[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
