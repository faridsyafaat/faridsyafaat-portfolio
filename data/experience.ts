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
    company: "Freelance / Independent",
    logo: "/images/freelance.png",
    period: "2024–Present",
    role: "Web Developer",
    description:
      "Developing web applications for schools and educational institutions, from interface design and feature development to system integration, maintenance, and continuous improvement.",
  },
  {
    id: 2,
    company: "Website Development",
    logo: "/images/website.png",
    period: "2024–Present",
    role: "Frontend Developer",
    description:
      "Building responsive and user-friendly websites using modern web technologies, with a focus on clean interfaces, performance, accessibility, and responsive design.",
  },
  {
    id: 3,
    company: "UI/UX Development",
    logo: "/images/uiux.png",
    period: "2024–Present",
    role: "UI/UX Developer",
    description:
      "Designing and implementing intuitive user interfaces with a focus on usability, visual consistency, responsive layouts, and smooth user experiences.",
  },
]
