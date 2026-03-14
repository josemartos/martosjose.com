import { SITE_CONFIG } from 'lib/constants';

import { Mail, Briefcase, Code, Camera } from 'lucide-react';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={layoutStyles.contentWrapper}>
        <div className={styles.inner}>
          <p className={styles.title}>
            Stay <strong>connected</strong>
          </p>
          <div className={styles.icons}>
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=Hi%20Jose`}
              aria-label="Send Jose an email"
            >
              <Mail color="white" size={24} strokeWidth={1.75} aria-hidden={true} />
            </a>
            <a
              href={SITE_CONFIG.social.linkedin}
              aria-label="Visit my LinkedIn profile"
              target="_blank"
              rel="noreferrer"
            >
              <Briefcase color="white" size={24} strokeWidth={1.75} aria-hidden={true} />
            </a>
            <a
              href={SITE_CONFIG.social.github}
              aria-label="Visit my GitHub profile"
              target="_blank"
              rel="noreferrer"
            >
              <Code color="white" size={24} strokeWidth={1.75} aria-hidden={true} />
            </a>
            <a
              href={SITE_CONFIG.social['500px']}
              aria-label="Visit my 500px profile"
              target="_blank"
              rel="noreferrer"
            >
              <Camera color="white" size={24} strokeWidth={1.75} aria-hidden={true} />
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
