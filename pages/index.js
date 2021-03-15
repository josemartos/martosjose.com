import { useContext, useEffect } from 'react';
import Head from 'next/head';
import cn from 'classnames';

import { Layout, HeroHeader, Project } from 'components';
import AppContext from 'context/appContext';

// Styles
import commonStyles from 'styles/common.module.scss';
import pageStyles from 'styles/page.module.scss';
import styles from 'styles/pages/index.module.scss';

export default function Home() {
  const { workSectionRef, scrollToWork, workMenu, setWorkMenu } = useContext(
    AppContext
  );

  useEffect(() => {
    if (!workMenu) return;

    scrollToWork();
  }, [workMenu]);

  useEffect(() => {
    return function () {
      return setWorkMenu(false);
    };
  }, []);

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
          <Project
            title="Mirror"
            type="course project - ux design"
            description="Reworked the branding of a clothing e-commerce platform, and created a responsive web design."
            image="mirror.png"
            imageAlt="Mirror design"
          />
        </div>
        <div className={styles.project}>
          <Project
            title="Bike shop"
            type="capstone - ux design"
            description="Working on the research and redesign of a local bike shop"
            image="bike-shop.jpg"
            imageAlt="Bike store re-design"
            reverseLayout={true}
            inProgress={true}
          />
        </div>
      </section>
    </Layout>
  );
}
