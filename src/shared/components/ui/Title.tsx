import classNames from 'classnames';
import { FC } from 'react';

interface TitleProps {
  title: string;
  subtitle?: string;
  size?: 'lg' | 'md';
  color?: 'white' | 'black' | 'dark';
  sizeSubtitle?: 'lg' | 'md';
}

export const Title: FC<TitleProps> = ({
  title,
  subtitle,
  size = 'lg',
  color = 'dark',
  sizeSubtitle = 'md',
}) => {
  return (
    <div
      className={classNames('', {
        'text-white': color === 'white',
        'text-dark': color === 'dark',
        'text-black': color === 'black',
      })}
    >
      <h2
        className={classNames('font-semibold', {
          'text-[36px] leading-snug sm:text-[45px]': size === 'lg',
          'text-[26px] leading-7 sm:text-[32px]': size === 'md',
          'mb-4': subtitle,
        })}
      >
        {title}
      </h2>
      {subtitle && (
        <div
          className={classNames('max-w-[850px] font-normal', {
            'text-xl leading-6': sizeSubtitle === 'lg',
            'text-base leading-5': sizeSubtitle === 'md',
          })}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
};
