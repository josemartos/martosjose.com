import { useState, useRef } from 'react';
import Head from 'next/head';
import { useEffect } from 'react';

import smoothscroll from 'smoothscroll-polyfill';

// Styles
import 'styles/global.scss';

import AppContext from 'context/appContext';
import { Maintenance, GoTopButton } from 'components';

const Noop = ({ children }) => <>{children}</>;

function App({ Component, pageProps, maintenanceMode = 'false' }) {
  const ComponentProvider = Component.provider || Noop;
  const [theme, setTheme] = useState('normal');
  const [workMenu, setWorkMenu] = useState(false);
  const workSectionRef = useRef(null);

  const scrollToWork = () => {
    workSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setWorkMenu(false);
  };

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
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Jose Martos - Designer and front-end developer"
        />
        <meta
          name="keywords"
          content="personal portfolio, ux design, ui design, front-end development"
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
          content="Designer and front-end developer."
        />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta
          property="og:image:secure_url"
          content="/android-chrome-512x512.png"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:locale" content="en" />
        <meta
          property="og:site_name"
          content="Jose Martos - Personal Portfolio"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContext.Provider value={contextValue}>
        <GoTopButton />
        {maintenanceMode === 'true' ? (
          <Maintenance />
        ) : (
          <ComponentProvider>
            <Component {...pageProps} />
          </ComponentProvider>
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
