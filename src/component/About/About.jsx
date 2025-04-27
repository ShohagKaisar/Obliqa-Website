import './about.css';
import companyLogo from '../../assets/obloqa_logo.webp'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <>
        <div className="hero bg-base-300 min-h-64 py-8 px-4">
          <div className="hero-content flex-col lg:flex-row">
            <div
              className="flex justify-center lg:mt-10"
              data-aos="fade-right"
              data-aos-mirror="true"
            >
              <img
                src={companyLogo}
                className="object-cover transition-transform duration-300 transform w-3/4 hover:scale-110"
              />
            </div>
            <div className="lg:w-3/4 ">
              <h1 className="text-5xl max-sm:text-center font-bold z-10  mb-5">
                ABOUT
              </h1>
              <p className="py-6 text-justify">
              At Obliqa IT Solution, we stand for excellence, faith, and innovation. As a startup company, we bring fresh ideas and a dynamic approach to the ever-evolving tech industry. We don’t just take on projects, we take our clients visions seriously, turning their ideas into success stories. Technology should empower businesses, not just support them. That’s why we go beyond coding. We strategize, innovate, and deliver solutions that truly make a difference. Whether it’s a small startup or a large enterprise, our expert development team is ready to build, scale, and optimize with cutting-edge technology. But we’re not stopping here. Our mission is bigger. We aim to make Obliqa IT a globally recognized technology leader known for delivering solutions that redefine industries while keeping client satisfaction at the heart of everything we do. Let’s build the future together.
              </p>
                <NavLink to={'/about'}>
                <div className="flex items-center max-md:justify-center">
                <button className="btn btn-info btn-block text-white text-xl">
                  Learn About OBLIQA
                </button>
              </div></NavLink>

            </div>
          </div>
        </div>
        <div className="scroll-container bg-[#0072B8] h-16 flex items-center overflow-hidden">
          <ul className="scroll-content items-center justify-center space-x-8 text-2xl text-white font-medium uppercase">
            <li>Branding</li>
            <li>Marketing</li>
            <li>Development</li>
            <li>Solution</li>
            <li>Service</li>
            <li>Idea</li>
            <li>Software</li>
            <li>Design</li>
            <li>Creative</li>
            <li>Boosting</li>
            <li>Strategy</li>
            {/* Duplicate items for seamless scrolling */}
            <li>Branding</li>
            <li>Marketing</li>
            <li>Development</li>
            <li>Solution</li>
            <li>Service</li>
            <li>Idea</li>
            <li>Software</li>
            <li>Design</li>
            <li>Creative</li>
            <li>Boosting</li>
            <li>Strategy</li>
          </ul>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </>
    </div>
  );
}

export default About;
