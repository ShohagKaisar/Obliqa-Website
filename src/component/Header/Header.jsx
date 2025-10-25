import { Link } from "react-router-dom";
import companyLogo from "../../assets/logo.svg";
import Mobilemenu from "../MobileMenu/mobilemenu";
import Menu from "../../shared/Menu";
import { FaWhatsapp } from "react-icons/fa";


const Header = () => {

  return (
    <>
      <div className="relative">
        <header
          className='bg-black/30 backdrop-blur-md
          fixed z-50 text-white w-11/12 mx-auto transition-all duration-300  rounded-full'
          style={{ top: "3%", left: "4.15%", right: "5%" }}
        >
          <div className="mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link to="/">
              <img src={companyLogo} alt="Company Logo" className="h-12 font-bold" />
            </Link>

            {/* Desktop Menubar */}
            <nav className="hidden lg:block">
              <Menu></Menu>
            </nav>
            <a href="https://wa.me/message/RAFUAZZGUL4KF1" target="_blank" className="hidden lg:block mt-1"><button className="cursor-pointer hover:text-white hover:scale-110 duration-300 rounded-full text-orange-400 text-4xl"><FaWhatsapp /></button> </a>

            {/* Mobile Menu Button */}
            <Mobilemenu></Mobilemenu>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;