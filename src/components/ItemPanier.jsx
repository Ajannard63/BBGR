import { useState } from 'react';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const ItemPanier = ({ item, isDropdown }) => {
  const [selectedQty, setSelectedQty] = useState('1');  // Valeur par défaut
  const imagePath = `/src/assets/imgs/${item.src}`
  // Utiliser useState pour suivre la quantité
  const [quantity, setQuantity] = useState(1);

  const renderPrix = () => {
    if (typeof item.prix === 'number') {
      return item.prix * quantity + ".00 $";  // Multipliez le prix par la quantité
    }
  };
  const renderPrixV2 = () => {
    return item.prix[selectedQty] + " $";
  };
  return (
    <div className="flex flex-row gap-1 bg-gray-200 p-1 rounded shadow-md">
      <div className="p-3">
        <img src={imagePath} alt={item.title} className="block w-32 h-22 rounded" />
      </div>
      <div className="p-1 flex-grow mt-3">
        <h5 className="font-bold text-sm">{item.title}</h5>
        <p>Quantité : {quantity} </p>

        {isDropdown ? (
          <>
            <span className="text-sm">Prix : {renderPrixV2()} </span>
            <select className='w-10 rounded ml-2' onChange={(e) => setSelectedQty(e.target.value)} value={selectedQty}>
              {Object.keys(item.prix).map((qty) => (
                <option className='' key={qty} value={qty}>
                  {qty}
                </option>
              ))}
            </select>
          </>
        ) : <span className="text-sm">Prix : {renderPrix()} </span>}
      </div>
      {!isDropdown ? (
        <div className="flex flex-col items-center justify-center gap-1">
          <button
            className="bg-blue-500 p-1 rounded text-white"
            onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}
          >
            <FaPlus />
          </button>
          <button
            className={`p-1 rounded text-white ${quantity === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500'}`}
            onClick={() => quantity > 1 && setQuantity(prevQuantity => prevQuantity - 1)}
            disabled={quantity === 1}
          >
            <FaMinus />
          </button>
          <button className="text-red-500 p-1">
            <FaTrash />
          </button>
        </div>
      ) :
        <button className="text-red-500 p-1">
          <FaTrash />
        </button>}
    </div>
  )
}

export default ItemPanier;
