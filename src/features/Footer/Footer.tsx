import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '@/assets/img/logo-white.svg';
import { Social } from './ui/Social';
import { footerNav } from './lib/constants';

export const Footer: FC = () => {
  return (
    <footer className="flex bg-primary pt-40 text-dark">
      <nav className="footer-container container grid gap-9 py-12 md:gap-6 md:py-16 xl:justify-between">
        <NavLink to="/">
          <img
            src={Logo}
            className="h-10 w-24 object-contain md:w-28"
            alt="Golobe"
            width="1"
            height="1"
          />
        </NavLink>

        <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-5 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-4">
          {footerNav.map((nav, idx) => (
            <div className="flex flex-col gap-4" key={idx}>
              <h2 className="text-base font-semibold leading-5">{nav.title}</h2>
              <ul className="flex flex-col gap-3.5">
                {nav.links.map((link, idx) => (
                  <li className="leading-4" key={idx}>
                    <NavLink to={link.link} className="flex font-medium leading-4 opacity-70">
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:col-start-end-2 md:col-start-1 md:row-start-2 md:row-end-3">
          <Social />
        </div>
      </nav>
    </footer>
  );
};
