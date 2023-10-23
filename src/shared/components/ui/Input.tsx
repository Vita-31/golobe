import { FC } from 'react';
import { inputIconStyle } from '../../lib/inputIcon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  iconPos?: 'right' | 'left' | 'left right';
}

export const Input: FC<InputProps> = ({ className, label, icon, iconPos, ...props }) => {
  const inputIconPos = inputIconStyle(iconPos, icon);
  const classes = [inputIconPos].filter(Boolean).join(' ');
  return (
    <label className={`${className || ''} field relative block`}>
      <input
        {...props}
        placeholder=" "
        className={`border-gray w-full rounded border border-solid bg-white text-base font-normal leading-5 duration-300 hover:border-primary focus:border-primary focus:outline-none ${classes}`}
      />
      {label && (
        <span className="text-lanel pointer-events-none absolute left-3 top-4 bg-white px-1 text-base font-normal leading-5 duration-300">
          {label}
        </span>
      )}
      {icon && (
        <svg className="absolute right-3 top-4 h-6 w-6 text-black">
          <use xlinkHref={icon}></use>
        </svg>
      )}
    </label>
  );
};
