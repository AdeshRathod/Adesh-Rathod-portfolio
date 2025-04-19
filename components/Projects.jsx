"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Phishing Detection System",
      date: "Mar 2025",
      description:
        "An intelligent system to detect and flag phishing websites using machine learning.",
      details: [
        "Flask backend detecting phishing URLs with 92%+ accuracy using ML.",
        "Integrated Next.js frontend for real-time analysis and modern UI.",
        "Secured via JWT and deployed publicly via Render.",
      ],
      technologies: ["Next.js", "Flask", "Machine Learning", "JWT", "Render"],
      image: "/phishing.png?height=300&width=500",
    },
    {
      title: "Smart Healthcare Platform",
      date: "2023 - Present",
      description:
        "A web-based health assistant for predictive diagnostics and remote consultations.",
      details: [
        "AI-powered disease prediction with 85%+ accuracy using React, Flask, and ML.",
        "JWT auth, doctor/patient roles, real-time charts, and production-ready deployment.",
      ],
      technologies: ["React", "Flask", "AI/ML", "JWT", "Chart.js"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "AEGIS HRMS",
      date: "2024",
      description:
        "HR Management System with face recognition-based attendance and geofencing.",
      details: [
        "Used by 30+ organizations with 90% less attendance fraud.",
        "Implemented face recognition and geofencing for accurate attendance tracking.",
        "Built with Flutter for mobile and React for web dashboard.",
      ],
      technologies: [
        "Flutter",
        "React",
        "Node.js",
        "Face Recognition",
        "Geofencing",
      ],
      image: "/aegis.png?height=300&width=500",
    },
    {
      title: "ChargeEazy",
      date: "2024",
      description:
        "EV charging app with booking, wallet, and real-time Google Maps support.",
      details: [
        "Implemented BLoC + MVVM architecture for scalable development.",
        "Integrated real-time Firebase sync with <1s delay.",
        "Created responsive UI across various device sizes.",
      ],
      technologies: ["Flutter", "Firebase", "Google Maps API", "BLoC", "MVVM"],
      image: "/chargeeazy.png?height=300&width=500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card overflow-hidden group"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="text-sm font-medium">{project.date}</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  onClick={() =>
                    setActiveProject(activeProject === index ? null : index)
                  }
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeProject === index ? "Show Less" : "Learn More"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ml-1 transition-transform ${
                      activeProject === index ? "rotate-90" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>

                {activeProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      {project.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
