import Image from "next/image"

export default function AboutExperienceMobile() {
  return (
    <div className="relative h-[320px] overflow-hidden rounded-[20px]">
      {/* Background */}
      <Image
        src="/images/framegrid3.png"
        alt="Experience Background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Title */}
      <div className="absolute top-36 left-1/2 -translate-x-1/2 text-center">
        <h3 className="text-[38px] leading-[40px] font-bold text-white">
          5+ Years
        </h3>
        <p className="mt-2 text-[38px] leading-[40px] font-bold text-white">
          Experience
        </p>
      </div>
    </div>
  )
}
