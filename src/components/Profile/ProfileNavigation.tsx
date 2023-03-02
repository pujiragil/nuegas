import { ReactElement, useState } from "react";
import NavList from "../Navbar/NavList";

const iconWrapper: string =
  "w-11 h-11 p-3 rounded-full border border-primary-300 cursor-pointer hover:bg-primary-300";

const icon: string = "w-6 h-auto object-cover";

const ProfileNavigation = (): ReactElement => {
  const [isOpen, setIsopen] = useState<boolean>(false);

  const handleIsOpen = () => setIsopen((prevOpen) => !prevOpen);

  return (
    <div className="relative flex justify-between items-center order-1 px-6 pt-8 md:order-2 md:p-0">
      <div onClick={handleIsOpen} className={`${iconWrapper} md:hidden`}>
        {isOpen ? (
          <img
            className={icon}
            src="/close-hamburger.svg"
            alt="close-hamburger"
          />
        ) : (
          <img className={icon} src="/hamburger.svg" alt="hamburger" />
        )}
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className={iconWrapper}>
          <img className={icon} src="/notification.svg" alt="notification" />
        </div>
        <img
          className="w-11 h-auto object-cover"
          src="/profile.png"
          alt="profile"
        />
      </div>

      {/* Navbar List */}
      {isOpen && (
        <div className="mobile-navlist">
          <NavList />
        </div>
      )}
    </div>
  );
};

export default ProfileNavigation;
