import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arthur Vilas - Growth Marketing",
  openGraph: {
    title: "Arthur Vilas - Growth Marketing",
    type: "website",
    url: "https://arthurvilas.com",
    description: "Conecte-se comigo nas redes sociais e descubra mais sobre meu trabalho em Growth Marketing.",
  },
  description: "Conecte-se comigo nas redes sociais e descubra mais sobre meu trabalho em Growth Marketing.",
  keywords: ["social media", "links", "contact", "portfolio", "WhatsApp", "LinkedIn", "Instagram"],
  authors: [{ name: "Arthur Gustavo" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
