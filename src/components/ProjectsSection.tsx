import ndviImage from "@/assets/ndvi-analysis.jpg";
import terrainModel from "@/assets/terrain-model.jpg";
import orthomosaic from "@/assets/orthomosaic.jpg";
import terrainMapping from "@/assets/terrain-mapping.jpg";

const projects = [
  { image: ndviImage, title: "NDVI Crop Health Analysis", category: "Precision Agriculture", alt: "NDVI crop health vegetation index map" },
  { image: terrainModel, title: "3D Digital Terrain Model", category: "Topographic Survey", alt: "3D terrain elevation model from drone data" },
  { image: orthomosaic, title: "Orthomosaic Farmland Map", category: "Aerial Mapping", alt: "High resolution orthomosaic aerial map of farmland" },
  { image: terrainMapping, title: "Terrain Analysis Survey", category: "Land Surveying", alt: "Aerial terrain survey of rural landscape" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Featured Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative rounded-lg overflow-hidden shadow-lg card-hover">
              <img
                src={p.image}
                alt={p.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.category}
                </span>
                <h4 className="font-heading font-bold text-primary-foreground text-lg mt-1">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
