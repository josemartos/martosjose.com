import { ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';
import RouterLink from 'next/link';

// Styles
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <button className={cn(styles.button, styles.primary)} {...rest}>
      {text}
    </button>
  );
};

interface LinkButtonProps {
  href: string;
  text: string;
  onClick?: () => void;
  target?: string;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ href, onClick, text, target = '_self' }, ref) => {
    return (
      <RouterLink
        href={href}
        ref={ref}
        onClick={onClick}
        className={cn(styles.button, styles.primary)}
        title={text}
        target={target}
      >
        {text}
      </RouterLink>
    );
  },
);

LinkButton.displayName = 'LinkButton';
