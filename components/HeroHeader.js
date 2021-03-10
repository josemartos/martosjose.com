// Styles
import commonStyles from '../styles/common.module.scss';
import styles from './heroHeader.module.scss';

import BracketIcon from '../public/images/bracket.svg';

const HeroHeader = () => {
  return (
    <div className={commonStyles.contentWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.scroll}>
          <div className={styles.line}></div>
          <div className={styles.text}>scroll</div>
        </div>
        <div className={styles.content}>
          <div className={styles.bracket}>
            <BracketIcon />
          </div>
          <div>
            <p>Glad that you came, I am Jose Martos.</p>
            <h1>
              <strong>Designer</strong> with <strong>front-end</strong>{' '}
              expertise.
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
