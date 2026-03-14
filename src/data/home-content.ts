import type { LocalizedRecord, HomeContent } from "@/data/content-types";

export const homeContent: LocalizedRecord<HomeContent> = {
  ca: {
    metaTitle: "Serveis amb dron a Tarragona | Topografia, models 3D i agricultura",
    metaDescription:
      "Topografia amb dron, models 3D del terreny, cartografia i aplicacions agrícoles a Tarragona. Servei tècnic, dades útils i pressupost ràpid.",
    eyebrow: "Topografia, cartografia i agricultura de precisió",
    title: "Serveis professionals amb dron a Tarragona per a topografia, models 3D i agricultura",
    description:
      "Ajudem empreses, enginyeries, tècnics i finques agrícoles a treballar amb dades aèries clares, útils i preparades per a la presa de decisions.",
    intro:
      "Servidrone concentra en una sola operativa la captura, el processament i el lliurament de cartografia, models digitals del terreny, documentació visual i suport a treballs agrícoles. L'objectiu no és només volar: és lliurar informació que es pugui fer servir.",
    primaryCta: { label: "Demana pressupost", href: "#contact" },
    secondaryCta: { label: "Veure serveis", href: "#services" },
    trustPoints: [
      "Planificació de vol, captura i processament tècnic en un sol flux.",
      "Cobertura des de Tarragona amb servei a tot Catalunya.",
      "Lliuraments adaptats al tipus de projecte: ortofoto, MDT, model 3D, informe o documentació visual.",
    ],
    servicesTitle: "Serveis pensats per a necessitats concretes",
    servicesDescription:
      "Cada servei respon a un tipus de projecte diferent i t'ajuda a veure ràpidament quin encaix pot tenir amb el que necessites.",
    serviceCards: [
      {
        routeKey: "topography",
        title: "Topografia amb dron",
        description:
          "Aixecaments topogràfics, ortofotos georeferenciades, models digitals del terreny i càlculs volumètrics per a projectes tècnics.",
        bullets: [
          "Ortofoto i cartografia base",
          "Model digital del terreny, corbes de nivell i suport LiDAR",
          "Suport a enginyeries, obres i finques",
        ],
      },
      {
        routeKey: "agriculture",
        title: "Aplicacions agrícoles amb dron",
        description:
          "Treballs aeris pensats per a explotacions que necessiten cobrir parcel·les amb rapidesa, reduir compactació i arribar a zones difícils.",
        bullets: [
          "Cobertura ràpida de parcel·les",
          "Menys pas de maquinària sobre el terreny",
          "Operativa revisada cas per cas",
        ],
      },
      {
        routeKey: "inspections",
        title: "Inspeccions aèries i documentació tècnica",
        description:
          "Captura visual i suport documental per a cobertes, instal·lacions, finques, plaques solars i seguiment d'actius.",
        bullets: [
          "Imatge aèria d'alt detall",
          "Documentació visual per a manteniment o seguiment",
          "Accés segur a punts difícils",
        ],
      },
    ],
    whyTitle: "Com enfoquem cada projecte",
    whyItems: [
      "Comencem entenent l'objectiu real del treball abans de proposar captura, operativa o lliurament.",
      "Adaptem el servei al tipus de finca, actiu o projecte tècnic, no a un paquet tancat.",
      "Treballem perquè la informació final sigui útil per decidir, coordinar o executar el següent pas.",
    ],
    deliverablesTitle: "Què podem lliurar segons el tipus de projecte",
    deliverablesDescription:
      "Una de les consultes més habituals abans de demanar pressupost és què rebrà exactament el client. Aquesta taula resol la pregunta ràpidament.",
    deliverablesRows: [
      {
        service: "Topografia amb dron",
        deliverables: "Ortofoto georeferenciada, MDT, núvol de punts, corbes de nivell, model 3D i càlculs volumètrics.",
        fit: "Projectes tècnics, obres, finques, seguiment de terreny i presa de mides.",
      },
      {
        service: "Aplicacions agrícoles",
        deliverables: "Planificació operativa, execució de l'aplicació i recollida de dades bàsiques del treball.",
        fit: "Parcel·les amb accés complex, terreny sensible a compactació o necessitat de cobertura ràpida.",
      },
      {
        service: "Inspeccions aèries",
        deliverables: "Imatges detallades, documentació visual, localització d'incidències i suport a informes tècnics.",
        fit: "Cobertes, plaques solars, actius rurals, manteniment i seguiment visual.",
      },
    ],
    sectorsTitle: "Sectors i perfils de client amb què encaixa millor",
    sectors: [
      "Enginyeries i despatxos tècnics que necessiten base cartogràfica o models del terreny.",
      "Explotacions agrícoles que busquen més agilitat en determinades operatives.",
      "Propietaris, mantenidors i gestors d'actius que necessiten inspecció visual aèria.",
      "Professionals que volen reduir temps de camp i millorar la qualitat de la informació inicial.",
    ],
    comparisonTitle: "Dron vs mètodes tradicionals",
    comparisonDescription:
      "No sempre substitueix el treball de camp, però en molts projectes redueix temps, millora cobertura i facilita una base visual i tècnica molt més completa.",
    comparisonRows: [
      {
        focus: "Cobertura",
        drone: "Captura ràpida de superfícies àmplies amb visió global del terreny.",
        traditional: "Treball més fragmentat i més hores sobre camp per obtenir la mateixa visió general.",
      },
      {
        focus: "Accés",
        drone: "Arriba amb seguretat a zones irregulars, talussos, cobertes o punts difícils.",
        traditional: "Pot requerir més maniobres, mitjans auxiliars o exposició del personal.",
      },
      {
        focus: "Resultat visual",
        drone: "Documentació rica per validar, comunicar i revisar el projecte.",
        traditional: "Menys context visual si no es combina amb altres tècniques.",
      },
      {
        focus: "Temps de resposta",
        drone: "Permet passar abans de la captura al processament i al lliurament final.",
        traditional: "Més dependència de treball de camp prolongat i consolidació manual de dades.",
      },
    ],
    faqTitle: "Preguntes freqüents abans de contractar un servei amb dron",
    faqItems: [
      {
        question: "Treballes només a Tarragona?",
        answer:
          "L'operativa es coordina des de Tarragona, però Servidrone dona servei a tot Catalunya. En la primera conversa validem ubicació, accessos i tipus de treball.",
      },
      {
        question: "Quina precisió podeu oferir en topografia?",
        answer:
          "La precisió depèn del tipus de projecte, del flux de captura i del posicionament utilitzat. Quan la feina ho demana, plantegem operatives orientades a lliuraments cartogràfics i models digitals consistents.",
      },
      {
        question: "Què necessiteu per preparar un pressupost?",
        answer:
          "Ubicació, superfície aproximada, objectiu del treball, termini i tipus de lliurament esperat. Amb això podem valorar millor l'abast real del projecte.",
      },
      {
        question: "També feu models 3D del terreny?",
        answer:
          "Sí. Els models 3D i els models digitals del terreny formen part dels lliuraments habituals en treballs de topografia i cartografia amb dron.",
      },
      {
        question: "Les aplicacions agrícoles serveixen per a qualsevol finca?",
        answer:
          "No sempre. Cal revisar cultiu, producte, entorn i condicionants operatius abans de confirmar la viabilitat. Cada cas s'avalua abans de programar el treball.",
      },
    ],
    freshnessLabel: "Informació revisada el",
  },
  es: {
    metaTitle: "Servicios con dron en Tarragona | Topografía, modelos 3D y agricultura",
    metaDescription:
      "Topografía con dron, modelos 3D del terreno, cartografía y aplicaciones agrícolas en Tarragona. Servicio técnico, datos útiles y presupuesto rápido.",
    eyebrow: "Topografía, cartografía y agricultura de precisión",
    title: "Servicios profesionales con dron en Tarragona para topografía, modelos 3D y agricultura",
    description:
      "Ayudamos a empresas, ingenierías, técnicos y fincas agrícolas a trabajar con datos aéreos claros, útiles y listos para la toma de decisiones.",
    intro:
      "Servidrone concentra en una sola operativa la captura, el procesado y la entrega de cartografía, modelos digitales del terreno, documentación visual y apoyo a trabajos agrícolas. El objetivo no es solo volar: es entregar información utilizable.",
    primaryCta: { label: "Pide presupuesto", href: "#contact" },
    secondaryCta: { label: "Ver servicios", href: "#services" },
    trustPoints: [
      "Planificación de vuelo, captura y procesado técnico en un único flujo.",
      "Cobertura desde Tarragona con servicio en toda Catalunya.",
      "Entregables adaptados al proyecto: ortofoto, MDT, modelo 3D, informe o documentación visual.",
    ],
    servicesTitle: "Servicios pensados para necesidades concretas",
    servicesDescription:
      "Cada servicio responde a un tipo de proyecto distinto y te ayuda a ver rápido qué encaje puede tener con lo que necesitas.",
    serviceCards: [
      {
        routeKey: "topography",
        title: "Topografía con dron",
        description:
          "Levantamientos topográficos, ortofotos georreferenciadas, modelos digitales del terreno y cálculos volumétricos para proyectos técnicos.",
        bullets: [
          "Ortofoto y cartografía base",
          "Modelo digital del terreno, curvas de nivel y apoyo LiDAR",
          "Apoyo a ingenierías, obras y fincas",
        ],
      },
      {
        routeKey: "agriculture",
        title: "Aplicaciones agrícolas con dron",
        description:
          "Trabajos aéreos pensados para explotaciones que necesitan cubrir parcelas con rapidez, reducir compactación y llegar a zonas difíciles.",
        bullets: [
          "Cobertura rápida de parcelas",
          "Menor paso de maquinaria sobre el terreno",
          "Operativa revisada caso por caso",
        ],
      },
      {
        routeKey: "inspections",
        title: "Inspecciones aéreas y documentación técnica",
        description:
          "Captura visual y apoyo documental para cubiertas, instalaciones, fincas, placas solares y seguimiento de activos.",
        bullets: [
          "Imagen aérea de alto detalle",
          "Documentación visual para mantenimiento o seguimiento",
          "Acceso seguro a puntos difíciles",
        ],
      },
    ],
    whyTitle: "Cómo enfocamos cada proyecto",
    whyItems: [
      "Empezamos entendiendo el objetivo real del trabajo antes de proponer captura, operativa o entregable.",
      "Adaptamos el servicio al tipo de finca, activo o proyecto técnico, no a un paquete cerrado.",
      "Trabajamos para que la información final sea útil para decidir, coordinar o ejecutar el siguiente paso.",
    ],
    deliverablesTitle: "Qué podemos entregar según el tipo de proyecto",
    deliverablesDescription:
      "Una de las preguntas más habituales antes de pedir presupuesto es qué recibirá exactamente el cliente. Esta tabla lo resuelve rápido.",
    deliverablesRows: [
      {
        service: "Topografía con dron",
        deliverables: "Ortofoto georreferenciada, MDT, nube de puntos, curvas de nivel, modelo 3D y cálculos volumétricos.",
        fit: "Proyectos técnicos, obras, fincas, seguimiento de terreno y toma de mediciones.",
      },
      {
        service: "Aplicaciones agrícolas",
        deliverables: "Planificación operativa, ejecución de la aplicación y recogida de datos básicos del trabajo.",
        fit: "Parcelas con acceso complejo, terreno sensible a compactación o necesidad de cobertura rápida.",
      },
      {
        service: "Inspecciones aéreas",
        deliverables: "Imágenes detalladas, documentación visual, localización de incidencias y apoyo a informes técnicos.",
        fit: "Cubiertas, placas solares, activos rurales, mantenimiento y seguimiento visual.",
      },
    ],
    sectorsTitle: "Sectores y perfiles de cliente con mejor encaje",
    sectors: [
      "Ingenierías y despachos técnicos que necesitan base cartográfica o modelos del terreno.",
      "Explotaciones agrícolas que buscan más agilidad en determinadas operativas.",
      "Propietarios, mantenedores y gestores de activos que necesitan inspección visual aérea.",
      "Profesionales que quieren reducir tiempo de campo y mejorar la calidad de la información inicial.",
    ],
    comparisonTitle: "Dron vs métodos tradicionales",
    comparisonDescription:
      "No siempre sustituye el trabajo de campo, pero en muchos proyectos reduce tiempos, mejora cobertura y facilita una base visual y técnica mucho más completa.",
    comparisonRows: [
      {
        focus: "Cobertura",
        drone: "Captura rápida de superficies amplias con visión global del terreno.",
        traditional: "Trabajo más fragmentado y más horas en campo para obtener la misma visión general.",
      },
      {
        focus: "Acceso",
        drone: "Llega con seguridad a zonas irregulares, taludes, cubiertas o puntos difíciles.",
        traditional: "Puede requerir más maniobras, medios auxiliares o exposición del personal.",
      },
      {
        focus: "Resultado visual",
        drone: "Documentación rica para validar, comunicar y revisar el proyecto.",
        traditional: "Menos contexto visual si no se combina con otras técnicas.",
      },
      {
        focus: "Tiempo de respuesta",
        drone: "Permite pasar antes de la captura al procesado y a la entrega final.",
        traditional: "Más dependencia de trabajo de campo prolongado y consolidación manual de datos.",
      },
    ],
    faqTitle: "Preguntas frecuentes antes de contratar un servicio con dron",
    faqItems: [
      {
        question: "¿Trabajáis solo en Tarragona?",
        answer:
          "La operativa se coordina desde Tarragona, pero Servidrone da servicio en toda Catalunya. En la primera conversación validamos ubicación, accesos y tipo de trabajo.",
      },
      {
        question: "¿Qué precisión podéis ofrecer en topografía?",
        answer:
          "La precisión depende del tipo de proyecto, del flujo de captura y del posicionamiento utilizado. Cuando el trabajo lo exige, planteamos operativas orientadas a entregables cartográficos y modelos digitales consistentes.",
      },
      {
        question: "¿Qué necesitáis para preparar un presupuesto?",
        answer:
          "Ubicación, superficie aproximada, objetivo del trabajo, plazo y tipo de entregable esperado. Con eso podemos valorar mejor el alcance real del proyecto.",
      },
      {
        question: "¿También hacéis modelos 3D del terreno?",
        answer:
          "Sí. Los modelos 3D y los modelos digitales del terreno forman parte de los entregables habituales en trabajos de topografía y cartografía con dron.",
      },
      {
        question: "¿Las aplicaciones agrícolas sirven para cualquier finca?",
        answer:
          "No siempre. Hay que revisar cultivo, producto, entorno y condicionantes operativos antes de confirmar la viabilidad. Cada caso se evalúa antes de programar el trabajo.",
      },
    ],
    freshnessLabel: "Información revisada el",
  },
  en: {
    metaTitle: "Drone services in Tarragona | Surveying, 3D terrain models and agriculture",
    metaDescription:
      "Drone surveying, 3D terrain models, mapping and agricultural drone applications in Tarragona. Technical delivery, useful data and a fast quote.",
    eyebrow: "Surveying, mapping and precision agriculture",
    title: "Professional drone services in Tarragona for surveying, 3D terrain models and agriculture",
    description:
      "We help companies, technical teams and agricultural properties work with clear aerial data that can be used for planning, analysis and decision-making.",
    intro:
      "Servidrone combines capture, processing and delivery in a single workflow so clients receive usable mapping, terrain models, visual documentation and support for agricultural jobs.",
    primaryCta: { label: "Request a quote", href: "#contact" },
    secondaryCta: { label: "Explore services", href: "#services" },
    trustPoints: [
      "Single workflow from mission planning to final technical delivery.",
      "Operations coordinated from Tarragona with service across Catalonia.",
      "Deliverables adapted to the job: orthomosaic, terrain model, 3D output or visual report.",
    ],
    servicesTitle: "Services built around real project needs",
    servicesDescription:
      "Each service responds to a different type of project and helps you see quickly which option fits what you need.",
    serviceCards: [
      {
        routeKey: "topography",
        title: "Drone surveying",
        description:
          "Topographic surveys, georeferenced orthomosaics, digital terrain models and volumetric calculations for technical projects.",
        bullets: [
          "Orthomosaic and base mapping",
          "Terrain model, contour lines and LiDAR support",
          "Support for engineering, worksites and land management",
        ],
      },
      {
        routeKey: "agriculture",
        title: "Agricultural drone applications",
        description:
          "Aerial jobs for farms that need faster coverage, less soil compaction and safer access to difficult plots.",
        bullets: [
          "Fast parcel coverage",
          "Less machinery over sensitive ground",
          "Case-by-case operational review",
        ],
      },
      {
        routeKey: "inspections",
        title: "Aerial inspections",
        description:
          "Visual capture and technical documentation for roofs, facilities, rural properties, solar assets and follow-up inspections.",
        bullets: [
          "High-detail aerial imagery",
          "Visual documentation for maintenance teams",
          "Safe access to difficult points",
        ],
      },
    ],
    whyTitle: "How we approach each project",
    whyItems: [
      "We start by understanding the actual goal of the job before proposing capture, workflow or delivery.",
      "We adapt the service to the type of property, asset or technical project instead of forcing a fixed package.",
      "We work so the final information is useful for deciding, coordinating or executing the next step.",
    ],
    deliverablesTitle: "What clients can expect to receive",
    deliverablesDescription:
      "One of the main pre-sales questions is what the final output looks like. This table answers that quickly.",
    deliverablesRows: [
      {
        service: "Drone surveying",
        deliverables: "Georeferenced orthomosaic, DTM, point cloud, contour lines, 3D model and volumetric outputs.",
        fit: "Technical projects, construction, land monitoring and measurement support.",
      },
      {
        service: "Agricultural applications",
        deliverables: "Operational planning, application execution and a structured record of the requested job.",
        fit: "Plots with access issues, sensitive ground or a need for faster aerial coverage.",
      },
      {
        service: "Aerial inspections",
        deliverables: "Detailed imagery, visual documentation, issue location support and inspection-ready material.",
        fit: "Roofs, solar assets, rural infrastructure and visual follow-up work.",
      },
    ],
    sectorsTitle: "Best-fit sectors and client profiles",
    sectors: [
      "Engineering teams that need mapping or terrain-model support.",
      "Agricultural operations looking for more agility in selected aerial tasks.",
      "Asset owners and maintenance teams that need aerial visual inspection.",
      "Professionals aiming to reduce field time and improve initial project information.",
    ],
    comparisonTitle: "Drone work vs traditional methods",
    comparisonDescription:
      "Drone operations do not replace every field task, but they often improve coverage, shorten timelines and add far better visual context.",
    comparisonRows: [
      {
        focus: "Coverage",
        drone: "Fast capture of large areas with a broad terrain view.",
        traditional: "More fragmented work and more field hours for the same overview.",
      },
      {
        focus: "Access",
        drone: "Safer reach to irregular ground, roofs, slopes and difficult points.",
        traditional: "May require more maneuvers, support equipment or staff exposure.",
      },
      {
        focus: "Visual output",
        drone: "Rich documentation that supports validation, communication and review.",
        traditional: "Less visual context unless combined with other workflows.",
      },
      {
        focus: "Turnaround",
        drone: "Moves faster from capture to processing and delivery.",
        traditional: "Longer dependence on field work and manual consolidation.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqItems: [
      {
        question: "Do you only work in Tarragona?",
        answer:
          "Operations are coordinated from Tarragona, but Servidrone can cover projects across Catalonia after validating the location, access and type of work.",
      },
      {
        question: "What accuracy can you offer for surveying jobs?",
        answer:
          "Accuracy depends on the project scope, capture workflow and positioning setup. When required, we define the operation around consistent mapping and terrain deliverables.",
      },
      {
        question: "What do you need to prepare a quote?",
        answer:
          "Location, approximate area, project goal, expected deadline and required deliverables. That gives enough context to size the work correctly.",
      },
      {
        question: "Can you also deliver 3D terrain models?",
        answer:
          "Yes. 3D terrain outputs and digital terrain models are among the standard deliverables for surveying and mapping jobs.",
      },
      {
        question: "Are agricultural drone applications suitable for every plot?",
        answer:
          "Not always. Crop type, product, surroundings and operational constraints must be reviewed before confirming feasibility.",
      },
    ],
    freshnessLabel: "Information reviewed on",
  },
};
