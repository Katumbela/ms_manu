// _document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Multischool Angola - Plataforma de educação digital"
          />
          <meta
            name="keywords"
            content="Educação, Pagamentos, Aulas Online, Bolsas de Estudo"
          />
          <meta property="og:title" content="Multischool Angola" />
          <meta
            property="og:description"
            content="A plataforma de educação digital de Angola."
          />
          <meta property="og:image" content="/img/logo.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="icon" href="/icons/ama.png" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
          <meta name="theme-color" content="#6c5f8d" />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
