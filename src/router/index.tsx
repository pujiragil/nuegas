import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/protectedRoute";
import {
  Mentors,
  Message,
  MessageRoom,
  Overview,
  Root,
  Settings,
  Task,
  TaskDetail,
  Register,
  Login,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
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
  {
    path: "auth/register",
    element: <Register />,
  },
  {
    path: "auth/login",
    element: <Login />,
  },
]);

export default router;
