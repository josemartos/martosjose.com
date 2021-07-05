import { createContext, useContext, useRef, useState } from 'react';

const Context = createContext({});

export const CaseStudyProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState('understand');
  const [showNavbar, setShowNavbar] = useState(false);
  const understandSectionRef = useRef(null);
  const defineSectionRef = useRef(null);
  const designSectionRef = useRef(null);
  const testingSectionRef = useRef(null);

  const scrollTo = (ref) => () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const contextValue = {
    activeItem,
    setActiveItem,
    understandSectionRef,
    defineSectionRef,
    designSectionRef,
    testingSectionRef,
    scrollTo,
    showNavbar,
    setShowNavbar,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export function useCaseStudy() {
  return useContext(Context);
}
