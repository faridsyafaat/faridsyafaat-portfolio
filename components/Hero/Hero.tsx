import HeroDesktop from "./desktop/HeroDesktop"
import HeroMobile from "./mobile/HeroMobile"

export default function Hero() {
  return (
    <section id="home">
      <div className="lg:hidden">
        <HeroMobile />
      </div>

      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
    </section>
  )
}
