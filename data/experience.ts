export interface ExperienceItem {
  id: number
  company: string
  logo: string
  period: string
  role: string
  description: string
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Trustpilot",
    logo: "/images/trust.png",
    period: "2021-2024",
    role: "Frontend Developer",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  {
    id: 2,
    company: "Postman",
    logo: "/images/post.png",
    period: "2021-2024",
    role: "Frontend Developer",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  {
    id: 3,
    company: "Spotify",
    logo: "/images/spot.png",
    period: "2021-2024",
    role: "Frontend Developer",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
]
