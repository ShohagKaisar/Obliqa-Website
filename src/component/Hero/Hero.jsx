import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import video from '../../assets/Video/Hero_bg_video.mp4';
import Video from '../../shared/Video';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  const videoVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref}>
      <div className="relative h-96 lg:min-h-screen bg-dark opacity-95 z-0 overflow-hidden">
        {/* Background Video with Animation */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={videoVariants}
        >
          <Video videoSrc={video} className="w-full h-full object-cover absolute" />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </motion.div>

        {/* Hero Content with Staggered Animations */}
        <motion.section
          className="relative w-full lg:h-screen flex items-center justify-center text-center text-white"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div className="relative z-10 px-6" variants={containerVariants}>
            <motion.h1
              className="pt-24 lg:pt-0 text-3xl lg:text-5xl md:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="text-transparent bg-clip-text bg-white">
                OBLIQA IT Solution
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 text-lg md:text-xl max-w-xl mx-auto text-[#F5F7FA]"
              variants={itemVariants}
            >
              We deliver top-quality digital solutions, including web design, development, SEO, and marketing, tailored to your business. Our strategies boost growth, visibility, and digital transformation for startups and enterprises alike. With expert support, we ensure your success online.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <motion.button
                className="px-8 py-3 bg-[#ff914d] rounded-full font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HashLink
                  to="/#get-started"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <button>Get Started</button>
                </HashLink>

              </motion.button>
            </motion.div>
          </motion.div>


          {/* Animated Scrolling Indicator */}
          <motion.div
            className="absolute bottom-0 lg:bottom-10 left-10 lg:left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-white rounded-full mt-1"
                animate={{
                  y: [0, 4, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

export default Hero;