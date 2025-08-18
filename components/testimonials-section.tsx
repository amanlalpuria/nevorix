"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content:
        "NEVORIX transformed our business with their innovative solutions. The Nemo platform exceeded all our expectations and significantly boosted our sales.",
      rating: 5,
      avatar: "/professional-woman-ceo.png",
    },
    {
      name: "Michael Chen",
      company: "Digital Ventures",
      role: "CTO",
      content:
        "The team at NEVORIX delivered exceptional results. Their technical expertise and attention to detail made our project a huge success.",
      rating: 5,
      avatar: "/professional-man-cto.png",
    },
    {
      name: "Emily Rodriguez",
      company: "E-Commerce Plus",
      role: "Founder",
      content:
        "Working with NEVORIX was a game-changer. Their automation solutions saved us countless hours and improved our efficiency dramatically.",
      rating: 5,
      avatar: "/professional-woman-founder.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-work-sans mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the businesses we've helped transform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/10 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-secondary fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-lg text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full w-12 h-12 p-0 bg-transparent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full w-12 h-12 p-0 bg-transparent"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3533CD] mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
