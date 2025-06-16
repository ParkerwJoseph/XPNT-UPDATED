"use client"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedProgressRingProps {
  percentage: number
  size?: number
  strokeWidth?: number
  color?: string
  delay?: number
  duration?: number
}

export function AnimatedProgressRing({
  percentage,
  size = 160, // Increased from 128
  strokeWidth = 10, // Increased from 8
  color = "from-purple-400 to-violet-400",
  delay = 0,
  duration = 3000, // Increased from 2000 for smoother animation
}: AnimatedProgressRingProps) {
  const [progress, setProgress] = useState(0)
  const [displayPercentage, setDisplayPercentage] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  // Calculate circle properties
  const radius = (size - strokeWidth * 2) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (progress / 100) * circumference

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const startTime = Date.now()

        const animate = () => {
          const elapsed = Date.now() - startTime
          const animationProgress = Math.min(elapsed / duration, 1)

          // Much smoother easing function (easeOutQuart with slight bounce)
          const easeOutQuart = 1 - Math.pow(1 - animationProgress, 4)
          // Add subtle ease-in for even smoother start
          const smoothEasing = animationProgress < 0.1 ? animationProgress * 10 * easeOutQuart : easeOutQuart

          const currentProgress = smoothEasing * percentage
          const currentPercentage = Math.round(currentProgress)

          setProgress(currentProgress)
          setDisplayPercentage(currentPercentage)

          if (animationProgress < 1) {
            requestAnimationFrame(animate)
          }
        }

        requestAnimationFrame(animate)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [inView, percentage, delay, duration])

  // Generate unique gradient ID
  const gradientId = `gradient-${percentage}-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div ref={ref} className="relative inline-block">
      {/* Outer glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20 blur-xl rounded-full scale-110 transition-all duration-500`}
        style={{
          opacity: progress > 0 ? 0.3 : 0.1,
          transform: `scale(${1.1 + (progress / 100) * 0.1})`,
        }}
      />

      {/* SVG Progress Ring */}
      <svg
        width={size}
        height={size}
        className="transform -rotate-90 transition-transform duration-300 hover:scale-105"
      >
        {/* Background circle */}
        <circle
          stroke="rgba(75, 85, 99, 0.3)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Progress circle */}
        <circle
          stroke={`url(#${gradientId})`}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="transition-all duration-100 ease-out"
          style={{
            filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))",
          }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center percentage display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div
            className={`text-5xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent transition-all duration-500`}
            style={{
              transform: displayPercentage > 0 ? "scale(1)" : "scale(0.8)",
              filter: displayPercentage > 0 ? "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" : "none",
            }}
          >
            {displayPercentage}%
          </div>
        </div>
      </div>

      {/* Subtle pulse effect when animating */}
      {progress > 0 && progress < percentage && (
        <div
          className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10 rounded-full animate-ping`}
          style={{ animationDuration: "2s" }}
        />
      )}

      {/* Completion sparkle effect */}
      {displayPercentage === percentage && progress >= percentage && (
        <>
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-white/80 rounded-full animate-ping" />
          <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-white/60 rounded-full animate-ping animation-delay-300" />
          <div className="absolute top-1/2 -right-3 w-1 h-1 bg-white/70 rounded-full animate-ping animation-delay-600" />
        </>
      )}
    </div>
  )
}
