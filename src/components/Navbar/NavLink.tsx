import { FC, ReactElement, ReactNode } from "react";
import { NavLink as Link } from "react-router-dom";

export interface NavLinkProps {
  href: string;
  icon: ReactNode;
  name: string;
}

const NavLink: FC<NavLinkProps> = ({ href, icon, name }): ReactElement => {
  return (
    <Link to={href}>
      {({ isActive }) => (
        <span
          className={`${isActive ? "bg-primary-300" : null
            } py-2.5 px-5 flex gap-3 items-center text-secondary-300 rounded-xl hover:bg-primary-300`}
        >
          {icon}
          <p className={`${isActive ? "text-secondary-100" : null}`}>{name}</p>
        </span>
      )}
    </Link>
  );
};

export default NavLink;
