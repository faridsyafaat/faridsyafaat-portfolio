"use client"

import { motion } from "framer-motion"

export default function HeroRating() {
  return (
    <motion.div
      className="absolute top-[380px] left-[180px] z-10 w-[220px] rotate-[4deg] rounded-[32px] border border-[#FDFDFD1A] bg-[#28282833] p-6 text-white backdrop-blur-xl"
      animate={{
        y: [0, -5, 0],
        rotate: [4, 2, 4],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <h3 className="text-5xl font-semibold">5+</h3>
      <div className="mt-2 text-lg font-semibold whitespace-nowrap text-[#F9A826]">
        Years Experience
      </div>
      <p className="mt-4 text-sm leading-6 text-white/90">
        Developing web applications for education
      </p>
    </motion.div>
  )
}
