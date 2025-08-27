"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { NevoShowcase } from "@/components/nemo-showcase"
import { Contact } from "@/components/contact-section"
import { About } from "@/components/about-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#2E2E2E]">
      <Header />
      <main>
        <HeroSection />
        <NevoShowcase />
        {/* <ServicesSection /> */}
        <TestimonialsSection />
        <Contact />
        <About />
      </main>
      <Footer />
    </div>
  )
}
