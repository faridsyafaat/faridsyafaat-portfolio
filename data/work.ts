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
      "A restaurant web application for discovering culinary experiences, exploring restaurant offerings, managing and ordering experience.",
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
    category: "Web Application",
    year: "2024",
    title: "Booking Hotel",
    description:
      "A hotel booking web application for searching rooms, viewing room details, making reservations, and booking information.",
    image: "/images/booking.png",
    url: "https://booking-app-1fny.vercel.app",
  },
  {
    id: 4,
    category: "Web Application",
    year: "2024",
    title: "Library App",
    description:
      "A school library web application for managing books, members, borrowing activities, and library information.",
    image: "/images/library2.png",
    url: "https://library-web-app-smoky.vercel.app",
  },

  {
    id: 5,
    category: "Web Application",
    year: "2024",
    title: "Social Media App",
    description:
      "Aplikasi media sosial sederhana dengan fitur posting, komentar, dan interaksi pengguna.",
    image: "/images/media.png",
    url: "https://github.com/faridsyafaat/social-media-app",
  },

  {
    id: 6,
    category: "Web Application",
    year: "2024",
    title: "SIGAP-NESAS",
    description:
      "Aplikasi edukasi untuk membentuk karakter anak melalui 7 Kebiasaan Anak Indonesia Hebat (7 KAIH).",
    image: "/images/sigap.png",
    url: "https://sigap.smpnegeri1sobang.sch.id",
  },
]
