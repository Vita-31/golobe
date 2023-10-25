import { FC } from 'react';
import { styleButtonType } from '@/shared/lib/buttonType';
import { styleButtonSize } from '@/shared/lib/buttonSize';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType?: 'filled' | 'outlined' | 'flat';
  buttonColor?: string;
  buttonSize?: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  buttonColor,
  buttonSize,
  className,
  ...props
}) => {
  const type = styleButtonType(buttonType, buttonColor);
  const size = styleButtonSize(buttonSize);

  const classes = [type, size, className].filter(Boolean).join(' ');
  return (
    <button
      className={`border border-solid px-4 text-sm font-medium leading-none duration-500 ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
};
