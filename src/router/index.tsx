import { createBrowserRouter } from "react-router-dom";
import {
  Mentors,
  Message,
  MessageRoom,
  Overview,
  Root,
  Settings,
  Task,
  TaskDetail,
} from "../pages";

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
        path: "task/:taskTitle",
        element: <TaskDetail />,
      },
      {
        path: "mentors",
        element: <Mentors />,
      },
      {
        path: "message",
        element: <Message />,
        children: [
          {
            index: true,
            element: (
              <h1 className="hidden md:block">Default Route Message Room</h1>
            ),
          },
          {
            path: "/message/:roomName",
            element: <MessageRoom />,
          },
        ],
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
