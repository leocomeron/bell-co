import Image from "next/image";
import Link from "next/link";
import Section from "components/Section";
import WhatsAppFloating from "components/WhatsAppFloating";
import { SITE } from "@/config/site";
import { PRICES } from "@/data/prices";
import PriceTable from "components/PriceTable";

export default function Prices() {
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    SITE.whatsappPrefill
  )}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="container-nice flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src={SITE.logo ?? "/logo1.png"}
                alt="BELL&CO Estética y Pilates - Centro de belleza en Córdoba"
                width={140}
                height={36}
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/#servicios" className="hover:text-brand-600">
              Tratamientos
            </Link>
            <Link href="/prices" className="hover:text-brand-600">
              Precios
            </Link>
            <Link href="/#contacto" className="hover:text-brand-600">
              Contacto
            </Link>
          </nav>
          <a href={waHref} target="_blank" className="btn-primary">
            WhatsApp
          </a>
        </div>
      </header>

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
              href={waHref}
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
          <PriceTable rows={PRICES} />
          <p className="mt-6 text-sm text-gray-500 text-center">
            Los valores son estimativos y pueden variar según evaluación.
            Consultá combos y abonos por WhatsApp.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100 text-sm text-gray-500">
        <div className="container-nice flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-brand-600" href="/#servicios">
              Tratamientos
            </Link>
            <Link className="hover:text-brand-600" href="/prices">
              Precios
            </Link>
            <a
              className="hover:text-brand-600"
              href={SITE.mapsUrl}
              target="_blank"
            >
              Ubicación
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppFloating />
    </main>
  );
}
