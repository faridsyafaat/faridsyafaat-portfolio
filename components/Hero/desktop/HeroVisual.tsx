import Image from "next/image"

export default function HeroVisual() {
  return (
    <div className="absolute top-[50px] left-[130px] h-[1018px] w-[1018px]">
      {/* Frame background */}
      <Image
        src="/images/frame.png"
        alt="Background Frame"
        fill
        className="object-contain opacity-70"
      />

      {/* Farid Syafaat */}
      <Image
        src="/images/faridsyafaat.png"
        alt="Farid Syafaat"
        width={650}
        height={650}
        className="absolute top-[190px] left-[160px] z-0 object-contain"
      />
    </div>
  )
}
