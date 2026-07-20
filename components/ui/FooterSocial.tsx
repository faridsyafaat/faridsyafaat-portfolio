"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { footerSocial } from "@/data/footer"

export default function FooterSocial() {
  return (
    <div className="flex items-center gap-3">
      {footerSocial.map((item) => {
        const Icon = item.icon

        return (
          <motion.div
            key={item.id}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.href}
              aria-label="Social Media"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6600EB] text-white transition-colors duration-300 hover:bg-[#5700CC]"
            >
              <Icon size={18} />
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
