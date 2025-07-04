import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Font Awesome CDN */}
        <script
          src="https://kit.fontawesome.com/9e8e695298.js"
          crossOrigin="anonymous"
          async
        ></script>

        {/* Keywords */}

        
        <meta
          name="keywords"
          content="church, Jesus, Bible, worship, Sunday service, small groups, Alvin, Texas, Living Oaks Church, community, faith, hope, love, hurting, healing, family, children, youth, adults, seniors, outreach, service, prayer, fellowship"
        />

        <meta
          name="google-site-verification"
          content="ezpa9X0QRYbCO5Fn-kKAcsydFEHJrrmhJ6j7y3suVNI"
        />

        {/* OpenGraph (Facebook/LinkedIn) */}
        <meta property="og:title" content="Living Oaks Church" />
        <meta
          property="og:description"
          content="Leading REAL people to REAL hope in Jesus"
        />
        <meta property="og:image" content="/images/og-sharing-preview.jpg" />
        <meta property="og:url" content="https://livingoakschurch.org" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://livingoaksalvin.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
