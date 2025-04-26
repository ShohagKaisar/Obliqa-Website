import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Deskmenu from "../DeskMenu/Deskmenu";
import companyLogo from "../../assets/logo.svg";
import { Mail } from 'lucide-react';
import Mobilemenu from "../MobileMenu/mobilemenu";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Outside Click Hide Dropdown (Desktop)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
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
          className='bg-black/20 backdrop-blur-md
          fixed z-50 text-white w-11/12 mx-auto transition-all duration-300  rounded-full'
          style={{ top: "5%", left: "4.15%", right: "5%" }}
        >
          <div className=" mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link to="/">
              <img src={companyLogo} alt="Company Logo" className="h-10" />
            </Link>
            <nav className="text-[#ffffff] hidden lg:flex space-x-6">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#EC8314]">Home</Link>
              <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#EC8314]">About Obliqa</Link>

              {/* Services Dropdown (Desktop) */}
              {/* <div className="relative group" ref={dropdownRef}>
                <button
                  ref={buttonRef}
                  className="hover:text-[#EC8314] flex items-center transition-all duration-200 ease-in-out"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Services 
                  <span className={`ml-1 transition-transform duration-200 ${dropdownOpen ? 'transform rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
              </div> */}

              {/* <Link to="/project" className="hover:text-[#EC8314]">Projects</Link> */}
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#EC8314]">Contact Us</Link>
            </nav>

            {/* Contact Button (Desktop) */}
            {/* <Link to="/contact" className="hidden lg:block bg-[#1E3F62] px-4 py-2 rounded-full hover:bg-blue-600">
              Get in Touch
            </Link> */}
            <NavLink to={'/contact'} onClick={() => window.scrollTo(0, 0)} className="hidden lg:block px-4 hover:text-[#EC8314] py-2" href="mailto:contact@obliqa.com"><Mail size={36} strokeWidth={1.25} /></NavLink>
            {/* Mobile Menu Button */}
            <Mobilemenu></Mobilemenu>
          </div>
        </header>
        
        {dropdownOpen && (
          <div 
            ref={dropdownRef}
            className="hidden md:block fixed z-50 mx-auto w-[80%] mt-[7.5%] text-white shadow-lg rounded-lg p-4 max-h-[400px] overflow-y-auto 
            bg-[#1E3F62] scale-95 transition-all duration-300 ease-in-out" 
            style={{ top: "0%", left: "4.15%", right: "5%" }}
          >
            <Deskmenu></Deskmenu>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;