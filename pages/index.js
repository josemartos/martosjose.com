import { useContext, useEffect } from 'react';
import Head from 'next/head';
import cn from 'classnames';

import { Layout, HeroHeader, Project } from 'components';
import AppContext from 'context/appContext';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import homeStyles from 'styles/modules/home.module.scss';

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
      <section className={homeStyles.homeHeader}>
        <HeroHeader scrollToWork={scrollToWork} />
      </section>
      <section
        ref={workSectionRef}
        className={cn(layoutStyles.section, homeStyles.section)}
      >
        <div className={layoutStyles.contentWrapper}>
          <h2
            className={cn(layoutStyles.sectionTitle, homeStyles.sectionTitle)}
          >
            Selected <strong>work</strong>
          </h2>
        </div>
        <div className={homeStyles.project}>
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
        <div className={homeStyles.project}>
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
      </section>
    </Layout>
  );
}
