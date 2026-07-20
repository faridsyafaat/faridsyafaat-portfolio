import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero/Hero"
import Marquee from "@/components/Marquee/Marquee"
import About from "@/components/About/About"
import Skills from "@/components/sections/Skills"
import WhyChoose from "@/components/sections/WhyChoose"
import LatestWork from "@/components/sections/LatestWork"
import WorkExperience from "@/components/sections/WorkExperience"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <WhyChoose />
      <LatestWork />
      <WorkExperience />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
