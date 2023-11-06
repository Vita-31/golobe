import { FC } from 'react';
import classNames from 'classnames';
import sprites from '@/assets/img/sprites.svg';
import { filledStyles, outlineStyles, flatStyles } from './lib/button-styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'flat';
  color?: 'primary' | 'secondary' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconClassName?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'filled',
  color = 'primary',
  size,
  className,
  icon,
  iconClassName,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        'flex items-center justify-center gap-1 border border-solid px-4 text-sm font-medium leading-none duration-500',
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
      {icon && (
        <svg
          className={classNames('h-6 w-6', {
            [iconClassName!]: iconClassName,
          })}
        >
          <use xlinkHref={`${sprites}#${icon}`}></use>
        </svg>
      )}
      {children}
    </button>
  );
};
