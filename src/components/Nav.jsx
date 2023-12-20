import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
// import { } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoHome, IoCart, IoLogIn, IoLogOut } from "react-icons/io5";
import Panier from "./Panier";

const Nav = ({ isLogin, setIsLogin }) => {
  const location = useLocation(); // Appel de la fonction useLocation pour obtenir la localisation actuelle
  const isDetailPage = /\/detail\/\d+/.test(location.pathname); // Vérifie si l'URL correspond au modèle "/detail/{id}"

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const toggleIsLogin = (login) => {
    setIsLogin(login);
  };
  return (
    <div className="relative">
      <div className="fixed w-full 0 backdrop-blur-sm shadow z-50">
        <div dir="ltl" className="absolute flex top-2 left-2">
          {isDetailPage || location.pathname === "/facture" ? (
            <Link to="#" onClick={() => window.history.back()}>
              <IoIosArrowBack className="text-5xl " />
            </Link>
          ) : null}
          {isLogin ? (
            <button onClick={() => toggleIsLogin(false)}>
              <IoLogIn className="text-4xl " />
            </button>
          ) : (
            <button onClick={() => toggleIsLogin(true)}>
              <IoLogOut className="text-4xl " />
            </button>
          )}
        </div>
        <div dir="rtl" className="flex gap-5 p-2">
          <Link to={"/authentification"}>
            <IoHome className="text-3xl mr-2 my-1" />
          </Link>
          {isLogin ? (
            <IoCart className="text-3xl my-1" onClick={toggleCart} />
          ) : null}
        </div>
      </div>
      {isCartOpen ? (
        <Panier isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
