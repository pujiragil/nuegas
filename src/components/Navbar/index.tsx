import { ReactComponent as Nuegas } from "../../assets/nuegas.svg";
import { ReactComponent as Overview } from "../../assets/overview.svg";
import { ReactComponent as Task } from "../../assets/task.svg";
import { ReactComponent as Mentor } from "../../assets/mentor.svg";
import { ReactComponent as Message } from "../../assets/message.svg";
import { ReactComponent as Setting } from "../../assets/setting.svg";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-16 w-6/12">
      <div className="flex gap-3 items-center">
        <Nuegas />
        <h1 className="font-semibold text-secondary-100 text-[32px]">Nuegas</h1>
      </div>
      <ul className="grid gap-6">
        <li>
          <NavLink href="/" icon={<Overview />} name="Overview" />
        </li>
        <li>
          <NavLink href="/task" icon={<Task />} name="Task" />
        </li>
        <li>
          <NavLink href="/mentors" icon={<Mentor />} name="Mentors" />
        </li>
        <li>
          <NavLink href="/message" icon={<Message />} name="Message" />
        </li>
        <li>
          <NavLink href="/settings" icon={<Setting />} name="Settings" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
