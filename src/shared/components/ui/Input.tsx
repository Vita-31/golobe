import { FC } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: FC<InputProps> = ({ className, label, ...props }) => {
  return (
    <label className={`${className || ''} mb-2 block w-full`}>
      {label && <span>{label}</span>}
      <input {...props} />
    </label>
  );
};
