import React from "react";
import type { PriceRow } from "@/data/prices";

export default function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="overflow-x-auto card">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Tratamiento
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Duración
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Precio
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Tratamiento
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-nowrap">{r.treatment}</td>
              <td className="px-6 py-4 whitespace-nowrap">{r.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                ${r.price.toLocaleString("es-AR")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                {r.note ?? "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
