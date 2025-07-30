import { useContext } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import AppContext from 'context/appContext';

import React from 'react';
import RouterLink from 'next/link';

// Styles
import styles from './navbar.module.scss';

const NavbarLink = React.forwardRef(
  ({ href, onClick, text, target = '_self', scroll = true }, ref) => {
    const router = useRouter();

    const onPage = () =>
      router.pathname === href || router.pathname.includes(text);

    return (
      <RouterLink
        href={href}
        ref={ref}
        target={target}
        onClick={onClick}
        className={cn(styles.item, { [styles.itemActive]: onPage() })}
        title={`Go to ${text}`}
        scroll={scroll}
      >
        {text}
      </RouterLink>
    );
  },
);

const Navbar = () => {
  const { theme, setWorkMenu } = useContext(AppContext);

  return (
    <div className={cn({ [styles.white]: theme === 'white' })}>
      <NavbarLink
        href="/"
        text="work"
        onClick={() => setWorkMenu(true)}
        scroll={false}
      />
      <NavbarLink href="/about" text="about" />
      <NavbarLink
        href="/CV_JoseMartos.pdf"
        text="cv"
        target="_blank"
        rel="noreferrer"
      />
      <NavbarLink href="/contact" text="contact" />
    </div>
  );
};

export default Navbar;
