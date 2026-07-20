"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { WorkItem } from "@/data/work"

interface Props {
  work: WorkItem
}

export default function WorkCard({ work }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group"
    >
      {/* Badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500">
          {work.category}
        </span>

        <span className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500">
          {work.year}
        </span>
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <Image
          src={work.image}
          alt={work.title}
          width={600}
          height={400}
          className="h-auto w-full transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-[#101828]">
        {work.title}
      </h3>

      {/* Link */}
      <Link
        href={work.url}
        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#8B32FF] transition hover:text-[#6600EB]"
      >
        Visit Website
        <ArrowRight size={16} />
      </Link>
    </motion.article>
  )
}
