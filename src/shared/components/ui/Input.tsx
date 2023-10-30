import { FC } from 'react';
import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  type?: string;
  borderColor?: string;
  iconPos?: 'right' | 'left' | 'left right';
}

export const Input: FC<InputProps> = ({
  className,
  label,
  icon,
  iconPos,
  borderColor,
  type,
  ...props
}) => {
  return (
    <label
      className={classNames('field relative block w-full', {
        [className!]: className,
      })}
    >
      <input
        {...props}
        type={type || 'text'}
        className={classNames(
          'w-full rounded border border-solid bg-white py-4 text-base font-normal leading-5 duration-300 hover:border-primary focus:border-primary focus:outline-none',
          [borderColor || 'border-gray'],
          {
            'pl-12': iconPos?.includes('left'),
            'pr-12': iconPos?.includes('right'),
            'pl-4': iconPos === 'right',
            'pr-4': iconPos === 'left',
          },
        )}
      />
      {label && (
        <span className="pointer-events-none absolute left-3 top-4 bg-white px-1 text-base font-normal leading-5 duration-300">
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
