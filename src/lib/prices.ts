import type { PriceRow } from "@/data/prices";

function toTsvExportUrl(sheetUrlOrTsv: string, gid?: string | number): string {
  // If it's already an export URL, return as is
  if (sheetUrlOrTsv.includes("/export?format=tsv")) return sheetUrlOrTsv;

  // Expecting URL like: https://docs.google.com/spreadsheets/d/{ID}/edit...
  const match = sheetUrlOrTsv.match(/\/spreadsheets\/d\/([^/]+)/);
  const sheetId = match?.[1];
  if (!sheetId) return sheetUrlOrTsv; // fallback: let fetch fail clearly

  const gidParam = gid !== undefined ? `&gid=${gid}` : "";
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=tsv${gidParam}`;
}

export async function fetchPricesFromSheet(options?: {
  url?: string; // can be a share URL or a direct TSV export URL
  gid?: string | number; // optional sheet gid when converting
}): Promise<PriceRow[]> {
  const urlFromEnv = process.env.SHEETS_TSV_URL;
  const effectiveUrl = toTsvExportUrl(
    options?.url || urlFromEnv || "",
    options?.gid
  );
  if (!effectiveUrl) {
    throw new Error(
      "Missing SHEETS_TSV_URL or options.url for Google Sheets TSV export"
    );
  }

  const res = await fetch(effectiveUrl, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch sheet: ${res.status} ${res.statusText}`);
  }
  const tsv = await res.text();
  const lines = tsv.trim().split(/\r?\n/);
  if (lines.length === 0) return [];

  // Assume first row is header: treatment \t duration \t price \t note
  const [, ...dataRows] = lines;
  return dataRows
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const cells = line.split("\t").map((c) => c.trim());
      const [treatment, duration, priceRaw, note] = cells;
      const normalizedPrice = Number(
        String(priceRaw || "0").replace(/[^\d.-]/g, "")
      );
      return {
        treatment: treatment || "",
        duration: duration || "-",
        price: Number.isFinite(normalizedPrice) ? normalizedPrice : 0,
        note: note || undefined,
      } as PriceRow;
    });
}
