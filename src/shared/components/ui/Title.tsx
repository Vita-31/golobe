import classNames from 'classnames';
import { FC } from 'react';

interface TitleProps {
  title: string;
  subtitle?: string;
  size?: 'h1' | 'h2';
  color?: 'white' | 'black' | 'dark';
  sizeSubtitle?: 'lg' | 'md';
}

export const Title: FC<TitleProps> = ({
  title,
  subtitle,
  size = 'h1',
  color = 'dark',
  sizeSubtitle = 'md',
}) => {
  const Component = size === 'h1' ? 'h1' : 'h2';

  return (
    <div
      className={classNames({
        'text-white': color === 'white',
        'text-dark': color === 'dark',
        'text-black': color === 'black',
      })}
    >
      <Component
        className={classNames('font-semibold', {
          'text-h1 leading-snug': size === 'h1',
          'text-[26px] leading-7 sm:text-[32px]': size === 'h2',
          'mb-4': subtitle,
        })}
      >
        {title}
      </Component>
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
