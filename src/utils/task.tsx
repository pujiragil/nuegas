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

type List = {
  day: string;
  task: number;
};

type TaskList = {
  "this week": Array<List>;
  "last week": Array<List>;
  default: Array<List>;
};

const taskList: TaskList = {
  "this week": [
    { day: "S", task: 4 },
    { day: "M", task: 12 },
    { day: "T", task: 5 },
    { day: "W", task: 7 },
    { day: "TH", task: 3 },
    { day: "F", task: 6 },
    { day: "ST", task: 2 },
  ],
  "last week": [
    { day: "S", task: 7 },
    { day: "M", task: 2 },
    { day: "T", task: 6 },
    { day: "W", task: 4 },
    { day: "TH", task: 12 },
    { day: "F", task: 3 },
    { day: "ST", task: 3 },
  ],
  default: [
    { day: "S", task: 0 },
    { day: "M", task: 0 },
    { day: "T", task: 0 },
    { day: "W", task: 0 },
    { day: "TH", task: 0 },
    { day: "F", task: 0 },
    { day: "ST", task: 0 },
  ],
};

export { taskSliders, taskList };
