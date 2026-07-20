"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import ProgressBar from "./ProgressBar"
import { Skill } from "@/data/skills"

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
          <Image
            src={skill.icon}
            alt={skill.title}
            width={28}
            height={28}
            className="object-contain"
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-900">{skill.title}</h3>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-gray-500">
        {skill.description}
      </p>

      {/* Progress */}
      <ProgressBar percentage={skill.percentage} />
    </motion.div>
  )
}
