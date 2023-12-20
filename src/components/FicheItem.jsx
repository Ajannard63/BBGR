import { AiFillInfoCircle } from "react-icons/ai"
import { Link } from 'react-router-dom';
const FicheItem = ({ item }) => {
  const maxLength = 150;
  const description = item.description.length > maxLength
    ? item.description.substring(0, maxLength) + " [...]"
    : item.description;

  const renderPrix = () => {
    if (typeof item.prix === 'number') {
      return <p className='pl-9 text-sm '>{item.prix}.00 $</p>;
    } else if (typeof item.prix === 'object') {
      return (
        <ul>
          {Object.keys(item.prix).map((key) => (
            <li key={key} className='pl-9 text-sm mt-2'>
              {key}: {item.prix[key]} $
            </li>
          ))}
        </ul>
      );
    }
  };
  const imagePath = `/src/assets/imgs/${item.src}`


  return (
    <div className="w-full px-3 relative flex flex-col justify-center text-zinc-900">
      <div className="relative flex right-3">
        <img src={imagePath} alt={item.title} className="block w-40 h-36 relative left-8 -top-7 rounded-md shadow-md object-cover" />
        <div className='bg-gray-300 p-3 rounded-md min-w-min w-72 shadow-md pb-7'>
          <h3 className='pl-9 font-bold text-md w-full'>{item.title}</h3>
          <p className='pl-9 text-sm mt-2 w-full'>{description}</p> 
          <span className="pl-9 text-sm mt-1">{renderPrix()}</span>
        </div>
      </div>
      
      <Link to={`/detail/${item.id}`} className="flex justify-center items-center gap-2 mx-auto bg-blue-700 hover:bg-blue-800 active:bg-blue-600 shadow-lg w-32 rounded-md text-white font-bold py-1  relative left-16 xl:left-6 -top-3">
        Détail <AiFillInfoCircle />
      </Link>
    </div>
  )
}
export default FicheItem; 