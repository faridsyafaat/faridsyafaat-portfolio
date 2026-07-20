"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/ui/MobileMenu"

import { Mail, Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120

      let currentSection = "home"

      navItems.forEach((item) => {
        const id = item.href.replace("#", "")
        const section = document.getElementById(id)

        if (!section) return

        if (scrollPosition >= section.offsetTop) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 z-50 h-[85px] w-full bg-[#160131]">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-[92px]">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <Image
              src="/images/yourlogo.png"
              alt="Logo"
              width={26}
              height={29}
              priority
            />

            <span className="text-lg font-semibold text-white">Your Logo</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#8B32FF]"
                      : "text-white hover:text-[#8B32FF]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Hire Me */}
          <div className="hidden lg:block">
            <Link href="#contact">
              <Button className="h-12 w-[172px] cursor-pointer rounded-full bg-white font-medium text-[#160131] transition-all duration-300 hover:scale-[1.03] hover:bg-[#6600EB] hover:text-white active:scale-95">
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X
                size={30}
                className="text-white transition-transform duration-200"
              />
            ) : (
              <Menu
                size={30}
                className="text-white transition-transform duration-200"
              />
            )}
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        activeSection={activeSection}
      />
    </>
  )
}
