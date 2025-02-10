import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import companyLogo from "../../assets/obloqa_logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
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
    <header className="bg-white/20 backdrop-blur-md z-50 text-white shadow-md fixed w-11/12 mx-auto rounded-full" style={{ top: "5%", left: "5%", right: "5%" }}>
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={companyLogo} alt="Company Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <nav className="text-black hidden lg:flex space-x-6">
          <Link to="/home" className="hover:text-[#EC8314]">Home</Link>
          <Link to="/about" className="hover:text-[#EC8314]">About Obliqa</Link>

          {/* Services Dropdown (Desktop) */}
          <div className="relative group" ref={dropdownRef}>
            <button
              className="hover:text-[#EC8314] flex items-center transition-all duration-200 ease-in-out"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services <span className="ml-1 transition-transform group-hover:rotate-180">▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-[500px] bg-white text-black shadow-lg rounded-lg p-4 max-h-[400px] overflow-y-auto 
      opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out">
                <div className="grid grid-cols-2 gap-4">

                  {/* Website Development */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Website Development</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Website Development</li>
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Website Maintenance</li>
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Website Speed Optimization</li>
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Security Services</li>
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Analytics & Tracking</li>
                    </ul>
                  </div>

                  {/* Digital Marketing */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Digital Marketing</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Search Engine Optimization (SEO)</li>
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Social Media Marketing</li>
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Facebook Boosting / Ad Management</li>
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Content Marketing</li>
                    </ul>
                  </div>

                  {/* Creative Design */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Creative Design</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Logo Design</li>
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Graphic Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
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
        <button className="text-[#1E3F62] lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 text-white p-4 space-y-3">
          <Link to="/home" className="block py-2">Home</Link>
          <Link to="/about" className="block py-2">About Obliqa</Link>

          {/* Services Dropdown (Mobile) */}
          <div className="py-2">
            <button
              className="w-full text-left font-semibold py-2 hover:text-gray-400"
              onClick={() => setMobileDropdown(!mobileDropdown)}
            >
              Services ▼
            </button>
            {mobileDropdown && (
              <div className="ml-4 text-sm space-y-2">
                <h4 className="text-lg font-semibold">Software Development</h4>
                <ul>
                  <li>ERP Software</li>
                  <li>Project Management</li>
                  <li>CRM Software</li>
                  <li>HR Management</li>
                </ul>

                <h4 className="text-lg font-semibold mt-3">Website Development</h4>
                <ul>
                  <li>Website Development</li>
                  <li>Website Maintenance</li>
                  <li>Security Services</li>
                </ul>

                <h4 className="text-lg font-semibold mt-3">Digital Marketing</h4>
                <ul>
                  <li>SEO</li>
                  <li>Social Media Marketing</li>
                  <li>Email Marketing</li>
                </ul>

                <h4 className="text-lg font-semibold mt-3">Creative Content</h4>
                <ul>
                  <li>Content Writing</li>
                  <li>Video Production</li>
                </ul>

                <h4 className="text-lg font-semibold mt-3">Creative Design</h4>
                <ul>
                  <li>UI/UX Design</li>
                  <li>Graphic Design</li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/career" className="block py-2">Career</Link>
          <Link to="/blog" className="block py-2">Blog</Link>
          <Link to="/contact" className="block py-2">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
