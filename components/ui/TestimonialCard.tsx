"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

import { Testimonial } from "@/data/testimonials"

interface Props {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <motion.article
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      className="flex h-full flex-col items-center rounded-[24px] border border-[#EAECF0] bg-white px-8 py-8 text-center shadow-[0_10px_30px_rgba(16,24,40,0.06)]"
    >
      {/* Logo */}
      <div className="mb-8 flex justify-center">
        <div className="relative h-[48px] w-[114px]">
          <Image
            src={testimonial.logo}
            alt={testimonial.company}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Review */}
      <p className="flex-1 text-[15px] leading-8 text-[#344054]">
        {testimonial.review}
      </p>

      {/* Rating */}
      <div className="mt-8 flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-[#F79009] text-[#F79009]"
          />
        ))}
      </div>

      {/* Name */}
      <h4 className="mt-7 text-[18px] font-semibold text-[#101828]">
        {testimonial.author}
      </h4>

      {/* Position */}
      <p className="mt-2 text-[14px] text-[#667085]">{testimonial.position}</p>
    </motion.article>
  )
}
