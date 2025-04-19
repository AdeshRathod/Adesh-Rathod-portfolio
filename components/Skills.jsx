"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Dart", "JavaScript", "Java", "Kotlin", "SQL"],
    },
    {
      category: "Mobile",
      skills: ["Flutter", "Kotlin (Android)", "Foreground Services", "App Store", "Play Console"],
    },
    {
      category: "Web/Backend",
      skills: ["React.js", "Node.js", "REST APIs", "Microservices"],
    },
    {
      category: "Cloud/DevOps",
      skills: ["Firebase", "GCP", "AWS S3", "Stripe", "Razorpay", "GitHub Actions", "CI/CD", "SonarQube"],
    },
    {
      category: "Tools/Practices",
      skills: ["Git", "Jira", "OOP", "Agile", "Clean Architecture"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">{category.category}</h3>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + idx * 0.05, duration: 0.4 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-16" variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Skill Proficiency</h3>

              {[
                { skill: "Flutter & Mobile Development", percentage: 90 },
                { skill: "React & Frontend Development", percentage: 85 },
                { skill: "Node.js & Backend Development", percentage: 80 },
                { skill: "Database Management", percentage: 75 },
                { skill: "DevOps & CI/CD", percentage: 70 },
              ].map((item, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item.skill}</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
