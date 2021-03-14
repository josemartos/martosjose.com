import { useState, useRef } from 'react';
import Head from 'next/head';
import { useEffect } from 'react';

import AppContext from 'context/appContext';

import smoothscroll from 'smoothscroll-polyfill';

// Styles
import 'styles/global.scss';
import { Maintenance } from 'components';

function App({ Component, pageProps, maintenanceMode }) {
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <AppContext.Provider value={contextValue}>
        {maintenanceMode === 'true' ? (
          <Maintenance />
        ) : (
          <Component {...pageProps} />
        )}
      </AppContext.Provider>
    </>
  );
}

App.getInitialProps = () => {
  return { maintenanceMode: process.env.MAINTENANCE_MODE };
};

export default App;
