import { AiOutlineClose } from "react-icons/ai";
import ItemPanier from "./itemPanier";
import { Link } from "react-router-dom";
import menuData from "../data/menu.json";

const Panier = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* <div className="fixed inset-0 bg-black bg-opacity-50"></div> */}
          <div className="fixed right-0 top-0 h-full w-full overflow-y-auto bg-blue-500 text-black shadow-lg p-4 z-50">
            
            <button
              className="absolute top-4 right-4 text-white hover:text-red-500 text-3xl"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose />
            </button>
            <h3 className="text-3xl font-semibold mb-4 text-center text-white ">
              Panier
            </h3>
            <section className="bg-white p-3 rounded shadow">
              <div className="mt-2">
                <h4 className="text-lg mb-2 text-center font-bold">Entrées</h4>
                <ItemPanier item={menuData.entrees[0]} />
              </div>
              <div className="mt-5">
                <h4 className="text-lg mb-2 text-center font-bold">
                  Plats principaux
                </h4>
                <div>
                  <ItemPanier item={menuData.plats[1]} />
                </div>
                <div className="mt-3">
                  <ItemPanier item={menuData.plats[2]} />
                </div>
              </div>
              <div className="mt-5 mb-3">
                <h4 className="text-lg mb-2 text-center font-bold">Dessert</h4>
                <ItemPanier item={menuData.dessert[0]} isDropdown={true} />
              </div>
            </section>
            <Link
              to="/facture"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-orange-500 text-white rounded-md w-fit block mt-3 mx-auto shadow font-bold"
            >
              {" "}
              Passer la commande{" "}
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Panier;
