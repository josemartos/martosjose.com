import { useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import cn from 'classnames';
import { SITE_CONFIG } from 'lib/constants';

import { Layout, HeroHeader, Project, Testimonials } from 'components';
import { useAppContext } from 'context/appContext';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import homeStyles from 'styles/modules/home.module.scss';

// Images
import NewBitibaCoverImage from 'public/images/newbitiba/cover.png';
import CaminoCoverImage from 'public/images/camino/cover.png';
import BiciBavareseCoverImage from 'public/images/bicibavarese/cover.jpg';

export default function Home() {
  const { shouldScrollToWork, setShouldScrollToWork } = useAppContext();
  const workSectionRef = useRef<HTMLElement>(null);

  const scrollToWork = useCallback(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    workSectionRef.current?.scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  }, []);

  useEffect(() => {
    if (!shouldScrollToWork) return;
    scrollToWork();
    setShouldScrollToWork(false);
  }, [shouldScrollToWork, scrollToWork, setShouldScrollToWork]);

  // Safety net: reset if unmounted before the effect fires
  useEffect(() => {
    return () => setShouldScrollToWork(false);
  }, [setShouldScrollToWork]);

  return (
    <Layout>
      <Head>
        <title>{SITE_CONFIG.meta.title}</title>
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
            description="E-commerce redesign that moved the needle on purchases — across discovery, cart, and checkout."
            image={{
              src: NewBitibaCoverImage,
              alt: 'New Bitiba - Web App',
              width: 1200,
              height: 800,
            }}
            link="/work/newbitiba"
            reverseLayout={true}
          />
        </div>

        <div className={homeStyles.project}>
          <Project
            title="Bici Bavarese"
            description="Research-led redesign for a Munich bike shop — understanding the customer first, then fixing the screen."
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
            description="A mobile app connecting people with therapists — taken from zero to tested prototype."
            image={{
              src: CaminoCoverImage,
              alt: 'Camino - MVP App',
              width: 1200,
              height: 800,
            }}
            link="/work/camino"
            reverseLayout={true}
          />
        </div>
      </section>
      <section className={cn(layoutStyles.section, homeStyles.section)}>
        <div className={layoutStyles.contentWrapper}>
          <h2
            className={cn(layoutStyles.sectionTitle, homeStyles.sectionTitle)}
          >
            Voices from the <strong>team</strong>
          </h2>
          <Testimonials />
        </div>
      </section>
    </Layout>
  );
}
