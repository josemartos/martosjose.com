import cn from 'classnames';
import RouterLink from 'next/link';

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
                Hi, I'm Jos&eacute;, a Munich-based Product Designer currently
                working at{' '}
                <a
                  target="_blank"
                  href="https://www.zooplus.de"
                  rel="noreferrer"
                >
                  zooplus
                </a>
                .
              </p>
              <p>
                After spending over 11 years as a developer on various projects,
                I expanded my skill set in 2021 to include UX/UI design,
                blending technical expertise with a passion for crafting
                user-centered digital solutions.
              </p>
              <p>
                In my free time, I enjoy reading, hiking, biking, exploring,
                photography, and practicing martial arts. Between 2018 and 2019,
                I embarked on a four-month solo backpacking adventure across
                Asia, and I'm proud to say I have visited a total of{' '}
                <a
                  target="_blank"
                  href="https://visitedplaces.com/view/?map=world&projection=geoOrthographic&theme=dark-green&water=1&graticule=0&names=1&duration=2000&placeduration=100&slider=0&autoplay=1&autozoom=none&autostep=1&home=DE&places=My%20Home~DE~1_0_0_-10.4_-51*Europe~ES_DE.daaa44_GB_IE_FR_AT_NL_EE_SE_CZ_PL_BA_HR_IT_GR_NO_HU_MT_VA_ME_DK~2.4_12.1_53.3_-12.1~-53.3*Africa~MA~1.5_18_1.6_-18~-1.6*Asia~TH_KH_NP_MM_VN_JP_CN_IN~1.5_83.8_33.3~-83.8~-33.3*North%20America~US~1.6_-100.6_44.4~100.6~-44.4"
                  rel="noreferrer"
                >
                  32 countries
                </a>{' '}
                so far. Beyond my hometown of Antequera, I've experienced life
                in Málaga, Madrid, and Berlin, each leaving its mark on my
                journey.
              </p>
              <p>
                Since March 2023, I've been the proud father of a curious,
                energetic, and always-smiling little one named Mila &hearts;.
              </p>
              <p>
                Feel free to check out my{' '}
                <a target="_blank" href="/CVJoseMartos.pdf" rel="noreferrer">
                  resume
                </a>
                , or let's{' '}
                <RouterLink href="/contact" title="Go to contact">
                  chat
                </RouterLink>{' '}
                about how we can collaborate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </BasePage>
  );
}
