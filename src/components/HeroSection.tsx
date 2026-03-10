import heroImage from "@/assets/hero-aerial.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Aerial view of farmland captured by drone"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Animated topo SVG overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,300 Q200,250 400,300 T800,300 T1200,280 T1600,300 T2000,290"
          fill="none"
          stroke="hsl(101,62%,60%)"
          strokeWidth="1"
          strokeDasharray="10,5"
          className="animate-drone-path"
        />
        <path
          d="M0,500 Q300,450 600,500 T1200,480 T1800,510"
          fill="none"
          stroke="hsl(101,62%,60%)"
          strokeWidth="0.8"
          strokeDasharray="8,6"
          className="animate-drone-path"
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M0,200 Q250,170 500,200 T1000,190 T1500,210 T2000,195"
          fill="none"
          stroke="hsl(122,45%,34%)"
          strokeWidth="0.6"
          strokeDasharray="12,4"
          className="animate-drone-path"
          style={{ animationDelay: "2s" }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 container-narrow px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up">
          Aerial Intelligence for Agriculture<br className="hidden md:block" /> & Land Surveying
        </h1>
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Professional drone-based data collection for precision agriculture, terrain mapping, and land analysis. Actionable insights from above.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button size="lg" asChild>
            <a href="#contact">Request a Quote</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
