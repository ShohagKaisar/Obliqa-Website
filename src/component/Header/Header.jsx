import { Link } from "react-router-dom";
import companyLogo from "../../assets/logo.svg";
import whatsappIcon from "../../assets/whatsapp_icon.png"
import Mobilemenu from "../MobileMenu/mobilemenu";
import Menu from "../../shared/Menu";


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
              <img src={companyLogo} alt="Company Logo" className="h-10" />
            </Link>

            {/* Desktop Menubar */}
            <nav className="hidden lg:block">
              <Menu></Menu>
            </nav>

            {/* Right side Mail Icon */}
            {/* <NavLink to={'/contact'} onClick={() => window.scrollTo(0, 0)} className="hidden lg:block px-4 hover:text-[#EC8314] py-2" href="mailto:contact@obliqa.com"></NavLink> */}
            <a href="https://wa.me/message/RAFUAZZGUL4KF1" target="_blank" className="hidden lg:block"><button><img className="h-7" src={whatsappIcon} alt="" /></button> </a>
            {/* Mobile Menu Button */}
            <Mobilemenu></Mobilemenu>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;