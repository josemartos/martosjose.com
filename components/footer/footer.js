import React from 'react';
import { SITE_CONFIG } from 'lib/constants';

import EmailIcon from 'public/images/email.svg';
import LinkedinIcon from 'public/images/linkedin.svg';
import GithubIcon from 'public/images/github.svg';
import PicsIcon from 'public/images/500px.svg';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={layoutStyles.contentWrapper}>
        <div className={styles.inner}>
          <h4 className={styles.title}>
            Stay <strong>connected</strong>
          </h4>
          <div className={styles.icons}>
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=Hi%20Jose`}
              title="Say hi to Jose"
            >
              <EmailIcon />
            </a>
            <a
              href={SITE_CONFIG.social.linkedin}
              title="Visit my Linkedin profile"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              href={SITE_CONFIG.social.github}
              title="Visit my Github profile"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href={SITE_CONFIG.social['500px']}
              title="Visit my 500px profile"
              target="_blank"
              rel="noreferrer"
            >
              <PicsIcon />
            </a>
          </div>
          <div className={styles.closing}>
            Crafted with care using Figma and Next.js
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
