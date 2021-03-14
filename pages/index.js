import { useRef } from 'react';
import Head from 'next/head';
import cn from 'classnames';

import { Layout, HeroHeader, Project } from 'components';

// Styles
import commonStyles from 'styles/common.module.scss';
import pageStyles from 'styles/page.module.scss';
import styles from 'styles/pages/index.module.scss';

export default function Home() {
  const workSectionRef = useRef(null);

  const scrollToWork = () =>
    workSectionRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <Layout>
      <Head>
        <title>Jose Martos - Designer and front-end developer</title>
      </Head>
      <section className={styles.homeHeader}>
        <HeroHeader scrollToWork={scrollToWork} />
      </section>
      <section
        ref={workSectionRef}
        className={cn(pageStyles.section, pageStyles.mainSection)}
      >
        <div className={commonStyles.contentWrapper}>
          <h2 className={cn(pageStyles.mainSectionTitle, styles.sectionTitle)}>
            Recent <strong>work</strong>
          </h2>
        </div>
        <div className={styles.project}>
          <Project />
        </div>
        <div className={styles.project}>
          <Project reverseLayout={true} />
        </div>
      </section>
    </Layout>
  );
}
