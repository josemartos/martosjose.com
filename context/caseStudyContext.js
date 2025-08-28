'use client';

import { createContext, useContext, useMemo, useRef, useState } from 'react';

const CaseStudyContext = createContext(undefined);

export const CaseStudyProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState('understand');
  const [showNavbar, setShowNavbar] = useState(false);

  // Section refs
  const understandSectionRef = useRef(null);
  const defineSectionRef = useRef(null);
  const designSectionRef = useRef(null);
  const testingSectionRef = useRef(null);

  const scrollTo =
    (ref, { offset = 0 } = {}) =>
    () => {
      const node = ref?.current;
      if (!node) return;

      // Respect reduced motion
      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

      if (offset) {
        const y = window.scrollY + node.getBoundingClientRect().top - offset;
        window.scrollTo({
          top: y,
          behavior: prefersReduced ? 'auto' : 'smooth',
        });
      } else {
        node.scrollIntoView({
          block: 'start',
          inline: 'nearest',
          behavior: prefersReduced ? 'auto' : 'smooth',
        });
      }
    };

  const value = useMemo(
    () => ({
      activeItem,
      setActiveItem,
      showNavbar,
      setShowNavbar,
      understandSectionRef,
      defineSectionRef,
      designSectionRef,
      testingSectionRef,
      scrollTo,
    }),
    [
      activeItem,
      showNavbar,
      // refs are stable and don't need to be in deps
    ],
  );

  return (
    <CaseStudyContext.Provider value={value}>
      {children}
    </CaseStudyContext.Provider>
  );
};

export function useCaseStudy() {
  const ctx = useContext(CaseStudyContext);
  if (!ctx) {
    throw new Error('useCaseStudy must be used within a CaseStudyProvider');
  }
  return ctx;
}
