"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25 },
      }}
      className="mt-10 rounded-[20px] border border-[#EAECF0] bg-white p-5 shadow-[0_10px_30px_rgba(16,24,40,0.06)]"
    >
      {/* Avatar */}
      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#F3993F]">
        <Image
          src="/images/faridsyafaat.png"
          alt="Farid Syafaat"
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="mt-5">
        <h4 className="text-[16px] font-semibold text-[#101828]">
          Let&apos;s Work Together
        </h4>

        <p className="mt-2 text-[14px] leading-7 text-[#667085]">
          Have a project in mind? I&apos;d be happy to discuss your ideas and
          help bring them to life.
        </p>
      </div>

      {/* Button */}
      <Link href="#contact">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-[#6600EB] text-sm font-semibold text-white transition-colors hover:bg-[#5700CC]"
        >
          Get in touch
        </motion.div>
      </Link>
    </motion.div>
  )
}
