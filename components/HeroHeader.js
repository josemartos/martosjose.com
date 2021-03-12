// Styles
import commonStyles from 'styles/common.module.scss';
import styles from './heroHeader.module.scss';

import BracketIcon from 'public/images/bracket.svg';

const HeroHeader = ({ scrollToWork }) => {
  return (
    <div className={commonStyles.contentWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.scroll}>
          <div className={styles.line}></div>
          <button className={styles.button} onClick={scrollToWork}>
            scroll
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.bracket}>
            <BracketIcon />
          </div>
          <div>
            <p>Glad that you came, I am Jose Martos.</p>
            <h1>
              <strong>Designer</strong> and <strong>front-end</strong>{' '}
              developer.
            </h1>
            <p>
              Focused on building <strong>beautiful</strong> yet{' '}
              <strong>usable</strong> and <strong>simple</strong> experiences.
              Currently based in Munich.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
