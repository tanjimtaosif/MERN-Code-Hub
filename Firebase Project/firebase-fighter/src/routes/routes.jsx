import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import { createBrowserRouter } from "react-router";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
 
export const router = 
createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
       {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      }
    ]
  }
]);