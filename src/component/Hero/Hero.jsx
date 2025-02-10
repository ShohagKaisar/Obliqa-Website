import React from 'react';
import video from '../../assets/video.mp4'

const Hero = () => {
  return (
    <div>
      <div className="relative min-h-screen -mt-[100px] bg-dark opacity-95 z-0">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-opacity-60"></div>
      <div className="relative text-neutral-content text-center mt-24 z-10">
        {/* <div className="banner-text animate_animated animate_fadeIn z-10 mt-24">
          <h1 className="mb-5 text-5xl text-white drop-shadow-lg font-bold">
            <span>Maple</span> <span>Service Solution Limited</span>
          </h1>
          <p className="mb-5">Your one-stop destination for IT service solutions. Let us make IT happen for you.</p>
        </div> */}
        {/* <div className="banner-text2 hidden animate_animated animate_fadeIn z-10 mt-24">
          <h1 className="mb-5 text-5xl leading-snug text-white drop-shadow-lg font-bold">
            <span>We</span> <span>Craft Websites That <br /> Breathe Life Into Your Ideas.</span>
          </h1>
          <p className="mb-5">Boost Sales and Save Time with our E-Commerce Store Automation.</p>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
