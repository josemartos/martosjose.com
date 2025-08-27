'use client';

import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { getCookieValue } from 'utils';
import GoTopIcon from 'public/images/go-top-button.svg';
import styles from './goTop.module.scss';

const SCROLL_THRESHOLD = 1500;

const GoTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [hasGdprBanner, setHasGdprBanner] = useState(false);
  const rafIdRef = useRef(null);

  const scrollTop = () => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  // Read cookie once on mount
  useEffect(() => {
    try {
      const gdprBannerCookie = getCookieValue('gdprBanner');
      setHasGdprBanner(!gdprBannerCookie);
    } catch {
      // if utils access fails on server, ignore
      setHasGdprBanner(false);
    }
  }, []);

  // Scroll listener
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const update = () => {
      // coalesce state updates into rAF
      if (rafIdRef.current !== null) return;
      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = null;
        const shouldShow = window.scrollY > SCROLL_THRESHOLD;
        setShowScroll((prev) => (prev !== shouldShow ? shouldShow : prev));
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    // Run once on mount to set initial state
    update();

    return () => {
      window.removeEventListener('scroll', update);
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, []);

  return (
    <button
      type="button"
      className={cn(styles.button, {
        [styles.active]: showScroll,
        [styles.hasGdprBanner]: hasGdprBanner,
      })}
      title="Go to top"
      aria-label="Go to top"
      onClick={scrollTop}
    >
      <GoTopIcon />
    </button>
  );
};

export default GoTopButton;
