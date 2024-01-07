import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Signup from "../page/Signup";
import Login from "../page/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
