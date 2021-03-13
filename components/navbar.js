import { useContext } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import ThemeContext from 'context/themeContext';

import React from 'react';
import RouterLink from 'next/link';

// Styles
import styles from './navbar.module.scss';

const NavbarLink = React.forwardRef(({ href, onClick, text }, ref) => {
  const router = useRouter();

  const onPage = () =>
    router.pathname === href || router.pathname.includes(text);

  return (
    <a
      href={href}
      ref={ref}
      onClick={onClick}
      className={cn(styles.item, { [styles.itemActive]: onPage() })}
      title={`Go to ${text}`}
    >
      {text}
    </a>
  );
});

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cn({ [styles.white]: theme === 'white' })}>
      <RouterLink href="/" passHref>
        <NavbarLink text="work" />
      </RouterLink>
      <RouterLink href="/about" passHref>
        <NavbarLink text="about" />
      </RouterLink>
      {/* <RouterLink href="/resume" passHref>
        <NavbarLink text="resume" />
      </RouterLink> 
      <RouterLink href="/photos" passHref>
        <NavbarLink text="photos" />
      </RouterLink>*/}
      <RouterLink href="/contact" passHref>
        <NavbarLink text="contact" />
      </RouterLink>
    </div>
  );
};

export default Navbar;
