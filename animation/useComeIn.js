import { useEffect } from 'react';

const fadeIn = (element) => {
  element.classList.add('fadein');
};

const comeIn = (element) => {
  element.classList.add('comein');
};

const onChange = (changes, observer) => {
  changes.forEach((change) => {
    if (change.intersectionRatio > 0) {
      // Stop watching and show the element
      comeIn(change.target);
      observer.unobserve(change.target);
    }
  });
};

// This hook should be used at page level
// The desired elements must be wrapped with the component ComeInAnimation
const useComeInAnimation = (defaultClass) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${defaultClass}`);

    if ('IntersectionObserver' in window) {
      // IntersectionObserver supported
      const config = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      };

      const observer = new IntersectionObserver(onChange, config);
      elements.forEach((el) => observer.observe(el));
    } else {
      // IntersectionObserver NOT supported
      elements.forEach((element) => fadeIn(element));
    }
  }, []);
};

export default useComeInAnimation;
