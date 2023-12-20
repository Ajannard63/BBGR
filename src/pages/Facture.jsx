import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const Facture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const generateConfirmationNumber = () => {
    return Math.floor(Math.random() * 90000) + 10000; // Génère un nombre à 5 chiffres
  };

  return (
    <div>
      <div className=" p-4 text-black flex flex-col justify-center">
        <div className="bg-white px-6 py-4 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-zinc-700  ">Facture</h2>
          <hr className="border-0 h-0.5 bg-zinc-500 mx-auto mt-1 mb-4" />
          <div className="mb-4">
            <h3 className="font-bold text-xl text-blue-600 mb-2 ">Brevages</h3>
            <ul>
              <li className="mb-1">
                Boissons gazeuses: <span className="float-right">3.00 $</span>
              </li>
              <li>
                Thé glacé: <span className="float-right">4.00 $</span>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-xl text-blue-600 mb-2">Entrées</h3>
            <ul>
              <li>
                Salade du Jardin des Laurentides:{" "}
                <span className="float-right">7.00 $</span>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-xl text-blue-600 mb-2">
              Plats principaux
            </h3>
            <ul>
              <li className="mb-1">
                Troislogie du mini poulet burger:{" "}
                <span className="float-right">12.00 $</span>
              </li>
              <li>
                Sandwich du bûcheron:{" "}
                <span className="float-right">15.00 $</span>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-xl text-blue-600 mb-2">Dessert</h3>
            <ul>
              <li>
                Beignes de patate (Pour 3):{" "}
                <span className="float-right">6.00 $</span>
              </li>
            </ul>
          </div>

          <hr className="border-0 h-0.5 bg-zinc-500 mx-auto my-5" />

          <div className="mb-2">
            <strong>Sous-total:</strong>{" "}
            <span className="float-right">47.00 $</span>
          </div>
          <div className="mb-2">
            <strong>TPS:</strong> <span className="float-right">2.35 $</span>
          </div>
          <div className="mb-4">
            <strong>TVQ:</strong> <span className="float-right">4.69 $</span>
          </div>

          <div className="text-xl font-bold mb-4">
            <strong>Total:</strong> <span className="float-right">54.04 $</span>
          </div>
        </div>
        <button
          className="bg-[#FFA200] text-white font-bold text-xl w-1/2 py-2 rounded-md shadow-md mt-4 mx-auto"
          onClick={() => setIsModalOpen(true)}
        >
          Payez
        </button>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 text-black" 
          >
            <motion.div
              className="bg-white rounded-lg p-8 text-center shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-bold">Confirmation de la commande</h2>
              <p className="font-bold text-5xl my-3">
                {generateConfirmationNumber()}
              </p>
              <button
                className="mt-4 bg-blue-500 text-white rounded px-6 py-2"
                onClick={() => setIsModalOpen(false)}
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Facture;
