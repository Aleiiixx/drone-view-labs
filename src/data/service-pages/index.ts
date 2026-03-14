import type { RouteKey } from "@/lib/routes";
import type { LocalizedRecord, ServicePageContent } from "@/data/content-types";
import { agricultureContent } from "@/data/service-pages/agriculture";
import { inspectionsContent } from "@/data/service-pages/inspections";
import { topographyContent } from "@/data/service-pages/topography";

export const servicePagesContent: Record<Exclude<RouteKey, "home">, LocalizedRecord<ServicePageContent>> = {
  topography: topographyContent,
  agriculture: agricultureContent,
  inspections: inspectionsContent,
};
