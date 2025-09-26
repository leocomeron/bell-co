export type Treatment = {
  id: string;
  name: string;
  category:
    | "Facial"
    | "Corporal"
    | "Depilación"
    | "Bienestar"
    | "Manos y Pies"
    | "Cejas y Pestañas"
    | "Estética Corporal"
    | "Pilates"
    | "Combos"
    | "Definitiva";
  durationMin?: number;
  description: string;
  fromPrice?: number;
};

export const TREATMENTS: Treatment[] = [
  // Pilates
  {
    id: "pilates",
    name: "Pilates",
    category: "Pilates",
    description: "Abono mensual de clases grupales.",
  },

  {
    id: "depilacion-definitiva",
    name: "Depilación Definitiva (Láser)",
    category: "Depilación",
    durationMin: 30,
    description:
      "Tecnología de última generación para una piel suave por más tiempo.",
    fromPrice: 12000,
  },
  {
    id: "limpieza-profunda",
    name: "Limpieza Facial Profunda",
    category: "Facial",
    durationMin: 60,
    description:
      "Remoción de impurezas, exfoliación y máscara hidratante para una piel luminosa.",
    fromPrice: 18000,
  },
  {
    id: "facial-basico",
    name: "Facial Básico",
    category: "Facial",
    durationMin: 45,
    description: "Limpieza, hidratación y protección para el día a día.",
  },
  {
    id: "facial-anti-age",
    name: "Facial anti-age",
    category: "Facial",
    durationMin: 60,
    description: "Tratamiento antioxidante para firmeza y luminosidad.",
  },
  {
    id: "dermapen",
    name: "Dermapen",
    category: "Facial",
    durationMin: 60,
    description: "Microneedling para mejorar textura y líneas finas.",
  },
  {
    id: "peeling",
    name: "Peeling",
    category: "Facial",
    durationMin: 45,
    description:
      "Renovación celular para mejorar textura, manchas y líneas finas.",
    fromPrice: 22000,
  },
  {
    id: "criolipolisis",
    name: "Criolipólisis",
    category: "Corporal",
    durationMin: 60,
    description: "Reducción de adiposidad localizada mediante frío controlado.",
    fromPrice: 48000,
  },
  {
    id: "radiofrecuencia",
    name: "Radiofrecuencia",
    category: "Corporal",
    durationMin: 45,
    description:
      "Estimulación de colágeno para firmeza y efecto lifting sin cirugía.",
    fromPrice: 25000,
  },

  {
    id: "masajes-relajantes",
    name: "Masajes Relajantes",
    category: "Bienestar",
    durationMin: 50,
    description:
      "Descontracturante, relajante o deportivo. Elegí la intensidad y zona.",
    fromPrice: 15000,
  },
  // Manos y Pies
  {
    id: "manicura-semipermanente",
    name: "Manicura Semipermanente",
    category: "Manos y Pies",
    durationMin: 60,
    description: "Esmaltado duradero con terminación profesional.",
  },
  {
    id: "pedicura-semipermanente",
    name: "Pedicura Semipermanente",
    category: "Manos y Pies",
    durationMin: 60,
    description: "Cuidado de pies y esmaltado de larga duración.",
  },
  {
    id: "kapping",
    name: "Kapping",
    category: "Manos y Pies",
    durationMin: 75,
    description: "Refuerzo de uñas con base en gel para mayor resistencia.",
  },
  {
    id: "soft-gel",
    name: "Soft Gel",
    category: "Manos y Pies",
    durationMin: 90,
    description: "Extensión de uñas en gel de aspecto natural.",
  },

  // Estética Corporal
  {
    id: "combo-corporal-8-sesiones",
    name: "Combo corporal 8 sesiones",
    category: "Estética Corporal",
    description:
      "Plan integral personalizado orientado a objetivos corporales.",
  },
  {
    id: "maderoterapia-8-sesiones",
    name: "Maderoterapia 8 sesiones",
    category: "Estética Corporal",
    description: "Técnica con elementos de madera para modelar y drenar.",
  },
  {
    id: "drenaje-linfatico",
    name: "Drenaje Linfático",
    category: "Estética Corporal",
    durationMin: 50,
    description: "Masaje suave para mejorar la circulación linfática.",
  },
  {
    id: "masaje-descontracturante",
    name: "Masaje Descontracturante",
    category: "Estética Corporal",
    durationMin: 50,
    description: "Alivio de tensiones musculares y mejora de la movilidad.",
  },

  // Combos
  {
    id: "combo-corporal-madero-vela",
    name: "4 corporal + 4 maderoterapia + 2 vela slim",
    category: "Combos",
    description: "Pack combinado para potenciar resultados corporales.",
  },
  {
    id: "vela-slim-1-sesion-2-zonas",
    name: "Vela slim 1 sesión 2 zonas",
    category: "Combos",
    description: "Tratamiento localizado con tecnología Vela Slim.",
  },

  // Depilación Definitiva (detallada)
  {
    id: "definitiva-piernas-completas-pack",
    name: "Piernas completas + cavado + axilas + tiro de cola",
    category: "Definitiva",
    description: "Pack integral de depilación definitiva.",
  },
  {
    id: "definitiva-media-pierna-pack",
    name: "Media pierna + cavado + axilas",
    category: "Definitiva",
    description: "Zonas combinadas para un resultado uniforme.",
  },
  {
    id: "definitiva-cavado-axilas",
    name: "Cavado + axilas",
    category: "Definitiva",
    description: "Zonas clave con tecnología láser.",
  },
  {
    id: "definitiva-cavado-tiro",
    name: "Cavado + tiro",
    category: "Definitiva",
    description: "Área íntima con enfoque en confort y seguridad.",
  },
  {
    id: "definitiva-pecho-abdomen-espalda-brazos-piernas",
    name: "Pecho + abdomen + espalda + brazos + piernas",
    category: "Definitiva",
    description: "Cobertura amplia para cuerpo superior e inferior.",
  },
  {
    id: "definitiva-pecho-abdomen-espalda",
    name: "Pecho + abdomen + espalda",
    category: "Definitiva",
    description: "Zonas del torso con alta efectividad.",
  },
  {
    id: "definitiva-pecho-abdomen-brazos",
    name: "Pecho + abdomen + brazos",
    category: "Definitiva",
    description: "Torso y brazos con acabado homogéneo.",
  },
  {
    id: "definitiva-cuerpo-completo-hombres",
    name: "Cuerpo completo hombres",
    category: "Definitiva",
    description: "Depilación integral pensada para varones.",
  },

  // Cejas y Pestañas
  {
    id: "perfilado-cejas",
    name: "Perfilado de Cejas",
    category: "Cejas y Pestañas",
    description: "Definición de forma y diseño natural.",
  },
  {
    id: "perfilado-laminado-cejas",
    name: "Perfilado + laminado de cejas",
    category: "Cejas y Pestañas",
    description: "Alineación y mayor volumen con acabado prolijo.",
  },
  {
    id: "lifting-pestanas-tinta",
    name: "Lifting de pestañas con tinta",
    category: "Cejas y Pestañas",
    description: "Curvatura y color para realzar la mirada.",
  },
  {
    id: "microblading",
    name: "Microblading",
    category: "Cejas y Pestañas",
    description: "Relleno semipermanente con efecto pelo a pelo.",
  },
  {
    id: "delineado-labios",
    name: "Delineado de labios",
    category: "Cejas y Pestañas",
    description: "Definición y corrección de contorno labial.",
  },
  {
    id: "delineado-ojos",
    name: "Delineado de ojos",
    category: "Cejas y Pestañas",
    description: "Trazos semipermanentes para resaltar la mirada.",
  },
];
