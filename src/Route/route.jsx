import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Membership from "../Pages/Membership/Membership";
import News from "../Pages/LatestNews/News";
import About from "../Pages/About/About";
import DashBoard from "../Pages/DashBoard/DashBoard";
import DashLayout from "../Layout/DashLayout.jsx/DashLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true, Component : Home},
      {path:"/member", Component : Membership},
      {path:"/news",Component : News},
      {path:"/about",Component:About}
    ]
  },
  {
    path:"/dashboard",
    Component:DashLayout
  }
]);
