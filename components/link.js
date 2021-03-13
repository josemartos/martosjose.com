import React from 'react';
import cn from 'classnames';

// Styles
import buttonStyles from './button.module.scss';

// TODO: Polish animation
export const LinkButton = React.forwardRef(({ href, onClick, text }, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      onClick={onClick}
      className={cn(buttonStyles.button, buttonStyles.primary)}
    >
      {text}
    </a>
  );
});
