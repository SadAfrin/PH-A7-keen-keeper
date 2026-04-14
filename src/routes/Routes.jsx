import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Errorpage from "../pages/errorpage/Errorpage";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "timeline",
        element: <div>Timeline</div>
      },
      {
        path: "stats",
        element: <div>Stats</div>
      }
    ],
    errorElement: <Errorpage />
  }
]);