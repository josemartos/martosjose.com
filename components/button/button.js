import React from 'react';
import cn from 'classnames';

// Styles
import styles from './button.module.scss';

export const Button = (props) => {
  const { text } = props;

  return (
    <button className={cn(styles.button, styles.primary)} {...props}>
      {text}
    </button>
  );
};

export const LinkButton = React.forwardRef(
  ({ href, onClick, text, target = '_self' }, ref) => {
    return (
      <a
        href={href}
        ref={ref}
        onClick={onClick}
        className={cn(styles.button, styles.primary)}
        title={text}
        target={target}
      >
        {text}
      </a>
    );
  }
);
