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
    <header
      className={`${isOpen ? "bg-white/20 backdrop-blur-md shadow-md rounded-none" : "bg-white/20 backdrop-blur-md"
        } fixed z-50 text-white w-11/12 mx-auto transition-all duration-300  lg:rounded-full`}
      style={{ top: "5%", left: "4.15%", right: "5%" }}
    >
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={companyLogo} alt="Company Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <nav className="text-black hidden lg:flex space-x-6">
          <Link to="/" className="hover:text-[#EC8314]">Home</Link>
          <Link to="/about" className="hover:text-[#EC8314]">About Obliqa</Link>

          {/* Services Dropdown (Desktop) */}
          <div className="relative group" ref={dropdownRef}>
            <button
              className="hover:text-[#EC8314] flex items-center transition-all duration-200 ease-in-out"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services <span className="ml-1">▼</span>
            </button>

            <div
              className={`absolute left-0 mt-2 w-[600px] text-white shadow-lg rounded-lg p-4 max-h-[400px] overflow-y-auto 
  bg-[#1E3F62] scale-95 transition-all duration-300 ease-in-out ${dropdownOpen ? "block opacity-100 scale-100" : "hidden opacity-0 scale-95"
                }`}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Website Development */}
                <div className="border-r-4 border-gray-600 pr-6">
                  <h4 className="text-lg font-semibold mb-2">Website Development</h4>
                  <ul className="space-y-1 text-sm list-disc pl-6">
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Full-Stack Web Application Development
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Custom API Development (Node.js, Express.js)
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Database Management
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Frontend Development (React.js, Tailwind CSS, Bootstrap)
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Authentication & Authorization
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Performance Optimization
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Deployment & Hosting
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      E-commerce Development
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Website Speed Optimization
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      SEO Optimization for WordPress
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      WordPress Security & Maintenance
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Migration & Backup Solutions
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Custom Landing Pages
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Responsive Web Design (Mobile-Friendly)
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Website Redesign & Revamp
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      CMS Integration
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Third-Party API Integration
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Web Performance Optimization
                    </li>
                  </ul>
                </div>

                {/* Digital Marketing */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">Digital Marketing</h4>
                  <ul className="space-y-1 text-sm list-disc pl-6">
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Search Engine Optimization (SEO)
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Social Media Marketing
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Facebook Boosting / Ad Management
                    </li>
                    <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                      Content Marketing
                    </li>
                  </ul>
                  {/* Creative Design */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 mt-8">Creative Design</h4>
                    <ul className="space-y-1 text-sm list-disc pl-6">
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                        Logo Design
                      </li>
                      <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
                        Graphic Design
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

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
          <div className="py-2 max-h-[60vh] overflow-y-auto">
            <button
              className="w-full text-left font-semibold py-2 hover:text-gray-400"
              onClick={() => setMobileDropdown(!mobileDropdown)}
            >
              Services ▼
            </button>
            {mobileDropdown && (
              <div className="ml-4 text-sm space-y-2">
                <h4 className="text-lg font-semibold mt-3">
                  Website Development
                </h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Full-Stack Web Application Development</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Custom API Development (Node.js, Express.js)</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Database Management</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Frontend Development (React.js, Tailwind CSS, Bootstrap)</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Authentication & Authorization</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Performance Optimization</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Deployment & Hosting</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">E-commerce Development</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Website Development</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Website Maintenance</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Website Speed Optimization</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">SEO Optimization for WordPress</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">WordPress Security & Maintenance</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Migration & Backup Solutions</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Custom Landing Pages</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Responsive Web Design (Mobile-Friendly)</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Website Redesign & Revamp</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">CMS Integration</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Third-Party API Integration</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Web Performance Optimization</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Security Services</li>
                  <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">Analytics & Tracking</li>
                </ul>


                <h4 className="text-lg font-semibold mt-3 ">
                  Digital Marketing
                </h4>
                <ul className="list-disc pl-6">
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Social Media Marketing</li>
                  <li>Facebook Boosting / Ad Management</li>
                  <li>Content Marketing</li>
                </ul>

                <h4 className="text-lg font-semibold mt-3 ">
                  Creative Content
                </h4>
                <ul className="list-disc pl-6">
                  <li>Logo Design</li>
                  <li>Graphics Design</li>
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
