"use client"

import { motion } from "framer-motion"

import { works } from "@/data/work"
import WorkCard from "../ui/WorkCard"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function LatestWork() {
  return (
    <section
      id="projects"
      className="scroll-mt-[85px] bg-white pt-8 pb-16 md:pt-12 md:pb-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="text-4xl font-bold text-[#101828] md:text-5xl">
            My Latest Work
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {works.map((work) => (
            <motion.div key={work.id} variants={itemVariants}>
              <WorkCard work={work} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
