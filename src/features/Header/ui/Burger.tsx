import { FC } from "react";

interface Burger {
  onClick: () => void
}

export const Burger: FC<Burger> = ({ ...props }) => {
  return (
    <button className="burger md:hidden w-8 h-8 relative" {...props}>
      <span className="w-full h-1 bg-dark block rounded absolute left-0"></span>
      <span className="w-full h-1 bg-dark block rounded absolute left-0"></span>
    </button>
  );
};
