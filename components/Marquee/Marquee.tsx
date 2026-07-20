import Image from "next/image"

const items = [
  "Frontend Developer",
  "Expert React",
  "Programmer",
  "Mobile Developer",
]

export default function Marquee() {
  return (
    <section className="relative z-20 -mt-4 -rotate-[1deg] overflow-hidden bg-[#0A0D12] py-4 lg:py-8">
      <div className="animate-marquee flex w-max">
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-3 flex items-center gap-4 whitespace-nowrap lg:mx-4 lg:gap-8"
          >
            <span className="text-[20px] font-semibold text-white lg:text-[34px]">
              {item}
            </span>

            <Image
              src="/icons/vektor.png"
              alt="Separator"
              width={48}
              height={52}
              className="h-5 w-5 lg:h-[52px] lg:w-[48px]"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
