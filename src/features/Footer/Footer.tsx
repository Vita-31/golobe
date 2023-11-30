import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '@/assets/img/logo-white.svg';
import { Social } from './ui/Social';
import { footerNav } from './lib/constants';

export const Footer: FC = () => {
  return (
    <footer className="flex bg-primary pt-40 text-dark">
      <nav className="container flex flex-col gap-9 py-12 md:gap-6 md:py-16 lg:flex-row lg:justify-between lg:gap-36">
        <div className="flex flex-col gap-9 md:gap-6">
          <NavLink to="/">
            <img
              src={Logo}
              className="h-10 w-24 object-contain md:w-28"
              alt="Golobe"
              width="1"
              height="1"
            />
          </NavLink>
          <Social />
        </div>

        <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-6 lg:max-w-[970px]">
          {footerNav.map((nav, idx) => (
            <div className="flex flex-col gap-4" key={idx}>
              <h2 className="text-base font-semibold leading-5">{nav.title}</h2>
              <ul className="flex flex-col gap-3.5">
                {nav.links.map((link, idx) => (
                  <li className="leading-4" key={idx}>
                    <NavLink
                      to={link.link}
                      className="relative font-medium leading-4 opacity-70 duration-300 duration-300 after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-px after:w-full after:scale-0 after:bg-white after:duration-300 hover:text-white hover:after:scale-100"
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </footer>
  );
};
