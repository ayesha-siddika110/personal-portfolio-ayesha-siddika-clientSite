import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ViewDetails from "../Pages/Home/Projects/ViewDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },{
            path: "/viewDetails/:id",
            element: <ViewDetails></ViewDetails>,
            loader: ({params})=>fetch(`https://portfolio-website-ayesha-siddika-server.vercel.app/projects/${params.id}`)
        }
      ]
    },
  ]);

export default router;