import { FC } from 'react';
import classNames from 'classnames';
import sprites from '@/assets/img/sprites.svg';
import { filledStyles, outlineStyles, linkStyles } from './lib/button-styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'link';
  color?: 'primary' | 'secondary' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  bg?: 'white' | 'transparent' | 'dark' | 'primary' | 'secondary';
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
        'flex items-center justify-center gap-1 border border-solid px-4 text-sm font-medium leading-none duration-500 disabled:cursor-not-allowed',
        {
          'py-2': size === 'sm',
          'py-3': size === 'md',
          'py-4': size === 'lg',
          [className!]: className,
          [filledStyles[color]]: variant === 'filled',
          [outlineStyles[color]]: variant === 'outlined',
          [linkStyles[color]]: variant === 'link',
        },
      )}
    >
      {icon && (
        <svg
          className={classNames('h-6 w-6 duration-0', {
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
