import React from 'react';

// Styles
import buttonStyles from './button.module.scss';

// TODO: Polish animation
export const LinkButton = React.forwardRef(({ href, onClick, text }, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      onClick={onClick}
      className={`${buttonStyles.button} ${buttonStyles.primary}`}
    >
      {text}
    </a>
  );
});
