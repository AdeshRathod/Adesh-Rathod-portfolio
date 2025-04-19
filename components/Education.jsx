"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      institution: "JSPM's RSCOE, Pune",
      degree: "B.Tech in Information Technology",
      period: "2020 - 2024",
      score: "CGPA: 8.56",
    },
    {
      institution: "St. Lawerence Jr. College",
      degree: "HSC",
      period: "2019 - 2020",
      score: "70.46%",
    },
    {
      institution: "Matsyodari Vidyalaya, Ambad",
      degree: "SSC",
      period: "2017 - 2018",
      score: "87.80%",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="card"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.degree}</p>
              <p className="text-gray-500 dark:text-gray-500 mb-2">{edu.period}</p>
              <div className="mt-4 inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                {edu.score}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
