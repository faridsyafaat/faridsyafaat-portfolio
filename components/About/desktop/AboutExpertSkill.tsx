import Image from "next/image"

const techs = [
  "/icons/Icon1.png",
  "/icons/Icon2.png",
  "/icons/Icon3.png",
  "/icons/Icon4.png",
  "/icons/Icon5.png",
  "/icons/Icon6.png",
  "/icons/Icon7.png",
  "/icons/Icon8.png",
  "/icons/Icon9.png",
  "/icons/Icon10.png",
]

export default function AboutExpertSkill() {
  return (
    <div className="h-[380px] overflow-hidden rounded-[24px] bg-[#181D27] px-8 pt-8 pb-7">
      {/* Title */}
      <h3 className="text-[34px] font-semibold text-white">Expert Skill</h3>

      {/* Rating */}
      <div className="mt-4 flex gap-1 text-[24px] text-[#F59E0B]">
        ★ ★ ★ ★ ★
      </div>

      {/* Description */}
      <p className="mt-5 text-[11px] leading-5 text-white">
        Building modern web applications with React, JavaScript, and educational
        technology.
      </p>

      {/* Skill Icons */}
      <div className="mt-6 grid grid-cols-5 gap-4">
        {techs.map((icon, index) => (
          <div
            key={index}
            className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-[#222222] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 hover:bg-[#2A2F3B] hover:shadow-lg"
          >
            <Image
              src={icon}
              alt={`Icon ${index + 1}`}
              width={28}
              height={28}
              className="transition-transform duration-300 hover:rotate-6"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
