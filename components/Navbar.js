import { useRouter } from 'next/router';

import React from 'react';
import Link from 'next/link';

// Styles
import styles from './navbar.module.scss';

const NavbarLink = React.forwardRef(({ href, onClick, path, text }, ref) => {
  const router = useRouter();

  return (
    <a
      href={href}
      ref={ref}
      onClick={onClick}
      className={`${styles.item} ${
        router.pathname == `/${path}` ? styles.itemActive : ''
      }`}
    >
      {text || path}
    </a>
  );
});

const Navbar = () => (
  <div>
    <Link href="/" passHref>
      <NavbarLink path="" text="work" />
    </Link>
    <Link href="/about" passHref>
      <NavbarLink path="about" />
    </Link>
    {/* Link to a PDF */}
    {/* <Link href="/resume" passHref>
        <NavbarLink path="resume" />
      </Link> 
      <Link href="/photos" passHref>
        <NavbarLink path="photos" />
      </Link>*/}
    <Link href="/contact" passHref>
      <NavbarLink path="contact" />
    </Link>
  </div>
);

export default Navbar;
