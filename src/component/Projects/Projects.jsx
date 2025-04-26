import { motion } from "framer-motion";
import { FiExternalLink, FiClock, FiDatabase, FiCpu } from "react-icons/fi";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
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

  const techIcons = {
    "React": <FiCpu className="text-sky-500" />,
    "Express.js": <FiCpu className="text-emerald-500" />,
    "MongoDB": <FiDatabase className="text-green-500" />,
    "Tailwind CSS": <FiCpu className="text-cyan-400" />
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-28 pb-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 text-slate-800"
      >
        Our Projects
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

                {/* Technologies */}
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center px-3 py-1 rounded-full bg-slate-50 text-xs font-medium text-slate-700 border border-slate-200"
                      >
                        <span className="mr-1.5">{techIcons[tech] || <FiCpu className="text-slate-500" />}</span>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-all duration-200 text-sm hover:shadow-md"
                  >
                    View Project
                    <FiExternalLink className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;