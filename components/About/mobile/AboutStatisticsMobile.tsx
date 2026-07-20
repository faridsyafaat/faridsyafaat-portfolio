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
          Products
        </h3>

        <Image
          src="/icons/star.png"
          alt="Star"
          width={22}
          height={22}
          className="absolute top-[42px] left-[138px]"
        />
      </div>

      {/* Flag 1 */}
      <div className="absolute top-[110px] left-[240px]">
        <div className="relative transition-transform duration-300 hover:scale-110">
          <Image
            src="/icons/bendera1.png"
            alt="Germany"
            width={40}
            height={26}
          />

          <div className="absolute top-[2px] left-[42px]">
            <div className="flex h-3 w-3 animate-pulse items-center justify-center rounded-full bg-white/20">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Flag 2 */}
      <div className="absolute top-[180px] left-[340px]">
        <div className="relative transition-transform duration-300 hover:scale-110">
          <Image src="/icons/bendera2.png" alt="USA" width={40} height={26} />

          <div className="absolute top-[2px] left-[42px]">
            <div className="flex h-3 w-3 animate-pulse items-center justify-center rounded-full bg-white/20">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Flag 3 */}
      <div className="absolute top-[310px] left-[320px]">
        <div className="relative transition-transform duration-300 hover:scale-110">
          <Image
            src="/icons/bendera3.png"
            alt="Indonesia"
            width={40}
            height={26}
          />

          <div className="absolute top-[2px] left-[42px]">
            <div className="flex h-3 w-3 animate-pulse items-center justify-center rounded-full bg-white/20">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="absolute right-6 bottom-6 left-6 space-y-5">
        <div className="transition-all duration-300 hover:-translate-y-1">
          <h4 className="text-[34px] font-bold text-white">50+</h4>
          <p className="text-[13px] text-white">Global Client&apos;s Handle</p>
        </div>

        <div className="transition-all duration-300 hover:-translate-y-1">
          <h4 className="text-[34px] font-bold text-white">99%</h4>
          <p className="text-[13px] text-white">Client Satisfaction Rate</p>
        </div>

        <div className="transition-all duration-300 hover:-translate-y-1">
          <h4 className="text-[34px] font-bold text-white">100+</h4>
          <p className="text-[13px] text-white">Project Delivered</p>
        </div>
      </div>
    </div>
  )
}
