import cn from 'classnames';
import RouterLink from 'next/link';

import { BasePage, CustomImage } from 'components';

// Styles
import pageStyles from 'styles/page.module.scss';
import commonStyles from 'styles/common.module.scss';
import styles from 'styles/pages/about.module.scss';

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
              <CustomImage
                src="/images/jose-pic-dresden.jpg"
                alt="Jose image - in Dresden with a camera"
                width={411}
                height={540}
                priority={true}
              />
              <small>Taken in Dresden, Germany</small>
            </div>
            <div className="col--md-1"></div>
            <div className={cn(styles.text, 'col--md-7')}>
              <p>
                I am a <strong>designer</strong> and{' '}
                <strong>front-end developer</strong> currently based in Munich.
              </p>
              <p>
                During the past +10 years I worked as a developer for several
                companies in various industries. Recently I have expanded my
                skill set to include UX/UI design, in order to combine my
                software skills with an ability to research, design and
                prototype innovative, human-centered interfaces. This new,
                unique combination of skills allows me to see the product
                life-cycle through from conception to final delivery.
              </p>
              <p>
                In my free time you will find me trekking, traveling, writing,
                reading, bouldering, taking pictures and learning martial arts.
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
