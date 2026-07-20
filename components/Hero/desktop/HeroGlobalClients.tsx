"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroGlobalClients() {
  return (
    <motion.div
      className="absolute top-[540px] right-[180px] z-10 w-[260px] origin-left rounded-[28px] border border-[#FDFDFD1A] bg-[#28282833] px-7 py-6 backdrop-blur-xl"
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
      <h2 className="text-[58px] leading-none font-semibold text-white">50+</h2>

      <p className="mt-5 text-[18px] font-medium text-white">Global Clients</p>

      <div className="mt-6 flex">
        <Image
          src="/images/person1.png"
          alt="Person 1"
          width={52}
          height={52}
          className="rounded-full border-2 border-transparent"
        />

        <Image
          src="/images/person2.png"
          alt="Person 2"
          width={52}
          height={52}
          className="-ml-3 rounded-full border-2 border-transparent"
        />

        <Image
          src="/images/person3.png"
          alt="Person 3"
          width={52}
          height={52}
          className="-ml-3 rounded-full border-2 border-transparent"
        />

        <Image
          src="/images/person4.png"
          alt="Person 4"
          width={52}
          height={52}
          className="-ml-3 rounded-full border-2 border-transparent"
        />
      </div>
    </motion.div>
  )
}
