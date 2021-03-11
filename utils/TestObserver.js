import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

import TestContext from '../context/testContext';

const TestObserver = () => {
  const { setHeroLostFocus } = useContext(TestContext);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    console.log('In view!', inView);
    setHeroLostFocus(inView);
  }, [inView]);

  return (
    <div ref={ref}>
      <h2>{`Test observer ${inView}`}</h2>
    </div>
  );
};
