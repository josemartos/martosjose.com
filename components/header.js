import Link from 'next/link';

import GithubIcon from '../public/images/logo.svg';
import Navbar from './Navbar';

// Styles
import commonStyles from '../styles/common.module.scss';
import styles from './header.module.scss';

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
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
