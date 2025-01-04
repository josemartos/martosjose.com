import React, { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { useCaseStudy } from 'context/caseStudyContext';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';

const sections = ['understand', 'define', 'design', 'testing'];

const IntersectionWrapper = ({ children, section }) => {
  const [intersectionEntry, setIntersectionEntry] = useState(null);
  const { activeItem, setActiveItem, showNavbar, setShowNavbar } =
    useCaseStudy();

  const updateSection = (inView, entry) => {
    if (entry) {
      setIntersectionEntry(entry);
    }

    if (inView) {
      if (!showNavbar) {
        setShowNavbar(true);
      }
      setActiveItem(section);
    }
  };

  // Select the correct section on the navbar
  // When the section is not intersecting
  useEffect(() => {
    if (intersectionEntry) {
      const entry = intersectionEntry;
      const isIntersecting = entry.isIntersecting;
      const boundingClientRect = entry.boundingClientRect;
      const currentSectionIndex = sections.indexOf(section);

      // Going top
      if (!isIntersecting && boundingClientRect.top > 0) {
        // Fixes the navbar active item
        if (section === activeItem) {
          const previousSection = sections[currentSectionIndex - 1];

          if (previousSection) {
            setActiveItem(previousSection);
          } else {
            // At the very top
            setShowNavbar(false);
          }
        }
      }

      // Going bottom
      if (!isIntersecting && boundingClientRect.top < 0) {
        // Fixes the navbar active item
        if (section === activeItem) {
          const nextSection = sections[currentSectionIndex + 1];

          if (nextSection) {
            setActiveItem(nextSection);
          }
        }
      }
    }
  }, [intersectionEntry]);

  return (
    <InView as="div" root={null} onChange={updateSection}>
      {children}
    </InView>
  );
};

export const UnderstandSection = ({ children }) => {
  const { understandSectionRef } = useCaseStudy();

  return (
    <section className={layoutStyles.section} ref={understandSectionRef}>
      <IntersectionWrapper section="understand">{children}</IntersectionWrapper>
    </section>
  );
};

export const DefineSection = ({ children }) => {
  const { defineSectionRef } = useCaseStudy();

  return (
    <section className={layoutStyles.section} ref={defineSectionRef}>
      <IntersectionWrapper section="define">{children}</IntersectionWrapper>
    </section>
  );
};

export const DesignSection = ({ children }) => {
  const { designSectionRef } = useCaseStudy();

  return (
    <section className={layoutStyles.section} ref={designSectionRef}>
      <IntersectionWrapper section="design">{children}</IntersectionWrapper>
    </section>
  );
};

export const TestingSection = ({ children }) => {
  const { testingSectionRef } = useCaseStudy();

  return (
    <section className={layoutStyles.section} ref={testingSectionRef}>
      <IntersectionWrapper section="testing">{children}</IntersectionWrapper>
    </section>
  );
};
