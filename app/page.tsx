"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSlider from "@/components/hero-slider";
import OfferSection from "@/components/sections/offer-section";
import AboutSection from "@/components/sections/about-section";
import BusinessGrid from "@/components/sections/business-grid";
import Footer from "@/components/footer";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  // 🔹 Ambil preferensi tema saat pertama kali load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  // 🔹 Terapkan & simpan tema setiap berubah
  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navbar dengan tombol Mode Gelap / Terang */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main>
        <HeroSlider />
        <OfferSection />

        {/* Tentang Kami */}
        <section id="tentang-kami">
          <AboutSection />
        </section>

        {/* Grup Usaha */}
        <section id="grup-usaha">
          <BusinessGrid />
        </section>
      </main>

      <Footer />
    </div>
  );
}
