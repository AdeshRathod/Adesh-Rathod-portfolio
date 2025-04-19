"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-4xl font-bold"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="w-16 h-16 border-t-4 border-blue-500 rounded-full mb-4 mx-auto"
          ></motion.div>
          <motion.span
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Adesh Rathod
          </motion.span>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
