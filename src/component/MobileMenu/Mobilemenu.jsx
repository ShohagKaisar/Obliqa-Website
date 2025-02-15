import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
function mobilemenu() {
    const [mobileDropdown, setMobileDropdown] = useState(false);
    return (
        <div className="lg:hidden ">
            <div className="drawer drawer-end ">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button "><FaBars className="text-[#071E38]" size={24} /></label>
                </div>
                <div className="drawer-side">

                    <ul className="menu bg-[#071E38] text-white min-h-full w-full p-4 rounded-xl">
                        {/* Sidebar content here */}
                        <div className="lg:hidden  text-white p-4 ">
                            <Link to="/home" className="block py-2">Home</Link>
                            <Link to="/about" className="block py-2">About Obliqa</Link>
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
                                        <ul className="list-disc pl-6 space-y-3 text-sm">
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
                    </ul>
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="p-3 mt-2 me-2">
                        <FaTimes className="text-white" size={28} /></label>

                </div>
            </div>
        </div>
    )
}

export default mobilemenu