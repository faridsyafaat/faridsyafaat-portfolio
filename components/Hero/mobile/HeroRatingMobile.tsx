"use client"

import { motion } from "framer-motion"

export default function HeroRatingMobile() {
  return (
    <motion.div
      initial={{ rotate: 5 }}
      animate={{
        y: [0, -4, 0],
        rotate: [5, 3, 5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-[145px] left-[26px] z-10 mt-8 w-[180px] rotate-[5deg] rounded-[20px] border border-[#FDFDFD1A] bg-[#28282833] px-4 py-3 backdrop-blur-xl"
    >
      <h3 className="text-[26px] font-extrabold text-white">5+</h3>

      <div className="mt-1 text-[16px] font-semibold whitespace-nowrap text-[#F9A826]">
        Years Experience
      </div>

      <p className="mt-2 text-[11px] leading-4 text-white/90">
        Developing web applications for education
      </p>
    </motion.div>
  )
}
