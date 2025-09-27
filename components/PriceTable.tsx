import React from "react";
import type { PriceRow } from "@/data/prices";

export default function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="overflow-x-auto card">
      <table className="min-w-full table-fixed divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Tratamiento
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
              Precio<br />
              <span className="text-gray-500 lowercase">
                (Descuentos en efectivo)
              </span>
            </th>
            <th className="sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Duración
            </th>
            <th className="sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Tipo
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-normal break-words">
                {r.treatment}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right font-semibold text-gray-900">
                ${r.price.toLocaleString("es-AR")}
              </td>
              <td className="sm:table-cell px-6 py-4 whitespace-nowrap">
                {r.duration}
              </td>
              <td className="sm:table-cell px-6 py-4 whitespace-nowrap text-gray-500">
                {r.note ?? "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
