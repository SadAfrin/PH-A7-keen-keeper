import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Errorpage from "../pages/errorpage/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>Homepage</div>
      }
    ],
    errorElement: <Errorpage />
  }
]);