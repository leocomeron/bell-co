import Link from "next/link";
import Carousel from "./Carousel";
import { SITE } from "@/config/site";

const Hero = ({ waHref }: { waHref: string }) => {
  const heroSlides = [
    {
      src: "/pilates.jpeg",
      alt: "Pilates",
    },
    {
      src: "/depilation.jpg",
      alt: "Estética",
    },
    {
      src: "/manicure.jpg",
      alt: "Manicura",
    },
  ];
  return (
    <div className="container-nice grid md:grid-cols-2 gap-6 items-center">
      <div>
        <span className="text-brand-600 text-2xl md:text-5xl font-semibold leading-tight">
          BELL&CO
        </span>
        <h1 className="text-2xl md:text-5xl font-semibold leading-tight">
          Centro de Estética y Pilates
        </h1>
        <p className="mt-4 text-gray-600 max-w-prose">
          Especialistas en tratamientos faciales, estética corporal, depilación
          definitiva, manicura, pedicura, uñas esculpidas y pilates.
        </p>
        <div className="mt-4 flex gap-3">
          <a
            className="btn-primary"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar
          </a>
          <Link className="btn-outline" href="/prices">
            Ver precios
          </Link>
        </div>
      </div>
      <Carousel
        slides={heroSlides}
        className="relative h-[320px] md:h-[420px]"
      />
    </div>
  );
};

export default Hero;
