"use client"

import { motion } from "framer-motion"

import { experiences } from "@/data/experience"
import ExperienceItem from "../ui/ExperienceItem"

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="scroll-mt-[85px] bg-white py-20 md:pt-20 md:pb-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-[#101828] md:text-5xl">
            My Work Experience
          </h2>
        </motion.div>

        {/* ===========================
            Desktop
        =========================== */}

        <div className="hidden md:block">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.15,
              }}
              className={`relative py-10 ${
                index !== experiences.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              {/* Garis ke atas */}
              {index !== 0 && (
                <div className="absolute top-0 left-[238px] h-[38px] border-l-2 border-dashed border-[#D0D5DD]" />
              )}

              {/* Garis ke bawah */}
              {index !== experiences.length - 1 && (
                <div className="absolute top-[38px] bottom-0 left-[238px] border-l-2 border-dashed border-[#D0D5DD]" />
              )}

              {/* Bulatan */}
              <div className="absolute top-[38px] left-[229px] z-20">
                <span className="flex h-5 w-5 rounded-full bg-[#8B32FF] ring-4 ring-white" />
              </div>

              <ExperienceItem item={item} />
            </motion.div>
          ))}
        </div>

        {/* ===========================
    Mobile
=========================== */}

        <div className="relative md:hidden">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.15,
              }}
              className={`relative py-8 pl-12 ${
                index !== experiences.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              {/* Garis atas */}
              {index !== 0 && (
                <div className="absolute top-0 left-[15px] h-[24px] border-l-2 border-dashed border-[#D0D5DD]" />
              )}

              {/* Garis bawah */}
              {index !== experiences.length - 1 && (
                <div className="absolute top-6 bottom-0 left-[15px] border-l-2 border-dashed border-[#D0D5DD]" />
              )}

              {/* Bulatan */}
              <div className="absolute top-6 left-[7px] z-10 h-4 w-4 rounded-full bg-[#8B32FF] ring-4 ring-white" />

              <ExperienceItem item={item} mobile />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
