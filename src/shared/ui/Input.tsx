import { FC } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input className={className} {...props} />;
};
