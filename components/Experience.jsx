"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Flutter & Full Stack Developer",
      company: "Argan Technology Services, Pune",
      period: "Jul 2024 - Present",
      responsibilities: [
        "Develop and maintain iOS/Android apps using Flutter and Kotlin, deployed to Play Store and App Store.",
        "Built punch system using Isolates + background services, pushing 10K+ GPS points/day with face detection and geofencing.",
        "Led AEGIS HRMS used by 30+ orgs, achieving 90% less attendance fraud via face ID and geofencing.",
        "Created backend APIs and microservices (Node.js) and integrated across mobile and web platforms.",
        "Designed and implemented a ticketing tool microservice used to resolve client queries and developed a manual chatbot to handle client queries.",
        "Implemented GitHub Actions and SonarQube for automated code scanning and CI/CD.",
        "Integrated Stripe/Razorpay for automated salary disbursal (5L+ monthly payroll).",
      ],
    },
    {
      title: "Flutter Developer",
      company: "Technobij Solutions, Pune",
      period: "Jan 2024 - Jun 2024",
      responsibilities: [
        "Built ChargeEazy, an EV charging app with booking, wallet, and real-time Google Maps support.",
        "Adopted BLoC + MVVM for scalable architecture and faster development.",
        "Enabled real-time Firebase sync with <1s delay and responsive UI across devices.",
      ],
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
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.period}</div>
              <div className="timeline-title">{exp.title}</div>
              <div className="timeline-subtitle">{exp.company}</div>
              <div className="timeline-content">
                <ul className="list-disc list-inside space-y-2 mt-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                    >
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
