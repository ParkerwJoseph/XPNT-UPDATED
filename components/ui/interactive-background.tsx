"use client"
import { useEffect, useState } from "react"

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black animate-gradient-shift"></div>

      {/* Interactive Orbs */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      <div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 128 + 200,
          top: mousePosition.y - 128 + 100,
        }}
      ></div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        ></div>
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </div>
  )
}
