import Image from "next/image"

export default function AboutStatisticsMobile() {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#002C6E] to-[#0C4EAF]">
      {/* World Map */}
      <Image
        src="/images/mapmobile.png"
        alt="World Map"
        width={350}
        height={350}
        className="pointer-events-none absolute top-[55px] left-[55px] opacity-80"
      />

      {/* Title */}
      <div className="absolute top-6 left-6">
        <h3 className="text-[28px] leading-tight font-semibold text-white">
          Building Digital
          <br />
          Solutions
        </h3>

        <Image
          src="/icons/star.png"
          alt="Star"
          width={22}
          height={22}
          className="absolute top-[42px] left-[138px]"
        />
      </div>

      {/* Statistics */}
      <div className="absolute right-6 bottom-6 left-6 space-y-5">
        <div className="transition-all duration-300 hover:-translate-y-1">
          <h4 className="text-[34px] font-bold text-[#F9A826]">5+</h4>
          <p className="text-[13px] text-white">Years Experience</p>
        </div>

        <div className="transition-all duration-300 hover:-translate-y-1">
          <h4 className="text-[30px] font-bold text-[#F9A826]">React</h4>
          <p className="text-[13px] text-white">Front-End Development</p>
        </div>

        <div className="transition-all duration-300 hover:-translate-y-1">
          <h4 className="text-[30px] font-bold text-[#F9A826]">Education</h4>
          <p className="text-[13px] text-white">School Projects</p>
        </div>
      </div>
    </div>
  )
}
