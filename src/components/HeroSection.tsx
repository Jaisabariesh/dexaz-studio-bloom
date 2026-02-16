import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.035, 0]);
  const badgeScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const words1 = ["Empowering", "Students"];
  const words2 = ["Through", "Technology"];

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-24 pt-32 lg:items-center lg:pb-0 bg-[#fbadad]">

      {/* Parallax grid */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: gridOpacity }}>

        <div
          className="h-full w-full"
          style={{
            backgroundImage:
            "linear-gradient(hsl(30 6% 10% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(30 6% 10% / 0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

      </motion.div>

      {/* Floating shapes */}
      <motion.div
        className="pointer-events-none absolute right-[10%] top-[15%] h-24 w-24 rounded-full border border-border"
        animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

      <motion.div
        className="pointer-events-none absolute left-[5%] bottom-[25%] h-16 w-16 rounded-sm border border-border"
        animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />

      <motion.div
        className="pointer-events-none absolute right-[25%] bottom-[20%] h-3 w-3 rounded-full bg-foreground/10"
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

      <motion.div
        className="pointer-events-none absolute left-[40%] top-[20%] h-2 w-2 rounded-full bg-foreground/15"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />


      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl lg:px-4"
        style={{ y: textY }}>

        <div className="max-w-5xl">
          {/* Eyebrow with line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 flex items-center gap-4"
            style={{ scale: badgeScale }}>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-12 origin-left bg-foreground/30" />

            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">

              India's Largest Student Tech Ecosystem
            </motion.p>
          </motion.div>

          {/* Headline — word by word mask reveal */}
          <h1 className="font-display text-[clamp(2.8rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tight text-foreground">
            <span className="flex flex-wrap gap-x-[0.22em]">
              {words1.map((word, i) =>
              <span key={word} className="overflow-hidden">
                  <motion.span
                  initial={{ y: "120%", rotateX: -40 }}
                  animate={{ y: "0%", rotateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block origin-bottom">

                    {word}
                  </motion.span>
                </span>
              )}
            </span>
            <span className="flex flex-wrap gap-x-[0.22em]">
              {words2.map((word, i) =>
              <span key={word} className="overflow-hidden">
                  <motion.span
                  initial={{ y: "120%", rotateX: -40 }}
                  animate={{ y: "0%", rotateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.6 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block origin-bottom">

                    {word}
                  </motion.span>
                </span>
              )}
            </span>
          </h1>

          {/* Subtext with character fade */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-lg text-base leading-[1.7] text-muted-foreground sm:text-[17px]">

            A digital innovation studio and community building the future — one student, one idea, one breakthrough at a time.
          </motion.p>

          {/* CTAs with stagger */}
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <motion.a
              href="#mission"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background">

              Apply to Mission 365
              <motion.span
                className="inline-block"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>

                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.a>
            <motion.a
              href="#cta"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-secondary">

              Join Community
            </motion.a>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-0 right-10 hidden lg:block">

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3">

            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 2.8, duration: 0.6 }}
              className="h-12 w-px origin-top bg-foreground/20" />

            <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">Scroll</span>
            <ArrowDown className="h-3 w-3 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>);

};

export default HeroSection;