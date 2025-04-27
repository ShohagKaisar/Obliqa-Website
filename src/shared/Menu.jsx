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
      <Link
        to="/"
        onClick={handleClick}
        className="hover:text-[#EC8314]"
      >
        Home
      </Link>
      <Link
        to="/about"
        onClick={handleClick}
        className="hover:text-[#EC8314]"
      >
        About
      </Link>
      <Link
        to="/ServiceDetails"
        onClick={handleClick}
        className="hover:text-[#EC8314]"
      >
        Services
      </Link>
      <Link
        to="/projects"
        onClick={handleClick}
        className="hover:text-[#EC8314]"
      >
        Projects
      </Link>
      <Link
        to="/contact"
        onClick={handleClick}
        className="hover:text-[#EC8314]"
      >
        Contact us
      </Link>
    </div>
  );
};

export default Menu;