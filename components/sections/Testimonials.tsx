"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { testimonials } from "@/data/testimonials"

import TestimonialCard from "../ui/TestimonialCard"
import TestimonialDots from "../ui/TestimonialDots"

import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

export default function Testimonials() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id="testimonials"
      className="scroll-mt-[85px] bg-[#F8F8F8] py-20 md:pt-28 md:pb-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-[#101828] md:text-5xl">
            Success Stories From Clients
          </h2>
        </motion.div>

        {/* ================= Desktop ================= */}

        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        <div className="hidden md:block">
          <TestimonialDots total={testimonials.length} active={0} />
        </div>

        {/* ================= Mobile ================= */}

        <div className="md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            onSwiper={(instance) => {
              setSwiper(instance)
            }}
            onSlideChange={(instance) => {
              setActiveIndex(instance.activeIndex)
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          <TestimonialDots
            total={testimonials.length}
            active={activeIndex}
            onChange={(index) => {
              swiper?.slideTo(index)
            }}
          />
        </div>
      </div>
    </section>
  )
}
