import { FC } from 'react';

interface Burger {
  onClick: () => void;
}

export const Burger: FC<Burger> = ({ ...props }) => {
  return (
    <button className="burger relative h-8 w-8 md:hidden" {...props}>
      <span className="absolute left-0 block h-1 w-full rounded bg-dark"></span>
      <span className="absolute left-0 block h-1 w-full rounded bg-dark"></span>
    </button>
  );
};
