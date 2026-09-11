import Image from "next/image"

import { Mail } from "lucide-react"

export default function AboutProfile() {
  return (
    <div className="relative h-[395px] overflow-hidden rounded-[24px] bg-[#6600EB]">
      {/* Background Pattern */}

      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,.18)_1.5px,transparent_1.5px)] bg-[length:14px_14px] opacity-40" />

      {/* Text Belakang */}

      <div className="absolute top-[220px] left-1/2 z-30 -translate-x-1/2">
        <h2 className="text-center text-[50px] leading-[54px] font-bold tracking-tight text-[#0C4EAF] uppercase">
          FARID
          <br />
          SYAFAAT
        </h2>
      </div>

      {/* Foto */}

      <Image
        src="/images/faridsyafaat.png"

        alt="Farid Syafaat"

        width={420}

        height={420}

        className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 transition-all duration-500 ease-out hover:-translate-x-1/2 hover:-translate-y-2 hover:scale-105"
      />

      {/* Button */}

      <button className="group absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-12 py-3 text-[15px] font-semibold text-[#111827] shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
        <Mail
          size={18}

          className="transition-transform duration-300 group-hover:translate-x-1"
        />
        Hire Me
      </button>
    </div>
  )
}
