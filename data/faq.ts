export interface FAQ {
  id: number
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What technologies do you use?",
    answer:
      "I work with modern web technologies including HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and Git. I also have experience with Laravel and ERP systems for backend integration.",
  },
  {
    id: 2,
    question:
      "Do you develop websites for schools and educational institutions?",
    answer:
      "Yes. I develop websites and web applications for schools and educational institutions, with a focus on usability, responsive design, and practical features.",
  },
  {
    id: 3,
    question: "Can you integrate frontend applications with backend systems?",
    answer:
      "Yes. I can integrate frontend applications with REST APIs and backend systems to support authentication, data management, and other application features.",
  },
  {
    id: 4,
    question: "Do you provide website maintenance and updates?",
    answer:
      "Yes. I provide maintenance, bug fixes, feature improvements, and ongoing updates based on project requirements.",
  },
  {
    id: 5,
    question: "Are you available for freelance projects?",
    answer:
      "Yes. I am available for freelance web development projects, particularly frontend development and web applications.",
  },
]
