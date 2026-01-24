import cn from 'classnames';
import RouterLink from 'next/link';
import { SITE_CONFIG } from 'lib/constants';

import { BasePage, Image } from 'components';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import styles from 'styles/modules/about.module.scss';

// Images
import JoseDresdenImage from 'public/images/jose-pic-dresden.jpg';

export default function About() {
  return (
    <BasePage title="About">
      <section className={layoutStyles.section}>
        <div className={layoutStyles.contentWrapper}>
          <h2 className={layoutStyles.sectionTitle}>
            A bit about <strong>me</strong>
          </h2>
          <div className={cn('flexGrid', styles.container)}>
            <div className={cn(styles.image, 'col--md-4')}>
              <Image
                src={JoseDresdenImage}
                alt="Jose image - in Dresden with a camera"
                width={411}
                height={540}
                priority={true}
              />
              <small>Enjoying the sights in Dresden</small>
            </div>
            <div className="col--md-1"></div>
            <div className={cn(styles.text, 'col--md-7')}>
              <p>
                Hi, I'm José — a Munich-based Frontend Developer currently
                working at{' '}
                <a
                  target="_blank"
                  href="https://www.traviangames.com"
                  rel="noreferrer"
                >
                  Travian Games
                </a>
                .
              </p>

              <p>
                I bring over 11 years of experience in web development across
                diverse projects and industries. Along the way, I expanded into
                product design to complement my technical background and deepen
                my understanding of user-centered digital experiences.
              </p>

              <p>
                Today, I’m focused again on frontend development, applying that
                combined experience to build clear, maintainable interfaces with
                a strong emphasis on usability, clarity, and collaboration.
              </p>

              <p>
                Outside of work, I enjoy reading, biking, hiking,{' '}
                <a
                  target="_blank"
                  href={SITE_CONFIG.social['500px']}
                  rel="noreferrer"
                >
                  photography
                </a>
                , and exploring new places. Between 2018 and 2019, I
                solo-backpacked through Asia for four months — part of a journey
                that’s taken me to{' '}
                <a
                  target="_blank"
                  href="https://visitedplaces.com/view/?map=world&projection=geoOrthographic&theme=dark-green&water=1&graticule=0&names=1&duration=2000&placeduration=100&slider=0&autoplay=1&autozoom=none&autostep=1&home=DE&places=My%20Home~DE~1_0_0_-10.4_-51*Europe~ES_DE.daaa44_GB_IE_FR_AT_NL_EE_SE_CZ_PL_BA_HR_IT_GR_NO_HU_MT_VA_ME_DK~2.4_12.1_53.3~-12.1~-53.3*Africa~MA~1.5_18_1.6~-18~-1.6*Asia~TH_KH_NP_MM_VN_JP_CN_IN~1.5_83.8_33.3~-83.8~-33.3*North%20America~US~1.6~-100.6_44.4~100.6~-44.4"
                  rel="noreferrer"
                >
                  32 countries
                </a>
                . Originally from a town near Málaga, I’ve lived in Madrid,
                Berlin — and now call Munich home.
              </p>

              <p>
                Since March 2023, I’ve also taken on my most rewarding role yet:
                being a dad to a curious and energetic little human who’s
                brought new layers of empathy and perspective to my life.
              </p>

              <p>
                Feel free to check out my{' '}
                <a target="_blank" href="/CV_JoseMartos.pdf" rel="noreferrer">
                  resume
                </a>
                , or{' '}
                <RouterLink href="/contact" title="Go to contact">
                  get in touch
                </RouterLink>{' '}
                if you’d like to collaborate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </BasePage>
  );
}
