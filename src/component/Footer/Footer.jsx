import companyLogo from "../../assets/OBLIQA.png";

const Footer = () => {
  return (
    <div>
      <>
        <footer className="grid lg:gap-8 lg:grid-cols-4 bg-[#061E39] text-white min-h-80 py-12 px-5 mt-8 ">
          <div>
            <nav className="flex flex-col gap-4 items-center space-x-6 my-4 ms-5">
              <img src={companyLogo} alt="" />
              <div className="flex gap-8">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
          <div className="flex flex-col text-current space-y-2 mb-5">
            <h6 className="text-2xl font-bold mb-3 text-[#00B5FF] uppercase tracking-wider">
              Services
            </h6>
            <a className="link text-lg text-gray-300 link-hover">
              Website Development
            </a>
            <a className="link text-lg text-gray-300 link-hover">Digital Marketing</a>
            <a className="link text-lg text-gray-300 link-hover">Content marketing</a>
          </div>
          <div className="flex flex-col space-y-2 mb-5">
            <h6 className="text-2xl font-bold mb-3 text-[#00B5FF] uppercase tracking-wider">
              Information
            </h6>
            <a className="link text-lg text-gray-300 link-hover ">Home</a>
            <a className="link text-lg text-gray-300 link-hover">About us</a>
            <a className="link text-lg text-gray-300 link-hover">Contact</a>
            <a className="link text-lg text-gray-300 link-hover">Careers</a>
            <a className="link text-lg text-gray-300 link-hover">Blog</a>
          </div>
          <div className="flex flex-col text-lg space-y-2">
            <h6 className="text-2xl font-bold mb-3 text-[#00B5FF] uppercase tracking-wider ">
              Contact Info
            </h6>
            <p className="text-gray-300">
              {" "}
              <span className="font-medium text-white">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "White" }}
                />{" "}
                Address:{" "}
              </span>
              <br />
              Gazipur, Dhaka, Bangladesh
            </p>
            <p className="text-gray-300">
              <span className="font-medium text-white">
                <i className="fa-solid fa-phone" style={{ color: "#ffffff" }} />{" "}
                Phone:{" "}
              </span>
              <br /> +8801677056327
            </p>
            <p className="text-gray-300">
              <span className="font-medium text-white">
                <i className="fa-solid fa-envelope" style={{ color: "#ffffff" }} />{" "}
                Email:{" "}
              </span>
              <br />
              contact@obliqa.com
            </p>
          </div>
        </footer>
        <div className="footer bg-blue-950 text-neutral-content items-center justify-center p-4">
          <aside className="grid-flow-col items-center text-center ">
            <p> © 2025 OBLIQA All rights reserved.</p>
            &nbsp;
          </aside>
        </div>
      </>

    </div>
  );
};

export default Footer;