import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import PullRevealCard from "./interactive/PullRevealCard";
import ScratchCard from "./interactive/ScratchCard";
import DragPuzzle from "./interactive/DragPuzzle";
import ScrollStory from "./interactive/ScrollStory";

const InteractiveJourney = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="journey" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center gap-4"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-10 origin-left bg-foreground/30"
          />
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Experience Dexaz
          </p>
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Don't just read.
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl lg:text-6xl"
          >
            Interact.
          </motion.h2>
        </div>

        {/* Pull to Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">↓ Pull down to reveal</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PullRevealCard
              title="Real-World Training"
              hidden="We don't teach theory. You'll build production apps, work with real clients, and ship code that matters — from day one."
              emoji="🛠"
            />
            <PullRevealCard
              title="Join Our Team"
              hidden="Top performers get absorbed into Dexaz as paid team members — designers, developers, and project leads. Your internship becomes your career."
              emoji="🚀"
            />
            <PullRevealCard
              title="Future-Proof Skills"
              hidden="AI, cloud, mobile, web3 — we train you on what the industry needs tomorrow, not what textbooks taught yesterday."
              emoji="⚡"
            />
          </div>
        </motion.div>

        {/* Scratch to Discover */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">✦ Scratch to discover what you'll become</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ScratchCard label="Full-Stack Developer" stat="85% placement rate" />
            <ScratchCard label="UI/UX Designer" stat="40+ projects shipped" />
            <ScratchCard label="AI Engineer" stat="Next-gen skills" />
            <ScratchCard label="Tech Lead" stat="Lead real teams" />
          </div>
        </motion.div>

        {/* Drag & Drop Puzzle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">⬡ Drag pieces to build your path</p>
          <DragPuzzle />
        </motion.div>

        {/* Scroll Story */}
        <ScrollStory />
      </div>
    </section>
  );
};

export default InteractiveJourney;
