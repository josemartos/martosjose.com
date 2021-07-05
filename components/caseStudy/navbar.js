import cn from 'classnames';

import { useCaseStudy } from 'context/caseStudyContext';

// Styles
import caseStudy from 'styles/components/caseStudy.module.scss';

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
    <div
      className={cn(caseStudy.navbar, { [caseStudy.navbarActive]: showNavbar })}
    >
      <div className={caseStudy.navbarWrapper}>
        <button
          className={cn(caseStudy.navbarItem, {
            [caseStudy.navbarItemActive]: activeItem === 'understand',
          })}
          onClick={scrollTo(understandSectionRef)}
        >
          1. Understand
        </button>
        <button
          className={cn(caseStudy.navbarItem, {
            [caseStudy.navbarItemActive]: activeItem === 'define',
          })}
          onClick={scrollTo(defineSectionRef)}
        >
          2. Define
        </button>
        <button
          className={cn(caseStudy.navbarItem, {
            [caseStudy.navbarItemActive]: activeItem === 'design',
          })}
          onClick={scrollTo(designSectionRef)}
        >
          3. Design
        </button>
        <button
          className={cn(caseStudy.navbarItem, {
            [caseStudy.navbarItemActive]: activeItem === 'testing',
          })}
          onClick={scrollTo(testingSectionRef)}
        >
          4. Testing
        </button>
      </div>
    </div>
  );
};

export default Navbar;
