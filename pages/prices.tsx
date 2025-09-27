import Link from "next/link";
import Section from "components/Section";
import { SITE } from "@/config/site";
import type { PriceRow } from "@/data/prices";
import PriceTable from "components/PriceTable";
import { fetchPricesFromSheet } from "@/lib/prices";

type PricesPageProps = { rows: PriceRow[] };

export async function getServerSideProps() {
  const rows = await fetchPricesFromSheet({ url: process.env.SHEETS_TSV_URL });
  return { props: { rows } };
}

export default function Prices({ rows }: PricesPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30">
      {/* Hero */}
      <Section className="pt-10 md:pt-16">
        <div className="container-nice text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Lista de Precios - Centro de Estética y Pilates{" "}
            <span className="text-brand-600">BELL&CO</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Precios actualizados de tratamientos faciales, estética corporal,
            depilación definitiva, manicura, pedicura, uñas esculpidas y pilates
            en Córdoba, Argentina.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <a
              className="btn-primary"
              href={SITE.waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar
            </a>
            <Link className="btn-outline" href="/">
              Volver a inicio
            </Link>
          </div>
        </div>
      </Section>

      {/* Precios */}
      <Section className="pb-16">
        <div className="container-nice">
          <PriceTable rows={rows} />
          <p className="mt-6 text-sm text-gray-500 text-center">
            Los valores son estimativos y pueden variar según evaluación.
            Consultá combos y abonos por WhatsApp.
          </p>
        </div>
      </Section>
    </main>
  );
}
