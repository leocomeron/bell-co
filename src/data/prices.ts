export type PriceRow = {
  treatment: string;
  duration: string;
  price: number; // ARS
  note?: string;
};

export const PRICES: PriceRow[] = [
  // Pilates (principal)
  {
    treatment: "Pilates - 4 clases",
    duration: "-",
    price: 46800,
    note: "Pilates",
  },
  {
    treatment: "Pilates - 8 clases",
    duration: "-",
    price: 55900,
    note: "Pilates",
  },
  {
    treatment: "Pilates - 12 clases",
    duration: "-",
    price: 59900,
    note: "Pilates",
  },
  {
    treatment: "Pilates - 20 clases",
    duration: "-",
    price: 65800,
    note: "Pilates",
  },

  // Faciales
  { treatment: "Facial Básico", duration: "-", price: 34200, note: "Faciales" },
  {
    treatment: "Facial anti-age",
    duration: "-",
    price: 42400,
    note: "Faciales",
  },
  { treatment: "Dermapen", duration: "-", price: 48900, note: "Faciales" },
  { treatment: "Peeling", duration: "-", price: 45800, note: "Faciales" },

  // Manos y Pies
  {
    treatment: "Manicura Semipermanente",
    duration: "-",
    price: 20600,
    note: "Manos y Pies",
  },
  {
    treatment: "Pedicura Semipermanente",
    duration: "-",
    price: 20450,
    note: "Manos y Pies",
  },
  { treatment: "Kapping", duration: "-", price: 25200, note: "Manos y Pies" },
  { treatment: "Soft Gel", duration: "-", price: 28300, note: "Manos y Pies" },

  // Estética Corporal
  {
    treatment: "Combo corporal 8 sesiones",
    duration: "-",
    price: 278200,
    note: "Estética Corporal",
  },
  {
    treatment: "Maderoterapia 8 sesiones",
    duration: "-",
    price: 260900,
    note: "Estética Corporal",
  },
  {
    treatment: "Drenaje Linfático",
    duration: "-",
    price: 37800,
    note: "Estética Corporal",
  },
  {
    treatment: "Masaje Descontracturante",
    duration: "-",
    price: 32500,
    note: "Estética Corporal",
  },

  // Combos
  {
    treatment:
      "4 sesiones corporal + 4 sesiones maderoterapia + 2 sesiones vela slim",
    duration: "-",
    price: 389200,
    note: "Combos",
  },
  {
    treatment: "Vela slim 1 sesión 2 zonas",
    duration: "-",
    price: 45800,
    note: "Combos",
  },

  // Depilación Definitiva
  {
    treatment: "Piernas completas + cavado + axilas + tiro de cola",
    duration: "-",
    price: 39200,
    note: "Definitiva",
  },
  {
    treatment: "Media Pierna + cavado + axilas",
    duration: "-",
    price: 33580,
    note: "Definitiva",
  },
  {
    treatment: "Cavado + axilas",
    duration: "-",
    price: 24200,
    note: "Definitiva",
  },
  {
    treatment: "Cavado + tiro",
    duration: "-",
    price: 26900,
    note: "Definitiva",
  },
  {
    treatment: "Pecho + abdomen + espalda + brazos + piernas",
    duration: "-",
    price: 49300,
    note: "Definitiva",
  },
  {
    treatment: "Pecho + abdomen + espalda",
    duration: "-",
    price: 26900,
    note: "Definitiva",
  },
  {
    treatment: "Pecho + abdomen + brazos",
    duration: "-",
    price: 29700,
    note: "Definitiva",
  },
  {
    treatment: "Cuerpo completo hombres",
    duration: "-",
    price: 57200,
    note: "Definitiva",
  },

  // Cejas y Pestañas
  {
    treatment: "Perfilado de Cejas",
    duration: "-",
    price: 19800,
    note: "Cejas y Pestañas · Por confirmar",
  },
  {
    treatment: "Perfilado + laminado de cejas",
    duration: "-",
    price: 26900,
    note: "Cejas y Pestañas",
  },
  {
    treatment: "Lifting de pestañas con tinta",
    duration: "-",
    price: 35800,
    note: "Cejas y Pestañas",
  },
  {
    treatment: "Microblading",
    duration: "-",
    price: 120800,
    note: "Cejas y Pestañas",
  },
  {
    treatment: "Delineado de labios",
    duration: "-",
    price: 120900,
    note: "Cejas y Pestañas",
  },
  {
    treatment: "Delineado de ojos",
    duration: "-",
    price: 123700,
    note: "Cejas y Pestañas",
  },
];
