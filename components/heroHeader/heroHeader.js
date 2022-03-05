import cn from 'classnames';

// Styles
import commonStyles from 'styles/common.module.scss';
import styles from './heroHeader.module.scss';

import BracketIcon from 'public/images/bracket.svg';
import ArrowHeader from 'public/images/arrow-header.svg';

const HeroHeader = ({ scrollToWork }) => {
  return (
    <div className={commonStyles.contentWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.bracket}>
            <BracketIcon />
          </div>
          <div>
            <p>Glad you're here, I am Jos&eacute; Martos.</p>
            <h1>
              Product <strong>Designer</strong> and Front-end{' '}
              <strong>Developer</strong>.
            </h1>
            <p>
              Focused on building <strong>beautiful</strong> and{' '}
              <strong>functional</strong> digital products.
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
