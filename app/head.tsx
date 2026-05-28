export default function Head() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-66MENQ5QG1" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-66MENQ5QG1');
          `,
        }}
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon-192x192.png" />
      <meta name="msapplication-TileImage" content="/favicon-192x192.png" />
    </>
  )
}
