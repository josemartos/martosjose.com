import { useContext, useEffect } from 'react';
import Head from 'next/head';
import { Layout } from 'components';

import AppContext from 'context/appContext';

export default function BasePage({ children, title }) {
  const { setTheme } = useContext(AppContext);

  useEffect(() => {
    setTheme('white');

    return function cleanup() {
      setTheme('normal');
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>{title} - Jose Martos - Personal portfolio</title>
      </Head>
      {children}
    </Layout>
  );
}
