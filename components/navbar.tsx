"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"

interface NavbarProps {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-lg">RSC</span>
            </div>
            <span className="hidden sm:inline text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Rupa Suara Cahaya
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium relative group"
            >
              Halaman Muka
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium relative group"
            >
              Produk
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-accent/20 transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-accent animate-spin-slow" />
              ) : (
                <Moon className="w-5 h-5 text-accent" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-down">
            <Link href="#" className="block px-4 py-2 text-foreground hover:bg-accent/10 rounded-lg transition">
              Halaman Muka
            </Link>
            <Link href="#" className="block px-4 py-2 text-foreground hover:bg-accent/10 rounded-lg transition">
              Produk
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
