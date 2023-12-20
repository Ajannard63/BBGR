import { motion } from "framer-motion";
import FicheItem from "./FicheItem.jsx";
import menuData from "../data/menu.json";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const MenuSection = () => {
  return (
    <motion.div
      className="flex flex-col xl:bg-zinc-500 mt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Grid layout appliqué avec xl:grid et xl:grid-cols-2 pour les écrans de type xl */}
      <motion.div className="mt-8 w-full xl:bg-zinc-400 xl:shadow-md xl:py-8  xl:mt-0" variants={itemVariants}>
        <h2 className="text-2xl font-bold text-center xl:text-3xl ">Entrées</h2>
        <div className="mt-14 grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-14 mx-auto max-w-6xl">
          {menuData.entrees.map((item) => (
            <FicheItem key={item.title} item={item} />
          ))}
        </div>
      </motion.div>

      <motion.div className="mt-8  w-full " variants={itemVariants}>
        <h2 className="text-2xl font-bold text-center xl:text-3xl">Plats principaux</h2>
        <div className="mt-14 grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-14 mx-auto max-w-6xl">
          {menuData.plats.map((item) => (
            <FicheItem key={item.title} item={item} />
          ))}
        </div>
      </motion.div>

      <motion.div className="mt-8  w-full xl:bg-zinc-400 xl:shadow-md xl:py-8 " variants={itemVariants}>
        <h2 className="text-2xl font-bold text-center xl:text-3xl ">Le dessert</h2>
        <div className="mt-14 grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-14 mx-auto max-w-6xl">
          {menuData.dessert.map((item) => (
            <FicheItem key={item.title} item={item} />
          ))}
        </div>
      </motion.div>

      <motion.div className="my-8  w-full" variants={itemVariants}>
        <h2 className="text-2xl font-bold text-center xl:text-3xl">Brevages</h2>
        <div className="mt-14 grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-14 mx-auto max-w-6xl">
          {menuData.brevages.map((item) => (
            <FicheItem key={item.title} item={item} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MenuSection;
