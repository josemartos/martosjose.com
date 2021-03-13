import { useContext, useEffect } from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import cn from 'classnames';

import ThemeContext from 'context/themeContext';

// Styles
import pageStyles from 'styles/page.module.scss';
import commonStyles from 'styles/common.module.scss';

export default function About() {
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
        <title>About - Jose Martos - Personal portfolio</title>
      </Head>
      <section
        className={cn(
          pageStyles.section,
          pageStyles.mainSection,
          pageStyles.pageSection
        )}
      >
        <div className={commonStyles.contentWrapper}>
          <h2 className={pageStyles.mainSectionTitle}>
            About <strong>me</strong>
          </h2>
        </div>
      </section>
    </Layout>
  );
}
