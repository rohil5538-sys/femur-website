"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { useEffect, useState, useRef } from "react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechStart Inc.",
      content:
        "They delivered our e-commerce platform ahead of schedule and exceeded our expectations. The attention to detail and user experience is outstanding.",
      avatar: "SM",
    },
    {
      name: "David Chen",
      role: "Founder, HealthApp",
      content:
        "Our mobile app has received incredible user feedback thanks to their expertise. The development process was smooth and professional throughout.",
      avatar: "DC",
    },
    {
      name: "Maria Rodriguez",
      role: "Marketing Director, RetailCorp",
      content:
        "The website redesign increased our conversion rate by 40%. Their strategic approach to UX design made all the difference for our business.",
      avatar: "MR",
    },
    {
      name: "James Wilson",
      role: "CTO, InnovateLab",
      content:
        "The custom web application they built has streamlined our operations significantly. Their technical expertise and project management were exceptional.",
      avatar: "JW",
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager, StartupXYZ",
      content:
        "From concept to launch, they guided us through every step. The final product exceeded our vision and has been crucial to our success.",
      avatar: "LT",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1) // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2) // Tablet: 2 items
      } else {
        setItemsPerView(3) // Desktop: 3 items
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  useEffect(() => {
    const startCarousel = () => {
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true)
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 2000)
    }

    startCarousel()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

 useEffect(() => {
  if (currentIndex >= testimonials.length) {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
      setCurrentIndex(0)
    }, 800) // Match transition duration

    return () => clearTimeout(timer)
  } else {
    setIsTransitioning(true)
  }
}, [currentIndex, testimonials.length])



  const circularTestimonials = [...testimonials, ...testimonials.slice(0, itemsPerView)]

  const handleDotClick = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setIsTransitioning(true)
    setCurrentIndex(index)

    // Restart carousel after manual navigation
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true)
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 2000)
    }, 2000)
  }

  return (
    <section id="testimonials" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="waves" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <AnimatedText
                text="What Our Clients Say"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl"
                animation="slide"
              />
              <AnimatedText
                text="Hear from business owners who have transformed their digital presence with our development services."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="relative py-12 overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{
              x: `calc(-${(currentIndex * 100) / itemsPerView}% - ${currentIndex * (itemsPerView === 1 ? 1 : itemsPerView === 2 ? 1.25 : 1.5)}rem)`,
            }}
            transition={{
              duration: isTransitioning ? 0.8 : 0,
              ease: "easeInOut",
            }}
            style={{
              width: `calc(${circularTestimonials.length * (100 / itemsPerView)}% + ${(circularTestimonials.length - 1) * (itemsPerView === 1 ? 1 : itemsPerView === 2 ? 1.25 : 1.5)}rem)`,
            }}
          >
            {circularTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 max-w-sm mx-auto"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full glassmorphic-card group">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Avatar className="glassmorphic-avatar border-2 border-transparent group-hover:border-red-500 transition-colors">
                          <AvatarImage
                            src={`/placeholder-40x40.png?height=40&width=40&text=${testimonial.avatar}`}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-medium tracking-tight group-hover:text-red-500 transition-colors">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground opacity-70">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.slice(0, 3).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === (currentIndex % testimonials.length) ? "bg-red-500" : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
