import Link from "next/link";
import { SITE } from "@/config/site";

const Footer = () => {
  return (
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
  );
};

export default Footer;
