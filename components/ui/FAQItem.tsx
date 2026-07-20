"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Minus, Plus } from "lucide-react"

interface Props {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function FAQItem({ question, answer, isOpen, onToggle }: Props) {
  return (
    <div className="border-b border-[#EAECF0] py-6">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <h3
          className={`text-[16px] font-semibold transition-colors ${
            isOpen ? "text-[#7F56D9]" : "text-[#101828]"
          }`}
        >
          {question}
        </h3>

        <span
          className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full transition-colors ${
            isOpen ? "bg-[#6600EB] text-white" : "bg-[#F2F4F7] text-[#667085]"
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="mt-4 pr-10 text-[15px] leading-7 text-[#667085]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
