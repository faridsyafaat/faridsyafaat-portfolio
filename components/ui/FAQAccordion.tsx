"use client"

import { useState } from "react"

import { faqs } from "@/data/faq"
import FAQItem from "./FAQItem"

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number>(1)

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? 0 : id))
  }

  return (
    <div className="rounded-[24px] bg-white">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={openId === faq.id}
          onToggle={() => handleToggle(faq.id)}
        />
      ))}
    </div>
  )
}
