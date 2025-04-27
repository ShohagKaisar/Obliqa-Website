import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const cardVariants = {
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function GetStartedSection() {


  const handleClick = () => {
    window.scrollTo(0, 0);
  };


  const sections = [
    {
      title: "Our Services",
      content: "We offer Web Design, Web Development, SEO, Digital Marketting and IT Consultancy.",
      color: "bg-white",
      icon: "💻",
      link: '/ServiceDetails'
    },
    {
      title: "How We Works",
      content: "Step-by-step: Consultation, Requirement Analysis, Development, Testing, Deployment.",
      color: "bg-white",
      icon: "🔄",
      link: '/WorkProcess'
    },
    {
      title: "Pricing Plans",
      content: "Flexible pricing options to suit businesses of all sizes and budgets.",
      color: "bg-white",
      icon: "💰",
      link: '/ServiceDetails'
    },
    {
      title: "Portfolio",
      content: "Explore our recent projects showcasing our expertise and client solutions.",
      color: "bg-white",
      icon: "🎨",
      link: '/Projects'
    },
    {
      title: "Testimonials",
      content: "Our clients love us! Read what they say about working with us.",
      color: "bg-white",
      icon: "🌟",
      link: '/ServiceDetails'
    },
    {
      title: "Contact Us",
      content: "Get in touch or book a free consultation with our expert team.",
      color: "bg-white",
      icon: "📞",
      link: '/ServiceDetails'
    },
  ];

  return (
    <div id="get-started" className="pt-20 mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-[#F5F7FA]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl py-3 font-bold bg-clip-text text-transparent bg-[#263238] mb-2">
        Start Your Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how we can help transform your digital presence with our comprehensive services.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-[95%] mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <motion.div
              variants={cardVariants}
              className={`h-full ${section.color} rounded-xl shadow-md overflow-hidden text-white`}
            >

              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="text-5xl ms-[-8px] mr-3">{section.icon}</span>
                  <h3 className="text-2xl font-bold text-[#263238]">{section.title}</h3>
                </div>
                <p className=" flex-grow text-[#717171]">{section.content}</p>
                <HashLink
                  to="/#how_we_work"
                  smooth={true} 
                  duration={500}
                  offset={-70}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClick}
                    className="flex items-center justify-center mt-6 w-full py-3 border-2 text-[#263238] border-[#f27f20] border-opacity-30 bg-opacity-10 backdrop-blur-sm rounded-full font-medium hover:bg-opacity-20 transition-all duration-300"
                  >
                    Explore More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </HashLink>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
      </motion.div>
    </div>
  );
}