import { createBrowserRouter } from "react-router-dom";
import { Mentors, Message, Overview, Root, Settings, Task } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "task",
        element: <Task />,
      },
      {
        path: "mentors",
        element: <Mentors />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
