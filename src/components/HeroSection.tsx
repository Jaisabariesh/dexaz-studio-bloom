import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const words = ["Empowering", "Students", "Through", "Technology"];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px] animate-float"
          style={{ background: "radial-gradient(circle, hsl(265 90% 65%), transparent 70%)" }}
        />
        <div
          className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px] animate-float-slow"
          style={{ background: "radial-gradient(circle, hsl(330 85% 60%), transparent 70%)" }}
        />
        <div
          className="absolute left-1/2 top-2/3 h-[350px] w-[350px] rounded-full opacity-10 blur-[100px] animate-pulse-glow"
          style={{ background: "radial-gradient(circle, hsl(210 100% 60%), transparent 70%)" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          India's Largest Student Tech Ecosystem
        </motion.div>

        {/* Headline with word-by-word reveal */}
        <h1 className="mb-6 font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block mr-[0.25em] ${i >= 2 ? "gradient-text" : "text-foreground"}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          A digital innovation studio and community building the future — one student, one idea, one breakthrough at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button variant="hero" size="lg" className="min-w-[200px] text-base" asChild>
            <a href="#mission">Apply to Mission 365</a>
          </Button>
          <Button variant="hero-outline" size="lg" className="min-w-[200px] text-base" asChild>
            <a href="#cta">Join Community</a>
          </Button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="mx-auto h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
