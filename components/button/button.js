import React from 'react';
import cn from 'classnames';

// Styles
import styles from './button.module.scss';

export const Button = ({ text }) => {
  return <button className={cn(styles.button, styles.primary)}>{text}</button>;
};

export const LinkButton = React.forwardRef(({ href, onClick, text }, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      onClick={onClick}
      className={cn(styles.button, styles.primary)}
      title={text}
    >
      {text}
    </a>
  );
});
