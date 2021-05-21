import React from 'react';

import EmailIcon from 'public/images/email.svg';
import LinkedinIcon from 'public/images/linkedin.svg';
import GithubIcon from 'public/images/github.svg';
import PicsIcon from 'public/images/500px.svg';

// Styles
import commonStyles from 'styles/common.module.scss';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={commonStyles.contentWrapper}>
        <div className={styles.inner}>
          <h4 className={styles.title}>
            Let's <strong>connect</strong>
          </h4>
          <div className={styles.icons}>
            <a
              href="mailto:martosjosele@gmail.com?subject=Hi%20Jose"
              title="Say hi to Jose"
            >
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/josemmartos/"
              title="Visit my Linkedin profile"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/josemartos"
              title="Visit my Github profile"
              target="_blank"
            >
              <GithubIcon />
            </a>
            <a
              href="https://500px.com/p/martosjosele"
              title="Visit my 500px profile"
              target="_blank"
            >
              <PicsIcon />
            </a>
          </div>
          <div className={styles.closing}>
            Built from the ground up by myself using Figma and Next.js &hearts;
          </div>
          <div className={styles.flaticon}>
            Icons from{' '}
            <a
              href="https://www.flaticon.com/"
              title="Visit flaticon"
              target="_blank"
            >
              www.flaticon.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
