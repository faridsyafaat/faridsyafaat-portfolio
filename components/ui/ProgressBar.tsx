"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, useAnimation, useInView } from "framer-motion"

interface ProgressBarProps {
  percentage: number
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
  })

  const controls = useAnimation()

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    animate(0, percentage, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.round(value))
      },
    })

    controls.start({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    })
  }, [controls, isInView, percentage])

  return (
    <div ref={ref} className="mt-4 flex items-center gap-3">
      {/* Track */}
      <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#D5D7DA]">
        <motion.div
          className="h-full rounded-full bg-[#6600EB]"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>

      {/* Percentage */}
      <motion.span
        animate={
          count === percentage
            ? {
                scale: [1, 1.15, 1],
              }
            : {}
        }
        transition={{
          duration: 0.25,
        }}
        className="w-12 text-right text-lg font-semibold text-[#1F2937]"
      >
        {count}%
      </motion.span>
    </div>
  )
}
