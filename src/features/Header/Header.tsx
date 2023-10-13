import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderLink } from './ui/HeaderLink.tsx';

import Logo from '../../assets/img/logo.svg';

import { links } from './constants.ts';
import { Burger } from './ui/Burger.tsx';

export const Header: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header fixed top-0 inset-x-0 ${open ? 'open' : ''}`}>
      <nav className='flex items-center gap-3 container py-4 md:py-5 md:justify-between'>

        <ul className='nav fixed left-4 right-4 top-32 opacity-0 bg-white items-center gap-8 flex p-10 rounded-md pointer-events-none duration-500 md:static md:opacity-100 md:pointer-events-auto md:shadow-none md:p-0'>
          {links.map(link => <HeaderLink key={link.name} item={link} />)}
        </ul>

        <NavLink to='/'>
          <img src={Logo} className='w-24 h-9 md:w-28 object-contain' alt="Golobe" />
        </NavLink>

        <div className="flex items-center gap-5 ml-auto md:m-0">
          <NavLink to='/login' className="link font-semibold text-sm leading-4">Login</NavLink>

          <NavLink 
            to='/sign-up' 
            className="bg-dark py-3.5 px-5 font-semibold text-sm leading-4 text-white rounded-lg 
                       hover:bg-primary hover:text-dark duration-300
                       md:py-4 md:px-6"
          >
            Sign up
          </NavLink>

          <Burger onClick={() => open ? setOpen(false) : setOpen(true)} />
        </div>
      </nav>
    </header>
  );
};
