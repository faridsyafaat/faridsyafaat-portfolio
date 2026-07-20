export interface Testimonial {
  id: number
  logo: string
  company: string
  review: string
  author: string
  position: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    logo: "/images/upwork.png",
    company: "Upwork",
    review:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We've seen a significant increase in user engagement!",
    author: "Robert Lewandowski",
    position: "Head of Engineering, Upwork",
  },
  {
    id: 2,
    logo: "/images/zapier.png",
    company: "Zapier",
    review:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We've seen a significant increase in user engagement!",
    author: "Dani Olmo",
    position: "Product Manager, Zapier",
  },
  {
    id: 3,
    logo: "/images/zoom.png",
    company: "Zoom",
    review:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We've seen a significant increase in user engagement!",
    author: "Jude Bellingham",
    position: "Vice President, Zoom",
  },
]
