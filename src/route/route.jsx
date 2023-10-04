import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import NewsCatagory from "../components/NewsCatagories/NewsCatagory";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/catagories/:id",
        element: <NewsCatagory></NewsCatagory>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default route;
