import companyLogo from "../../assets/OBLIQA.png";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <>
        <footer className="grid lg:gap-8 lg:grid-cols-4 bg-[#061E39] text-white min-h-80 py-12 px-5 mt-8 ">
          <div>
            <nav className="flex flex-col gap-4 items-center my-4">
              <img src={companyLogo} alt="" />
              <div className="flex gap-4">
                <a className="text-3xl" href="https://www.facebook.com/people/OBLIQA-IT-Solutions/61574924409322/?mibextid=ZbWKwL" target="_blank"><TiSocialFacebook />
                </a>
                <a className="text-3xl" href="https://www.linkedin.com/company/obliqa-it-solutions/" target="_blank"><TiSocialLinkedin />
                </a>
                <a className="text-3xl" href="#" target="_blank"><TiSocialTwitter />
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