import cn from 'classnames';
import RouterLink from 'next/link';
import { NextPage } from 'next';
import { SITE_CONFIG } from 'lib/constants';

import { BasePage, Image } from 'components';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import styles from 'styles/modules/about.module.scss';

// Images
import JoseDresdenImage from 'public/images/jose-pic-dresden.jpg';

const About: NextPage & { theme?: string } = () => {
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
                preload
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
                Over 11 years in web development, with a stretch in the middle
                as a Product Designer. That time on the other side of the
                handoff changed how I think about building — I care as much
                about why something is built as how.
              </p>

              <p>
                Outside of work I'm into reading, biking, hiking,{' '}
                <a
                  target="_blank"
                  href={SITE_CONFIG.social['500px']}
                  rel="noreferrer"
                >
                  photography
                </a>
                , and getting lost in new places. Between 2018 and 2019 I spent
                several months solo-backpacking through Asia — part of a longer
                journey that's taken me to{' '}
                <a
                  target="_blank"
                  href="https://visitedplaces.com/..."
                  rel="noreferrer"
                >
                  32 countries
                </a>
                .
              </p>

              <p>
                Originally from near Málaga, I've lived in Madrid and Berlin
                before landing in Munich. Since March 2023 I've also been a dad
                — which turns out to be the most humbling and
                perspective-shifting thing I've ever done.
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
                if you'd like to collaborate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </BasePage>
  );
};

About.theme = 'white';

export default About;
