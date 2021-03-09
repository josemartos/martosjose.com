import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import GithubIcon from '../public/images/logo.svg';

// Styles
import commonStyles from '../styles/common.module.scss';
import styles from './header.module.scss';

const HeaderLink = React.forwardRef(({ href, onClick, path, text }, ref) => {
  const router = useRouter();

  return (
    <a
      href={href}
      ref={ref}
      onClick={onClick}
      className={`${styles.navItem} ${
        router.pathname == `/${path}` ? styles.navItemActive : ''
      }`}
    >
      {text || path}
    </a>
  );
});

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={commonStyles.contentWrapper}>
        <div className={styles.headerInner}>
          <Link href="/">
            <a>
              <GithubIcon />
            </a>
          </Link>
          <div className={styles.navBar}>
            <Link href="/" passHref>
              <HeaderLink path="" text="work" />
            </Link>
            <Link href="/about" passHref>
              <HeaderLink path="about" />
            </Link>
            <Link href="/resume" passHref>
              <HeaderLink path="resume" />
            </Link>
            <Link href="/photos" passHref>
              <HeaderLink path="photos" />
            </Link>
            <Link href="/contact" passHref>
              <HeaderLink path="contact" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
