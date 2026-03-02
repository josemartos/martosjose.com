import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { InView } from 'react-intersection-observer';
import { useCaseStudy } from 'context/caseStudyContext';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';

type SectionName = 'understand' | 'define' | 'design' | 'testing';

const sectionNames: SectionName[] = ['understand', 'define', 'design', 'testing'];

interface IntersectionWrapperProps {
  children: ReactNode;
  section: SectionName;
}

const IntersectionWrapper = ({ children, section }: IntersectionWrapperProps) => {
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
    (inView: boolean, entry: IntersectionObserverEntry) => {
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

export const UnderstandSection = ({ children }: { children: ReactNode }) => {
  const { understandSectionRef } = useCaseStudy();

  return (
    <section className={layoutStyles.section} ref={understandSectionRef as React.RefObject<HTMLElement>}>
      <IntersectionWrapper section="understand">{children}</IntersectionWrapper>
    </section>
  );
};

export const DefineSection = ({ children }: { children: ReactNode }) => {
  const { defineSectionRef } = useCaseStudy();

  return (
    <section className={layoutStyles.section} ref={defineSectionRef as React.RefObject<HTMLElement>}>
      <IntersectionWrapper section="define">{children}</IntersectionWrapper>
    </section>
  );
};

export const DesignSection = ({ children }: { children: ReactNode }) => {
  const { designSectionRef } = useCaseStudy();

  return (
    <section className={layoutStyles.section} ref={designSectionRef as React.RefObject<HTMLElement>}>
      <IntersectionWrapper section="design">{children}</IntersectionWrapper>
    </section>
  );
};

export const TestingSection = ({ children }: { children: ReactNode }) => {
  const { testingSectionRef } = useCaseStudy();

  return (
    <section className={layoutStyles.section} ref={testingSectionRef as React.RefObject<HTMLElement>}>
      <IntersectionWrapper section="testing">{children}</IntersectionWrapper>
    </section>
  );
};
