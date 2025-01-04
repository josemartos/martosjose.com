import { useContext, useEffect } from 'react';
import Head from 'next/head';
import cn from 'classnames';

import { Layout, HeroHeader, Project } from 'components';
import AppContext from 'context/appContext';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import styles from 'styles/pages/index.module.scss';

// Images
import CaminoCoverImage from 'public/images/camino/cover.png';
import BiciBavareseCoverImage from 'public/images/bicibavarese/cover.jpg';
import KomootCoverImage from 'public/images/komoot/cover.png';
import MirrorCoverImage from 'public/images/mirror/cover.jpg';

export default function Home() {
  const { workSectionRef, scrollToWork, workMenu, setWorkMenu } =
    useContext(AppContext);

  useEffect(() => {
    if (!workMenu) return;

    scrollToWork();
  }, [workMenu, scrollToWork]);

  useEffect(() => {
    return function () {
      return setWorkMenu(false);
    };
  }, [setWorkMenu]);

  return (
    <Layout>
      <Head>
        <title>Jose Martos - Product Designer with technical roots</title>
      </Head>
      <section className={styles.homeHeader}>
        <HeroHeader scrollToWork={scrollToWork} />
      </section>
      <section
        ref={workSectionRef}
        className={cn(layoutStyles.section, styles.section)}
      >
        <div className={layoutStyles.contentWrapper}>
          <h2 className={cn(layoutStyles.sectionTitle, styles.sectionTitle)}>
            Selected <strong>work</strong>
          </h2>
        </div>
        <div className={styles.project}>
          <Project
            title="Camino"
            description="Designed a comprehensive mobile MVP app from concept through prototyping."
            image={{
              src: CaminoCoverImage,
              alt: 'Camino - MVP App',
            }}
            link="/work/camino"
          />
        </div>
        <div className={styles.project}>
          <Project
            title="Bici Bavarese"
            description="Researched and redesigned the digital experience for a local bike shop."
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
            title="Komoot"
            description="Enhanced an existing app by adding a new social feature."
            image={{
              src: KomootCoverImage,
              alt: 'Komoot - Social feature',
            }}
            link="/work/komoot"
          />
        </div>
        <div className={styles.project}>
          <Project
            title="Mirror"
            description="Rebranded a clothing e-commerce platform."
            image={{
              src: MirrorCoverImage,
              alt: 'Mirror design',
              shadow: true,
            }}
            link="/work/mirror"
            reverseLayout={true}
          />
        </div>
      </section>
    </Layout>
  );
}
