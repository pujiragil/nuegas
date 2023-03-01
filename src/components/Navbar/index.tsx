import { ReactComponent as Nuegas } from "../../assets/nuegas.svg";
import NavList from "./NavList";
import NavMobile from "./NavMobile";

const Navbar = () => {
  return (
    <>
      {/* Navbar for tablet and desktop */}
      <nav className="hidden md:flex flex-col gap-16 p-8 border-r border-primary-300 bg-primary-100 w-fit">
        <div className="flex gap-3 items-center">
          <Nuegas className="w-10 h-10" />
          <h1 className="font-semibold text-secondary-100 text-[32px]">
            Nuegas
          </h1>
        </div>
        <NavList />
      </nav>
      {/* Navbar for mobile */}
      <NavMobile />
    </>
  );
};

export default Navbar;
