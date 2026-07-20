"use client"

import Image from "next/image"
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
      className="absolute top-[370px] right-[-12px] z-10 w-[165px] rounded-[20px] border border-[#FDFDFD1A] bg-[#28282833] px-4 py-4 backdrop-blur-xl"
    >
      <h2 className="text-[34px] leading-none font-extrabold text-white">
        50+
      </h2>

      <p className="mt-2 text-[13px] text-white">Global Clients</p>

      <div className="mt-4 flex">
        <Image
          src="/images/person1.png"
          alt="Person 1"
          width={34}
          height={34}
          className="rounded-full"
        />

        <Image
          src="/images/person2.png"
          alt="Person 2"
          width={34}
          height={34}
          className="-ml-2 rounded-full"
        />

        <Image
          src="/images/person3.png"
          alt="Person 3"
          width={34}
          height={34}
          className="-ml-2 rounded-full"
        />

        <Image
          src="/images/person4.png"
          alt="Person 4"
          width={34}
          height={34}
          className="-ml-2 rounded-full"
        />
      </div>
    </motion.div>
  )
}
