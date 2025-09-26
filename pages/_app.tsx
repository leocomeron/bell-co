import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import "@/../styles/globals.css";
import { SITE } from "@/config/site";
import StructuredData from "components/StructuredData";
import Header from "components/Header";
import Footer from "components/Footer";
import WhatsAppFloating from "components/WhatsAppFloating";

export default function MyApp({ Component, pageProps }: AppProps) {
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    SITE.whatsappPrefill
  )}`;

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${SITE.name}`}
        defaultTitle={SITE.name}
        description={SITE.description}
        openGraph={{
          title: SITE.name,
          description: SITE.description,
          images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
          site_name: SITE.name,
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={SITE.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="es" />
        <meta name="geo.region" content="AR-C" />
        <meta name="geo.placename" content="Córdoba" />
        <meta name="geo.position" content="-31.4201;-64.1888" />
        <meta name="ICBM" content="-31.4201, -64.1888" />
      </Head>
      <StructuredData />
      <Header waHref={waHref} />
      <Component {...pageProps} />
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
