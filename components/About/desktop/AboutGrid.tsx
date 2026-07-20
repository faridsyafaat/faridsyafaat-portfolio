import AboutWhyChoose from "./AboutWhyChoose"
import AboutExpertSkill from "./AboutExpertSkill"
import AboutExperience from "./AboutExperience"
import AboutProfile from "./AboutProfile"
import AboutStatistics from "./AboutStatistics"
import FadeUp from "@/components/animation/FadeUp"

export default function AboutGrid() {
  return (
    <div className="mt-14 grid [grid-template-columns:5fr_4fr_5fr] gap-6">
      <FadeUp delay={0}>
        <AboutWhyChoose />
      </FadeUp>

      <FadeUp delay={0.1}>
        <AboutExpertSkill />
      </FadeUp>

      <FadeUp delay={0.2}>
        <AboutExperience />
      </FadeUp>

      <FadeUp delay={0.3}>
        <AboutProfile />
      </FadeUp>

      <div className="col-span-2">
        <FadeUp delay={0.4}>
          <AboutStatistics />
        </FadeUp>
      </div>
    </div>
  )
}
