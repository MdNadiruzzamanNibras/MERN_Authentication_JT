import {
  createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Signup from "../page/Signup";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       {
        index: true,
        element:<Home/>
      },
      {
        path: "/signup",
        element:<Signup/>
      }
     ]
  },
]);