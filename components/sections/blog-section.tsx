"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, Clock, Users, CheckCircle, Phone, Mail } from "lucide-react"
import Cal from "@calcom/embed-react"

// Keep export name as BlogSection so existing imports continue to work
export function BlogSection() {
  return (
    <section id="booking" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Schedule Your Free Consultation
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Ready to bring your project to life? Book a free 30-minute consultation to discuss your requirements and
                get a custom quote.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-6xl py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <ScrollReveal delay={0.1}>
              <Card className="text-center glassmorphic-card">
                <CardHeader className="pb-2">
                  <Calendar className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-lg">Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Choose from available time slots that work for you</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="text-center glassmorphic-card">
                <CardHeader className="pb-2">
                  <Clock className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-lg">30 Minutes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Focused discussion about your project needs</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="text-center glassmorphic-card">
                <CardHeader className="pb-2">
                  <Users className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-lg">Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Meet with our experienced developers</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="text-center glassmorphic-card">
                <CardHeader className="pb-2">
                  <CheckCircle className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-lg">Free Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Get a detailed project estimate</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5}>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Column - Booking Details */}
              <Card className="glassmorphic-card h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Consultation</CardTitle>
                  <CardDescription>
                    Select a convenient time slot and we'll discuss your project requirements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Duration: 30 minutes</p>
                        <p className="text-sm text-muted-foreground">Focused discussion about your needs</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Meet Our Team</p>
                        <p className="text-sm text-muted-foreground">Connect with experienced developers</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Free Project Quote</p>
                        <p className="text-sm text-muted-foreground">Get detailed estimate and timeline</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-medium mb-3">What We'll Discuss:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Your project goals and requirements</li>
                      <li>• Technology stack recommendations</li>
                      <li>• Timeline and budget estimation</li>
                      <li>• Next steps and project roadmap</li>
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-medium mb-3">Alternative Contact:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>hello@femurstudio.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground text-center pt-4 border-t">
                    No commitment required • Free consultation • Response within 24 hours
                  </p>
                </CardContent>
              </Card>

              {/* Right Column - Calendar */}
              <Card className="glassmorphic-card">
                <CardContent className="p-0">
                  <div className="w-full h-[700px] rounded-lg overflow-hidden">
                    <Cal
                      calLink="femurstudio/30min"
                      style={{ width: "100%", height: "100%" }}
                      config={{ layout: "month_view" }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
