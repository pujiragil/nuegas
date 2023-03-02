import { useState } from "react";
import NavList from "./NavList";
import NavProfile from "./NavProfile";

const iconWrapper: string =
  "w-11 h-11 p-3 rounded-full border border-primary-300 cursor-pointer hover:bg-primary-300";

const icon: string = "w-6 h-auto object-cover cursor-pointer";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="px-6 py-8 border-b border-primary-300 relative md:hidden">
      <div className="flex justify-between">
        {/* Hamburger Navigation */}
        <div
          className={iconWrapper}
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        >
          {isOpen ? (
            <img
              className={icon}
              src="close-hamburger.svg"
              alt="close-hamburger"
            />
          ) : (
            <img className={icon} src="/hamburger.svg" alt="hamburger" />
          )}
        </div>

        {/* Profile Navigation */}
        <NavProfile />
      </div>

      {/* Navbar Mobile List */}
      {isOpen && (
        <div className="mobile-navlist">
          <NavList />
        </div>
      )}
    </nav>
  );
};

export default NavMobile;
