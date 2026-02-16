import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
{ day: "Day 1–30", title: "Foundation", desc: "Onboarding, skill assessment, team formation, and tooling setup." },
{ day: "Day 31–90", title: "Build Phase", desc: "Hands-on projects, code reviews, mentorship, and real client briefs." },
{ day: "Day 91–180", title: "Ship & Iterate", desc: "Launch MVPs, gather feedback, iterate fast, build portfolios." },
{ day: "Day 181–270", title: "Scale & Lead", desc: "Lead teams, mentor juniors, contribute to open-source, speak at events." },
{ day: "Day 271–365", title: "Impact", desc: "Capstone projects, industry placement, community leadership roles." }];


const MilestoneCard = ({ milestone, index }: {milestone: typeof milestones[0];index: number;}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -60 : 60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, scale }}
      className={`relative mb-20 md:w-[45%] ${
      index % 2 === 0 ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`
      }>

      {/* Dot with pulse */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        className={`absolute top-2 hidden md:block ${
        index % 2 === 0 ? "right-[-8px]" : "left-[-8px]"}`
        }>

        <div className="h-4 w-4 rounded-full border-2 border-foreground bg-background" />
        <motion.div
          className="absolute inset-0 rounded-full border border-foreground/30"
          animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} />

      </motion.div>

      {/* Mobile dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute left-[18px] top-1 md:hidden">

        <div className="h-4 w-4 rounded-full border-2 border-foreground bg-background" />
      </motion.div>

      <div className="pl-14 md:pl-0">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-2 font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">

          {milestone.day}
        </motion.p>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-2 font-display text-2xl font-bold text-foreground">

          {milestone.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm leading-[1.7] text-muted-foreground">

          {milestone.desc}
        </motion.p>
      </div>
    </motion.div>);

};

const MissionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section id="mission" className="relative py-40 px-6 bg-[#fdd3d3]" ref={containerRef}>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-4">

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px w-10 origin-right bg-foreground/30" />

            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              The Journey
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px w-10 origin-left bg-foreground/30" />

          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">

              Mission 365
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-5 max-w-md text-muted-foreground">

            A year-long transformation from learner to builder to leader.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px">
            <motion.div
              className="w-full origin-top bg-foreground/20"
              style={{ height: lineHeight }} />

          </div>

          {milestones.map((m, i) =>
          <MilestoneCard key={m.day} milestone={m} index={i} />
          )}
        </div>
      </div>
    </section>);

};

export default MissionSection;