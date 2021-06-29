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
                I am Jos&eacute;, a <strong>designer</strong> and{' '}
                <strong>front-end developer</strong> currently based in Munich.
              </p>
              <p>
                In my 10-plus years of experience, I've been fortunate enough to
                work as a developer on several projects. I have recently
                expanded my skill set to include UX/UI design, in order to
                combine my programming skills with an ability to research,
                design and prototype innovative, human-centered interfaces. This
                new, unique combination of skills allows me to see the product
                life-cycle through from conception to final delivery.
              </p>
              <p>
                In my free time you will find me trekking, biking, traveling,
                cooking, reading, bouldering, taking pictures and learning
                martial arts. Between 2018 and 2019 I spent 4 months traveling
                across Asia, and I am delighted to say that have visited a total
                of{' '}
                <a
                  target="_blank"
                  href="https://www.mytravelmap.xyz/u/gg108230143559826306104"
                  rel="noreferrer"
                >
                  28 countries
                </a>{' '}
                so far. Apart from my hometown, Antequera, I have also lived in
                Málaga, Madrid and Berlin.
              </p>
              <p>
                Let’s{' '}
                <RouterLink href="/contact">
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
