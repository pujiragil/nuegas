import NavList from "./NavList";
import nuegas from "../../assets/nuegas.svg";

const Navbar = () => {
  return (
    <>
      <nav className="hidden md:flex flex-col gap-16 p-8 border-r border-primary-300 bg-primary-100 w-fit">
        <div className="flex gap-3 items-center">
          <img className="w-10 h-10 object-cover" src={nuegas} alt="nuegas" />
          <h1 className="font-semibold text-secondary-100 text-[32px]">
            Nuegas
          </h1>
        </div>
        <NavList />
      </nav>
    </>
  );
};

export default Navbar;
