import { useState } from "react";
import NavList from "./NavList";

const iconStyle: string =
  "w-11 h-11 p-3 rounded-full border border-primary-300 cursor-pointer hover:bg-primary-300";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="px-6 py-8 border-b border-primary-300 relative md:hidden">
      <div className="flex justify-between">
        {/* Hamburger Navigation */}
        <div
          className={iconStyle}
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        >
          {isOpen ? (
            <img
              className="w-6 h-auto object-cover cursor-pointer"
              src="close-hamburger.svg"
              alt="close-hamburger"
            />
          ) : (
            <img
              className="w-6 h-auto object-cover cursor-pointer"
              src="/hamburger.svg"
              alt="hamburger"
            />
          )}
        </div>

        {/* Profile Navigation */}
        <div className="flex gap-4 items-center">
          <div className={iconStyle}>
            <img
              className="w-auto object-cover"
              src="notification.svg"
              alt="notification"
            />
          </div>

          <img
            className="w-11 h-auto object-cover"
            src="/profile.png"
            alt="profile"
          />
        </div>
      </div>

      {isOpen && (
        <div className="mobile-navlist">
          <NavList />
        </div>
      )}
    </nav>
  );
};

export default NavMobile;
