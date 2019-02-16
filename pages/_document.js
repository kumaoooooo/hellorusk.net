import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="HelloRusk Official Website." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@HelloRusk" />
          <meta property="og:image" content="/static/mika_square.jpg" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}