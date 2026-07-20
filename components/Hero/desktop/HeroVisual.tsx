import Image from "next/image"

export default function HeroVisual() {
  return (
    <div className="absolute top-[50px] left-[130px] h-[1018px] w-[1018px]">
      <Image
        src="/images/frame.png"
        alt="Frame"
        fill
        className="object-contain opacity-70"
      />

      <Image
        src="/images/youngman.png"
        alt="Young Man"
        width={758}
        height={758}
        className="absolute top-[155px] left-[109px] z-30"
      />
    </div>
  )
}
