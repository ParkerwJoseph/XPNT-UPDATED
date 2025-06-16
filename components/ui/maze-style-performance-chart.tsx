"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

export function MazeStylePerformanceChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [displayPercentage, setDisplayPercentage] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  // Data points for the flowing path - matching the image
  const dataPoints = [
    { year: 2019, value: 5, x: 0.15, y: 0.75 },
    { year: 2020, value: 8, x: 0.3, y: 0.65 },
    { year: 2021, value: 12, x: 0.45, y: 0.55 },
    { year: 2022, value: 15, x: 0.6, y: 0.45 },
    { year: 2023, value: 22, x: 0.75, y: 0.3 },
    { year: 2024, value: 30, x: 0.85, y: 0.15 },
  ]

  useEffect(() => {
    if (inView) {
      const duration = 3000
      const startTime = Date.now()

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Smooth easing
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setAnimationProgress(easeOutQuart)

        // Animate the percentage display
        const targetPercentage = 30
        setDisplayPercentage(Math.round(easeOutQuart * targetPercentage))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [inView])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const width = rect.width
    const height = rect.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Calculate actual positions
    const points = dataPoints.map((point) => ({
      ...point,
      actualX: point.x * width,
      actualY: point.y * height,
    }))

    // Draw flowing path with refined glow effect
    if (points.length > 1 && animationProgress > 0) {
      const pathLength = animationProgress * (points.length - 1)
      const visiblePoints = Math.floor(pathLength) + 1

      // Create flowing path
      ctx.beginPath()
      ctx.moveTo(points[0].actualX, points[0].actualY)

      for (let i = 1; i < Math.min(visiblePoints, points.length); i++) {
        const prevPoint = points[i - 1]
        const currentPoint = points[i]

        // Smooth bezier curves for flowing effect
        const controlX1 = prevPoint.actualX + (currentPoint.actualX - prevPoint.actualX) * 0.5
        const controlY1 = prevPoint.actualY
        const controlX2 = prevPoint.actualX + (currentPoint.actualX - prevPoint.actualX) * 0.5
        const controlY2 = currentPoint.actualY

        if (i === visiblePoints - 1 && pathLength % 1 !== 0) {
          // Partial segment animation
          const progress = pathLength % 1
          const partialX = prevPoint.actualX + (currentPoint.actualX - prevPoint.actualX) * progress
          const partialY = prevPoint.actualY + (currentPoint.actualY - prevPoint.actualY) * progress

          ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, partialX, partialY)
        } else {
          ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, currentPoint.actualX, currentPoint.actualY)
        }
      }

      // Refined outer glow - more subtle
      ctx.strokeStyle = "rgba(6, 182, 212, 0.15)"
      ctx.lineWidth = 6
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.stroke()

      // Middle glow
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)"
      ctx.lineWidth = 3
      ctx.stroke()

      // Core line
      const gradient = ctx.createLinearGradient(0, 0, width, 0)
      gradient.addColorStop(0, "#06B6D4")
      gradient.addColorStop(0.5, "#3B82F6")
      gradient.addColorStop(1, "#8B5CF6")

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.stroke()
    }

    // Draw consistent data points
    points.forEach((point, index) => {
      if (index < animationProgress * points.length) {
        const isActive = index === points.length - 1 // 2024 point
        const dotSize = 4
        const glowSize = isActive ? 12 : 8

        // Pulsing effect only for 2024 - more subtle
        const pulseScale = isActive ? 1 + 0.1 * Math.sin(Date.now() * 0.003) : 1

        // Outer glow - more subtle
        ctx.beginPath()
        ctx.arc(point.actualX, point.actualY, glowSize * pulseScale, 0, Math.PI * 2)
        ctx.fillStyle = isActive ? "rgba(139, 92, 246, 0.1)" : "rgba(59, 130, 246, 0.06)"
        ctx.fill()

        // Middle glow
        ctx.beginPath()
        ctx.arc(point.actualX, point.actualY, (dotSize + 2) * pulseScale, 0, Math.PI * 2)
        ctx.fillStyle = isActive ? "rgba(139, 92, 246, 0.2)" : "rgba(59, 130, 246, 0.15)"
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(point.actualX, point.actualY, dotSize, 0, Math.PI * 2)
        ctx.fillStyle = isActive ? "#A855F7" : "#3B82F6"
        ctx.fill()

        // White center
        ctx.beginPath()
        ctx.arc(point.actualX, point.actualY, dotSize - 2, 0, Math.PI * 2)
        ctx.fillStyle = "#FFFFFF"
        ctx.fill()
      }
    })

    // Draw year labels - better positioning
    ctx.fillStyle = "#9CA3AF"
    ctx.font = "12px Inter, sans-serif"
    ctx.textAlign = "center"

    // Only show start and end years to avoid overlap
    if (animationProgress > 0.2) {
      ctx.fillText("2019", points[0].actualX, height - 10)
    }
    if (animationProgress > 0.9) {
      ctx.fillText("2024", points[points.length - 1].actualX, height - 10)
    }
  }, [animationProgress])

  return (
    <div ref={ref} className="relative h-48 w-full">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
