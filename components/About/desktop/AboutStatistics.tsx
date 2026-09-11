import Image from "next/image"

export default function AboutStatistics() {
  return (
    <div className="relative h-[395px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#002C6E] to-[#0C4EAF]">
      {/* Background */}
      <Image
        src="/images/roundgrid5.png"
        alt="World Map"
        width={500}
        height={500}
        className="pointer-events-none absolute top-10 left-[150px] opacity-90"
      />

      {/* Judul */}
      <div className="absolute top-16 left-10">
        <h3 className="text-[34px] leading-tight font-semibold text-white">
          Building Digital
          <br />
          Solutions
        </h3>

        <Image
          src="/icons/star.png"
          alt="Star"
          width={26}
          height={26}
          className="absolute top-[52px] left-[165px]"
        />
      </div>

      {/* Statistics */}
      <div className="absolute bottom-10 left-10 transition-all duration-300 hover:-translate-y-2">
        <h4 className="text-[40px] font-bold text-[#F9A826]">5+</h4>
        <p className="text-[14px] text-white">Years Experience</p>
      </div>

      <div className="absolute bottom-10 left-[230px] transition-all duration-300 hover:-translate-y-2">
        <h4 className="text-[32px] font-bold text-[#F9A826]">React</h4>
        <p className="text-[14px] text-white">Front-End Development</p>
      </div>

      <div className="absolute bottom-10 left-[440px] transition-all duration-300 hover:-translate-y-2">
        <h4 className="text-[32px] font-bold text-[#F9A826]">Education</h4>
        <p className="text-[14px] text-white">School Projects</p>
      </div>
    </div>
  )
}
