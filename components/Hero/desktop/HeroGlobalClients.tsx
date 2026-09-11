"use client"

import { motion } from "framer-motion"

export default function HeroGlobalClients() {
  return (
    <motion.div
      className="absolute top-[520px] right-[180px] z-10 w-[260px] origin-left rounded-[28px] border border-[#FDFDFD1A] bg-[#28282833] px-7 py-6 backdrop-blur-xl"
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
        rotate: [4, 7, 4],
      }}
      transition={{
        opacity: {
          duration: 0.6,
        },
        x: {
          duration: 0.6,
        },
        rotate: {
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <h2 className="text-[36px] leading-none font-semibold whitespace-nowrap text-[#F9A826]">
        Web Apps
      </h2>

      <p className="mt-5 text-[18px] font-medium text-white">
        Education & School Projects
      </p>
    </motion.div>
  )
}
