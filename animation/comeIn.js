import cn from 'classnames';
import useComeInAnimation from 'animation/useComeIn';

import styles from './comeIn.module.scss';

const ComeInAnimation = ({ children }) => {
  const defaultClass = 'comeIn-effect-el';

  useComeInAnimation(defaultClass);

  return <div className={cn(defaultClass, styles.wrapper)}>{children}</div>;
};

export default ComeInAnimation;
