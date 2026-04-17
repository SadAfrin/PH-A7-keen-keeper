import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Errorpage from "../pages/errorpage/Errorpage";
import Home from "../pages/home/Home";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Timeline from "../pages/timeline/Timeline";
import { getAllFromLocalDB } from "../utils/localDB";
import Stats from "../pages/stats/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // hydrateFallbackElement: (
    //   <div className="flex justify-center items-center h-screen">
    //     <span className="loading loading-spinner loading-xl text-green-900"></span>
    //   </div>
    // ),
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/friends.json')
        // loader: async () => {
        // await new Promise(res => setTimeout(res, 3000));
        // return fetch('/friends.json');}
      },
      {
        path: "timeline",
        element: <Timeline />,
        loader: () => {
        return getAllFromLocalDB();}
      },
      {
        path: "stats",
        element: <Stats />,
        loader: () => {
        return getAllFromLocalDB();}
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