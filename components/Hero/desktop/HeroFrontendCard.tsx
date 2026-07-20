"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroFrontendCard() {
  return (
    <motion.div
      className="absolute top-[660px] left-[240px] z-10 h-[104px] w-[283px] origin-right rounded-[32px] border border-[#FDFDFD1A] bg-[#28282833] px-6 py-5 backdrop-blur-xl"
      animate={{
        rotate: [-4, -7, -4],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <p className="text-[22px] font-semibold text-white">Frontend Developer</p>

      <div className="mt-3 flex items-center gap-2">
        <Image src="/icons/bitcoin.png" alt="Check" width={24} height={24} />

        <span className="text-sm text-white/90">React Expert</span>
      </div>
    </motion.div>
  )
}
