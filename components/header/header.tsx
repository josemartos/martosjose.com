import { useState } from 'react';
import cn from 'classnames';
import RouterLink from 'next/link';

import { useTheme } from 'context/appContext';

import LogoIcon from 'components/icons/LogoIcon';
import { Navbar } from 'components';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import styles from './header.module.scss';

const Header = () => {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={cn(styles.header, {
        [styles.white]: theme === 'white' && !isMenuOpen,
      })}
    >
      <div className={layoutStyles.contentWrapper}>
        <div className={styles.inner}>
          <RouterLink href="/" className={styles.logo} title="Go to homepage">
            <LogoIcon />
          </RouterLink>
          <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
