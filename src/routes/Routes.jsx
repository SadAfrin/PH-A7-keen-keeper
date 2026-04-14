import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Errorpage from "../pages/errorpage/Errorpage";
import Home from "../pages/home/Home";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/friends.json')
      },
      {
        path: "timeline",
        element: <div>Timeline</div>
      },
      {
        path: "stats",
        element: <div>Stats</div>
      },
      {
        path: "friendDetails/:friendParamId",
        element: <FriendDetails />
      }
    ],
    errorElement: <Errorpage />
  }
]);