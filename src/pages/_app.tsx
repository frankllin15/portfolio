import SEO from "../..//next-seo.config";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import ThemeProvider from "../context/theme/ThemeProvider";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
        <DefaultSeo {...SEO} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
