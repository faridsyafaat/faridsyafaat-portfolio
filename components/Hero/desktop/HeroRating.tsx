"use client"

import { motion } from "framer-motion"

export default function HeroRating() {
  return (
    <motion.div
      className="absolute top-[400px] left-[300px] z-10 w-[220px] rotate-[4deg] rounded-[32px] border border-[#FDFDFD1A] bg-[#28282833] p-6 text-white backdrop-blur-xl"
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
      <h3 className="text-5xl font-semibold">5.0</h3>

      <div className="mt-2 flex gap-1 text-3xl text-[#F9A826]">★ ★ ★ ★ ★</div>

      <p className="mt-4 text-sm leading-6 text-white/90">
        Many Client Trust with me
      </p>
    </motion.div>
  )
}
