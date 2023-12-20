import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import menuData from "../data/menu.json";
import Panier from "../components/Panier";
import { IoCart, IoLogIn } from "react-icons/io5";
const Detail = ({ isLogin }) => {
  const { id } = useParams();
  const [foundElement, setFoundElement] = useState(null);

  useEffect(() => {
    const elementFound = findElementById(id, menuData);
    setFoundElement(elementFound);
  }, [id]);

  const findElementById = (id, data) => {
    for (const category in data) {
      const elements = data[category];
      const foundElement = elements.find(
        (element) => element.id === parseInt(id)
      );
      if (foundElement) {
        return foundElement;
      }
    }
    return null;
  };

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const changerPage = () => (window.location.href = "/authentification");

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const hoverEffect = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="px-4 md:px-8 xl:mb-32"
    >
      {foundElement ? (
        <div>
          <motion.h1
            variants={itemVariants}
            whileHover={{ ...hoverEffect.hover }}
            className="text-3xl text-center mx-auto mt-6 mb-4 md:mt-12 md:mb-8 xl:text-5xl"
          >
            {foundElement.title}
          </motion.h1>
          <div className="flex flex-col items-center xl:flex-row xl:items-start xl:justify-center w-full mt-8 xl:mt-32 relative" >
            <motion.img
              variants={itemVariants}
              whileHover={{ ...hoverEffect.hover }}
              src={"/src/assets/imgs/" + foundElement.src}
              alt={foundElement.title}
              className="w-80 h-80 rounded-md shadow-md object-cover mb-8 md:w-96 md:h-96 xl:w-2/3 xl:h-auto z-30"
            />
            <motion.div
              variants={itemVariants}
              className="absolute left-10 top-6 w-80 h-80 rounded-md bg-blue-800 z-0 shadow-sm xl:hidden"
            ></motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-800 text-white px-4 py-1.5 text-md rounded-full z-50 tracking-wider relative -top-12 xl:hidden"
            >
              Nouveau!
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ ...hoverEffect.hover }}
              className="bg-gray-200 text-black p-5 rounded-md mx-0 my-0 md:mx-4 md:my-4 xl:mx-8 xl:my-8 xl:p-8 xl:w-1/3"
            >
              <p className="leading-relaxed">{foundElement.description}</p>
              <p className="mt-7">
                Prix: <span className="font-bold">{foundElement.prix} $</span>
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-4 md:mt-8"
          >
            <motion.button
              onClick={isLogin ? toggleCart : changerPage}
              whileHover={{ ...hoverEffect.hover }}
              className="bg-yellow-500 text-lg px-6 py-2 rounded-md shadow-md w-fit md:w-auto flex items-center gap-3"
            >
              {isLogin ? "Ajouter au panier " : "Se connecter pour commander"}
              {isLogin ? (
                <IoCart className="text-xl" />
              ) : (
                <IoLogIn className="text-xl" />
              )}
            </motion.button>
          </motion.div>
        </div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          Élément non trouvé.
        </motion.p>
      )}
      <Panier isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </motion.div>
  );
};

export default Detail;
