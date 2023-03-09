import { ReactElement } from "react";
import { Task } from "../components/Card";

const taskSliders: ReactElement[] = [
  <Task
    thumbnail="/task.png"
    title="Creating Awesom Mobile Apps"
    category="UI UX Design"
    progress={75}
    deadline={1}
  />,
  <Task
    thumbnail="/task.png"
    title="Creating Awesom Mobile Apps"
    category="UI UX Design"
    progress={75}
    deadline={1}
  />,
  <Task
    thumbnail="/task.png"
    title="Creating Awesom Mobile Apps"
    category="UI UX Design"
    progress={75}
    deadline={1}
  />,
  <Task
    thumbnail="/task.png"
    title="Creating Awesom Mobile Apps"
    category="UI UX Design"
    progress={75}
    deadline={1}
  />,
];

export { taskSliders };
