import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import "@/../styles/globals.css";
import { SITE } from "@/config/site";

export default function MyApp({ Component, pageProps }: AppProps) {
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
      </Head>
      <Component {...pageProps} />
    </>
  );
}
