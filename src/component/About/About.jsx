import React from 'react';
import './about.css';
import companyLogo from '../../assets/obloqa_logo.webp'

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
              <h1 className="text-[2rem] max-sm:text-center font-bold bottom-20 z-0 pp1">
                OBLIQA IT Solution
              </h1>
              <p className="py-6 text-justify">
                OBLIQA IT Solution proudly stands among the best IT consulting
                firms. Our mission is to assist all types of businesses with their
                digital needs. Whether you’re striving to improve your online store,
                excel in digital marketing, or require top-notch technical development
                and design, OBLIQA IT Solution is your trusted partner on the path
                to digital success. At OBLIQA IT Solution, our commitment to
                excellence sets us apart in the realm of IT consulting. As a
                distinguished partner, we cater to diverse businesses, offering
                comprehensive solutions to meet their evolving digital requirements.
              </p>
              <div className="flex items-center max-md:justify-center">
                <button className="btn btn-info btn-block text-white text-xl">
                  Learn About OBLIQA
                </button>
              </div>
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
