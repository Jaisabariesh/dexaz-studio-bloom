import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    phase: "01",
    title: "You join Dexaz",
    desc: "As a curious student with big dreams and raw potential. No experience needed — just hunger.",
    accent: "bg-foreground",
  },
  {
    phase: "02",
    title: "You learn by doing",
    desc: "Real projects. Real clients. Real deadlines. We throw you in the deep end — with a lifeline.",
    accent: "bg-foreground/70",
  },
  {
    phase: "03",
    title: "You build & ship",
    desc: "Your code goes live. Your designs get used. Your work has your name on it — in production.",
    accent: "bg-foreground/50",
  },
  {
    phase: "04",
    title: "You become the team",
    desc: "Top performers don't just graduate — they get hired. Lead projects. Mentor the next batch. Build the future.",
    accent: "bg-foreground/30",
  },
];

const ScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mt-8">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
        ↕ Scroll to follow your journey
      </p>

      <div className="relative">
        {/* Animated vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border sm:left-8">
          <motion.div
            className="w-full bg-foreground origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-16 sm:space-y-24">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.phase}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-12 sm:pl-20"
            >
              {/* Dot on the line */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: 0.2,
                }}
                className={`absolute left-2.5 top-1 h-3 w-3 rounded-full ${stage.accent} sm:left-6.5`}
                style={{ left: window.innerWidth >= 640 ? "1.625rem" : "0.625rem" }}
              />

              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Phase {stage.phase}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-3">
                {stage.title}
              </h3>

              <p className="max-w-md text-sm leading-[1.7] text-muted-foreground">
                {stage.desc}
              </p>

              {i === stages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6"
                >
                  <motion.a
                    href="#cta"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
                  >
                    Start your journey
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollStory;
