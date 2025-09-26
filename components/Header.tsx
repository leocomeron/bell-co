import { SITE } from "@/config/site";
import Link from "next/link";
import Image from "next/image";

const Header = ({ waHref }: { waHref: string }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="container-nice flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <Image
            src={SITE.logo ?? "/logo1.png"}
            alt="BELL&CO Estética y Pilates - Centro de belleza en Córdoba"
            width={120}
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
        <div className="flex flex-col items-end gap-1">
          <a href={waHref} target="_blank" className="btn-primary">
            Contactar
          </a>
          <div className="text-right">
            <p className="text-sm text-gray-500">{SITE.address}</p>
            <p className="text-sm text-gray-500">{SITE.neighborhood}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
