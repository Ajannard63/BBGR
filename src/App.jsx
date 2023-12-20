// import { useState } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Menu from "./pages/Menu.jsx";
import Commande from "./pages/Commande.jsx";
import Profil from "./pages/Profil";
import Layout from "./components/Layout";
import Facture from "./pages/Facture";
import Detail from "./pages/Detail";
import Authentification from "./pages/Authentification";
import { useState } from "react";

// Importation des images
import beignes from './assets/imgs/beignes.jpg';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const toggleIsLogin = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };
  const routes = [
    {
      path: "",
      element: <Layout isLogin={isLogin} setIsLogin={toggleIsLogin}/>,
      children: [
        {
          element: <Navigate to="/menu" replace />,
          index: true,
        },
        {
          path: "menu",
          element: <Menu />,
        },
        {
          path: "detail/:id",
          element: <Detail isLogin={isLogin}/>,
        },
        {
          path: "facture",
          element: <Facture />,
        },
        {
          path: "profil",
          element: <Profil />,
        },
        {
          path: "contact",
          element: <Commande />,
        },
      ],
    },
    {
      path: "authentification",
      element: (
        <Authentification isLogin={isLogin} setIsLogin={toggleIsLogin} />
      ),
      index: true,
    },
    {
      path: "*",
      element: <Navigate to="/authentification" replace />,
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
