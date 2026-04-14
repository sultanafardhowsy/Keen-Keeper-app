import { createBrowserRouter } from "react-router-dom";

import Errorpage from "../Pages/Errorpage/Errorpage";

import Homepage from "../Pages/Homepage/Homepage";
import RootLayout from "../Layouy/RootLayout";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/stats";


export const router = createBrowserRouter([
  {
    path: '/',
   Component: RootLayout,
    children: [
    
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/timeline',
        Component: Timeline
      },
      {
        path:'/stats',
        Component: Stats
      }
      

    ],
    errorElement: <Errorpage />
  }
])