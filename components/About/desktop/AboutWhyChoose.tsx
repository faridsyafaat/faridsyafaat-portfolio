import { Badge } from "@/components/ui/badge"

const badgeStyle =
  "absolute inline-flex h-[36px] items-center rounded-full bg-white px-4 text-[14px] font-medium text-[#111827] whitespace-nowrap transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg"

export default function AboutWhyChooseDesktop() {
  return (
    <div className="relative h-[380px] overflow-hidden rounded-[24px] bg-[#E17B0E] px-8 pt-6 pb-7">
      {/* Title */}
      <h3 className="text-[34px] font-semibold text-[#FFFFFF]">
        Why Choose Me
      </h3>

      {/* Description */}
      <p className="mt-6 text-[16px] leading-6 text-[#FFFFFF]">
        Delivering excellence with innovative solutions and seamless execution.
      </p>

      {/* Badge Area */}
      <div className="relative mt-10 h-[150px]">
        {/* Row 1 */}
        <Badge className={`${badgeStyle} top-0 left-[-60px]`}>Expert</Badge>

        <Badge className={`${badgeStyle} top-0 left-[28px]`}>
          Fullstack Developer
        </Badge>

        <Badge className={`${badgeStyle} top-0 left-[211px]`}>
          Responsive Design
        </Badge>

        {/* Row 2 */}
        <Badge className={`${badgeStyle} top-[52px] left-[-48px]`}>
          &nbsp;
        </Badge>

        <Badge className={`${badgeStyle} top-[52px] left-[-4px]`}>
          React Expert
        </Badge>

        <Badge className={`${badgeStyle} top-[52px] left-[128px]`}>
          5 Years Experience
        </Badge>

        <Badge className={`${badgeStyle} top-[52px] left-[306px]`}>React</Badge>

        {/* Row 3 */}
        <Badge className={`${badgeStyle} top-[104px] left-[-60px]`}>
          Expert
        </Badge>

        <Badge className={`${badgeStyle} top-[104px] left-[28px]`}>
          Clean Code
        </Badge>

        <Badge className={`${badgeStyle} top-[104px] left-[158px]`}>
          Performance Optimization
        </Badge>
      </div>
    </div>
  )
}
