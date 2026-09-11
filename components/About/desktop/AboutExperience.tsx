import Image from "next/image"

export default function AboutExperience() {
  return (
    <div className="relative h-[380px] overflow-hidden rounded-[24px]">
      {/* Background */}
      <Image
        src="/images/framegrid3.png"
        alt="Experience Background"
        fill
        className="object-cover"
      />

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Judul */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 text-center">
        <h3 className="text-[46px] leading-[48px] font-bold text-white">
          5+ Years
        </h3>

        <p className="mt-3 text-[46px] leading-[48px] font-bold text-white">
          Experience
        </p>
      </div>
    </div>
  )
}
