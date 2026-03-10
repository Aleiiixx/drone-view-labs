import { Crosshair, Zap, DollarSign, Mountain, MapPin } from "lucide-react";

const benefits = [
  { icon: Crosshair, title: "Higher Precision", desc: "Centimeter-level accuracy surpassing traditional survey methods." },
  { icon: Zap, title: "Faster Data Collection", desc: "Cover hundreds of hectares in a single flight session." },
  { icon: DollarSign, title: "Reduced Costs", desc: "Lower operational costs compared to manned aircraft and ground crews." },
  { icon: Mountain, title: "Access Difficult Terrain", desc: "Reach remote, rugged, or inaccessible areas effortlessly." },
  { icon: MapPin, title: "High-Resolution Maps", desc: "Deliver detailed aerial maps, orthomosaics, and 3D models." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-background topo-lines">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Why Drones
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            The Advantage of Aerial Data
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card rounded-lg p-6 text-center shadow-sm card-hover border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-foreground text-sm mb-2">{b.title}</h4>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
