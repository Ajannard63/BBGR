import { motion } from 'framer-motion';
import MenuSection from '../components/MenuSection';

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 70, 
      damping: 10 
    }
  }
};

const Menu = () => {
  return (
    <>
      <motion.h1
        className="text-4xl text-center font-bold mt-2"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        Notre menu !
      </motion.h1>
      <MenuSection />
    </>
  );
};

export default Menu;
