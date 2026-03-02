import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';

import styles from './comeIn.module.scss';

interface ComeInAnimationProps {
  children: ReactNode;
  position?: string;
}

const ComeInAnimation = ({ children, position = '' }: ComeInAnimationProps) => {
  const { ref, inView } = useInView({
    root: null,
    threshold: 0.2,
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
