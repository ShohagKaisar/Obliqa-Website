import { Link } from "react-router-dom";

const Menu = ({ onItemClick }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="text-[#ffffff] flex flex-col lg:flex-row space-x-6 space-y-5">
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