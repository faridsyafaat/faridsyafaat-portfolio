export default function AboutHeader() {
  return (
    <div className="w-full">
      {/* Small Title */}
      <p className="text-[18px] font-semibold text-[#4B5563]">
        Hi, I&apos;m Farid Syafaat 👋
      </p>

      {/* Heading + Description dalam satu kalimat */}
      <h2 className="mt-4 max-w-[1240px] text-[36px] leading-[50px] tracking-[-2px]">
        <span className="font-bold text-[#111827]">
          Building web applications with a focus on creating responsive,
          user-friendly, and meaningful digital experiences.
        </span>{" "}
        <span className="font-normal text-[#9CA3AF]">
          Focused on Front-End Development, React, JavaScript, and educational
          technology to build useful solutions for schools and learners.
        </span>
      </h2>
    </div>
  )
}
