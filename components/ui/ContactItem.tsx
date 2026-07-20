"use client"

import { LucideIcon } from "lucide-react"

interface Props {
  icon: LucideIcon
  value: string
}

export default function ContactItem({ icon: Icon, value }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4EBFF]">
        <Icon size={18} className="text-[#6600EB]" />
      </div>

      <span className="text-[15px] text-[#667085]">{value}</span>
    </div>
  )
}
