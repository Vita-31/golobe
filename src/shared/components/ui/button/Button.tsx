import { FC } from 'react';
import classNames from 'classnames';
import { filledStyles, outlineStyles, flatStyles } from './lib/button-styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'flat';
  color?: 'primary' | 'secondary' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'filled',
  color = 'primary',
  size,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        'border border-solid px-4 text-sm font-medium leading-none duration-500',
        {
          'py-2': size === 'sm',
          'py-3': size === 'md',
          'py-4': size === 'lg',
          [className!]: className,
          [filledStyles[color]]: variant === 'filled',
          [outlineStyles[color]]: variant === 'outlined',
          [flatStyles[color]]: variant === 'flat',
        },
      )}
    >
      {children}
    </button>
  );
};
