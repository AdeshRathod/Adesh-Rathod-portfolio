"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Flutter Developer",
        "Full Stack Developer",
        "Mobile App Developer",
        "Web Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Adesh Rathod
          </motion.h1>
          <motion.div
            className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I'm a <span ref={typedRef} className="text-blue-600"></span>
          </motion.div>
          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            With 1+ years of experience building cross-platform apps, APIs, and
            microservices. Passionate about creating scalable and efficient
            solutions.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 float-animation"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 flex items-center justify-center animate-float">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/30 flex items-center justify-center">
                      <img
                        src="/adesh.svg?height=200&width=200"
                        alt="Adesh Rathod"
                        className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tech icons floating around */}
            {/* {["Flutter", "React", "Node.js", "Firebase", "Kotlin"].map(
              (tech, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-xs font-medium"
                  initial={{
                    x: Math.cos(i * ((2 * Math.PI) / 5)) * 120,
                    y: Math.sin(i * ((2 * Math.PI) / 5)) * 120,
                  }}
                  animate={{
                    rotate: [0, 360],
                    x: [
                      Math.cos(i * ((2 * Math.PI) / 5)) * 120,
                      Math.cos((i + 0.1) * ((2 * Math.PI) / 5)) * 120,
                      Math.cos(i * ((2 * Math.PI) / 5)) * 120,
                    ],
                    y: [
                      Math.sin(i * ((2 * Math.PI) / 5)) * 120,
                      Math.sin((i + 0.1) * ((2 * Math.PI) / 5)) * 120,
                      Math.sin(i * ((2 * Math.PI) / 5)) * 120,
                    ],
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  {tech}
                </motion.div>
              )
            )} */}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 dark:text-gray-400"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
