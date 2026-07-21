"use client"

import { motion } from "framer-motion"
import ComparisonTable from "../ui/ComparisonTable"

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="scroll-mt-[85px] bg-[#F5F5F5] py-16 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-14"
        >
          <h2 className="text-4xl font-bold text-[#101828] md:text-5xl">
            Why Choose Me
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <ComparisonTable />
      </div>
    </section>
  )
}
