import AboutDesktop from "./desktop/AboutDesktop"
import AboutMobile from "./mobile/AboutMobile"

export default function About() {
  return (
    <section id="about" className="scroll-mt-[85px] bg-white">
      <AboutDesktop />
      <AboutMobile />
    </section>
  )
}
