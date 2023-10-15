import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo-white.svg';
import { Social } from './ui/Social';
import { footerNav } from './constants';

export const Footer: FC = () => {
  return (
    <footer className="flex bg-primary text-dark">
      <nav className="footer-container grid gap-9 md:gap-6 container py-12 md:py-16 xl:justify-between">

        <NavLink to='/'>
          <img src={Logo} className='w-24 h-10 md:w-28 object-contain' alt="Golobe" width="1" height="1" />
        </NavLink>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 w-full xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-4">
            {footerNav.map(nav => (
              <div className="flex flex-col gap-4">
                <h2 className='font-semibold text-base leading-5'>{nav.title}</h2>
                <ul className='flex flex-col gap-3.5'>
                  {nav.links.map(link => (
                    <li className='leading-4'>
                      <NavLink to={link.link} className="flex font-medium leading-4 opacity-70">
                        {link.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      
        <div className="md:col-start-1 md:col-start-end-2 md:row-start-2 md:row-end-3">
          <Social />
        </div>
      </nav>

    </footer>
  );
};
