import { ClipboardList, Plane, Cpu, FileBarChart } from "lucide-react";

const steps = [
  { icon: ClipboardList, step: "01", title: "Mission Planning", desc: "Define objectives, map the area, and plan the optimal flight path." },
  { icon: Plane, step: "02", title: "Drone Flight & Capture", desc: "Execute the autonomous drone flight and collect high-resolution aerial data." },
  { icon: Cpu, step: "03", title: "Data Processing", desc: "Process and analyze collected imagery using professional photogrammetry software." },
  { icon: FileBarChart, step: "04", title: "Reports & Delivery", desc: "Deliver final maps, 3D models, analytics, and actionable reports to the client." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Our Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

          {steps.map((s) => (
            <div key={s.step} className="relative text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center mx-auto mb-6 relative z-10">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-heading font-bold text-accent uppercase tracking-widest">
                Step {s.step}
              </span>
              <h4 className="font-heading font-bold text-foreground mt-2 mb-2">{s.title}</h4>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
