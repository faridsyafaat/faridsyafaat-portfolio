"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroFrontendCardMobile() {
  return (
    <motion.div
      initial={{ rotate: -9 }}
      animate={{
        rotate: [-9, -3, -9],
        y: [0, -3, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transformOrigin: "left center" }}
      className="absolute top-[460px] left-[70px] z-30 w-[220px] rounded-[18px] border border-[#FDFDFD1A] bg-[#28282833] px-4 py-3 backdrop-blur-xl"
    >
      <p className="text-[17px] font-semibold text-[#F9A826]">
        Front-End Developer
      </p>

      <div className="mt-2 flex items-center gap-2">
        <Image src="/icons/bitcoin.png" alt="Check" width={16} height={16} />

        <span className="text-[11px] text-white/90">
          React • JavaScript • Tailwind
        </span>
      </div>
    </motion.div>
  )
}
