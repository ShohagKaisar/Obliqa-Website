import { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import { motion } from 'framer-motion';
import { GiWorld } from 'react-icons/gi';
import { NavLink } from 'react-router-dom'
const GlobeViewer = () => {
  const globeRef = useRef();

  useEffect(() => {
    const world = Globe()(globeRef.current)
      .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      // .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
      .backgroundColor('#FFFFFF')
      .showAtmosphere(true)
      .atmosphereColor('#FFFFFF')
      .atmosphereAltitude(0.25)
      .pointsData([
        {
          lat: 23.8103,
          lng: 90.4125,
          name: 'Dhaka, Bangladesh',
          // obliqa: 'We are based in Dhaka, Bangladesh, serving clients globally.',
        }
      ])
      .pointLat('lat')
      .pointLng('lng')
      .pointLabel('name')
      // .labelLabel('obliqa')
      .pointAltitude(0.03)
      .pointColor(() => '#ff5722');

    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.7;
    world.pointOfView({ lat: 23.8103, lng: 90.4125, altitude: 2 }, 0);

    const resizeObserver = new ResizeObserver(() => {
      const { offsetWidth, offsetHeight } = globeRef.current;
      world.width(offsetWidth);
      world.height(offsetHeight);
    });

    if (globeRef.current) {
      resizeObserver.observe(globeRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      world && world._destructor();
    };
  }, []);

  return (
    <section className="bg-white py-12 ">
      <div className="mx-auto max-w-fit grid lg:grid-cols-2 grid-cols-1 justify-center gap-10 items-center">
        {/* Globe Container */}
        <motion.div
          className="w-full lg:h-[600px] h-[400px] mx-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div ref={globeRef} className="w-full h-full" />
        </motion.div>

        {/* Description with animation */}
        <motion.div
          className="space-y-4 mx-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-items-start gap-2 text-4xl font-bold text-gray-800 ">
            We Serve Clients Globally<span><GiWorld /></span>
          </p>

          <p className="text-base sm:text-xl text-black leading-relaxed">
            From <span className="text-orange-500 font-semibold">Bangladesh</span>, we empower businesses worldwide<br></br> with fast,
            reliable, and scalable digital solutions.
          </p>
          <NavLink onClick={() => window.scrollTo(0, 0)} to={'/contact'}>
          <button className='px-8 py-3 bg-[#f27f20] rounded-full font-semibold text-white bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl '>Get Your Service Now</button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobeViewer;
