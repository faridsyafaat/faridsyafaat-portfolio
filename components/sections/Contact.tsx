"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import ContactInfo from "../ui/ContactInfo"
import ContactForm from "../ui/ContactForm"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-[56px] overflow-hidden bg-[#FFFFFF] py-20 md:py-28"
    >
      {/* Background Frame */}
      <div className="absolute inset-x-0 top-240 z-0 md:top-40 lg:top-85">
        <Image
          src="/images/frame2.png"
          alt=""
          width={1440}
          height={332}
          priority
          className="h-auto w-full object-cover md:object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-16 lg:grid-cols-[1fr_480px] lg:items-center"
        >
          <ContactInfo />

          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
