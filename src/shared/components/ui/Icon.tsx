import { FC } from 'react';

interface IconProps {
  name: string;
}

export const Icon: FC<IconProps> = ({ name }) => {
  return (
    <svg className="absolute right-3 top-4 h-6 w-6 text-black">
      <use xlinkHref={`${name}#arrow-swap`}></use>
    </svg>
  );
};
