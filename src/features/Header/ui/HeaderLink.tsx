import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import sprites from '@/assets/img/sprites.svg';
import { Link } from '../lib/constants';

export const HeaderLink: FC<Link> = ({ path, icon, name }) => {
  return (
    <li className="w-full md:w-fit">
      <NavLink
        to={path}
        className="link link--active relative flex items-center justify-center gap-1 py-8 text-sm leading-4 text-dark"
      >
        <svg className="icon">
          <use xlinkHref={`${sprites}#${icon}`}></use>
        </svg>
        {name}
      </NavLink>
    </li>
  );
};
