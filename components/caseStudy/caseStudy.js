// Styles
import styles from './caseStudy.module.scss';
import commonStyles from 'styles/common.module.scss';

const CaseStudy = () => {
  return (
    <div>
      <div className={commonStyles.contentWrapper}>
        <div className={styles.text}>
          <p className={styles.comingSoon}>
            The full info about this project is coming up soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
