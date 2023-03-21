import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import Head from "next/head";
import { I18NProvider, useI18N } from "@/context/i18n_context";

const DefaultHeadApp = () => {
  const { t } = useI18N();

  return (
    <Head>
      <title>{t("SEO_DEFAULT_TITLE")}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

//los provider siempre se colocan en el _app.js
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <I18NProvider>
        <DefaultHeadApp />
        <Component {...pageProps} />
      </I18NProvider>
    </NextUIProvider>
    //tbm podria ser asi:
    //  <I18NProvider>
    //   <NextUIProvider>
    //      <Component {...pageProps} />
    //   </NextUIProvider>
    //  </I18NProvider>
  );
}
