import Script from 'next/script';

export const GoogleAnalytics = () => {
  return (
    <>
      {/* Load Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NB67TBNWHL"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NB67TBNWHL');
            `,
        }}
      />
    </>
  );
};
