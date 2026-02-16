import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eye, Target } from "lucide-react";

const paragraphs = [
  "Dexaz was born from a simple frustration — talented students with ideas, but no platform, no mentorship, and no real-world exposure. We're changing that.",
  "What started as a small campus community has scaled into India's most ambitious student tech ecosystem — a digital innovation studio where students don't just learn to code, they build, ship, and make an impact.",
  "From app development to AI-driven projects, from hackathons to enterprise consulting — Dexaz bridges the gap between academic theory and industry practice.",
];

const RevealText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const words = text.split(" ");
  return (
    <p className="text-muted-foreground leading-[1.8]">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.02,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-150px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section id="about" className="relative py-40 px-6" ref={sectionRef}>
      {/* Decorative horizontal line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px origin-left bg-border"
        style={{ scaleX: lineScale }}
      />

      <div className="mx-auto max-w-7xl lg:px-4">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Story side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-4"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-px w-10 origin-left bg-foreground/30"
              />
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Our Story
              </p>
            </motion.div>

            <div className="overflow-hidden mb-10">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Built by students,
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-12">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-muted-foreground sm:text-5xl lg:text-6xl"
              >
                for the future.
              </motion.h2>
            </div>

            <div className="space-y-6 max-w-xl">
              {paragraphs.map((p, i) => (
                <RevealText key={i} text={p} delay={0.1 * i} />
              ))}
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            {[
              {
                icon: Eye,
                title: "Vision",
                text: "To become the world's most impactful student-led technology ecosystem — where every young innovator has the tools, community, and platform to turn ideas into reality.",
                delay: 0.4,
              },
              {
                icon: Target,
                title: "Mission",
                text: "Empower 100,000+ students with real-world tech skills, mentorship, and opportunities — bridging the gap between learning and building.",
                delay: 0.6,
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group cursor-default rounded-2xl border border-border bg-card p-8 transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]"
              >
                <motion.div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <card.icon className="h-5 w-5 text-foreground" />
                </motion.div>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm leading-[1.7] text-muted-foreground">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
