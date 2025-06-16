"use client"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"

interface AnimatedStatProps {
  finalValue: number
  suffix?: string
  label: string
  delay: number
  isSpecial?: boolean // for 24/7 case
}

function AnimatedStat({ finalValue, suffix = "", label, delay, isSpecial = false }: AnimatedStatProps) {
  const [count, setCount] = useState(0)
  const [showSuffix, setShowSuffix] = useState(false)
  const [showLabel, setShowLabel] = useState(false)
  const [isGlowing, setIsGlowing] = useState(false)
  const [isBouncing, setIsBouncing] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const duration = 1200 // 1.2 seconds
        const startTime = Date.now()

        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)

          // easeOutCubic easing function
          const easeOutCubic = 1 - Math.pow(1 - progress, 3)
          const currentValue = Math.floor(easeOutCubic * finalValue)

          setCount(currentValue)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            // Animation complete - trigger effects
            setIsGlowing(true)
            setIsBouncing(true)

            // Show suffix for special case (24/7)
            if (isSpecial) {
              setTimeout(() => {
                setShowSuffix(true)
              }, 100)
            }

            // Show label after number animation completes
            setTimeout(() => {
              setShowLabel(true)
            }, 200)

            // Remove glow and bounce effects
            setTimeout(() => {
              setIsGlowing(false)
              setIsBouncing(false)
            }, 600)
          }
        }

        requestAnimationFrame(animate)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [inView, finalValue, delay, isSpecial])

  return (
    <div ref={ref} className="text-center">
      <div className="relative">
        <div
          className={`text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 transition-all duration-300 ${
            isBouncing ? "transform -translate-y-1" : ""
          }`}
          style={{
            filter: isGlowing ? "drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))" : "none",
          }}
        >
          {count}
          {!isSpecial && suffix}
          {isSpecial && (
            <span
              className={`transition-all duration-500 ${
                showSuffix ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
              }`}
            >
              /7
            </span>
          )}
        </div>

        {/* Glow effect overlay */}
        {isGlowing && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-lg blur-lg animate-pulse" />
        )}
      </div>

      <div
        className={`text-sm text-gray-400 transition-all duration-500 ${
          showLabel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {label}
      </div>
    </div>
  )
}

export function ServicesHero() {
  return (
    <section className="relative z-10 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-3 mb-8">
          <Badge
            variant="secondary"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm px-4 py-2 border-0"
          >
            SERVICES
          </Badge>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
          Everything Under the
          <br />
          AI Umbrella
        </h1>

        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
          From strategic planning to full deployment, we provide comprehensive AI solutions that transform how your
          business operates, competes, and grows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <AnimatedStat finalValue={4} label="Service Verticals" delay={0} />
          <AnimatedStat finalValue={50} suffix="+" label="AI Implementations" delay={200} />
          <AnimatedStat finalValue={100} suffix="%" label="Custom Solutions" delay={400} />
          <AnimatedStat finalValue={24} label="Support Available" delay={600} isSpecial={true} />
        </div>
      </div>
    </section>
  )
}
