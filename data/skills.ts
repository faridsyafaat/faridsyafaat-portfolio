export interface Skill {
  id: number
  title: string
  description: string
  percentage: number
  icon: string
}

export const skills: Skill[] = [
  {
    id: 1,
    title: "HTML",
    icon: "/icons/Icon3.png",
    percentage: 90,
    description:
      "Building semantic and accessible structures for modern web applications.",
  },
  {
    id: 2,
    title: "CSS",
    icon: "/icons/Icon1.png",
    percentage: 90,
    description:
      "Creating responsive layouts and modern user interfaces across devices.",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: "/icons/Icon2.png",
    percentage: 90,
    description:
      "Developing interactive web experiences and dynamic application features.",
  },
  {
    id: 4,
    title: "React",
    icon: "/icons/Icon7.png",
    percentage: 90,
    description:
      "Building reusable components and responsive front-end applications.",
  },
  {
    id: 5,
    title: "Laravel",
    icon: "/icons/Icon12.png",
    percentage: 85,
    description: "Developing web applications and backend APIs with Laravel.",
  },
  {
    id: 6,
    title: "ERP",
    icon: "/icons/Icon11.png",
    percentage: 85,
    description:
      "Developing and working with integrated business application systems.",
  },
]
