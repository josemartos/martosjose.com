import { useInView } from 'react-intersection-observer';
import cn from 'classnames';

import styles from './comeIn.module.scss';

const ComeInAnimation = ({ children, position = '' }) => {
  const { ref, inView, entry } = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(styles.wrapper, {
        'come-in': inView === true,
        [`come-in--${position}`]: position !== '',
      })}
    >
      {children}
    </div>
  );
};

export default ComeInAnimation;
