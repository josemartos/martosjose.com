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
            <h1>
              Glad you're here, I am Jos&eacute; Martos, Product{' '}
              <strong>Designer</strong> with Front-end <strong>Dev</strong>{' '}
              expertise.
            </h1>
            <p>
              Focused on crafting beautiful and effective digital solutions.
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
