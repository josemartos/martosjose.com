import { useContext } from 'react';
import cn from 'classnames';
import RouterLink from 'next/link';

import AppContext from 'context/appContext';

import LogoIcon from 'public/images/logo.svg';
import { Navbar } from 'components';

// Styles
import layoutStyles from 'styles/components/layout.module.scss';
import styles from './header.module.scss';

const Header = () => {
  const { theme } = useContext(AppContext);

  return (
    <header
      className={cn(styles.header, { [styles.white]: theme === 'white' })}
    >
      <div className={layoutStyles.contentWrapper}>
        <div className={styles.inner}>
          <RouterLink href="/" className={styles.logo} title="Go to homepage">
            <LogoIcon />
          </RouterLink>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
