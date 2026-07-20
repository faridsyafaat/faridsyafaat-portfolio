"use client"

import { motion } from "framer-motion"

export default function HeroRatingMobile() {
  return (
    <motion.div
      initial={{ rotate: -5 }}
      animate={{
        y: [0, -4, 0],
        rotate: [-5, -3, -5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-[120px] left-[160px] mt-8 w-[128px] rotate-[-5deg] rounded-[20px] border border-[#FDFDFD1A] bg-[#28282833] px-4 py-3 backdrop-blur-xl"
    >
      <h3 className="text-[30px] font-extrabold text-white">5.0</h3>

      <div className="mt-1 flex gap-[2px] text-[15px] text-[#F9A826]">
        ★ ★ ★ ★ ★
      </div>

      <p className="mt-2 text-[12px] leading-4 text-white/90">
        Many Client Trust with me
      </p>
    </motion.div>
  )
}
