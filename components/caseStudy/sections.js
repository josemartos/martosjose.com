import { useCallback, useEffect, useRef } from 'react';
import { InView } from 'react-intersection-observer';
import { useCaseStudy } from 'context/caseStudyContext';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';

const sectionNames = ['understand', 'define', 'design', 'testing'];

const IntersectionWrapper = ({ children, section }) => {
  const { activeItem, setActiveItem, showNavbar, setShowNavbar } =
    useCaseStudy();

  // Sync latest context values into refs so the InView callback never goes stale.
  const activeItemRef = useRef(activeItem);
  const showNavbarRef = useRef(showNavbar);
  useEffect(() => {
    activeItemRef.current = activeItem;
    showNavbarRef.current = showNavbar;
  });

  const updateSection = useCallback(
    (inView, entry) => {
      if (!entry) return;

      if (inView) {
        if (!showNavbarRef.current) setShowNavbar(true);
        setActiveItem(section);
        return;
      }

      const { boundingClientRect } = entry;
      const currentSectionIndex = sectionNames.indexOf(section);

      // Section scrolled back into view from the top
      if (boundingClientRect.top > 0 && section === activeItemRef.current) {
        const previousSection = sectionNames[currentSectionIndex - 1];
        if (previousSection) {
          setActiveItem(previousSection);
        } else {
          setShowNavbar(false);
        }
      }

      // Section scrolled out above the viewport
      if (boundingClientRect.top < 0 && section === activeItemRef.current) {
        const nextSection = sectionNames[currentSectionIndex + 1];
        if (nextSection) setActiveItem(nextSection);
      }
    },
    [section, setActiveItem, setShowNavbar],
  );

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
