import { useContext, useEffect } from 'react';
import Head from 'next/head';
import cn from 'classnames';

import { Layout, HeroHeader, Project } from 'components';
import AppContext from 'context/appContext';

// Styles
import commonStyles from 'styles/common.module.scss';
import pageStyles from 'styles/page.module.scss';
import styles from 'styles/pages/index.module.scss';

// Images
import KomootCoverImage from 'public/images/komoot/cover.png';
import BiciBavareseCoverImage from 'public/images/bicibavarese/cover.jpg';
import MirrorCoverImage from 'public/images/mirror/cover.jpg';

export default function Home() {
  const { workSectionRef, scrollToWork, workMenu, setWorkMenu } =
    useContext(AppContext);

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
        className={cn(pageStyles.section, styles.section)}
      >
        <div className={commonStyles.contentWrapper}>
          <h2 className={cn(pageStyles.sectionTitle, styles.sectionTitle)}>
            Recent <strong>work</strong>
          </h2>
        </div>
        <div className={styles.project}>
          <Project
            title="Komoot"
            type="capstone - ux / ui design"
            description="Research and add a feature to an existing app."
            image={{
              src: KomootCoverImage,
              alt: 'Komoot - Social feature',
            }}
            link="/work/komoot"
          />
        </div>
        <div className={styles.project}>
          <Project
            title="Bici Bavarese"
            type="capstone - ux / ui design"
            description="Research and redesign of a local bike shop."
            image={{
              src: BiciBavareseCoverImage,
              alt: 'Bike store re-design',
              shadow: true,
            }}
            link="/work/bicibavarese"
            reverseLayout={true}
          />
        </div>
        <div className={styles.project}>
          <Project
            title="Mirror"
            type="course project - ux / ui design"
            description="Rework the branding of a clothing e-commerce platform, and create a responsive web design."
            image={{
              src: MirrorCoverImage,
              alt: 'Mirror design',
              shadow: true,
            }}
            link="/work/mirror"
          />
        </div>
      </section>
    </Layout>
  );
}
