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
    icon: "/icons/icon3.png",
    percentage: 90,
    description:
      "Building the structure of web pages with semantic markup for accessibility.",
  },
  {
    id: 2,
    title: "CSS",
    icon: "/icons/icon1.png",
    percentage: 90,
    description:
      "Building the structure of web pages with semantic markup for accessibility.",
  },
  {
    id: 3,
    title: "Javascript",
    icon: "/icons/icon2.png",
    percentage: 90,
    description:
      "Building the structure of web pages with semantic markup for accessibility.",
  },
  {
    id: 4,
    title: "React JS",
    icon: "/icons/icon7.png",
    percentage: 90,
    description:
      "Building the structure of web pages with semantic markup for accessibility.",
  },
  {
    id: 5,
    title: "MongoDB",
    icon: "/icons/icon10.png",
    percentage: 90,
    description:
      "Building the structure of web pages with semantic markup for accessibility.",
  },
  {
    id: 6,
    title: "Docker",
    icon: "/icons/icon8.png",
    percentage: 90,
    description:
      "Building the structure of web pages with semantic markup for accessibility.",
  },
]
