import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '@/assets/img/logo.svg';
import { links } from './lib/constants';
import { HeaderLink } from './ui/HeaderLink.tsx';
import { Burger } from './ui/Burger.tsx';

export const Header: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header fixed inset-x-0 top-0 z-10 bg-white ${open ? 'open' : ''}`}>
      <nav className="container flex items-center gap-3 py-4 md:justify-between md:py-5">
        <ul className="nav pointer-events-none fixed left-4 right-4 top-32 flex items-center gap-8 rounded-md bg-white p-10 opacity-0 duration-500 md:pointer-events-auto md:static md:p-0 md:opacity-100 md:shadow-none">
          {links.map((link) => (
            <HeaderLink key={link.name} {...link} />
          ))}
        </ul>

        <NavLink to="/">
          <img src={Logo} className="h-9 w-24 object-contain md:w-28" alt="Golobe" />
        </NavLink>

        <div className="ml-auto flex items-center gap-5 md:m-0">
          <NavLink to="/login" className="link text-sm font-semibold leading-4">
            Login
          </NavLink>

          <NavLink
            to="/sign-up"
            className="
              rounded-lg
              bg-dark
              px-5
              py-3.5
              text-sm
              font-semibold
              leading-4
              text-white
              duration-300
              hover:bg-primary
              hover:text-dark
              md:px-6
              md:py-4
            "
          >
            Sign up
          </NavLink>

          <Burger onClick={() => setOpen((o) => !o)} />
        </div>
      </nav>
    </header>
  );
};
