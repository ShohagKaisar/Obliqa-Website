import { Link } from "react-router-dom";



const Menu = ({ onItemClick }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="text-[#ffffff] flex flex-col gap-5 lg:flex-row lg:space-x-5  items-center ">

      <Link to="/">
        <button
          onClick={handleClick}
          className="p-2 cursor-pointer hover:text-[#EC8314] hover:scale-110 transition-all duration-200 ease-in-out"
        >
          Home
        </button>
      </Link>
      <Link
        to="/about"
      >
        <button
          onClick={handleClick}
          className="p-2 cursor-pointer hover:text-[#EC8314] hover:scale-110 transition-all duration-200 ease-in-out"
        >
          About
        </button>

      </Link>
      <Link
        to="/ServiceDetails"
      >
        <button
          onClick={handleClick}
          className="p-2 cursor-pointer hover:text-[#EC8314] hover:scale-110 transition-all duration-200 ease-in-out"
        >
          Services
        </button>
      </Link>
      <Link
        to="/projects"
      >
               <button
          onClick={handleClick}
          className="p-2 cursor-pointer hover:text-[#EC8314] hover:scale-110 transition-all duration-200 ease-in-out"
        >
          Portfolio
        </button>
      </Link>
      <Link
        to="/contact"
        onClick={handleClick}
        className="hover:text-[#EC8314]"
      >
                <button
          onClick={handleClick}
          className="p-2 cursor-pointer hover:text-[#EC8314] hover:scale-110 transition-all duration-200 ease-in-out"
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Menu;