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
      "Building the structure of web pages with semantic markup for accessibility.",
  },
  {
    id: 2,
    title: "CSS",
    icon: "/icons/Icon1.png",
    percentage: 90,
    description:
      "Building the structure of web pages with semantic markup for accessibility.",
  },
  {
    id: 3,
    title: "Javascript",
    icon: "/icons/Icon2.png",
    percentage: 90,
    description:
      "Building the structure of web pages with semantic markup for accessibility.",
  },
  {
    id: 4,
    title: "React JS",
    icon: "/icons/Icon7.png",
    percentage: 90,
    description:
      "Building the structure of web pages with semantic markup for accessibility.",
  },
  {
    id: 5,
    title: "MongoDB",
    icon: "/icons/Icon10.png",
    percentage: 90,
    description:
      "Building the structure of web pages with semantic markup for accessibility.",
  },
  {
    id: 6,
    title: "Docker",
    icon: "/icons/Icon8.png",
    percentage: 90,
    description:
      "Building the structure of web pages with semantic markup for accessibility.",
  },
]
