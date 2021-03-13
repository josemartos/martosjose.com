import { useContext } from 'react';
import cn from 'classnames';
import RouterLink from 'next/link';

import ThemeContext from 'context/themeContext';

import LogoIcon from 'public/images/logo.svg';
import Navbar from './navbar';

// Styles
import commonStyles from 'styles/common.module.scss';
import styles from './header.module.scss';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={cn(styles.header, { [styles.white]: theme === 'white' })}
    >
      <div className={commonStyles.contentWrapper}>
        <div className={styles.inner}>
          <RouterLink href="/">
            <a className={styles.logo} title="Go to homepage">
              <LogoIcon />
            </a>
          </RouterLink>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
