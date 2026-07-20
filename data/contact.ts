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
    value: "+62 1234567890",
  },
  {
    id: 2,
    icon: Mail,
    value: "edwinanderson@email.com",
  },
  {
    id: 3,
    icon: MapPin,
    value: "Jakarta, Indonesia",
  },
]
