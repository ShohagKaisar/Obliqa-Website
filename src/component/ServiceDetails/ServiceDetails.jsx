import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


const ServiceDetails = () => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const services = [
    {
      title: "Web Development",
      description: "We build fast, modern websites and web apps using WordPress, React, Node.js, Express, and MongoDB.",
      features: [
        "Custom web application development",
        "E-commerce solutions",
        "API development & integration",
        "Database architecture",
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "💻"
    },
    {
      title: "SEO Services",
      description: "Comprehensive SEO services to boost your website’s visibility, increase organic traffic, and improve search rankings.",
      features: [
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO audits",
        "Backlink building"
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "🔍"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence and customer base.",
      features: [
        "Social media marketing",
        "Pay-per-click advertising",
        "Content marketing",
        "Conversion rate optimization"
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "📈"
    },
    {
      title: "IT Consultancy",
      description: "Expert technology consulting to help your business make informed digital decisions.",
      features: [
        "Technology stack recommendations",
        "System architecture planning",
        "Cloud migration strategies",
        "IT security consulting"
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "🛠️"
    }
  ];

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

  return (
    <div className="bg-gray-50 mx-4 lg:mx-24 py-6 mt-18">
      <div className="mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800"
        >
          Our Professional Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1 * i }}
                      className="text-gray-700 flex items-start"
                    >
                      <span className="mr-2 text-green-500">•</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <NavLink to={'/contact'}>
                  <button
                    onClick={handleClick}
                    className="w-full py-2 bg-orange-500 text-white rounded-full hover:bg-gray-700 transition"
                  >
                    Get in Touch
                  </button>
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;