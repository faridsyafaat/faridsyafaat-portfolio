"use client"

import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"
import { IoCloseCircle } from "react-icons/io5"

import { whyChooseData } from "@/data/whyChoose"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-[28px] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:p-8"
    >
      {/* Header */}

      <div className="grid grid-cols-[1.7fr_.6fr_.6fr] items-center rounded-full bg-gradient-to-r from-[#8B32FF] via-[#7B2FFF] to-[#6600EB] px-4 py-4 text-center text-sm font-semibold text-white md:grid-cols-[2fr_1fr_1fr] md:px-8 md:text-base">
        <div>Skill</div>
        <div>Me</div>
        <div>Other</div>
      </div>

      {/* Body */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-4"
      >
        {whyChooseData.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="grid grid-cols-[1.7fr_.6fr_.6fr] items-center border-b border-[#F2F4F7] py-5 transition-all duration-300 last:border-none hover:bg-gray-50 md:grid-cols-[2fr_1fr_1fr]"
          >
            {/* Skill */}

            <div className="text-center text-[15px] leading-7 font-medium text-gray-800 md:text-base">
              {item.skill}
            </div>

            {/* Me */}

            <div className="flex justify-center">
              {item.me && (
                <FaCheckCircle className="text-[22px] text-orange-500" />
              )}
            </div>

            {/* Other */}

            <div className="flex justify-center">
              {!item.other && (
                <IoCloseCircle className="text-[22px] text-gray-400" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
