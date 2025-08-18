"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { NemoShowcase } from "@/components/nemo-showcase"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#2E2E2E]">
      <Header />
      <main>
        <HeroSection />
        <NemoShowcase />
        <ServicesSection />
        <TestimonialsSection />
        <section id="contact" className="py-24 bg-gradient-to-br from-[#962DE8]/10 to-[#3533CD]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-[#E5E5E5]/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how NEVORIX can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "mailto:contact@nevorix.com?subject=Start New Project&body=Hi NEVORIX team, I would like to start a new project. Please contact me to discuss the details.",
                    "_blank",
                  )
                }
                className="bg-gradient-to-r from-[#962DE8] to-[#3533CD] hover:from-[#962DE8]/90 hover:to-[#3533CD]/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </button>
              <button
                onClick={() => window.open("https://calendly.com/nevorix/consultation", "_blank")}
                className="border-2 border-[#962DE8] text-[#962DE8] hover:bg-[#962DE8] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
        <section id="about" className="py-24 bg-[#2E2E2E]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-8">
                About <span className="text-[#962DE8]">NEVORIX</span>
              </h2>
              <p className="text-xl text-[#E5E5E5]/80 leading-relaxed mb-8">
                We are a forward-thinking technology startup dedicated to revolutionizing how businesses operate in the
                digital age. Our team of expert developers, designers, and strategists work together to create
                innovative solutions that drive growth and success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#962DE8] mb-2">Innovation</div>
                  <p className="text-[#E5E5E5]/70">Cutting-edge solutions for modern challenges</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3533CD] mb-2">Excellence</div>
                  <p className="text-[#E5E5E5]/70">Uncompromising quality in every project</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FFDE59] mb-2">Partnership</div>
                  <p className="text-[#E5E5E5]/70">Collaborative approach to your success</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
