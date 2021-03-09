import React from 'react';

// Styles
import commonStyles from '../styles/common.module.scss';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={commonStyles.contentWrapper}>
        <div className={styles.footerInner}>Footer text</div>
      </div>
    </footer>
  );
};

export default Footer;
