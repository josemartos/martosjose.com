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
                Born and raised in southern Spain, I am a Germany-based{' '}
                <strong>front-end designer</strong>. My name is Jos&eacute;.
              </p>
              <p>
                The world of digital products can sometimes be disconcerting, so
                I am there to be the nexus of user and design, to build
                beautiful yet usable and simple experiences.
              </p>
              <p>
                I originally started off as an all-rounder, from design to
                front-end, passing through back-end. However, as a designer at
                heart, I quickly started to get more and more involved with the
                visual side of the craft, to have the power to determine from an
                early stage how interfaces look and behave.
              </p>
              <p>
                During the last few years I have worked as a front-end developer
                for different companies and industries, which provides me with a
                low level viewpoint of the product life-cycle. This also allows
                me to produce more realistic user interfaces and prototypes.
              </p>
              <p>
                Besides that, you can also find me somewhere near the mountain,
                planning where to travel next, listening, writing, reading,
                taking some pictures, doing some bouldering, or some good old
                martial arts.
              </p>
              <RouterLink href="/contact">
                <a title="Go to contact">Up for a coffee?</a>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </BasePage>
  );
}
