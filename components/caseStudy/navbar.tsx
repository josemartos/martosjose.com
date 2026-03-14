import cn from 'classnames';

import { useCaseStudy } from 'context/caseStudyContext';

// Styles
import caseStudy from 'styles/modules/caseStudy.module.scss';

const Navbar = () => {
  const {
    activeItem,
    understandSectionRef,
    defineSectionRef,
    designSectionRef,
    testingSectionRef,
    scrollTo,
    showNavbar,
  } = useCaseStudy();

  return (
    <nav
      aria-label="Case study sections"
      className={cn(caseStudy.navbar, { [caseStudy.navbarActive]: showNavbar })}
    >
      <div className={caseStudy.navbarWrapper}>
        <button
          className={cn(caseStudy.navbarItem, {
            [caseStudy.navbarItemActive]: activeItem === 'understand',
          })}
          onClick={scrollTo(understandSectionRef)}
        >
          Understand
        </button>
        <button
          className={cn(caseStudy.navbarItem, {
            [caseStudy.navbarItemActive]: activeItem === 'define',
          })}
          onClick={scrollTo(defineSectionRef)}
        >
          Define
        </button>
        <button
          className={cn(caseStudy.navbarItem, {
            [caseStudy.navbarItemActive]: activeItem === 'design',
          })}
          onClick={scrollTo(designSectionRef)}
        >
          Design
        </button>
        <button
          className={cn(caseStudy.navbarItem, {
            [caseStudy.navbarItemActive]: activeItem === 'testing',
          })}
          onClick={scrollTo(testingSectionRef)}
        >
          Testing
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
