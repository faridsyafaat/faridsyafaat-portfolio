"use client"

interface Props {
  total: number
  active: number
  onChange?: (index: number) => void
}

export default function TestimonialDots({ total, active, onChange }: Props) {
  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === active

        return (
          <button
            key={index}
            type="button"
            aria-label={`Go to testimonial ${index + 1}`}
            onClick={() => onChange?.(index)}
            className={`h-3 cursor-pointer rounded-full transition-all duration-300 ${
              isActive
                ? "w-8 bg-[#8B32FF]"
                : "w-3 bg-[#D0D5DD] hover:bg-[#BDB4FE]"
            } `}
          />
        )
      })}
    </div>
  )
}
