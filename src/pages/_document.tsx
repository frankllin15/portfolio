import Document, { Html, Head, Main, NextScript } from "next/document";
import { DefaultSeo } from "next-seo";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600&display=swap"
            rel="stylesheet"
          />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="frankllin.vercel.app" />
          <meta
            property="twitter:url"
            content="https://frankllin.vercel.app/"
          />
          <meta name="twitter:title" content="Frankllin Teixeira" />
          <meta
            name="twitter:description"
            content="Um desenvolvedor de software. Conheça mais sobre mim."
          />
          <meta
            name="twitter:image"
            content="https://frankllin.vercel.app/images/og-image.webp"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
