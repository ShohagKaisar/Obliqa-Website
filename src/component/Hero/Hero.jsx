
import video from '../../assets/Video/Hero_bg_video.mp4'
import Video from '../../shared/Video';

const Hero = () => {
  return (
    <div>
      <div className="relative min-h-screen bg-dark opacity-95 z-0">
        {/* Call the Vodeo Component for background Video */}
        <Video videoSrc={video}></Video> 
        <div className="bg-opacity-60"></div>
        <section className="relative w-full h-screen flex items-center justify-center text-center text-white">
          {/* Background Video */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <Video videoSrc={Video} className="w-full h-full object-cover absolute" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> {/* Dark Overlay */}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-6">
            <h1 className="text-7xl font-bold">OBLIQA IT Solution</h1>
            <p className="mt-4 text-xl max-w-xl mx-auto">
              Your trusted partner in web design, development, SEO, and digital marketing.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
