import type { LocalizedRecord, ServicePageContent } from "@/data/content-types";

export const agricultureContent: LocalizedRecord<ServicePageContent> = {
  ca: {
    routeKey: "agriculture",
    metaTitle: "Aplicacions agrícoles amb dron a Tarragona | Cobertura de parcel·les",
    metaDescription:
      "Aplicacions agrícoles amb dron a Tarragona per cobrir parcel·les amb agilitat, menys compactació i millor accés a zones difícils.",
    heroEyebrow: "Treballs aeris per a explotacions i parcel·les",
    heroTitle: "Aplicacions agrícoles amb dron a Tarragona per guanyar agilitat en camp",
    heroDescription:
      "Servei orientat a explotacions i responsables tècnics que necessiten valorar si una operativa amb dron encaixa per accés, rapidesa i tipus de parcel·la.",
    heroBullets: [
      "Cobertura ràpida de parcel·les i finques",
      "Menys pas de maquinària sobre el terreny",
      "Estudi previ de viabilitat abans de programar el treball",
    ],
    primaryCta: { label: "Consultar aplicació agrícola", href: "#contact" },
    secondaryCta: { label: "Veure topografia", href: "/topografia-dron-tarragona/" },
    overviewTitle: "Què resol una aplicació agrícola amb dron",
    overviewParagraphs: [
      "Aquest servei té sentit quan cal actuar sobre parcel·les on la rapidesa, l'accés o la reducció de compactació són factors importants. També és útil quan es busca una operativa aèria més flexible en finques concretes.",
      "Cada treball s'ha de validar segons cultiu, producte, ubicació i condicionants operatius. Per això la pàgina insisteix en la viabilitat prèvia i no en promeses genèriques.",
    ],
    deliverablesTitle: "Informació i suport que acostumen a demanar abans de contractar",
    deliverables: [
      "Revisió inicial de finca, superfície, cultiu i objectiu del treball.",
      "Definició de la finestra temporal orientativa i de les dades necessàries per preparar l'operativa.",
      "Execució del treball quan el cas és viable i està correctament plantejat.",
      "Registre bàsic de l'actuació i coordinació amb la necessitat real del client.",
    ],
    fitTitle: "Casos on encaixa especialment bé",
    fitItems: [
      "Parcel·les on interessa reduir el pas de maquinària.",
      "Zones amb accés complex o topografia irregular.",
      "Treballs on la rapidesa de cobertura és un factor important.",
      "Explotacions que necessiten valorar viabilitat abans de moure altres recursos.",
    ],
    processTitle: "Com es planteja una aplicació agrícola amb dron",
    processSteps: [
      {
        title: "Consulta inicial",
        description: "Recollim cultiu, superfície, producte previst, ubicació i termini orientatiu.",
      },
      {
        title: "Validació de viabilitat",
        description: "Revisem si el cas és compatible amb el tipus d'operativa i les condicions del treball.",
      },
      {
        title: "Planificació del servei",
        description: "Definim la finestra de treball i les dades necessàries per executar-lo amb criteri.",
      },
      {
        title: "Execució i seguiment",
        description: "Realitzem el treball i deixem constància de la informació essencial per al client.",
      },
    ],
    faqTitle: "FAQ sobre aplicacions agrícoles amb dron",
    faqItems: [
      {
        question: "Podeu treballar qualsevol tipus de finca?",
        answer:
          "No sempre. Cal revisar ubicació, entorn, cultiu, producte i condicionants operatius abans de confirmar si el cas és viable.",
      },
      {
        question: "Quina informació us he d'enviar per valorar el meu cas?",
        answer:
          "Ubicació, hectàrees aproximades, cultiu, producte previst i data orientativa. Amb això ja podem fer una primera valoració útil.",
      },
      {
        question: "Per què pot interessar més que passar maquinària?",
        answer:
          "En determinades parcel·les redueix la compactació, millora l'accés i permet cobrir zones específiques amb més agilitat.",
      },
    ],
  },
  es: {
    routeKey: "agriculture",
    metaTitle: "Aplicaciones agrícolas con dron en Tarragona | Cobertura de parcelas",
    metaDescription:
      "Aplicaciones agrícolas con dron en Tarragona para cubrir parcelas con agilidad, menor compactación y mejor acceso a zonas difíciles.",
    heroEyebrow: "Trabajos aéreos para explotaciones y parcelas",
    heroTitle: "Aplicaciones agrícolas con dron en Tarragona para ganar agilidad en campo",
    heroDescription:
      "Servicio orientado a explotaciones y responsables técnicos que necesitan valorar si una operativa con dron encaja por acceso, rapidez y tipo de parcela.",
    heroBullets: [
      "Cobertura rápida de parcelas y fincas",
      "Menor paso de maquinaria sobre el terreno",
      "Estudio previo de viabilidad antes de programar el trabajo",
    ],
    primaryCta: { label: "Consultar aplicación agrícola", href: "#contact" },
    secondaryCta: { label: "Ver topografía", href: "/es/topografia-con-dron-tarragona/" },
    overviewTitle: "Qué resuelve una aplicación agrícola con dron",
    overviewParagraphs: [
      "Este servicio tiene sentido cuando hay que actuar sobre parcelas donde la rapidez, el acceso o la reducción de compactación son factores importantes. También es útil cuando se busca una operativa aérea más flexible en fincas concretas.",
      "Cada trabajo debe validarse según cultivo, producto, ubicación y condicionantes operativos. Por eso la página insiste en la viabilidad previa y no en promesas genéricas.",
    ],
    deliverablesTitle: "Información y soporte que suelen pedir antes de contratar",
    deliverables: [
      "Revisión inicial de finca, superficie, cultivo y objetivo del trabajo.",
      "Definición de la ventana temporal orientativa y de los datos necesarios para preparar la operativa.",
      "Ejecución del trabajo cuando el caso es viable y está correctamente planteado.",
      "Registro básico de la actuación y coordinación con la necesidad real del cliente.",
    ],
    fitTitle: "Casos donde suele encajar mejor",
    fitItems: [
      "Parcelas donde interesa reducir el paso de maquinaria.",
      "Zonas con acceso complejo o topografía irregular.",
      "Trabajos donde la rapidez de cobertura es un factor importante.",
      "Explotaciones que necesitan valorar viabilidad antes de mover otros recursos.",
    ],
    processTitle: "Cómo se plantea una aplicación agrícola con dron",
    processSteps: [
      {
        title: "Consulta inicial",
        description: "Recogemos cultivo, superficie, producto previsto, ubicación y fecha orientativa.",
      },
      {
        title: "Validación de viabilidad",
        description: "Revisamos si el caso es compatible con el tipo de operativa y las condiciones del trabajo.",
      },
      {
        title: "Planificación del servicio",
        description: "Definimos la ventana de trabajo y los datos necesarios para ejecutarlo con criterio.",
      },
      {
        title: "Ejecución y seguimiento",
        description: "Realizamos el trabajo y dejamos constancia de la información esencial para el cliente.",
      },
    ],
    faqTitle: "FAQ sobre aplicaciones agrícolas con dron",
    faqItems: [
      {
        question: "¿Podéis trabajar cualquier tipo de finca?",
        answer:
          "No siempre. Hay que revisar ubicación, entorno, cultivo, producto y condicionantes operativos antes de confirmar si el caso es viable.",
      },
      {
        question: "¿Qué información debo enviar para valorar mi caso?",
        answer:
          "Ubicación, hectáreas aproximadas, cultivo, producto previsto y fecha orientativa. Con eso ya podemos hacer una primera valoración útil.",
      },
      {
        question: "¿Por qué puede interesar más que pasar maquinaria?",
        answer:
          "En determinadas parcelas reduce la compactación, mejora el acceso y permite cubrir zonas específicas con más agilidad.",
      },
    ],
  },
  en: {
    routeKey: "agriculture",
    metaTitle: "Agricultural drone applications in Tarragona | Faster parcel coverage",
    metaDescription:
      "Agricultural drone applications in Tarragona for faster parcel coverage, less soil compaction and better access to difficult plots.",
    heroEyebrow: "Aerial jobs for farms and rural properties",
    heroTitle: "Agricultural drone applications in Tarragona for faster field operations",
    heroDescription:
      "Service for farms and technical managers who need to assess whether a drone operation fits the plot, access conditions and timing.",
    heroBullets: [
      "Fast parcel and property coverage",
      "Less machinery over the ground",
      "Case-by-case feasibility review before scheduling the work",
    ],
    primaryCta: { label: "Discuss an agricultural job", href: "#contact" },
    secondaryCta: { label: "View surveying", href: "/en/drone-surveying-tarragona/" },
    overviewTitle: "What this service solves",
    overviewParagraphs: [
      "It makes sense when speed, access or reduced soil impact matter. It is especially useful on plots where aerial execution can simplify the job.",
      "Every request must be reviewed against crop type, product, surroundings and operational constraints, so the page focuses on feasibility rather than generic claims.",
    ],
    deliverablesTitle: "What clients usually want to clarify before hiring",
    deliverables: [
      "Initial review of the property, area, crop and target objective.",
      "A working window and the data needed to define the operation correctly.",
      "Execution when the case is viable and properly scoped.",
      "Basic job record and coordination around the client need.",
    ],
    fitTitle: "Best-fit situations",
    fitItems: [
      "Plots where reduced machinery traffic is important.",
      "Areas with difficult access or irregular terrain.",
      "Jobs where fast coverage is a priority.",
      "Operations that need a feasibility check before moving other resources.",
    ],
    processTitle: "How an agricultural drone request is handled",
    processSteps: [
      {
        title: "Initial review",
        description: "We collect crop, area, intended product, location and target date.",
      },
      {
        title: "Feasibility check",
        description: "We verify whether the case fits the type of operation and site conditions.",
      },
      {
        title: "Service planning",
        description: "We define the operational window and the information required for execution.",
      },
      {
        title: "Execution and follow-up",
        description: "The work is carried out and the essential job information is documented for the client.",
      },
    ],
    faqTitle: "Agricultural drone FAQ",
    faqItems: [
      {
        question: "Can you work on any farm or plot?",
        answer:
          "Not always. Location, surroundings, crop type, intended product and operational constraints must be reviewed before feasibility is confirmed.",
      },
      {
        question: "What information should I send first?",
        answer:
          "Location, approximate hectares, crop, intended product and preferred timing are enough for an initial useful review.",
      },
      {
        question: "Why might this be preferable to machinery in some plots?",
        answer:
          "In the right conditions it reduces soil compaction, improves access and speeds up coverage of specific areas.",
      },
    ],
  },
};
