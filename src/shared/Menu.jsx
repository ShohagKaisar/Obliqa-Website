import { Link } from "react-router-dom";

const Menu = ({ onItemClick }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    if (onItemClick) {
      onItemClick();
    }
  };

  const menuItemClass =
    "relative p-2 cursor-pointer text-white hover:text-[#EC8314] transition-all duration-200 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-0 after:h-[2px] after:bg-[#EC8314] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="text-xl text-[#ffffff] flex flex-col gap-5 lg:flex-row lg:space-x-5 items-center">
      <Link to="/">
        <button onClick={handleClick} className={menuItemClass}>
          Home
        </button>
      </Link>

      <Link to="/about">
        <button onClick={handleClick} className={menuItemClass}>
          About
        </button>
      </Link>

      <Link to="/services">
        <button onClick={handleClick} className={menuItemClass}>
          Services
        </button>
      </Link>

      <Link to="/portfolio">
        <button onClick={handleClick} className={menuItemClass}>
          Portfolio
        </button>
      </Link>

      <Link to="/contact">
        <button onClick={handleClick} className={menuItemClass}>
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Menu;
