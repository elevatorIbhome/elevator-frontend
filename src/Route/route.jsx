import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Membership from "../Pages/Membership/Membership";
import News from "../Pages/LatestNews/News";
import About from "../Pages/About/About";
import DashBoard from "../Pages/DashBoard/DashBoard";
import DashLayout from "../Layout/DashLayout.jsx/DashLayout";
import Member from "../Pages/DashBoard/Member/Member";
import History from "../Pages/DashBoard/History/History";
import Profile from "../Pages/DashBoard/Profile/Profile";
import Download from "../Pages/DashBoard/Download/Download";
import Login from "../AuthPage/LoginPage/Login";
import Signup from "../AuthPage/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Payment from "../StripePayment/Payment";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/member", Component: Membership },
      { path: "/news", Component: News },
      { path: "/about", Component: About },
    ]
  },

  {
    path: "/login",
    Component: Login
  },
  {
    path: "/signup",
    Component: Signup
  },

  {
    path: "/dashboard",
    element: <PrivateRoute> <DashLayout></DashLayout></PrivateRoute>,
    children: [
      { index: true, Component: Member },
      { path: "history", Component: History },
      { path: "profile", Component: Profile },
      { path: "downloads", Component: Download },
      { path: "payment/:id", Component: Payment },
    ]
  }
]);
