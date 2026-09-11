import { Badge } from "@/components/ui/badge"

const badgeStyle =
  "inline-flex h-[34px] items-center rounded-full bg-white px-3 text-[13px] font-medium text-[#111827] whitespace-nowrap transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-white"

export default function AboutWhyChooseMobile() {
  return (
    <div className="h-[380px] overflow-hidden rounded-[24px] bg-[#E17B0E] px-8 pt-6 pb-7">
      {/* Title */}
      <h3 className="text-[30px] font-semibold text-white">Why Choose Me</h3>

      {/* Description */}
      <p className="mt-5 text-[14px] leading-6 text-white">
        Building useful digital solutions with a focus on front-end development,
        responsive design, and educational technology.
      </p>

      {/* Badge Area */}
      <div className="mt-9">
        {/* Row 1 */}
        <div className="-ml-10 flex gap-3">
          <Badge className={badgeStyle}>Front-End Developer</Badge>

          <Badge className={badgeStyle}>React</Badge>

          <Badge className={badgeStyle}>Responsive Design</Badge>
        </div>

        {/* Row 2 */}
        <div className="mt-3 -ml-8 flex gap-3">
          <Badge className={badgeStyle}>JavaScript</Badge>

          <Badge className={badgeStyle}>5+ Years Experience</Badge>

          <Badge className={badgeStyle}>Next.js</Badge>
        </div>

        {/* Row 3 */}
        <div className="mt-3 -ml-10 flex gap-3">
          <Badge className={badgeStyle}>Clean Code</Badge>

          <Badge className={badgeStyle}>Tailwind CSS</Badge>

          <Badge className={badgeStyle}>Educational Technology</Badge>
        </div>
      </div>
    </div>
  )
}
