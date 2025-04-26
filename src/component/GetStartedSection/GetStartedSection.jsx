import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      icon: "💻",
      link: '/ServiceDetails'
    },
    {
      title: "How We Works",
      content: "Step-by-step: Consultation, Requirement Analysis, Development, Testing, Deployment.",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      icon: "🔄",
      link: '/WorkProcess'
    },
    {
      title: "Pricing Plans",
      content: "Flexible pricing options to suit businesses of all sizes and budgets.",
      color: "bg-gradient-to-br from-teal-500 to-teal-700",
      icon: "💰",
      link: '/ServiceDetails'
    },
    {
      title: "Portfolio",
      content: "Explore our recent projects showcasing our expertise and client solutions.",
      color: "bg-gradient-to-br from-green-500 to-green-700",
      icon: "🎨",
      link: '/Projects'
    },
    {
      title: "Testimonials",
      content: "Our clients love us! Read what they say about working with us.",
      color: "bg-gradient-to-br from-amber-500 to-amber-700",
      icon: "🌟",
      link: '/ServiceDetails'
    },
    {
      title: "Contact Us",
      content: "Get in touch or book a free consultation with our expert team.",
      color: "bg-gradient-to-br from-rose-500 to-rose-700",
      icon: "📞",
      link: '/ServiceDetails'
    },
  ];

  return (
    <div id="get-started" className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
          Let's Get Started
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how we can help transform your digital presence with our comprehensive services.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className={`h-full ${section.color} rounded-xl shadow-lg overflow-hidden text-white`}
            >

              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{section.icon}</span>
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>
                <p className="text-blue-100 flex-grow">{section.content}</p>
                <NavLink to={section.link}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClick}
                    className="flex items-center justify-center mt-6 w-full py-3 border-2 border-white border-opacity-30 bg-opacity-10 backdrop-blur-sm rounded-lg font-medium hover:bg-opacity-20 transition-all duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </NavLink>
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