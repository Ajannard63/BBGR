import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <a href="mailto:info@restaurantboreal.com" className="hover:text-gray-300">info@restaurantboreal.com</a>
          <span className="mx-2">|</span>
          <a href="tel:819-234-5678" className="hover:text-gray-300">819-234-5678</a>
        </div>
        <div className="mb-2 md:mb-0">
          <a href="http://www.restaurantboreal.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">www.restaurantboreal.com</a>
        </div>
        <div className="flex mt-2 md:mt-0">
          <button className="text-xs uppercase px-3 py-1 border border-gray-400 rounded hover:border-white">FR/EN</button>
        </div>
        <div className="flex mt-2 md:mt-0">
          <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-1">
            <FaFacebookF className="h-6 w-6 fill-current hover:text-gray-300" />
          </a>
          <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-1">
            <FaInstagram className="h-6 w-6 fill-current hover:text-gray-300" />
          </a>
          <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" className="mx-1">
            <FaYoutube className="h-6 w-6 fill-current hover:text-gray-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
