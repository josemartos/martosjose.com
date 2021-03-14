import { useState } from 'react';
import Head from 'next/head';
import { useEffect } from 'react';

import ThemeContext from 'context/themeContext';

import smoothscroll from 'smoothscroll-polyfill';

// Styles
import 'styles/global.scss';
import { Maintenance } from 'components';

function App({ Component, pageProps, maintenanceMode }) {
  const [theme, setTheme] = useState('normal');

  // window object available
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

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
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {maintenanceMode === 'true' ? (
          <Maintenance />
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeContext.Provider>
    </>
  );
}

App.getInitialProps = () => {
  return { maintenanceMode: process.env.MAINTENANCE_MODE };
};

export default App;
