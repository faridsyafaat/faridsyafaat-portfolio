export default function AboutHeader() {
  return (
    <div className="w-full">
      {/* Small Title */}
      <p className="text-[18px] font-semibold text-[#4B5563]">
        Hi, I&apos;m Edwin Anderson 👋
      </p>

      {/* Heading + Description dalam satu kalimat */}
      <h2 className="mt-4 max-w-[1240px] text-[36px] leading-[50px] tracking-[-2px]">
        <span className="font-bold text-[#111827]">
          Building digital products with a focus on crafting visually engaging
          and seamless user interfaces using React.js.
        </span>{" "}
        <span className="font-normal text-[#9CA3AF]">
          Prioritizing responsive design, performance optimization, and
          user-centric features to deliver exceptional web experiences.
        </span>
      </h2>
    </div>
  )
}
