import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProjectDemo() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projectsDemo.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading projects:", error);
        setLoading(false);
      });
  }, []);

  // const techIcons = {
  //   "React": <FiCpu className="text-sky-500" />,
  //   "Express.js": <FiCpu className="text-emerald-500" />,
  //   "MongoDB": <FiDatabase className="text-green-500" />,
  //   "Tailwind CSS": <FiCpu className="text-cyan-400" />
  // };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-30">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-12 text-slate-800"
      >
        Our Portfolio
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id + '-' + index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <div className="bg-blue-200 rounded-xl shadow-md overflow-hidden border border-blue-800 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">

              {/* Project Header */}
              <div className="relative bg-gradient-to-br from-sky-100 to-indigo-100 overflow-hidden">
                <div className="p-2">
                  <img className="h-56 w-full rounded-xl shadow-md" src={project.image} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />

              </div>

              {/* Project Content */}
              <div className="p-5 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-slate-800 py-2">
                  {project.title}
                </h2>
                <p className="text-slate-600 mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
