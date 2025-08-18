import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Cog, Palette, Zap, Globe } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and cutting-edge technologies.",
      color: "text-[#962DE8]",
      bgColor: "bg-gradient-to-br from-[#962DE8]/20 to-[#3533CD]/20",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android with exceptional user experience.",
      color: "text-[#3533CD]",
      bgColor: "bg-gradient-to-br from-[#3533CD]/20 to-[#962DE8]/20",
    },
    {
      icon: Globe,
      title: "Digitalization",
      description: "Transform your business processes with digital solutions and cloud-based systems.",
      color: "text-[#FFDE59]",
      bgColor: "bg-gradient-to-br from-[#FFDE59]/20 to-[#FF914D]/20",
    },
    {
      icon: Cog,
      title: "Automation",
      description: "Streamline operations with intelligent automation and workflow optimization.",
      color: "text-[#FF914D]",
      bgColor: "bg-gradient-to-br from-[#FF914D]/20 to-[#FFDE59]/20",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user engagement and satisfaction.",
      color: "text-[#962DE8]",
      bgColor: "bg-gradient-to-br from-[#962DE8]/20 to-[#3533CD]/20",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Boost your applications speed and efficiency with advanced optimization techniques.",
      color: "text-[#3533CD]",
      bgColor: "bg-gradient-to-br from-[#3533CD]/20 to-[#962DE8]/20",
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#2E2E2E] to-[#962DE8]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-work-sans mb-6 text-[#E5E5E5]">
            Our{" "}
            <span className="bg-gradient-to-r from-[#962DE8] to-[#3533CD] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-[#E5E5E5]/80 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-[#962DE8]/20 transition-all duration-500 hover:-translate-y-3 border border-[#962DE8]/20 bg-[#2E2E2E]/50 backdrop-blur-sm hover:border-[#962DE8]/40"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 border border-white/10`}
                >
                  <service.icon className={`w-10 h-10 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-semibold font-work-sans mb-4 text-[#E5E5E5] group-hover:text-[#962DE8] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#E5E5E5]/70 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold font-work-sans mb-4 text-[#E5E5E5]">Our Process</h3>
            <p className="text-lg text-[#E5E5E5]/80">How we bring your vision to life</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#962DE8] to-[#3533CD] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#962DE8]/25">
                1
              </div>
              <h4 className="text-xl font-semibold font-work-sans mb-3 text-[#E5E5E5]">Discovery</h4>
              <p className="text-[#E5E5E5]/70">Understanding your needs and goals</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFDE59] to-[#FF914D] rounded-full flex items-center justify-center mx-auto mb-6 text-[#2E2E2E] font-bold text-2xl group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#FFDE59]/25">
                2
              </div>
              <h4 className="text-xl font-semibold font-work-sans mb-3 text-[#E5E5E5]">Design</h4>
              <p className="text-[#E5E5E5]/70">Creating intuitive and engaging experiences</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3533CD] to-[#962DE8] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#3533CD]/25">
                3
              </div>
              <h4 className="text-xl font-semibold font-work-sans mb-3 text-[#E5E5E5]">Development</h4>
              <p className="text-[#E5E5E5]/70">Building with cutting-edge technology</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF914D] to-[#FFDE59] rounded-full flex items-center justify-center mx-auto mb-6 text-[#2E2E2E] font-bold text-2xl group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#FF914D]/25">
                4
              </div>
              <h4 className="text-xl font-semibold font-work-sans mb-3 text-[#E5E5E5]">Launch</h4>
              <p className="text-[#E5E5E5]/70">Deploying and supporting your solution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
