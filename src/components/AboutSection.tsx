const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
            Who is Servidrone?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Servidrone is a professional drone services company specializing in aerial data collection for agriculture and land surveying. We combine advanced drone technology with geospatial analysis to provide precise and reliable data for farmers, engineers, and landowners.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our mission is to make aerial intelligence accessible and actionable. From crop health monitoring to high-precision terrain mapping, we deliver the data our clients need to make informed decisions, reduce costs, and optimize their operations.
          </p>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-heading font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Flights completed</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-primary">50K+</p>
              <p className="text-sm text-muted-foreground mt-1">Hectares mapped</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Client satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
