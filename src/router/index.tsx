import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Root } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;