import { useContext, useEffect } from 'react';
import Head from 'next/head';
import { Layout } from 'components';

import ThemeContext from 'context/themeContext';

export default function BasePage({ children, title }) {
  const { setTheme } = useContext(ThemeContext);

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
