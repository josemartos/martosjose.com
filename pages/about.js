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
                  href="https://www.mytravelmap.xyz/u/gg108230143559826306104"
                  rel="noreferrer"
                >
                  31 countries
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
