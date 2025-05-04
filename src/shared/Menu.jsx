import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
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

            {/* <HashLink
                  to="/#about-us"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <button>About OBLIQA</button>
                </HashLink> */}
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
        Portfolio
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