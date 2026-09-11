"use client"

import { motion } from "framer-motion"

export default function HeroGlobalClientsMobile() {
  return (
    <motion.div
      initial={{ rotate: 6 }}
      animate={{
        rotate: [6, 3, 6],
        y: [0, -3, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transformOrigin: "right center" }}
      className="absolute top-[160px] right-[12px] z-30 w-[165px] rounded-[20px] border border-[#FDFDFD1A] bg-[#28282833] px-4 py-4 backdrop-blur-xl"
    >
      <h2 className="text-[16px] leading-none font-semibold text-[#F9A826]">
        Web Apps
      </h2>

      <p className="mt-3 text-[11px] leading-5 font-medium text-white">
        Education & School Projects
      </p>
    </motion.div>
  )
}
