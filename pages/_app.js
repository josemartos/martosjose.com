import { useState, useRef } from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GoogleAnalytics } from 'lib/googleAnalytics';

import smoothscroll from 'smoothscroll-polyfill';

// Styles
import 'styles/global.scss';

import AppContext from 'context/appContext';
import { Maintenance, GoTopButton, GDPRBanner } from 'components';

const Noop = ({ children }) => <>{children}</>;

function App({ Component, pageProps, maintenanceMode = 'false' }) {
  const ComponentProvider = Component.provider || Noop;
  const [theme, setTheme] = useState('normal');
  const [workMenu, setWorkMenu] = useState(false);
  const workSectionRef = useRef(null);
  const router = useRouter();

  const scrollToWork = () => {
    workSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setWorkMenu(false);
  };
  // Check if the pathname matches `/` (home) or starts with `/work`
  const shouldShowGoTopButton =
    router.pathname === '/' || router.pathname.startsWith('/work');

  // window object available
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const contextValue = {
    theme,
    setTheme,
    workSectionRef,
    scrollToWork,
    workMenu,
    setWorkMenu,
  };

  return (
    <>
      <GoogleAnalytics />
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Jose Martos - Product Designer with technical roots."
        />
        <meta
          name="keywords"
          content="portfolio, ux design, ui design, product design, ux research, front-end dev"
        />
        <meta name="author" content="Jose Martos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="url" content="https://www.martosjose.com" />
        <link rel="canonical" href="https://www.martosjose.com" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <meta property="og:url" content="https://www.martosjose.com/" />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="Jose Martos." />
        <meta
          property="og:description"
          content="Product Designer with technical roots."
        />
        <meta property="og:image" content="/images/social.jpg" />
        <meta property="og:image:secure_url" content="/images/social.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Jose Martos - Portfolio" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContext.Provider value={contextValue}>
        {shouldShowGoTopButton && <GoTopButton />}
        {maintenanceMode === 'true' ? (
          <Maintenance />
        ) : (
          <>
            <ComponentProvider>
              <Component {...pageProps} />
            </ComponentProvider>
            <GDPRBanner />
          </>
        )}
      </AppContext.Provider>
    </>
  );
}

// Uncomment for maintenance support
// App.getInitialProps = () => {
//   return { maintenanceMode: process.env.MAINTENANCE_MODE };
// };

export default App;
