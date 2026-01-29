import React from "react"
import HomeHeroSection from "@/components/shared/HomeHeroSection"
import HomeNavbar from "@/components/shared/HomeNavbar"
import FeatureCard from "@/components/shared/FeatureCard";
import { Check, Globe, Layout, Palette, User, Zap } from "lucide-react";
import HowItWorks from "@/components/shared/HowItWorks";
import TestimonialCard from "@/components/shared/TestimonialCard";
import CTA from "@/components/shared/CTA";
import HomePageFooter from "@/components/shared/HomePageFooter";

export const features = [
  {
    title: "Customizable Templates",
    icon: Palette,
    description:
      "Start with professionally designed templates and customize to fit your vision.",
  },
  {
    title: "AI-Powered Generation",
    icon: Zap,
    description:
      "Instantly generate mockups from text descriptions or sketches.",
  },
  {
    title: "Responsive Previews",
    icon: Layout,
    description:
      "View your designs across devices in real-time.",
  },
  {
    title: "Collaboration Tools",
    icon: Globe,
    description:
      "Share and collaborate with teams seamlessly.",
  },
  {
    title: "Export Options",
    icon: User,
    description:
      "Export to Figma, Sketch, PNG, or code snippets.",
  },
  {
    title: "Secure & Scalable",
    icon: Check,
    description:
      "Powered by NeonDB for reliable data handling.",
  },
];

export const testimonials = [
  {
    quote: "Mocklify saved me hours on every project!",
    author: "Jane Doe, UI Designer",
  },
  {
    quote: "The AI features are a game-changer for rapid prototyping.",
    author: "John Smith, Product Manager",
  },
  {
    quote: "Seamless integration with our workflow.",
    author: "Alex Lee, Developer",
  },
];




export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/50">
      <HomeNavbar />
      <HomeHeroSection />
      <section id="features" className="container py-8 md:py-10">
        <div className="mx-auto max-w-3xl text-center space-y-8 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Why Choose Mocklify?</h2>
          <p className="text-xl text-muted-foreground">Streamline your design workflow with powerful features.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 p-4">
          {features.map((feature, index) => {

            return (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={<feature.icon />}
              />
            )
          })}
        </div>
      </section>
      <HowItWorks />
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center space-y-8 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground">Join thousands of satisfied designers.</p>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </section>
      <CTA />
      <HomePageFooter />
    </div>
  )
}