import { forwardRef } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { useTheme, useAppContext } from 'context/appContext';

import RouterLink from 'next/link';

// Styles
import styles from './navbar.module.scss';

const NavbarLink = forwardRef(
  ({ href, onClick, text, target = '_self', scroll = true }, ref) => {
    const router = useRouter();

    const onPage = () => {
      if (href === '/') {
        return router.pathname === '/' || router.pathname.startsWith('/work');
      }
      return router.pathname.startsWith(href);
    };

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
  const theme = useTheme();
  const { setShouldScrollToWork } = useAppContext();

  return (
    <div className={cn({ [styles.white]: theme === 'white' })}>
      <NavbarLink
        href="/"
        text="work"
        onClick={() => setShouldScrollToWork(true)}
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
