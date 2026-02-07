import cn from 'classnames';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import styles from './heroHeader.module.scss';

import BracketIcon from 'public/images/bracket.svg';
import ArrowHeader from 'public/images/arrow-header.svg';

const HeroHeader = ({ scrollToWork }) => {
  return (
    <div className={layoutStyles.contentWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.bracket}>
            <BracketIcon />
          </div>
          <div>
            <h1>
              Hi, I'm Jos&eacute; Martos, <strong>Frontend Developer</strong>
            </h1>
            <p>
              Building clear, maintainable interfaces shaped by product design
              experience.
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
