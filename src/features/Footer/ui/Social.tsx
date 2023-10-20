import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { socials } from '../lib/constants';

export const Social: FC = () => {
  return (
    <ul className="flex items-center gap-6 md:gap-3">
      {socials.map((social) => (
        <li key={social.name}>
          <NavLink to={social.link} target="_blank">
            <i
              className={`ai-${social.name}-fill flex text-2xl text-dark duration-500 hover:text-white md:text-xl`}
            ></i>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
