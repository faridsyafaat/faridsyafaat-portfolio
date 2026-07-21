"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import FAQAccordion from "../ui/FAQAccordion"
import ContactCard from "../ui/ContactCard"

export default function FAQ() {
  return (
    <section id="faq" className="w-full scroll-mt-[110px] bg-[#FFFFFF] px-6">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[28px] border border-[#EAECF0] bg-white p-8 md:p-12"
        >
          <div className="grid gap-12 md:grid-cols-[330px_minmax(0,1fr)]">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9">
                  <Image
                    src="/icons/have.png"
                    alt="Have Questions"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h2 className="mt-6 text-4xl leading-tight font-bold text-[#101828] md:text-5xl">
                Have
                <br />
                Questions?
              </h2>

              {/* Desktop Only */}
              <div className="mt-10 hidden md:block">
                <ContactCard />
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <FAQAccordion />

              {/* Mobile Only */}
              <div className="mt-8 md:hidden">
                <ContactCard />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
