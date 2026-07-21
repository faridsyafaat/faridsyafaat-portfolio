import AboutHeader from "./AboutHeader"
import AboutGrid from "./AboutGrid"

export default function AboutDesktop() {
  return (
    <section className="hidden scroll-mt-[85px] bg-white pt-10 pb-24 lg:block">
      <div className="mx-auto max-w-[1440px] px-[80px]">
        <AboutHeader />

        <AboutGrid />
      </div>
    </section>
  )
}
