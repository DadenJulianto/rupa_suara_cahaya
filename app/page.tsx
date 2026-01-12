"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/hero-section"
import VideoSection from "@/components/sections/video-section"
import OfferSection from "@/components/sections/offer-section"
import AboutSection from "@/components/sections/about-section"
import BusinessGrid from "@/components/sections/business-grid"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <HeroSection />
        <VideoSection />
        <OfferSection />
        <AboutSection />
        <BusinessGrid />
      </main>
      <Footer />
    </div>
  )
}
