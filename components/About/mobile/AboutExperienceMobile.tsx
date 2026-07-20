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
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center">
        <h3 className="text-[38px] leading-[40px] font-bold text-white">
          5+ Years
        </h3>

        <p className="mt-2 text-[38px] leading-[40px] font-bold text-white">
          Experience
        </p>
      </div>

      {/* Preview Project */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        <Image
          src="/images/grid31.png"
          alt="Project 1"
          width={82}
          height={62}
          className="cursor-pointer rounded-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
        />

        <Image
          src="/images/grid32.png"
          alt="Project 2"
          width={82}
          height={62}
          className="cursor-pointer rounded-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
        />

        <Image
          src="/images/grid33.png"
          alt="Project 3"
          width={82}
          height={62}
          className="cursor-pointer rounded-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
        />
      </div>
    </div>
  )
}
