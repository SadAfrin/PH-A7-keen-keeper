import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Errorpage from "../pages/errorpage/Errorpage";
import Home from "../pages/home/Home";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl text-green-900"></span>
      </div>
    ),
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
        element: <FriendDetails />,
        loader: () => fetch('/friends.json'),
      }
    ],
    errorElement: <Errorpage />
  }
]);