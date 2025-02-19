import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Deskmenu from "../DeskMenu/Deskmenu";
import companyLogo from "../../assets/obloqa_logo.webp";
import Mobilemenu from "../MobileMenu/mobilemenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  // Outside Click Hide Dropdown (Desktop)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <header
          className='bg-white/20 backdrop-blur-md
          fixed z-50 text-white w-11/12 mx-auto transition-all duration-300  rounded-full'
          style={{ top: "5%", left: "4.15%", right: "5%" }}
        >
          <div className=" mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link to="/">
              <img src={companyLogo} alt="Company Logo" className="h-10" />
            </Link>
            <nav className="text-black hidden lg:flex space-x-6">

              <Link to="/" className="hover:text-[#EC8314]">Home</Link>
              <Link to="/about" className="hover:text-[#EC8314]">About Obliqa</Link>

              {/* Services Dropdown (Desktop) */}
              <div className="relative group" >
                <button
                  className="hover:text-[#EC8314] flex items-center transition-all duration-200 ease-in-out"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Services <span className="ml-1">▼</span>
                </button>



              </div>


              <Link to="/career" className="hover:text-[#EC8314]">Career</Link>
              <Link to="/blog" className="hover:text-[#EC8314]">Blog</Link>
              <Link to="/contact" className="hover:text-[#EC8314]">Contact Us</Link>
            </nav>


            {/* Contact Button (Desktop) */}
            <Link to="/contact" className="hidden lg:block bg-[#1E3F62] px-4 py-2 rounded-full hover:bg-blue-600">
              Get in Touch
            </Link>

            {/* Mobile Menu Button */}

            <Mobilemenu></Mobilemenu>

          </div>

        </header>
        {
          dropdownOpen && <div className="hidden md:block fixed z-50 mx-auto w-[80%] mt-[7.5%]  text-white shadow-lg rounded-lg p-4 max-h-[400px] overflow-y-auto 
    bg-[#1E3F62] scale-95 transition-all duration-300 ease-in-out" style={{ top: "0%", left: "4.15%", right: "5%" }}>
            <Deskmenu></Deskmenu>
          </div>
        }
      </div>
    </>
  );
};

export default Header;
