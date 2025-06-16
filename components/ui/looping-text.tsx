"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface LoopingTextProps {
  text: string
  className?: string
  speed?: number
  pauseDuration?: number
}

export function LoopingText({ text, className, speed = 100, pauseDuration = 2000 }: LoopingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(false)
            setCurrentIndex(0)
            setDisplayText("")
            setTimeout(() => {
              setIsTyping(true)
            }, 500)
          }, pauseDuration)
        }
      }
    }, speed)

    return () => clearInterval(interval)
  }, [currentIndex, isTyping, text, speed, pauseDuration])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={cn("relative", className)}>
      {displayText}
      <span
        className={cn(
          "inline-block w-0.5 h-[1em] ml-1 bg-current transition-opacity duration-100",
          showCursor ? "opacity-100" : "opacity-0",
        )}
      />
    </span>
  )
}
