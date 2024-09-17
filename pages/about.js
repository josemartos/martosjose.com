import cn from 'classnames';
import RouterLink from 'next/link';

import { BasePage, Image } from 'components';

// Styles
import pageStyles from 'styles/page.module.scss';
import commonStyles from 'styles/common.module.scss';
import styles from 'styles/pages/about.module.scss';

// Images
import JoseDresdenImage from 'public/images/jose-pic-dresden.jpg';

export default function About() {
  return (
    <BasePage title="About">
      <section className={pageStyles.section}>
        <div className={commonStyles.contentWrapper}>
          <h2 className={pageStyles.sectionTitle}>
            About <strong>me</strong>
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
              <small>Having fun in Dresden</small>
            </div>
            <div className="col--md-1"></div>
            <div className={cn(styles.text, 'col--md-7')}>
              <p>
                I am Jos&eacute;, a Munich-based Spaniard working currently as a{' '}
                <strong>Product Designer</strong> at{' '}
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
                After having the fortune to work as a <strong>developer</strong>{' '}
                on several projects for more than 10 years, in 2020 I decided to
                expand my skill set to include UX/UI design, in order to combine
                my programming skills with an ability to research, design and
                prototype innovative, human-centered interfaces. This unique
                combination of skills allows me to see the product life-cycle
                through from conception to final delivery.
              </p>
              <p>
                In my free time you will find me reading, hiking, cooking,
                biking, bouldering, taking pictures or learning martial arts.
                Between 2018 and 2019 I spent 4 months solo backpacking across
                Asia, and I am delighted to say that have visited a total of{' '}
                <a
                  target="_blank"
                  href="https://visitedplaces.com/view/?map=world&projection=geoOrthographic&theme=dark-green&water=1&graticule=0&names=1&duration=2000&placeduration=100&slider=0&autoplay=1&autozoom=none&autostep=1&home=DE&places=My%20Home~DE~1_0_0_-10.4_-51*Europe~ES_DE.daaa44_GB_IE_FR_AT_NL_EE_SE_CZ_PL_BA_HR_IT_GR_NO_HU_MT_VA_ME_DK~2.4_12.1_53.3_-12.1_-53.3*Africa~MA~1.5_18_1.6_-18_-1.6*Asia~TH_KH_NP_MM_VN_JP_CN_IN~1.5_83.8_33.3_-83.8_-33.3*North%20America~US~1.6_-100.6_44.4_100.6_-44.4"
                  rel="noreferrer"
                >
                  32 countries
                </a>{' '}
                so far. Apart from my hometown, Antequera, I have also lived in
                Málaga, Madrid and Berlin.
              </p>
              <p>
                Since March 2023 I am the proud father of a curious, active and
                smiling human being named Mila &hearts;
              </p>
              <p>
                For further information you can have a look at my{' '}
                <a target="_blank" href="/CVJoseMartos.pdf" rel="noreferrer">
                  resume
                </a>
                , or else, let's{' '}
                <RouterLink href="/contact" legacyBehavior>
                  <a title="Go to contact">chat</a>
                </RouterLink>{' '}
                about how we can work together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </BasePage>
  );
}
