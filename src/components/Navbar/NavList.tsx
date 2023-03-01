import NavLink from "./NavLink";
import { Overview, Task, Mentor, Message, Setting } from "../Icons";

const NavList = () => {
  return (
    <ul className="grid gap-6">
      <li>
        <NavLink href="/" icon={Overview} name="Overview" />
      </li>
      <li>
        <NavLink href="/task" icon={Task} name="Task" />
      </li>
      <li>
        <NavLink href="/mentors" icon={Mentor} name="Mentors" />
      </li>
      <li>
        <NavLink href="/message" icon={Message} name="Message" />
      </li>
      <li>
        <NavLink href="/settings" icon={Setting} name="Settings" />
      </li>
    </ul>
  );
};

export default NavList;
