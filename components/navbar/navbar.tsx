import { forwardRef, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { useTheme, useAppContext } from 'context/appContext';
import RouterLink from 'next/link';

// Styles
import styles from './navbar.module.scss';

interface NavbarLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
  target?: string;
  scroll?: boolean;
}

const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
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

NavbarLink.displayName = 'NavbarLink';

const BurgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <rect
      fill="currentColor"
      className={cn(styles.burgerBar, { [styles.burgerBarHide]: isOpen })}
      x="0"
      y="1"
      width="22"
      height="2"
      rx="1"
    />
    <rect
      fill="currentColor"
      className={cn(styles.burgerBar, styles.burgerBarMid, {
        [styles.burgerBarHide]: isOpen,
      })}
      x="0"
      y="10"
      width="22"
      height="2"
      rx="1"
    />
    <rect
      fill="currentColor"
      className={cn(styles.burgerBar, { [styles.burgerBarHide]: isOpen })}
      x="0"
      y="19"
      width="22"
      height="2"
      rx="1"
    />
    <line
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={cn(styles.burgerX, { [styles.burgerXShow]: isOpen })}
      x1="1"
      y1="1"
      x2="21"
      y2="21"
    />
    <line
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={cn(styles.burgerX, { [styles.burgerXShow]: isOpen })}
      x1="21"
      y1="1"
      x2="1"
      y2="21"
    />
  </svg>
);

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  const theme = useTheme();
  const { setShouldScrollToWork } = useAppContext();
  const burgerRef = useRef<HTMLButtonElement>(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [setIsOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={cn(styles.wrapper, { [styles.white]: theme === 'white' && !isOpen })}>
      <button
        ref={burgerRef}
        className={styles.burger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      >
        <BurgerIcon isOpen={isOpen} />
      </button>
      <nav className={cn(styles.nav, { [styles.navOpen]: isOpen })}>
        <NavbarLink
          href="/"
          text="work"
          onClick={() => {
            setShouldScrollToWork(true);
            close();
          }}
          scroll={false}
        />
        <NavbarLink href="/about" text="about" onClick={close} />
        <NavbarLink href="/CV_JoseMartos.pdf" text="cv" target="_blank" onClick={close} />
        <NavbarLink href="/contact" text="contact" onClick={close} />
      </nav>
    </div>
  );
};

export default Navbar;
