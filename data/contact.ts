import { Phone, Mail, MapPin } from "lucide-react"

export interface ContactItem {
  id: number
  icon: typeof Phone
  value: string
}

export const contactItems: ContactItem[] = [
  {
    id: 1,
    icon: Phone,
    value: "087787126542",
  },
  {
    id: 2,
    icon: Mail,
    value: "faridsobang01@gmail.com",
  },
  {
    id: 3,
    icon: MapPin,
    value: "Banten, Indonesia",
  },
]
