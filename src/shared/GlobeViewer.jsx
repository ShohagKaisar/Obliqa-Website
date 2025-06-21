import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import { motion } from 'framer-motion';
import { GiWorld } from 'react-icons/gi';

const GlobeViewer = () => {
  const globeRef = useRef();

  useEffect(() => {
    const world = Globe()(globeRef.current)
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
      .backgroundColor('#000000')
      .showAtmosphere(true)
      .atmosphereColor('#3a228a')
      .atmosphereAltitude(0.25)
      .pointsData([
        {
          lat: 23.8103,
          lng: 90.4125,
          name: 'Dhaka, Bangladesh'
        }
      ])
      .pointLat('lat')
      .pointLng('lng')
      .pointLabel('name')
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
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Globe Container */}
        <motion.div
          className="w-full h-[300px] sm:h-[300px] md:h-[300px] lg:h-[270px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div ref={globeRef} className="w-full h-full" />
        </motion.div>

        {/* Description with animation */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-items-start gap-2 text-2xl sm:text-xl font-bold text-orange-500">
            We Serve Clients Globally <span><GiWorld /></span>
          </p>

          <p className="text-base sm:text-lg text-black leading-relaxed">
            From <span className="text-orange-500 font-semibold">Dhaka, Bangladesh</span>, we empower businesses worldwide with fast,
            reliable, and scalable digital solutions.
          </p>

          <ul className="space-y-1 text-black text-sm sm:text-base">
            <li>✅ Web Development (React, Next.js, WordPress)</li>
            <li>✅ SEO & Digital Marketing</li>
            <li>✅ E-commerce & CMS Solutions</li>
            <li>✅ API Integration & App Deployment</li>
            <li>✅ 24/7 Maintenance & Support</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobeViewer;
