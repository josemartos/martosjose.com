import { useContext, useEffect } from 'react';
import Head from 'next/head';
import { Layout } from 'components';
import { SITE_CONFIG } from 'lib/constants';

import AppContext from 'context/appContext';

export default function BasePage({ children, title }) {
  const { setTheme } = useContext(AppContext);

  useEffect(() => {
    setTheme('white');

    return function cleanup() {
      setTheme('normal');
    };
  }, [setTheme]);

  return (
    <Layout>
      <Head>
        <title>
          {title} - {SITE_CONFIG.title} - Portfolio
        </title>
      </Head>
      {children}
    </Layout>
  );
}
