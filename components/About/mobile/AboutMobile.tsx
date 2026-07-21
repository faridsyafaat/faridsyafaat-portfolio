import AboutHeaderMobile from "./AboutHeaderMobile"
import AboutWhyChooseMobile from "./AboutWhyChooseMobile"
import AboutExpertSkillMobile from "./AboutExpertSkillMobile"
import AboutExperienceMobile from "./AboutExperienceMobile"
import AboutProfileMobile from "./AboutProfileMobile"
import AboutStatisticsMobile from "./AboutStatisticsMobile"

export default function AboutMobile() {
  return (
    <section className="scroll-mt-[85px] bg-white pt-8 pb-16 lg:hidden">
      <div className="mx-auto max-w-md px-5">
        <AboutHeaderMobile />
        <div className="mt-10 space-y-6">
          <AboutWhyChooseMobile />
          <AboutExpertSkillMobile />
          <AboutExperienceMobile />
          <AboutProfileMobile />
          <AboutStatisticsMobile />
        </div>
      </div>
    </section>
  )
}
