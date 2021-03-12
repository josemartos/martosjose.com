import Link from 'next/link';

import GithubIcon from 'public/images/logo.svg';
import Navbar from './navbar';

// Styles
import commonStyles from 'styles/common.module.scss';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={commonStyles.contentWrapper}>
      <div className={styles.inner}>
        <Link href="/">
          <a>
            <GithubIcon />
          </a>
        </Link>
        <Navbar />
      </div>
    </div>
  </header>
);

export default Header;
