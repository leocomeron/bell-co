import { useEffect, useState } from "react";
import Section from "components/Section";
import { SITE } from "@/config/site";
import { TREATMENTS } from "@/data/treatments";
import Hero from "components/Hero";
import Card from "components/Card";

export default function Home() {
  const [initialCount, setInitialCount] = useState(4);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const lgQuery = window.matchMedia("(min-width: 1024px)");
    const computeInitial = () => (lgQuery.matches ? 12 : 4);

    const setCounts = () => {
      const nextInitial = computeInitial();
      setInitialCount(nextInitial);
      setVisibleCount((current) =>
        current === TREATMENTS.length ? current : nextInitial
      );
    };

    setCounts();

    const handler = () => setCounts();
    lgQuery.addEventListener?.("change", handler);
    return () => lgQuery.removeEventListener?.("change", handler);
  }, []);

  const isExpanded = visibleCount >= TREATMENTS.length;
  const displayedTreatments = TREATMENTS.slice(0, visibleCount);
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30">
      {/* Hero */}
      <Section className="pt-6 md:pt-16">
        <Hero waHref={SITE.waHref} />
      </Section>

      {/* Servicios */}
      <Section
        id="servicios"
        title="Nuestros Servicios"
        subtitle="Tratamientos de Estética y Pilates"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTreatments.map((treatment) => (
            <Card key={treatment.id} treatment={treatment} />
          ))}
        </div>
        {TREATMENTS.length > initialCount && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="btn-primary"
              onClick={() =>
                setVisibleCount(isExpanded ? initialCount : TREATMENTS.length)
              }
            >
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          </div>
        )}
      </Section>

      {/* Contacto */}
      <Section
        id="contacto"
        title="Ubicación & Horarios"
        subtitle="Contacto - Centro de Estética BELL&CO Córdoba"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Encontranos</h3>
            <p className="text-gray-600">{SITE.city}</p>
            <p className="text-gray-600">{SITE.address}</p>
            <div className="mt-4 flex gap-3">
              <a className="btn-primary" href={SITE.waHref} target="_blank">
                Contactar
              </a>
              <a
                className="btn-outline"
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ubicación
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
    </main>
  );
}
