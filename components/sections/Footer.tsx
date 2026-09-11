"use client"

import Image from "next/image"

import FooterSocial from "../ui/FooterSocial"

export default function Footer() {
  return (
    <footer className="bg-[#180028] py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row">
        {/* Left Side */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logofs.png"
              alt="Farid Syafaat Logo"
              width={26}
              height={29}
            />

            <span className="text-lg font-bold text-white">Farid Syafaat</span>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-white/70 md:text-left">
            © 2026 Farid Syafaat. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <FooterSocial />
      </div>
    </footer>
  )
}
