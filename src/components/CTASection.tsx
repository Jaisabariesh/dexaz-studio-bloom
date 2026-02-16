import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () =>
<section id="cta" className="relative py-32 px-6 overflow-hidden bg-destructive">
    {/* Background glow */}
    <div className="pointer-events-none absolute inset-0">
      <div
      className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[150px]"
      style={{ background: "radial-gradient(circle, hsl(265 90% 65%), hsl(330 85% 60%), transparent 70%)" }} />

    </div>

    <div className="container relative z-10 mx-auto max-w-3xl text-center">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}>

        <h2 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Join the Future of{" "}
          <span className="gradient-text text-primary-foreground">Student Innovation.</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg bg-destructive text-primary-foreground">
          Whether you're a student, founder, or business — there's a place for you in the Dexaz ecosystem.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="hero" size="lg" className="min-w-[180px] text-base">
            Apply Now
          </Button>
          <Button variant="hero-outline" size="lg" className="min-w-[180px] text-base">
            Contact Us
          </Button>
        </div>
      </motion.div>
    </div>
  </section>;


export default CTASection;