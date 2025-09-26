import Image from "next/image";
import Link from "next/link";
import Section from "components/Section";
import WhatsAppFloating from "components/WhatsAppFloating";
import { SITE } from "@/config/site";
import { TREATMENTS } from "@/data/treatments";

export default function Home() {
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    SITE.whatsappPrefill
  )}`;
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="container-nice flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <Image
              src={SITE.logo ?? "/logo1.png"}
              alt="BELL&CO Estética y Pilates - Centro de belleza en Córdoba"
              width={140}
              height={36}
            />
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#servicios" className="hover:text-brand-600">
              Tratamientos
            </a>
            <Link href="/prices" className="hover:text-brand-600">
              Precios
            </Link>
            <a href="#contacto" className="hover:text-brand-600">
              Contacto
            </a>
          </nav>
          <a href={waHref} target="_blank" className="btn-primary">
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <Section className="pt-10 md:pt-16">
        <div className="container-nice grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Centro de Estética y Pilates en Córdoba{" "}
              <span className="text-brand-600">BELL&CO</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-prose">
              Especialistas en tratamientos faciales, estética corporal,
              depilación definitiva, manicura, pedicura, uñas esculpidas y
              pilates. Atención personalizada en Córdoba, Argentina.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                className="btn-primary"
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar por WhatsApp
              </a>
              <Link className="btn-outline" href="/prices">
                Ver precios
              </Link>
            </div>
            <div className="mt-3 text-sm text-gray-500">
              Tel: {SITE.phoneDisplay}
            </div>
          </div>
          <div className="relative h-[320px] md:h-[420px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-rose-100 via-white to-rose-50 border border-rose-100 shadow-inner" />
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl bg-rose-200/60 blur-2xl" />
            <div className="absolute bottom-6 right-6 left-6 top-6 border border-white/60 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl text-brand-600">Estética</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Servicios */}
      <Section
        id="servicios"
        subtitle="Nuestros Servicios"
        title="Tratamientos de Estética y Pilates"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((t) => (
            <div key={t.id} className="h-full">
              <div className="card p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="mt-2 text-gray-600 flex-1">{t.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{t.category}</span>
                  {t.durationMin && <span>{t.durationMin} min</span>}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  {typeof t.fromPrice === "number" && (
                    <span className="text-brand-600 font-medium">
                      Desde ${t.fromPrice.toLocaleString("es-AR")}
                    </span>
                  )}
                  <a className="btn-outline" href={waHref} target="_blank">
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contacto */}
      <Section
        id="contacto"
        subtitle="Ubicación & Horarios"
        title="Contacto - Centro de Estética BELL&CO Córdoba"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Encontranos</h3>
            <p className="text-gray-600">{SITE.city}</p>
            <p className="text-gray-600">{SITE.address}</p>
            <div className="mt-4 flex gap-3">
              <a className="btn-primary" href={waHref} target="_blank">
                Escribir por WhatsApp
              </a>
              <a
                className="btn-outline"
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Horarios</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Lunes a Viernes · 09:00 — 20:30</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Atendemos con turno previo.
            </p>
          </div>
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
            <Link className="hover:text-brand-600" href="#servicios">
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
