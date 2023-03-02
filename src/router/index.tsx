import { createBrowserRouter } from "react-router-dom";
import { Overview, Root } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
    ],
  },
]);

export default router;
