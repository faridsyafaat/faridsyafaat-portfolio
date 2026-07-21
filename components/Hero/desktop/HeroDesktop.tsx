import HeroTitle from "./HeroTitle"
import HeroVisual from "./HeroVisual"
import HeroRating from "./HeroRating"
import HeroFrontendCard from "./HeroFrontendCard"
import HeroGlobalClients from "./HeroGlobalClients"

export default function HeroDesktop() {
  return (
    <section className="relative hidden bg-[#160131] lg:block">
      <div className="relative -top-17 mx-auto h-[910px] max-w-[1440px] px-[25px]">
        <HeroTitle />
        <HeroVisual />
        <HeroRating />
        <HeroFrontendCard />
        <HeroGlobalClients />
      </div>
    </section>
  )
}
