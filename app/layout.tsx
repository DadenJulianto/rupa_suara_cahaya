import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "aos/dist/aos.css"
import AOSProvider from "../components/aos-provider"
import BottomNav from "../components/BottomNav"



const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rupa Suara Cahaya - Studio Produksi & Event Management",
  description: "Solusi kreatif dan inovatif untuk kebutuhan acara, produksi, dan bisnis Anda",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <AOSProvider />   {/* ← INI yang menyalakan animasi */}
        {children}
        <BottomNav />
        <Analytics />
      </body>
    </html>
  )
}
