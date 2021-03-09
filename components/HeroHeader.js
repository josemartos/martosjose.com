// Styles
import commonStyles from '../styles/common.module.scss';
import styles from './heroHeader.module.scss';

import BracketIcon from '../public/images/bracket.svg';

const HeroHeader = () => {
  return (
    <div className={commonStyles.contentWrapper}>
      <div className={styles.heroHeaderWrapper}>
        <div className={styles.heroHeader}>
          <div className={styles.bracket}>
            <BracketIcon />
          </div>
          <div>
            <p>Glad that you came, I am Jose Martos.</p>
            <h1>
              <strong>Product designer</strong> with <strong>front-end</strong>{' '}
              expertise.
            </h1>
            <p>
              Focused on building <strong>beautiful</strong> yet{' '}
              <strong>simple</strong> experiences. Currently based in Munich.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
