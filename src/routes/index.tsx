import { Navigate, useRoutes } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import OthersLayout from "../layouts/OthersLayout";
import AutoMoto from "../pages/AutoMoto";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Declaration from "../pages/Declaration";
import DevisOption from "../pages/DevisOption";
import Habitation from "../pages/Habitation";
import HomePage from "../pages/HomePage";
import Professionelle from "../pages/Professionelle";
import Sante from "../pages/Sante";
import Services from "../pages/Services";
import { CLIENT_PAGES } from "./paths";

export default function Router() {
    return useRoutes([
      //
      {
        path: "*",
        element: <OthersLayout />,
        children: [
        ],
      },
      //
      {
        path: CLIENT_PAGES.home,
        element: <ClientLayout />,
        children: [
          { element: <HomePage />, index: true },
          { path: CLIENT_PAGES.services, element: <Services /> },
          { path: CLIENT_PAGES.blog, element: <Blog/> },
          { path: CLIENT_PAGES.contact, element: <Contact /> },
          { path: CLIENT_PAGES.declaration, element: <Declaration /> },
          { path: CLIENT_PAGES.devisOption, element: <DevisOption /> },
          { path: CLIENT_PAGES.autoMoto, element: <AutoMoto /> },
          { path: CLIENT_PAGES.sante, element: <Sante /> },
          { path: CLIENT_PAGES.habitation, element: <Habitation /> },
          { path: CLIENT_PAGES.professionelle, element: <Professionelle /> },
        ],
      },

    
      //
      { path: "*", element: <Navigate to="/404" replace /> },
    ]);
  }