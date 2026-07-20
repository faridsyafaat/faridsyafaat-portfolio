"use client"

import Image from "next/image"
import HeroRatingMobile from "./HeroRatingMobile"
import HeroFrontendCardMobile from "./HeroFrontendCardMobile"
import HeroGlobalClientsMobile from "./HeroGlobalClientsMobile"

export default function HeroMobile() {
  return (
    <section className="relative overflow-hidden bg-[#160131] lg:hidden">
      <div className="relative h-[580px]">
        {/* Hero Title */}
        <h1 className="absolute top-[92px] left-1/2 z-30 -translate-x-1/2 text-center text-[40px] leading-[50px] font-extrabold whitespace-nowrap text-white uppercase">
          EDWIN ANDERSON
        </h1>

        {/* Background Frame */}
        <Image
          src="/images/frame.png"
          alt="Frame"
          width={550}
          height={550}
          className="absolute top-[190px] left-1/2 mt-8 -translate-x-1/2 opacity-70"
        />

        {/* Hero Image */}
        <Image
          src="/images/youngman.png"
          alt="Hero"
          width={346}
          height={346}
          className="absolute top-[220px] left-1/2 z-20 mt-8 -translate-x-1/2"
        />

        <HeroRatingMobile />
        <HeroFrontendCardMobile />
        <HeroGlobalClientsMobile />
      </div>
    </section>
  )
}
