import { useRef } from 'react';
import Head from 'next/head';

import Layout from 'components/layout';
import HeroHeader from 'components/heroHeader';
import Project from 'components/project';

// Styles
import commonStyles from 'styles/common.module.scss';
import pageStyles from 'styles/page.module.scss';
import styles from './index.module.scss';

export default function Home() {
  const workSectionRef = useRef(null);

  const scrollToWork = () =>
    workSectionRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <Layout>
      <Head>
        <title>Jose Martos - Designer and front-end developer</title>
      </Head>
      <section className={styles.homeSection}>
        <HeroHeader scrollToWork={scrollToWork} />
      </section>
      <section
        ref={workSectionRef}
        className={`${pageStyles.section} ${pageStyles.mainSection}`}
      >
        <div className={commonStyles.contentWrapper}>
          <h2 className={pageStyles.mainSectionTitle}>
            Recent <strong>work</strong>
          </h2>
          <Project />
        </div>
      </section>
    </Layout>
  );
}
