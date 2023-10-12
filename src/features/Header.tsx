import { FC } from 'react';
import Logo from '../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import sprites from '../assets/img/sprites.svg';

export const Header: FC = () => {
  return (
    <header className="fixed top-0 inset-x-0">
      <nav className='flex items-center justify-between gap-5 container pt-5'>
        <ul className='flex items-center gap-8'>
          <li>
            <NavLink to="/" className="link flex items-center gap-1 text-dark text-sm pb-8 relative">
              <svg className="icon"><use xlinkHref={`${sprites}#airplane`}></use></svg>
              Find Flight
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="link flex items-center gap-1 text-dark text-sm pb-8 relative">
              <svg className="icon"><use xlinkHref={`${sprites}#bed`}></use></svg>
              Find Stays
            </NavLink>
          </li>
        </ul>

        <img src={Logo} className='w-28 h-9 object-contain' alt="Golobe" />

        <div className="flex gap-5">

        </div>
      </nav>
    </header>
  );
};
