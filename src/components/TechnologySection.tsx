import droneImage from "@/assets/drone-survey.jpg";
import { Cpu, Navigation, Camera, BarChart3 } from "lucide-react";

const techItems = [
  { icon: Cpu, title: "High-Precision Drones", desc: "Enterprise-grade UAVs with advanced flight controllers and redundant safety systems." },
  { icon: Navigation, title: "GPS & RTK Positioning", desc: "Centimeter-level accuracy with Real-Time Kinematic satellite positioning." },
  { icon: Camera, title: "Advanced Imaging", desc: "Multispectral, thermal, and RGB cameras for comprehensive aerial data capture." },
  { icon: BarChart3, title: "Professional Processing", desc: "Industry-leading photogrammetry and GIS software for accurate map generation." },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src={droneImage}
              alt="Professional drone performing aerial survey over agricultural field"
              className="w-full h-80 lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </div>

          {/* Content side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Our Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Advanced Tools for <span className="text-gradient">Precise Data</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We combine cutting-edge drone hardware with professional-grade data processing to deliver precise, reliable geospatial intelligence.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {techItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
