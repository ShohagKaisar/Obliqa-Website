
function Deskmenu() {
  return (

    <div className="grid grid-cols-2 gap-4 w-[80%] mx-auto">
      {/* Website Development */}
      <div className="border-r-2 border-r-orange-400 pr-6">
        <h4 className="text-xl font-semibold mb-2">Website Development</h4>
        <ul className="space-y-3 text-[1rem] list-disc pl-6">
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Full-Stack Web Application Development</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Custom API Development (Node.js, Express.js)</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Database Management</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Frontend Development (React.js, Tailwind CSS, Bootstrap)</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Authentication & Authorization</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Performance Optimization</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Deployment & Hosting</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">E-commerce Development</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Website Speed Optimization</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">SEO Optimization for WordPress</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">WordPress Security & Maintenance</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Migration & Backup Solutions</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Custom Landing Pages</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Responsive Web Design (Mobile-Friendly)</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Website Redesign & Revamp</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">CMS Integration</a>
          </li>
          <li className="hover:text-[#EC8314] hover:translate-x-1 transition-all duration-200">
            <a href="#">Third-Party API Integration</a>
          </li>

        </ul>
      </div>

      {/* Digital Marketing */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Digital Marketing</h4>
        <ul className="space-y-3 text-[1rem] list-disc pl-6">
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
          <ul className="space-y-3 text-[1rem] list-disc pl-6">
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



  )
}

export default Deskmenu