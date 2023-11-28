import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  borderColor?: string;
  iconPos?: 'right' | 'left';
  right?: ReactNode;
}

export const Input: FC<InputProps> = ({
  className,
  label,
  right,
  iconPos,
  borderColor,
  type,
  placeholder,
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
        placeholder={placeholder || ' '}
        className={classNames(
          'w-full rounded border border-solid bg-white py-4 text-base font-normal leading-5 duration-300 hover:border-primary focus:border-primary focus:outline-0 focus:outline-transparent disabled:cursor-not-allowed disabled:border-gray disabled:opacity-[.38]',
          [borderColor || 'border-gray'],
          {
            'pl-12': iconPos?.includes('left'),
            'pr-12': iconPos?.includes('right'),
            'pl-4': iconPos === 'right',
            'pr-4': iconPos === 'left',
            'pl-4 pr-4': !iconPos,
          },
        )}
      />
      {label && (
        <span className="pointer-events-none absolute left-3 top-4 bg-white px-1 text-base font-normal leading-5 duration-300">
          {label}
        </span>
      )}
      {right}
    </label>
  );
};
