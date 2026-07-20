"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SendHorizontal, CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (error) setError("")
  }

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, message } = formData

    if (!name.trim()) {
      setError("Please enter your name.")
      return
    }

    if (!email.trim()) {
      setError("Please enter your email.")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    if (!message.trim()) {
      setError("Please write your message.")
      return
    }

    setLoading(true)
    setSuccess(false)
    setError("")

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setLoading(false)
    setSuccess(true)

    setFormData({
      name: "",
      email: "",
      message: "",
    })

    setTimeout(() => {
      setSuccess(false)
    }, 5000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-[24px] border border-[#EAECF0] bg-white p-6 shadow-[0_10px_30px_rgba(16,24,40,0.06)]"
    >
      <h3 className="text-xl font-semibold text-[#101828]">Send a Message</h3>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#344054]">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-[#D0D5DD] px-4 text-sm transition outline-none focus:border-[#6600EB]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#344054]">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-[#D0D5DD] px-4 text-sm transition outline-none focus:border-[#6600EB]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#344054]">
            Message
          </label>

          <textarea
            rows={5}
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded-xl border border-[#D0D5DD] px-4 py-3 text-sm transition outline-none focus:border-[#6600EB]"
          />
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-medium text-red-600"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4"
            >
              <CheckCircle2 className="mt-0.5 text-green-600" size={22} />

              <div>
                <p className="font-semibold text-green-700">
                  Message sent successfully!
                </p>

                <p className="mt-1 text-sm text-green-700">
                  Thank you for reaching out. I&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={!loading ? { scale: 1.02 } : {}}
          whileTap={!loading ? { scale: 0.98 } : {}}
          type="submit"
          disabled={loading}
          className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#6600EB] font-semibold text-white transition-colors hover:bg-[#5700CC] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <SendHorizontal size={18} />

          {loading ? "Sending..." : "Submit"}
        </motion.button>
      </form>
    </motion.div>
  )
}
