export type PriceRow = {
  treatment: string;
  duration: string;
  price: number; // ARS
  note?: string;
};

export const PRICES: PriceRow[] = [
  { treatment: "Limpieza Facial Profunda", duration: "60'", price: 18000 },
  { treatment: "Peeling", duration: "45'", price: 22000 },
  { treatment: "Radiofrecuencia", duration: "45'", price: 25000 },
  { treatment: "Criolipólisis", duration: "60'", price: 48000 },
  { treatment: "Depilación Láser (axilas)", duration: "30'", price: 12000, note: "Precio por sesión" },
  { treatment: "Masajes Relajantes", duration: "50'", price: 15000 },
];
