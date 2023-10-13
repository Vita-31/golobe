import { FC } from "react";
import { NavLink } from 'react-router-dom';
import sprites from '../../../assets/img/sprites.svg';

interface HeaderLink {
  item: {
    path: string,
    icon: string,
    name: string,
  }
};

export const HeaderLink: FC<HeaderLink> = ({ item }) => {
  return (
    <li className="w-full md:w-fit">
      <NavLink 
        to={item.path} 
        className="link link--active flex items-center gap-1 text-dark text-sm leading-4 relative justify-center"
      >
        <svg className="icon"><use xlinkHref={`${sprites}#${item.icon}`}></use></svg>
        {item.name}
      </NavLink>
    </li>
  );
};
