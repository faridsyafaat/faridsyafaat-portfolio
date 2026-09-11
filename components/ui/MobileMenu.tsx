"use client"

import Image from "next/image"
import Link from "next/link"

import { X, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  activeSection: string
  setActiveSection: (section: string) => void
}

const menus = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export default function MobileMenu({
  isOpen,
  onClose,
  activeSection,
  setActiveSection,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Mobile Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex flex-col bg-white px-8 py-10 lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <Link href="#home" className="flex items-center gap-3">
                <Image
                  src="/images/logofs.png"
                  alt="Farid Syafaat Logo"
                  width={28}
                  height={30}
                  className="brightness-0"
                />
                <span className="text-[22px] font-bold text-black">
                  Farid Syafaat
                </span>
              </Link>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-out hover:scale-110 active:scale-95"
              >
                <X
                  size={30}
                  className="text-black transition-transform duration-200"
                />
              </button>
            </div>

            {/* Menu */}
            <nav className="mt-12 flex flex-col gap-6">
              {menus.map((menu) => {
                const isActive = activeSection === menu.href.replace("#", "")

                return (
                  <Link
                    key={menu.label}
                    href={menu.href}
                    onClick={() => {
                      setActiveSection(menu.href.replace("#", ""))
                      onClose()
                    }}
                    className={`text-[20px] font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[#6600EB]"
                        : "text-black hover:text-[#6600EB]"
                    }`}
                  >
                    {menu.label}
                  </Link>
                )
              })}
            </nav>

            {/* Button */}
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("contact")
                onClose()
              }}
              className="mt-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4F0FFF] to-[#8B32FF] py-4 font-medium text-white transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              <Mail size={20} />
              Hire Me
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
