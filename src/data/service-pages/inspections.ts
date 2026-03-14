import type { LocalizedRecord, ServicePageContent } from "@/data/content-types";

export const inspectionsContent: LocalizedRecord<ServicePageContent> = {
  ca: {
    routeKey: "inspections",
    metaTitle: "Inspeccions aèries amb dron a Tarragona | Cobertes, finques i actius",
    metaDescription:
      "Inspeccions aèries amb dron a Tarragona per documentar cobertes, plaques solars, finques i actius amb més seguretat i context visual.",
    heroEyebrow: "Documentació visual i suport a manteniment",
    heroTitle: "Inspeccions aèries amb dron a Tarragona per revisar actius sense complicar l'accés",
    heroDescription:
      "Servei pensat per revisar cobertes, plaques solars, finques i altres actius amb més seguretat, més context visual i menys dependència de l'accés directe.",
    heroBullets: [
      "Cobertes, finques, plaques solars i entorns rurals",
      "Més context visual per manteniment, seguiment o validació",
      "Captura amb sensors adaptats al projecte quan cal",
    ],
    primaryCta: { label: "Sol·licitar inspecció aèria", href: "#contact" },
    secondaryCta: { label: "Veure aplicacions agrícoles", href: "/aplicacions-agricoles-dron/" },
    overviewTitle: "Per a què serveix una inspecció aèria amb dron",
    overviewParagraphs: [
      "La inspecció aèria és útil quan cal revisar cobertes, actius o instal·lacions sense dependre només d'accés físic directe i quan el client necessita més detall visual per decidir el següent pas.",
      "També és una bona opció per documentar l'estat d'una finca o d'un actiu, fer seguiment de canvis o preparar material per a un informe tècnic intern.",
    ],
    deliverablesTitle: "Quin valor acostuma a esperar el client",
    deliverables: [
      "Imatges aèries d'alt detall per revisió o seguiment.",
      "Documentació visual ordenada per compartir amb equips tècnics o manteniment.",
      "Localització visual d'incidències o punts que requereixen comprovació addicional.",
      "Suport a informes, validacions o seguiment d'actius al llarg del temps.",
    ],
    fitTitle: "Actius i contextos on sol encaixar bé",
    fitItems: [
      "Cobertes i façanes amb accés complicat.",
      "Instal·lacions solars i espais rurals amplis.",
      "Finques, naus, dipòsits o infraestructures que requereixen seguiment visual.",
      "Equips que necessiten imatge clara abans de decidir una intervenció.",
    ],
    processTitle: "Com es treballa una inspecció aèria",
    processSteps: [
      {
        title: "Objectiu inicial",
        description: "Aclarim què s'ha de revisar, quin nivell de detall cal i quin ús tindrà la documentació.",
      },
      {
        title: "Pla de vol",
        description: "Preparem la captura segons tipus d'actiu, entorn i punts crítics a revisar.",
      },
      {
        title: "Captura visual",
        description: "Fem el vol, capturem les imatges i estructurem el material perquè sigui fàcil de consultar.",
      },
      {
        title: "Entrega final",
        description: "Entreguem la documentació final i orientem el client sobre el contingut més rellevant.",
      },
    ],
    faqTitle: "FAQ sobre inspeccions aèries",
    faqItems: [
      {
        question: "Es pot fer servir per a cobertes i plaques solars?",
        answer:
          "Sí, és un dels usos més habituals perquè permet revisar l'actiu amb més context visual i menys dependència d'accés directe.",
      },
      {
        question: "Només entregueu fotos?",
        answer:
          "No necessàriament. El valor és l'estructura de la documentació i la seva utilitat per a seguiment, manteniment o suport tècnic.",
      },
      {
        question: "També serveix per documentar l'estat d'una finca?",
        answer:
          "Sí. Pot ser molt útil per deixar constància visual d'un actiu, una instal·lació o un entorn concret.",
      },
    ],
  },
  es: {
    routeKey: "inspections",
    metaTitle: "Inspecciones aéreas con dron en Tarragona | Cubiertas, fincas y activos",
    metaDescription:
      "Inspecciones aéreas con dron en Tarragona para documentar cubiertas, placas solares, fincas y activos con más seguridad y contexto visual.",
    heroEyebrow: "Documentación visual y apoyo a mantenimiento",
    heroTitle: "Inspecciones aéreas con dron en Tarragona para revisar activos sin complicar el acceso",
    heroDescription:
      "Servicio pensado para revisar cubiertas, placas solares, fincas y otros activos con más seguridad, más contexto visual y menos dependencia del acceso directo.",
    heroBullets: [
      "Cubiertas, fincas, placas solares y entornos rurales",
      "Más contexto visual para mantenimiento, seguimiento o validación",
      "Captura con sensores adaptados al proyecto cuando hace falta",
    ],
    primaryCta: { label: "Solicitar inspección aérea", href: "#contact" },
    secondaryCta: { label: "Ver aplicaciones agrícolas", href: "/es/aplicaciones-agricolas-dron/" },
    overviewTitle: "Para qué sirve una inspección aérea con dron",
    overviewParagraphs: [
      "La inspección aérea es útil cuando hay que revisar cubiertas, activos o instalaciones sin depender solo del acceso físico directo y cuando el cliente necesita más detalle visual para decidir el siguiente paso.",
      "También es una buena opción para documentar el estado de una finca o de un activo, hacer seguimiento de cambios o preparar material para un informe técnico interno.",
    ],
    deliverablesTitle: "Qué valor suele esperar el cliente",
    deliverables: [
      "Imágenes aéreas de alto detalle para revisión o seguimiento.",
      "Documentación visual ordenada para compartir con equipos técnicos o mantenimiento.",
      "Localización visual de incidencias o puntos que requieren comprobación adicional.",
      "Apoyo a informes, validaciones o seguimiento de activos a lo largo del tiempo.",
    ],
    fitTitle: "Activos y contextos donde encaja bien",
    fitItems: [
      "Cubiertas y fachadas con acceso complicado.",
      "Instalaciones solares y espacios rurales amplios.",
      "Fincas, naves, depósitos o infraestructuras que requieren seguimiento visual.",
      "Equipos que necesitan imagen clara antes de decidir una intervención.",
    ],
    processTitle: "Cómo se trabaja una inspección aérea",
    processSteps: [
      {
        title: "Objetivo inicial",
        description: "Aclaramos qué hay que revisar, qué nivel de detalle hace falta y qué uso tendrá la documentación.",
      },
      {
        title: "Plan de vuelo",
        description: "Preparamos la captura según el tipo de activo, el entorno y los puntos críticos a revisar.",
      },
      {
        title: "Captura visual",
        description: "Realizamos el vuelo, capturamos las imágenes y estructuramos el material para que sea fácil de consultar.",
      },
      {
        title: "Entrega final",
        description: "Entregamos la documentación final y orientamos al cliente sobre el contenido más relevante.",
      },
    ],
    faqTitle: "FAQ sobre inspecciones aéreas",
    faqItems: [
      {
        question: "¿Se puede usar para cubiertas y placas solares?",
        answer:
          "Sí, es uno de los usos más habituales porque permite revisar el activo con más contexto visual y menos dependencia de acceso directo.",
      },
      {
        question: "¿Solo entregáis fotos?",
        answer:
          "No necesariamente. El valor está en la estructura de la documentación y en su utilidad para seguimiento, mantenimiento o apoyo técnico.",
      },
      {
        question: "¿También sirve para documentar el estado de una finca?",
        answer:
          "Sí. Puede ser muy útil para dejar constancia visual de un activo, una instalación o un entorno concreto.",
      },
    ],
  },
  en: {
    routeKey: "inspections",
    metaTitle: "Aerial drone inspections in Tarragona | Roofs, assets and rural properties",
    metaDescription:
      "Aerial drone inspections in Tarragona for roofs, solar assets, rural properties and technical visual documentation with safer access.",
    heroEyebrow: "Visual documentation and maintenance support",
    heroTitle: "Aerial drone inspections in Tarragona for safer asset review",
    heroDescription:
      "Service designed to review roofs, solar assets, properties and other infrastructure with safer access, stronger visual context and less dependence on direct entry.",
    heroBullets: [
      "Roofs, rural properties, solar assets and wide outdoor sites",
      "More visual context for maintenance, monitoring and validation",
      "Capture adapted to the project and sensor requirements",
    ],
    primaryCta: { label: "Request an aerial inspection", href: "#contact" },
    secondaryCta: { label: "View agricultural services", href: "/en/agricultural-drone-applications/" },
    overviewTitle: "What an aerial inspection is useful for",
    overviewParagraphs: [
      "It is valuable when roofs, facilities or outdoor assets need to be reviewed without depending only on direct physical access and when better visual context is needed before acting.",
      "It also works well for documenting the status of a property or asset, tracking changes over time and preparing internal technical material.",
    ],
    deliverablesTitle: "Typical value expected by clients",
    deliverables: [
      "High-detail aerial imagery for inspection or monitoring.",
      "Organized visual documentation for technical and maintenance teams.",
      "Visual location support for issues or points that need further review.",
      "Material that supports reports, validation and asset follow-up.",
    ],
    fitTitle: "Where it usually fits best",
    fitItems: [
      "Roofs and façades with difficult access.",
      "Solar installations and large rural spaces.",
      "Properties, facilities, tanks or infrastructure requiring visual follow-up.",
      "Teams that want clear imagery before committing to an intervention.",
    ],
    processTitle: "How an aerial inspection is handled",
    processSteps: [
      {
        title: "Initial goal",
        description: "We clarify what needs to be reviewed, how much detail is required and how the material will be used.",
      },
      {
        title: "Flight plan",
        description: "The capture is prepared around the asset type, surroundings and critical inspection points.",
      },
      {
        title: "Image capture",
        description: "We fly the asset, capture the imagery and organize the material for easy review.",
      },
      {
        title: "Final delivery",
        description: "The final documentation is delivered with the most relevant points clearly structured.",
      },
    ],
    faqTitle: "Aerial inspection FAQ",
    faqItems: [
      {
        question: "Can this be used for roofs and solar panels?",
        answer:
          "Yes. It is one of the most common uses because it improves visual context while reducing dependence on direct access.",
      },
      {
        question: "Do you only deliver photos?",
        answer:
          "Not necessarily. The value is in how the documentation is structured and how useful it is for maintenance, monitoring or technical review.",
      },
      {
        question: "Can it document the state of a property or rural asset?",
        answer:
          "Yes. It is well suited to visual documentation of a property, installation or surrounding environment.",
      },
    ],
  },
};
