import { motion } from "framer-motion";
import {
  FiUsers,
  FiClipboard,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiSettings,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const WorkProcess = () => {
  const steps = [
    {
      title: "Discovery Phase",
      description: "We conduct in-depth interviews and workshops to fully understand your business objectives, challenges, and technical requirements.",
      icon: <FiUsers className="text-indigo-600" size={36} />
    },
    {
      title: "Strategic Planning",
      description: "Our team creates a comprehensive project roadmap with milestones, deliverables, and success metrics tailored to your goals.",
      icon: <FiClipboard className="text-blue-600" size={36} />
    },
    {
      title: "System Design",
      description: "We architect scalable solutions with intuitive interfaces, robust APIs, and optimized database structures for peak performance.",
      icon: <FiSettings className="text-emerald-600" size={36} />
    },
    {
      title: "Agile Development",
      description: "Using iterative sprints, we build your solution with modern frameworks while maintaining clean, documented code.",
      icon: <FiCode className="text-amber-600" size={36} />
    },
    {
      title: "Quality Assurance",
      description: "Our rigorous testing protocol includes unit tests, integration tests, and user acceptance testing to ensure reliability.",
      icon: <FiCheckCircle className="text-purple-600" size={36} />
    },
    {
      title: "Deployment & Support",
      description: "We handle seamless deployment with monitoring setup and provide ongoing maintenance with performance analytics.",
      icon: <FiUploadCloud className="text-rose-600" size={36} />
    }
  ];

  return (
    <section id="how_we_work" className="pt-28 pb-12 bg-[#F5F7FA] ">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-[#263238] uppercase">
            Our 6-Step Process
          </span>
          <h2 className="lg:text-5xl text-4xl font-bold text-gray-900 mt-3 mb-4">
            Transparent Development Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each phase is carefully executed to deliver exceptional results on time and within budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-7 lg:grid-cols-3 gap-14">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Mobile connector */}

              <div className="bg-white p-8  rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex flex-col items-start mb-6 space-y-3">
                  <div className="  p-2 rounded-lg bg-indigo-50 mr-4 flex-shrink-0">
                    {step.icon}
                    <div className="flex items-center mb-1">
                      <span className="text-xs font-mono text-gray-400 mr-2">Step {index + 1}</span>
                    </div>
                  </div>
                  <div>
                    
                    <h3 className="text-2xl mb-2 font-semibold text-[#263238] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#717171]  -mt-5">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <NavLink to={'/contact'}>
            <button onClick={() => window.scrollTo(0, 0)} className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg shadow-indigo-500/20">
              Begin Your Project Journey
            </button>
</NavLink> */}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;