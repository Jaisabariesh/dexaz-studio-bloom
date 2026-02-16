import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { day: "Day 1–30", title: "Foundation", desc: "Onboarding, skill assessment, team formation, and tooling setup." },
  { day: "Day 31–90", title: "Build Phase", desc: "Hands-on projects, code reviews, mentorship, and real client briefs." },
  { day: "Day 91–180", title: "Ship & Iterate", desc: "Launch MVPs, gather feedback, iterate fast, build portfolios." },
  { day: "Day 181–270", title: "Scale & Lead", desc: "Lead teams, mentor juniors, contribute to open-source, speak at events." },
  { day: "Day 271–365", title: "Impact", desc: "Capstone projects, industry placement, community leadership roles." },
];

const MissionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="mission" className="relative py-32 px-6" ref={containerRef}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">The Journey</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Mission <span className="gradient-text">365</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            A year-long transformation from learner to builder to leader.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px">
            <motion.div
              className="w-full origin-top"
              style={{
                height: lineHeight,
                background: "linear-gradient(180deg, hsl(265 90% 65%), hsl(330 85% 60%), hsl(210 100% 60%))",
              }}
            />
          </div>

          {milestones.map((m, i) => (
            <motion.div
              key={m.day}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative mb-16 pl-16 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-1 left-[18px] h-4 w-4 rounded-full border-2 border-primary bg-background md:left-auto ${
                  i % 2 === 0 ? "md:right-[-8px]" : "md:left-[-8px]"
                }`}
              />

              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {m.day}
              </p>
              <h3 className="mb-2 font-display text-xl font-bold text-foreground">{m.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
