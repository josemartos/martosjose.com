import cn from 'classnames';
import Image from 'next/image';

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
        <Image
          src={'/images/mirror-hero.jpg'}
          alt="Mirror Website Mockups"
          width={2566}
          height={1440}
          priority={true}
        />
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
            <Tag label="Type" text="Website" />
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
