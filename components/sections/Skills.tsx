"use client"

import { motion } from "framer-motion"

import { skills } from "@/data/skills"
import SkillCard from "../ui/SkillCard"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

export default function Skills() {
  // Mobile: 2 slide (3 card per slide)
  const mobileSlides = [skills.slice(0, 3), skills.slice(3, 6)]

  return (
    <section
      id="skills"
      className="scroll-mt-[85px] bg-white pt-12 pb-16 md:scroll-mt-[56px] md:pt-16 md:pb-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            My Professional Skill
          </h2>
        </motion.div>

        {/* ===========================
            Desktop
        ============================ */}

        <div className="hidden gap-6 md:grid md:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        {/* Desktop Pagination */}

        <div className="mt-10 hidden items-center justify-center gap-2 md:flex">
          <span className="h-2.5 w-8 rounded-full bg-[#6600EB]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D5D7DA]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D5D7DA]" />
        </div>

        {/* ===========================
            Mobile
        ============================ */}

        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            spaceBetween={20}
          >
            {mobileSlides.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="space-y-6">
                  {group.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
