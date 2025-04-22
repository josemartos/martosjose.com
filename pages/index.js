import { useContext, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import cn from 'classnames';

import { Layout } from 'components';
import AppContext from 'context/appContext';
import { SITE_CONFIG } from 'lib/constants';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import homeStyles from 'styles/modules/home.module.scss';

// Images
import NewBitibaCoverImage from 'public/images/newbitiba/cover.png';
import CaminoCoverImage from 'public/images/camino/cover.png';
import BiciBavareseCoverImage from 'public/images/bicibavarese/cover.jpg';

// Dynamically import components
const HeroHeader = dynamic(() => import('components/heroHeader'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

const Project = dynamic(() => import('components/project'), {
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  const { workSectionRef, scrollToWork, workMenu, setWorkMenu } =
    useContext(AppContext);

  useEffect(() => {
    if (!workMenu) return;
    scrollToWork();
  }, [workMenu, scrollToWork]);

  useEffect(() => {
    return () => setWorkMenu(false);
  }, [setWorkMenu]);

  return (
    <Layout>
      <Head>
        <title>
          {SITE_CONFIG.title} - {SITE_CONFIG.description}
        </title>
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
            title="New Bitiba"
            description="Revamping the shopping experience for a budget-friendly e-commerce platform."
            image={{
              src: NewBitibaCoverImage,
              alt: 'New Bitiba - Web App',
              width: 1200,
              height: 800,
              priority: true,
            }}
            link="/work/newbitiba"
            reverseLayout={true}
          />
        </div>

        <div className={homeStyles.project}>
          <Project
            title="Bici Bavarese"
            description="Researched and redesigned the digital experience for a local bike shop."
            image={{
              src: BiciBavareseCoverImage,
              alt: 'Bike store re-design',
              width: 1200,
              height: 800,
              shadow: true,
            }}
            link="/work/bicibavarese"
          />
        </div>
        <div className={homeStyles.project}>
          <Project
            title="Camino"
            description="Designed a comprehensive mobile MVP app from concept through prototyping."
            image={{
              src: CaminoCoverImage,
              alt: 'Camino - MVP App',
              width: 1200,
              height: 800,
              priority: true,
            }}
            link="/work/camino"
            reverseLayout={true}
          />
        </div>
      </section>
    </Layout>
  );
}
