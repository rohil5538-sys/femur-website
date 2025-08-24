"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { motion } from "framer-motion"

export function PortfolioHighlights() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      category: "Web Development",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Healthcare Mobile App",
      description:
        "Cross-platform mobile app for patient management with appointment scheduling and telemedicine features.",
      image: "/placeholder.svg?height=300&width=400&text=Healthcare+App",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      category: "Mobile Development",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization, user management, and subscription handling.",
      image: "/placeholder.svg?height=300&width=400&text=SaaS+Dashboard",
      technologies: ["React", "D3.js", "Express", "Redis"],
      category: "Web Application",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="portfolio" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <AnimatedBackground variant="grid" color="rgba(220, 38, 38, 0.03)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Featured Projects"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Explore some of our recent work and see how we've helped businesses achieve their digital goals."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full glassmorphic-card group overflow-hidden border-glow-red">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-red-500/90 text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="tracking-tight group-hover:text-red-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="opacity-70 group-hover:opacity-100 transition-opacity">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <a href={project.liveUrl} className="flex items-center justify-center">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl}>
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-12">
            <Button size="lg" className="neumorphic-button" asChild>
              <a href="/portfolio">View All Projects</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
