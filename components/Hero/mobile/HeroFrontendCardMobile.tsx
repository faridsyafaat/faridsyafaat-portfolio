"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroFrontendCardMobile() {
  return (
    <motion.div
      initial={{ rotate: -7 }}
      animate={{
        rotate: [-7, -4, -7],
        y: [0, -3, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transformOrigin: "left center" }}
      className="absolute top-[400px] left-[50px] z-10 w-[170px] rounded-[18px] border border-[#FDFDFD1A] bg-[#28282833] px-4 py-3 backdrop-blur-xl"
    >
      <p className="text-[17px] font-semibold text-white">Frontend Developer</p>

      <div className="mt-2 flex items-center gap-2">
        <Image src="/icons/bitcoin.png" alt="Check" width={16} height={16} />

        <span className="text-[12px] text-white/90">React Expert</span>
      </div>
    </motion.div>
  )
}
