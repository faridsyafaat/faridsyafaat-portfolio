import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"

export interface FooterSocialItem {
  id: number
  icon: React.ComponentType<{ size?: number }>
  href: string
}

export const footerSocial: FooterSocialItem[] = [
  {
    id: 1,
    icon: FaGithub,
    href: "https://github.com/faridsyafaat",
  },

  {
    id: 2,
    icon: FaInstagram,
    href: "https://www.instagram.com/farid_syafaat?stkn=c3o3M2h1em96bGky",
  },

  {
    id: 3,
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/farid-sobang-555821369",
  },
]
