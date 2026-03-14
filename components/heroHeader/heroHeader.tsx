import cn from 'classnames';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import styles from './heroHeader.module.scss';

import BracketIcon from 'components/icons/BracketIcon';
import ArrowHeader from 'components/icons/ArrowHeaderIcon';

interface HeroHeaderProps {
  scrollToWork: () => void;
}

const HeroHeader = ({ scrollToWork }: HeroHeaderProps) => {
  return (
    <div className={layoutStyles.contentWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.bracket}>
            <BracketIcon />
          </div>
          <div>
            <h1>
              Hi, I'm Jos&eacute; Martos &mdash; <strong>Frontend Developer</strong>, 15+ years in.
            </h1>
            <p>
              I spent 3 years on the design side. It changed how I write code.
            </p>
          </div>
        </div>
        <div className={styles.scroll}>
          <div className={styles.line}></div>
          <button className={styles.button} onClick={scrollToWork}>
            scroll
          </button>
          <button
            className={cn(styles.button, styles.arrow)}
            onClick={scrollToWork}
          >
            <ArrowHeader aria-label="Scroll down" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
