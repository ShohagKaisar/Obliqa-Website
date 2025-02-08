import React from 'react';

const Header = () => {
  return (
<>
      {/* Contact Bar */}
      <div className="lg:mx-32 max-sm:mx-3 px-3 rounded-[146px] mt-6 sticky z-10 bg-dark opacity-90">
        <div className="flex justify-between">
          {/* Address Section */}
          <div className="texthsm max-sm:hidden flex justify-center items-center">
            <i className="fa-solid fa-location-dot me-2" style={{ color: '#ffffff' }}></i>
            <p style={{ color: '#ffffff' }}>House 38, Shah Makhdum Avenue, Sector 13, Uttara, Dhaka-1230</p>
          </div>

          {/* Email and Phone Section */}
          <div className="flex justify-between lg:space-x-5">
            {/* Email */}
            <div className="texthsm me-2 flex justify-center items-center">
              <i className="fa-regular fa-envelope me-2" style={{ color: '#ffffff' }}></i>
              <p className="text-white">info@mapleitfirm.com</p>
            </div>

            {/* Phone */}
            <div className="texthsm flex justify-center items-center">
              <i className="fa-solid fa-headset me-2" style={{ color: '#ffffff' }}></i>
              <p style={{ color: '#ffffff' }}>+8801922557436</p>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="lg:mx-24 bg-[#061E39] rounded-[146px] mt-[20px] sticky float-none top-4 z-10 header">
        <nav>
          <div className="navbar lg:px-8 justify-between">
            {/* Logo and Mobile Menu */}
            <div>
              <div className="dropdown">
                <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                  <i className="fa-solid fa-bars fa-xl" style={{ color: '#ffffff' }}></i>
                </div>
                <ul
                  tabIndex="0"
                  className="menu overflow-y-auto menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about-mssl">About MSSL</a>
                  </li>
                  <li className="flex">
                    <a href="">
                      Services <i className="ms-1 fa-solid fa-caret-down fa-lg" style={{ color: '#0c0404' }}></i>
                    </a>
                  </li>
                  {/* <MobileMenu /> */}
                  <li>
                    <a href="/career">Careers</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact</a>
                  </li>
                </ul>
              </div>
              <a href="/">
                <img src="/assets/logo.png" alt="Logo" className="h-[60px]" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="lg:block hidden">
              <ul className="flex text-medium text-white space-x-6">
                <li className="transform transition-transform duration-300 hover:scale-110">
                  <a href="/">Home</a>
                </li>
                <li className="transform transition-transform duration-300 hover:scale-110">
                  <a href="/about-mssl">About MSSL</a>
                </li>
                <li className="transform transition-transform duration-300 hover:scale-110">
                  <button className="flex items-center justify-center" id="servicebtn" onClick={() => {}}>
                    Services
                    <i className="ms-1 fa-solid fa-caret-down fa-lg" style={{ color: '#ffffff' }}></i>
                  </button>
                </li>
                <li className="transform transition-transform duration-300 hover:scale-110">
                  <a href="/career">Careers</a>
                </li>
                <li className="transform transition-transform duration-300 hover:scale-110">
                  <a href="/blog">Blog</a>
                </li>
                <li className="transform transition-transform duration-300 hover:scale-110">
                  <a href="/contact-us">Contact</a>
                </li>
              </ul>
            </div>

            {/* Request a Call Back Button */}
            <div>
              <a className="btn rounded-[146px] btn-info to-purple-700btn-neutral z-10 pp2">
                Request a Call Back
              </a>
            </div>
          </div>
        </nav>

        {/* Services Dropdown Menu */}
        <div className="flex justify-center hidden overflow" id="bigmenu">
          <ul className="menu xl:menu-horizontal z-0 text-black bg-[#ffffff] absolute rounded-box lg:min-w-max">
            <li>
              <a className="text-xl text-medium">Software Development</a>
              <ul>
                <li>
                  <a>ERP Software</a>
                </li>
                <li>
                  <a>Project Management</a>
                </li>
                <li>
                  <a>CRM Software</a>
                </li>
                <li>
                  <a>HR Management</a>
                </li>
                <li>
                  <a>Account & Finance</a>
                </li>
                <li>
                  <a>Payroll Management</a>
                </li>
                <li>
                  <a>Mobile Apps</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-xl text-medium">Website Development</a>
              <ul>
                <li>
                  <a href="/web-development">Website Development</a>
                </li>
                <li>
                  <a>Website Maintenance</a>
                </li>
                <li>
                  <a>Website Speed Optimization</a>
                </li>
                <li>
                  <a>Website Training & Documentation</a>
                </li>
                <li>
                  <a>Security Services</a>
                </li>
                <li>
                  <a>Analytics & Tracking</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-xl text-medium">Digital Marketing</a>
              <ul>
                <li>
                  <a>Search Engine Optimization (SEO)</a>
                </li>
                <li>
                  <a>Social Media Marketing (SMM)</a>
                </li>
                <li>
                  <a>Influencer Marketing</a>
                </li>
                <li>
                  <a>PPC (Pay-Per-Click) Advertising</a>
                </li>
                <li>
                  <a>Email Marketing</a>
                </li>
                <li>
                  <a>Lead Generation Service</a>
                </li>
                <li>
                  <a>Video Marketing (YouTube, TikTok, etc.)</a>
                </li>
                <li>
                  <a>Influencer Marketing</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-xl text-medium">Creative Content</a>
              <ul>
                <li>
                  <a>Content Writing</a>
                </li>
                <li>
                  <a>Social Media Content</a>
                </li>
                <li>
                  <a>Video Production & Editing</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-xl text-medium">Creative Design</a>
              <ul>
                <li>
                  <a>UI/UX Design</a>
                </li>
                <li>
                  <a>Graphic Design</a>
                </li>
                <li>
                  <a>Motion Graphic Design</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
