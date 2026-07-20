import { Badge } from "@/components/ui/badge"

const badgeStyle =
  "inline-flex h-[36px] items-center rounded-full bg-white px-4 text-[14px] font-medium text-[#111827] whitespace-nowrap transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-white"

export default function AboutWhyChooseMobile() {
  return (
    <div className="h-[380px] overflow-hidden rounded-[24px] bg-[#E17B0E] px-8 pt-6 pb-7">
      <h3 className="text-[34px] font-semibold text-white">Why Choose Me</h3>

      <p className="mt-6 text-[16px] leading-6 text-[#FFFFFF]">
        Delivering excellence with innovative solutions and seamless execution.
      </p>

      <div className="mt-10">
        {/* Row 1 */}
        <div className="-ml-14 flex gap-5">
          <Badge className={badgeStyle}>Expert</Badge>
          <Badge className={badgeStyle}>Fullstack Developer</Badge>
          <Badge className={badgeStyle}>Responsive Design</Badge>
        </div>

        {/* Row 2 */}
        <div className="mt-3 -ml-12 flex gap-5">
          <Badge className={badgeStyle}></Badge>
          <Badge className={badgeStyle}>React Expert</Badge>
          <Badge className={badgeStyle}>5 Years Experience</Badge>
          <Badge className={badgeStyle}>React</Badge>
        </div>

        {/* Row 3 */}
        <div className="mt-3 -ml-15 flex gap-5">
          <Badge className={badgeStyle}>Expert</Badge>
          <Badge className={badgeStyle}>Clean Code</Badge>
          <Badge className={badgeStyle}>Performance Optimization</Badge>
        </div>
      </div>
    </div>
  )
}
