import { useState, useEffect } from 'react';
import cn from 'classnames';
import { getCookieValue } from 'utils';

import GoTopIcon from 'public/images/go-top-button.svg';

// Styles
import styles from './goTop.module.scss';

const GoTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [hasGdprBanner, setHasGdprBanner] = useState(false);
  const [pageOffset, setPageOffset] = useState(0);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => setPageOffset(window.pageYOffset));

    return () => {
      window.removeEventListener('scroll', () =>
        setPageOffset(window.pageYOffset)
      );
    };
  }, []);

  useEffect(() => {
    const gdprBannerCookie = getCookieValue('gdprBanner');

    setHasGdprBanner(!gdprBannerCookie);

    if (!showScroll && pageOffset > 1500) {
      setShowScroll(true);
    } else if (showScroll && pageOffset <= 1500) {
      setShowScroll(false);
    }
  }, [pageOffset, showScroll]);

  return (
    <button
      className={cn(styles.button, {
        [styles.active]: showScroll,
        [styles.hasGdprBanner]: hasGdprBanner,
      })}
      title="Go to top"
      onClick={scrollTop}
    >
      <GoTopIcon />
    </button>
  );
};

export default GoTopButton;
