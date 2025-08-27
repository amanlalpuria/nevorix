import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Users, BarChart3, Shield, Smartphone, Globe } from "lucide-react"

export function NevoShowcase() {
  return (
    <section id="nevo" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-work-sans mb-6">
            Meet <span className="gradient-text">NEVO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our flagship product - a comprehensive eCommerce and order management platform that revolutionizes vendor
            selling portals with cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold font-work-sans mb-6 text-foreground">The Black Box Solution</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nevo is a scalable, efficient, and secure platform built with modular monolith architecture. It provides
              centralized operations while ensuring future scalability for your business growth.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Customer-facing web and mobile interfaces</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Robust administrative tools for vendors</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#3533CD] rounded-full"></div>
                <span className="text-foreground">Real-time notifications and analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Advanced authentication and security</span>
              </div>
            </div>
            {/* <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3">
              Learn More About Nevo
            </Button> */}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-[#3533CD]/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-accent/20 rounded-full blur-lg"></div>

              <div className="relative z-10">
                <div className="bg-card rounded-xl p-6 shadow-lg mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">Dashboard Overview</h4>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Orders</span>
                      <span className="font-semibold text-primary">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Revenue</span>
                      <span className="font-semibold text-accent">$45,890</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Active Vendors</span>
                      <span className="font-semibold text-[#3533CD]">89</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-lg p-4 shadow-md">
                    <ShoppingCart className="w-8 h-8 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">Orders</div>
                    <div className="text-xl font-bold text-foreground">+23%</div>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-md">
                    <Users className="w-8 h-8 text-accent mb-2" />
                    <div className="text-sm text-muted-foreground">Users</div>
                    <div className="text-xl font-bold text-foreground">+15%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold font-work-sans mb-3">eCommerce Platform</h4>
              <p className="text-muted-foreground">
                Complete online selling solution with inventory management and order processing.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold font-work-sans mb-3">Analytics Dashboard</h4>
              <p className="text-muted-foreground">
                Real-time insights and actionable data to drive business growth and decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#3533CD]/20 hover:border-[#3533CD]/40 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#3533CD]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#3533CD]" />
              </div>
              <h4 className="text-xl font-semibold font-work-sans mb-3">Enterprise Security</h4>
              <p className="text-muted-foreground">
                Advanced authentication, encryption, and security protocols for data protection.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold font-work-sans mb-3">Mobile Ready</h4>
              <p className="text-muted-foreground">
                Responsive design with native mobile app support for iOS and Android.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold font-work-sans mb-3">Multi-Vendor Support</h4>
              <p className="text-muted-foreground">
                Comprehensive vendor management with individual dashboards and controls.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold font-work-sans mb-3">Global Scalability</h4>
              <p className="text-muted-foreground">
                Built for worldwide operations with multi-currency and localization support.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
