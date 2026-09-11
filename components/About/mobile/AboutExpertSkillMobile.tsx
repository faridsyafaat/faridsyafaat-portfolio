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

export default function AboutExpertSkillMobile() {
  return (
    <div className="overflow-hidden rounded-[20px] bg-[#181D27] p-6">
      {/* Title */}
      <h3 className="text-[30px] font-semibold text-white">Expert Skill</h3>

      {/* Rating */}
      <div className="mt-4 flex gap-1 text-[22px] text-[#F59E0B]">
        ★ ★ ★ ★ ★
      </div>

      {/* Description */}
      <p className="mt-5 text-[14px] leading-6 text-white/90">
        Building modern web applications with React, JavaScript, and educational
        technology.
      </p>

      {/* Tech Icons */}
      <div className="mt-7 grid grid-cols-5 gap-3">
        {techs.map((icon, index) => (
          <div
            key={index}
            className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#222222] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 hover:bg-[#2A2F3B] hover:shadow-lg"
          >
            <Image
              src={icon}
              alt={`Icon ${index + 1}`}
              width={26}
              height={26}
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
