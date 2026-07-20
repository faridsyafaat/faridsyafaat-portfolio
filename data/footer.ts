import { FaInstagram, FaDribbble, FaLinkedin } from "react-icons/fa"

export interface FooterSocialItem {
  id: number
  icon: React.ComponentType<{ size?: number }>
  href: string
}

export const footerSocial: FooterSocialItem[] = [
  {
    id: 1,
    icon: FaDribbble,
    href: "#",
  },

  {
    id: 2,
    icon: FaInstagram,
    href: "#",
  },

  {
    id: 3,
    icon: FaLinkedin,
    href: "#",
  },
]
