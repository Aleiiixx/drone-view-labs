import { Sprout, Map, Search } from "lucide-react";

const services = [
  {
    icon: Sprout,
    title: "Precision Agriculture",
    description:
      "Crop monitoring, NDVI analysis, irrigation optimization, and crop health detection. Data-driven insights to maximize yield and reduce waste.",
    features: ["Crop health mapping", "NDVI vegetation index", "Irrigation optimization", "Early disease detection"],
  },
  {
    icon: Map,
    title: "Topography & Land Surveying",
    description:
      "High-precision terrain mapping with orthomosaics, digital terrain models (DTM), and accurate land measurements for engineering and planning.",
    features: ["Orthomosaic maps", "Digital terrain models", "Volumetric calculations", "Contour line generation"],
  },
  {
    icon: Search,
    title: "Aerial Inspections",
    description:
      "Detailed inspections of farm infrastructure, rural properties, solar panels, and agricultural facilities from a safe aerial vantage point.",
    features: ["Infrastructure assessment", "Property documentation", "Solar panel inspection", "Facility monitoring"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background topo-lines">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/60">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive aerial data solutions for agriculture, land surveying, and infrastructure management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg p-8 shadow-md card-hover border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
