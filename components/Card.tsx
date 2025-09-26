import { Treatment } from "@/data/treatments";
import { SITE } from "@/config/site";

const Card = ({ treatment }: { treatment: Treatment }) => {
  return (
    <div key={treatment.id} className="h-full">
      <div className="card p-6 h-full flex flex-col">
        <h3 className="text-xl font-semibold">{treatment.name}</h3>
        <p className="mt-2 text-gray-600 flex-1">{treatment.description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          {treatment.durationMin && <span>{treatment.durationMin} min</span>}
        </div>
        <div className="mt-4 flex items-center">
          {typeof treatment.fromPrice === "number" && (
            <span className="text-brand-600 font-medium">
              Desde ${treatment.fromPrice.toLocaleString("es-AR")}
            </span>
          )}
          <a
            className="btn-outline ml-auto"
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
              "Hola, quiero info sobre " + treatment.name + " en Bellco"
            )}`}
            target="_blank"
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
