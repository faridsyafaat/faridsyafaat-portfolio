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
      <div className="absolute top-8 left-10">
        <h3 className="text-[34px] leading-tight font-semibold text-white">
          Building Digital
          <br />
          Products
        </h3>

        <Image
          src="/icons/star.png"
          alt="Star"
          width={26}
          height={26}
          className="absolute top-[52px] left-[165px]"
        />
      </div>

      {/* Flag 1 */}
      <div className="absolute top-[150px] left-[230px]">
        <div className="relative transition-transform duration-300 hover:scale-110">
          <Image
            src="/icons/bendera1.png"
            alt="Germany"
            width={50}
            height={32}
          />

          {/* Marker */}
          <div className="absolute top-[2px] left-[52px]">
            <div className="flex h-3 w-3 animate-pulse items-center justify-center rounded-full bg-white/20">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Flag 2 */}
      <div className="absolute top-[130px] left-[510px]">
        <div className="relative transition-transform duration-300 hover:scale-110">
          <Image src="/icons/bendera2.png" alt="US" width={50} height={32} />

          {/* Marker */}
          <div className="absolute top-[2px] left-[52px]">
            <div className="flex h-3 w-3 animate-pulse items-center justify-center rounded-full bg-white/20">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Flag 3 */}
      <div className="absolute top-[260px] left-[550px]">
        <div className="relative transition-transform duration-300 hover:scale-110">
          <Image
            src="/icons/bendera3.png"
            alt="Indonesia"
            width={50}
            height={32}
          />

          {/* Marker */}
          <div className="absolute top-[2px] left-[52px]">
            <div className="flex h-3 w-3 animate-pulse items-center justify-center rounded-full bg-white/20">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="absolute bottom-10 left-10 transition-all duration-300 hover:-translate-y-2">
        <div>
          <h4 className="text-[40px] font-bold text-white">50+</h4>
          <p className="text-[14px] text-white">Global Client&apos;s Handle</p>
        </div>
      </div>

      <div className="absolute bottom-10 left-[230px] transition-all duration-300 hover:-translate-y-2">
        <h4 className="text-[40px] font-bold text-white">99%</h4>
        <p className="text-[14px] text-white">Client Satisfaction Rate</p>
      </div>

      <div className="absolute bottom-10 left-[440px] transition-all duration-300 hover:-translate-y-2">
        <h4 className="text-[40px] font-bold text-white">100+</h4>
        <p className="text-[14px] text-white">Project Delivered</p>
      </div>
    </div>
  )
}
