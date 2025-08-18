"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Rocket, Zap, Code2, Smartphone, Globe, Cpu } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2E2E2E] via-[#2E2E2E] to-[#962DE8]/10 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDuration: "3s" }}>
          <div className="w-20 h-20 bg-gradient-to-br from-[#962DE8]/30 to-[#3533CD]/30 rounded-2xl rotate-12 flex items-center justify-center backdrop-blur-sm">
            <Code2 className="w-10 h-10 text-[#962DE8]" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-pulse" style={{ animationDelay: "1s" }}>
          <div className="w-16 h-16 bg-gradient-to-br from-[#FFDE59]/30 to-[#FF914D]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Smartphone className="w-8 h-8 text-[#FF914D]" />
          </div>
        </div>
        <div
          className="absolute bottom-32 left-20 animate-spin"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-[#3533CD]/30 to-[#962DE8]/30 rounded-3xl -rotate-12 flex items-center justify-center backdrop-blur-sm">
            <Globe className="w-12 h-12 text-[#3533CD]" />
          </div>
        </div>
        <div className="absolute top-1/2 right-10 animate-pulse" style={{ animationDelay: "3s" }}>
          <div className="w-14 h-14 bg-gradient-to-br from-[#962DE8]/40 to-[#FFDE59]/40 rounded-xl rotate-45 flex items-center justify-center backdrop-blur-sm">
            <Cpu className="w-7 h-7 text-[#962DE8]" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-[#962DE8]/10 border border-[#962DE8]/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#962DE8]" />
              <span className="text-[#962DE8] font-medium">Next-Gen Tech Solutions</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold font-work-sans mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#E5E5E5] via-[#962DE8] to-[#3533CD] bg-clip-text text-transparent">
                NEVORI
              </span>
              <span className="relative inline-block ml-2">
                <span className="text-[#962DE8] animate-pulse text-7xl md:text-9xl">X</span>
                <div className="absolute inset-0 text-[#962DE8] animate-ping opacity-30 text-7xl md:text-9xl">X</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#FFDE59] to-[#FF914D] rounded-full animate-bounce"></div>
              </span>
            </h1>
          </div>

          <p className="text-2xl md:text-3xl text-[#E5E5E5] mb-6 font-work-sans font-light">
            Where Innovation Meets Excellence
          </p>

          <p className="text-lg md:text-xl text-[#E5E5E5]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses through cutting-edge web development, mobile solutions, digitalization, automation,
            and exceptional UI/UX design. Experience the future of technology today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={() => document.getElementById("nemo")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-[#962DE8] to-[#3533CD] hover:from-[#962DE8]/90 hover:to-[#3533CD]/90 text-white font-semibold px-10 py-4 text-lg group rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#962DE8]/25"
            >
              <Rocket className="mr-2 w-5 h-5" />
              Discover Nemo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-[#962DE8] text-[#962DE8] hover:bg-[#962DE8] hover:text-white font-semibold px-10 py-4 text-lg bg-transparent rounded-full transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="mr-2 w-5 h-5" />
              Our Services
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#962DE8]/10 to-[#3533CD]/10 border border-[#962DE8]/20 rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#962DE8] to-[#3533CD] bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-sm text-[#E5E5E5]/70 font-medium">Projects Delivered</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#3533CD]/10 to-[#962DE8]/10 border border-[#3533CD]/20 rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#3533CD] to-[#962DE8] bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-sm text-[#E5E5E5]/70 font-medium">Support</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#FFDE59]/10 to-[#FF914D]/10 border border-[#FFDE59]/20 rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#FFDE59] to-[#FF914D] bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm text-[#E5E5E5]/70 font-medium">Client Satisfaction</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#962DE8]/10 to-[#FFDE59]/10 border border-[#962DE8]/20 rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#962DE8] to-[#FFDE59] bg-clip-text text-transparent mb-2">
                  5★
                </div>
                <div className="text-sm text-[#E5E5E5]/70 font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
