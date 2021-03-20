import cn from 'classnames';
import Image from 'next/image';

import ComeInAnimation from 'animation/comeIn';

// Styles
import commonStyles from 'styles/common.module.scss';
import styles from './caseStudy.module.scss';

const Tag = ({ label, text }) => (
  <div className={styles.tag}>
    <small>{label}</small>
    <p>{text}</p>
  </div>
);

const CaseStudy = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <ComeInAnimation>
          <Image
            src={'/images/mirror-hero.jpg'}
            alt="Mirror Website Mockups"
            width={2566}
            height={1440}
            priority={true}
          />
        </ComeInAnimation>
      </div>

      <div className={cn(styles.introWrapper, commonStyles.contentWrapper)}>
        <div className={styles.tagsLayer}></div>
        <div className={cn('flexGrid', styles.titleWrapper)}>
          <div className={cn('col--md-1')}></div>
          <div className={cn('col--md-11')}>
            <h1 className={styles.title}>Mirror</h1>
          </div>
        </div>
        <div className={cn('flexGrid', styles.intro)}>
          <div className={cn('col--md-1')}></div>
          <div className={cn('col--md-5')}>
            <p>
              During the first phase at the Designlab’s UX Academy, I had to
              work on the <strong>branding</strong> and <strong>design</strong>{' '}
              of a responsive website for a clothing store, with the goal to
              expand their online presence.
            </p>
            <p>
              I learnt a lot, since I had to dig deeper into clothing
              e-commerce, conduct customer interviews, create wireframes and UI
              designs, as well as prototype, test and refine the final
              iteration.
            </p>
          </div>
          <div className={cn('col--md-2')}></div>
          <div className={cn(styles.tagsWrapper, 'col--md-2')}>
            <Tag label="Type" text="Course Project - Website" />
            <Tag label="Role" text="UX / UI Design" />
            <Tag label="Duration" text="3 Months" />
          </div>
        </div>
      </div>
      <div className={styles.goalsWrapper}>
        <div className={styles.goalsLayer}></div>
        <div className={cn('flexGrid', commonStyles.contentWrapper)}>
          <div className={cn('col--md-1')}></div>
          <div className={cn('col--md-8')}>
            <h2>Goals</h2>
            <p>
              Design a logo for the company that is modern and neutral enough to
              attract all types of people and styles. Create a{' '}
              <strong>brand</strong> and a <strong>palette color</strong>. Brand
              message: Neutral, Modern and fresh, Clean and clear.
            </p>
            <p>
              Design a <strong>responsive e-commerce website</strong> that is
              easy to use and allows customers to browse through all products.
              Show products for all female, male, kids, casual, business, sport,
              party, formal, color, size and more.
            </p>
          </div>
          <div className={cn('col--md-3')}></div>
        </div>
      </div>
      <div className={cn(styles.comingSoon, commonStyles.contentWrapper)}>
        <p>
          The full info about this project is <strong>coming up soon</strong>
        </p>
      </div>
    </div>
  );
};

export default CaseStudy;
