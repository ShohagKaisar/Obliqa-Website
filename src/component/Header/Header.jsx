import React, { useState, useEffect, useRef } from "react";
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
    <header className="bg-gray-700 z-50 text-white shadow-md fixed w-11/12 mx-auto rounded-full" style={{ top: "5%", left: "5%", right: "5%" }}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={companyLogo} alt="Company Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Obliqa</Link>

          {/* Services Dropdown (Desktop) */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="hover:text-gray-300 flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services <span className="ml-1">▼</span>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-[500px] bg-white text-black shadow-lg rounded-lg p-4 max-h-[400px] overflow-y-auto transition-opacity duration-200 ease-in">
                <div className="grid grid-cols-2 gap-4">
                  {/* Software Development */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Software Development</h4>
                    <ul className="space-y-1 text-sm">
                      <li>ERP Software</li>
                      <li>Project Management</li>
                      <li>CRM Software</li>
                      <li>HR Management</li>
                      <li>Account & Finance</li>
                      <li>Payroll Management</li>
                      <li>Mobile Apps</li>
                    </ul>
                  </div>

                  {/* Website Development */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Website Development</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Website Development</li>
                      <li>Website Maintenance</li>
                      <li>Website Speed Optimization</li>
                      <li>Security Services</li>
                      <li>Analytics & Tracking</li>
                    </ul>
                  </div>

                  {/* Digital Marketing */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Digital Marketing</h4>
                    <ul className="space-y-1 text-sm">
                      <li>SEO</li>
                      <li>Social Media Marketing</li>
                      <li>PPC Advertising</li>
                      <li>Email Marketing</li>
                      <li>Lead Generation</li>
                    </ul>
                  </div>

                  {/* Creative Content */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Creative Content</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Content Writing</li>
                      <li>Video Production</li>
                    </ul>
                  </div>

                  {/* Creative Design */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Creative Design</h4>
                    <ul className="space-y-1 text-sm">
                      <li>UI/UX Design</li>
                      <li>Graphic Design</li>
                      <li>Motion Graphic Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/career" className="hover:text-gray-300">Career</Link>
          <Link to="/blog" className="hover:text-gray-300">Blog</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </nav>

        {/* Contact Button (Desktop) */}
        <Link to="/contact" className="hidden lg:block bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
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
