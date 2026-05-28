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
      <link rel="icon" href="/starone-icon-mark.svg" type="image/svg+xml" />
      <link rel="shortcut icon" href="/starone-icon-mark.svg" />
      <link rel="apple-touch-icon" href="/starone-icon-mark.svg" />
      <meta name="msapplication-TileImage" content="/starone-icon-mark.svg" />
    </>
  )
}
