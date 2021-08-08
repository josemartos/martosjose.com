import { useContext } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import AppContext from 'context/appContext';

import React from 'react';
import RouterLink from 'next/link';

// Styles
import styles from './navbar.module.scss';

const NavbarLink = React.forwardRef(
  ({ href, onClick, text, target = '_self' }, ref) => {
    const router = useRouter();

    const onPage = () =>
      router.pathname === href || router.pathname.includes(text);

    return (
      <a
        href={href}
        ref={ref}
        target={target}
        onClick={onClick}
        className={cn(styles.item, { [styles.itemActive]: onPage() })}
        title={`Go to ${text}`}
      >
        {text}
      </a>
    );
  }
);

const Navbar = () => {
  const { theme, setWorkMenu } = useContext(AppContext);

  return (
    <div className={cn({ [styles.white]: theme === 'white' })}>
      <RouterLink href="/" passHref scroll={false}>
        <NavbarLink text="work" onClick={() => setWorkMenu(true)} />
      </RouterLink>
      <RouterLink href="/about" passHref>
        <NavbarLink text="about" />
      </RouterLink>
      <RouterLink
        href="https://drive.google.com/file/d/18SNJj2Vun0AFZlCz4qfIeTBpT2u7fxlW/view"
        passHref
      >
        <NavbarLink text="cv" target="_blank" />
      </RouterLink>
      <RouterLink href="/contact" passHref>
        <NavbarLink text="contact" />
      </RouterLink>
    </div>
  );
};

export default Navbar;
