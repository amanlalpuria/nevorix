"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#2E2E2E]/95 backdrop-blur-xl border-b border-[#962DE8]/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#962DE8] to-[#3533CD] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#FFDE59] to-[#FF914D] rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold font-work-sans tracking-tight">
              <span className="text-[#E5E5E5]">NEVORI</span>
              <span className="text-[#962DE8] text-3xl relative">
                X<div className="absolute inset-0 text-[#962DE8] animate-ping opacity-75">X</div>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#E5E5E5] hover:text-[#962DE8] transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#962DE8] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("nemo")}
              className="text-[#E5E5E5] hover:text-[#962DE8] transition-all duration-300 font-medium relative group"
            >
              Discover Nemo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#962DE8] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[#E5E5E5] hover:text-[#962DE8] transition-all duration-300 font-medium relative group"
            >
              Our Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#962DE8] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#E5E5E5] hover:text-[#962DE8] transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#962DE8] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[#962DE8] to-[#3533CD] hover:from-[#962DE8]/90 hover:to-[#3533CD]/90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#E5E5E5] hover:text-[#962DE8] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#962DE8]/20 pt-4 bg-[#2E2E2E]/95 backdrop-blur-xl rounded-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#E5E5E5] hover:text-[#962DE8] transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("nemo")}
                className="text-[#E5E5E5] hover:text-[#962DE8] transition-colors font-medium text-left"
              >
                Discover Nemo
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-[#E5E5E5] hover:text-[#962DE8] transition-colors font-medium text-left"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#E5E5E5] hover:text-[#962DE8] transition-colors font-medium text-left"
              >
                About
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-[#962DE8] to-[#3533CD] hover:from-[#962DE8]/90 hover:to-[#3533CD]/90 text-white font-semibold w-full rounded-full"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
