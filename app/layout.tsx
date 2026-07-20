import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "Farid Syafaat | Front-End Developer",
    template: "%s | Farid Syafaat",
  },

  description:
    "Portfolio of Farid Syafaat, a Front-End Developer specializing in Next.js, React, TypeScript, Tailwind CSS, and responsive web development.",

  keywords: [
    "Farid Syafaat",
    "Front-End Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],

  authors: [
    {
      name: "Farid Syafaat",
    },
  ],

  creator: "Farid Syafaat",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Farid Syafaat | Front-End Developer",
    description:
      "Explore the portfolio of Farid Syafaat, showcasing modern web applications built with Next.js, React, TypeScript, and Tailwind CSS.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Farid Syafaat | Front-End Developer",
    description:
      "Portfolio showcasing projects built with Next.js, React, TypeScript, and Tailwind CSS.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
