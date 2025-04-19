"use client"
import { useState, useEffect } from "react"

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }) {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    // Check for user preference
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <head>
        <title>Adesh Rathod | Portfolio</title>
        <meta
          name="description"
          content="Flutter & Full Stack Developer with expertise in mobile and web development"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="theme-provider">{children}</div>
      </body>
    </html>
  )
}
