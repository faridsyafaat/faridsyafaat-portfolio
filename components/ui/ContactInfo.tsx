"use client"

import { motion } from "framer-motion"

import { contactItems } from "@/data/contact"
import ContactItem from "./ContactItem"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl leading-tight font-bold text-[#101828] md:text-5xl">
        I&apos;ve been waiting
        <br />
        for you.
      </h2>

      <p className="mt-6 max-w-sm text-[16px] leading-7 text-[#667085]">
        Fill in the form or send us an email.
      </p>

      <div className="mt-10 flex flex-col gap-6">
        {contactItems.map((item) => (
          <ContactItem key={item.id} icon={item.icon} value={item.value} />
        ))}
      </div>
    </motion.div>
  )
}
