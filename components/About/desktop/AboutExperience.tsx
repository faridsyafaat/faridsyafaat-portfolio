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
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center">
        <h3 className="text-[46px] leading-[48px] font-bold text-white">
          5+ Years
        </h3>

        <p className="mt-3 text-[46px] leading-[48px] font-bold text-white">
          Experience
        </p>
      </div>

      {/* Preview Project */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4">
        <Image
          src="/images/grid31.png"
          alt="Project 1"
          width={105}
          height={79}
          className="cursor-pointer rounded-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
        />

        <Image
          src="/images/grid32.png"
          alt="Project 2"
          width={105}
          height={79}
          className="cursor-pointer rounded-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
        />

        <Image
          src="/images/grid33.png"
          alt="Project 3"
          width={105}
          height={79}
          className="cursor-pointer rounded-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
        />
      </div>
    </div>
  )
}
