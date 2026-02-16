import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const line1 = "Empowering Students";
  const line2 = "Through Technology";

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-20 pt-32 lg:items-center lg:pb-0">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(30 6% 10% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(30 6% 10% / 0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl lg:px-4">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground"
          >
            India's Largest Student Tech Ecosystem
          </motion.p>

          {/* Headline — line by line, character stagger */}
          <h1 className="font-display text-[clamp(2.8rem,8vw,7rem)] font-black leading-[0.92] tracking-tight text-foreground">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {line1}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {line2}
              </motion.span>
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A digital innovation studio and community building the future — one student, one idea, one breakthrough at a time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#mission"
              className="group flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Apply to Mission 365
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#cta"
              className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary active:scale-[0.98]"
            >
              Join Community
            </a>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
            <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
