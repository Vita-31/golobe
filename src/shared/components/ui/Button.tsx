import { FC } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType?: 'filled' | 'outlined' | 'flat';
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};
