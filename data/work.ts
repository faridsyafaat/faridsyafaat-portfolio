export interface WorkItem {
  id: number
  category: string
  year: string
  title: string
  description?: string
  image: string
  url: string
}

export const works: WorkItem[] = [
  {
    id: 1,
    category: "Web Application",
    year: "2024",
    title: "Restaurant Booking & Discovery App",
    description:
      "A restaurant web application for discovering culinary experiences, exploring restaurant offerings, and managing the booking and ordering experience.",
    image: "/images/restaurantnew.png",
    url: "https://restaurant-booking-app-alpha.vercel.app",
  },

  {
    id: 2,
    category: "Web Application",
    year: "2024",
    title: "Movie Explorer App",
    description:
      "A movie discovery web application for exploring movies, viewing details, managing favorites, and watching trailers.",
    image: "/images/movie.png",
    url: "https://movie-explorer-app-beige.vercel.app",
  },

  {
    id: 3,
    category: "Dashboard",
    year: "2024",
    title: "Dashboard SaaS Task Management",
    image: "/images/work3.png",
    url: "#",
  },

  {
    id: 4,
    category: "Dashboard",
    year: "2024",
    title: "Dashboard SaaS Task Management",
    image: "/images/work4.png",
    url: "#",
  },

  {
    id: 5,
    category: "Dashboard",
    year: "2024",
    title: "Dashboard SaaS Task Management",
    image: "/images/work5.png",
    url: "#",
  },

  {
    id: 6,
    category: "Dashboard",
    year: "2024",
    title: "Dashboard SaaS Task Management",
    image: "/images/work6.png",
    url: "#",
  },
]
