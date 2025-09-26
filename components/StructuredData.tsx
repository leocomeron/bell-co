import { SITE } from "@/config/site";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SITE.name,
    description: SITE.description,
    url: "https://bellco-estetica.com",
    telephone: SITE.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-31.4201",
      longitude: "-64.1888",
    },
    openingHours: "Mo-Fr 09:00-20:30",
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card",
    currenciesAccepted: "ARS",
    image: SITE.ogImage,
    logo: SITE.logo,
    sameAs: ["https://wa.me/" + SITE.whatsapp, SITE.mapsUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Estética y Pilates",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tratamientos Faciales",
            description:
              "Limpieza facial, peeling, dermapen y tratamientos anti-age",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estética Corporal",
            description:
              "Radiofrecuencia, criolipólisis, maderoterapia y masajes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Depilación Definitiva",
            description: "Depilación láser para diferentes zonas del cuerpo",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manicura y Pedicura",
            description:
              "Manicura semipermanente, pedicura, kapping y soft gel",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pilates",
            description: "Clases de pilates grupales e individuales",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
