import { FC } from "react";
import { NavLink } from "react-router-dom";
import { socials } from "../constants";

export const Social: FC = () => {
  return (
    <ul className="flex items-center gap-6 md:gap-3">
      {socials.map(social => <li>
        <NavLink to={social.link} target="_blank">
          <i className={`ai-${social.name}-fill flex text-2xl md:text-xl text-dark hover:text-white duration-500`}></i>
        </NavLink>
      </li>)}
    </ul>
  );
};
