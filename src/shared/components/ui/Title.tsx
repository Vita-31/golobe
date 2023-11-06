import classNames from 'classnames';
import { FC } from 'react';

interface TitleProps {
  title: string;
  subtitle?: string;
  size?: 'lg' | 'md';
}

export const Title: FC<TitleProps> = ({ title, subtitle, size = 'lg' }) => {
  return (
    <div>
      <h2
        className={classNames('font-semibold leading-7', {
          'text-[36px] sm:text-[45px]': size === 'lg',
          'text-[26px] sm:text-[32px]': size === 'md',
          'mb-4': subtitle,
        })}
      >
        {title}
      </h2>
      {subtitle && <div className="text-base font-normal leading-5">{subtitle}</div>}
    </div>
  );
};
