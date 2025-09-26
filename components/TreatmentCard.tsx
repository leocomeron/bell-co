import React from "react";
import type { Treatment } from "@/data/treatments";

export default function TreatmentCard({ t }: { t: Treatment }) {
  return (
    <div className="card p-6 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold">{t.name}</h3>
        {typeof t.fromPrice === "number" && (
          <span className="text-brand-600 font-medium">Desde ${t.fromPrice.toLocaleString("es-AR")}</span>
        )}
      </div>
      <p className="text-gray-600">{t.description}</p>
      <div className="text-sm text-gray-500">
        {t.category} {t.durationMin ? `· ${t.durationMin} min` : ""}
      </div>
    </div>
  );
}
