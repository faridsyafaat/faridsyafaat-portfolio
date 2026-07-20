"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExperienceItem as Experience } from "@/data/experience"

interface Props {
  item: Experience
  mobile?: boolean
}

export default function ExperienceItem({ item, mobile = false }: Props) {
  if (mobile) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25 }}
        className="space-y-4"
      >
        <Image
          src={item.logo}
          alt={item.company}
          width={120}
          height={40}
          className="h-auto object-contain"
        />

        <h3 className="text-xl font-semibold text-[#101828]">{item.company}</h3>

        <p className="text-[15px] text-[#667085]">{item.period}</p>

        <h4 className="text-xl font-semibold text-[#101828]">{item.role}</h4>

        <p className="text-[15px] leading-8 text-[#667085]">
          {item.description}
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
      className="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr]"
    >
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <Image
          src={item.logo}
          alt={item.company}
          width={120}
          height={40}
          className="mb-4 h-auto object-contain"
        />

        <h3 className="text-[20px] font-semibold text-[#101828]">
          {item.company}
        </h3>

        <p className="mt-2 text-[15px] text-[#667085]">{item.period}</p>
      </div>

      <div>
        <h4 className="mb-4 text-[20px] font-semibold text-[#101828]">
          {item.role}
        </h4>

        <p className="text-[15px] leading-8 text-[#667085]">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}
