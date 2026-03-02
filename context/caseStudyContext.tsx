import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  ReactNode,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react';

type SectionName = 'understand' | 'define' | 'design' | 'testing';

interface CaseStudyContextValue {
  activeItem: SectionName;
  setActiveItem: Dispatch<SetStateAction<SectionName>>;
  showNavbar: boolean;
  setShowNavbar: Dispatch<SetStateAction<boolean>>;
  understandSectionRef: RefObject<HTMLElement | null>;
  defineSectionRef: RefObject<HTMLElement | null>;
  designSectionRef: RefObject<HTMLElement | null>;
  testingSectionRef: RefObject<HTMLElement | null>;
  scrollTo: (ref: RefObject<HTMLElement | null>, options?: { offset?: number }) => () => void;
}

const CaseStudyContext = createContext<CaseStudyContextValue | undefined>(undefined);

export const CaseStudyProvider = ({ children }: { children: ReactNode }) => {
  const [activeItem, setActiveItem] = useState<SectionName>('understand');
  const [showNavbar, setShowNavbar] = useState(false);

  // Section refs
  const understandSectionRef = useRef<HTMLElement | null>(null);
  const defineSectionRef = useRef<HTMLElement | null>(null);
  const designSectionRef = useRef<HTMLElement | null>(null);
  const testingSectionRef = useRef<HTMLElement | null>(null);

  // Refs are stable — empty deps is correct and intentional here.
  const scrollTo = useCallback(
    (ref: RefObject<HTMLElement | null>, { offset = 0 } = {}) =>
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
      },
    [],
  );

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
    [activeItem, showNavbar, scrollTo],
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
