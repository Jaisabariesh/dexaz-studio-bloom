import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

/* ───────────────────────── SCROLL STORY ───────────────────────── */

const chapters = [
  {
    phase: "00",
    year: "Now",
    title: "While others talk, we build.",
    desc: "Every campus has dreamers. Dexaz has builders. We started when everyone said students can't ship real products. We shipped anyway.",
  },
  {
    phase: "01",
    year: "Year 1",
    title: "We trained an army.",
    desc: "Hundreds of students. No textbooks. No lectures. Just real clients, real deadlines, and code that goes to production. The industry wasn't ready for us.",
  },
  {
    phase: "02",
    year: "Year 2",
    title: "We outbuilt agencies.",
    desc: "Companies started choosing student-led Dexaz over expensive studios. Better design. Faster shipping. Hungrier teams. Word spread.",
  },
  {
    phase: "03",
    year: "Year 3",
    title: "We became the ecosystem.",
    desc: "App dev. AI. Cloud. Design. Marketing. Consulting. If it's tech, Dexaz does it — and does it with people who grew up inside the system.",
  },
  {
    phase: "04",
    year: "The future",
    title: "We will dominate.",
    desc: "100,000+ students. Every campus. Every city. The largest student tech force the world has ever seen. This isn't a prediction — it's a plan.",
    isFinal: true,
  },
];

const ScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Animated vertical line */}
      <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border sm:left-[15px]">
        <motion.div className="w-full bg-foreground origin-top" style={{ height: lineHeight }} />
      </div>

      <div className="space-y-20 sm:space-y-32">
        {chapters.map((ch, i) => (
          <motion.div
            key={ch.phase}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-10 sm:pl-16"
          >
            {/* Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.15 }}
              className="absolute top-1.5 left-0 sm:left-2"
            >
              <div className={`h-[15px] w-[15px] rounded-full border-2 border-foreground ${ch.isFinal ? "bg-foreground" : "bg-background"}`} />
            </motion.div>

            {/* Year badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3"
            >
              {ch.year}
            </motion.span>

            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`font-display tracking-tight mb-4 ${
                  ch.isFinal
                    ? "text-3xl sm:text-5xl lg:text-6xl font-black"
                    : "text-2xl sm:text-3xl lg:text-4xl font-bold"
                }`}
              >
                {ch.title}
              </motion.h3>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-lg text-sm sm:text-base leading-[1.8] text-muted-foreground"
            >
              {ch.desc}
            </motion.p>

            {ch.isFinal && (
              <motion.a
                href="#cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 mt-8 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background"
              >
                Be part of it
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ───────────────────────── DOMINATION GAME ───────────────────────── */

const cities = [
  { name: "Delhi", x: 58, y: 22 },
  { name: "Mumbai", x: 35, y: 55 },
  { name: "Bangalore", x: 45, y: 78 },
  { name: "Hyderabad", x: 48, y: 62 },
  { name: "Chennai", x: 52, y: 80 },
  { name: "Kolkata", x: 72, y: 40 },
  { name: "Pune", x: 38, y: 58 },
  { name: "Jaipur", x: 42, y: 30 },
  { name: "Lucknow", x: 55, y: 30 },
  { name: "Ahmedabad", x: 32, y: 42 },
  { name: "Chandigarh", x: 48, y: 15 },
  { name: "Bhopal", x: 48, y: 42 },
];

const DominationGame = () => {
  const [conquered, setConquered] = useState<Set<string>>(new Set());
  const [pulse, setPulse] = useState<string | null>(null);
  const total = cities.length;
  const count = conquered.size;
  const percent = Math.round((count / total) * 100);

  const conquer = useCallback((name: string) => {
    if (conquered.has(name)) return;
    setConquered((prev) => new Set(prev).add(name));
    setPulse(name);
    setTimeout(() => setPulse(null), 600);
  }, [conquered]);

  const allConquered = count === total;

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Tap every city to expand Dexaz across India</p>
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl font-black text-foreground">{count}/{total}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">cities claimed</span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="w-full sm:w-48">
          <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
            <motion.div
              className="h-full bg-foreground rounded-full"
              animate={{ width: `${percent}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />
          </div>
          <p className="text-[10px] text-muted-foreground mt-1 text-right">{percent}% dominated</p>
        </div>
      </div>

      {/* Map area */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3] rounded-2xl border border-border bg-card overflow-hidden select-none">
        {/* India outline hint - abstract shape */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="xMidYMid meet">
          <path d="M50,5 L55,10 L60,8 L65,12 L70,15 L72,20 L75,25 L78,35 L75,45 L72,50 L70,55 L65,60 L60,65 L58,72 L55,78 L52,85 L50,90 L48,95 L45,90 L42,82 L40,75 L38,68 L35,60 L32,55 L30,50 L28,42 L30,35 L32,28 L35,22 L38,18 L42,12 L45,8 Z" fill="currentColor" />
        </svg>

        {/* City nodes */}
        {cities.map((city) => {
          const isConquered = conquered.has(city.name);
          const isPulsing = pulse === city.name;

          return (
            <motion.button
              key={city.name}
              onClick={() => conquer(city.name)}
              className="absolute group"
              style={{ left: `${city.x}%`, top: `${city.y}%`, transform: "translate(-50%, -50%)" }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Pulse ring */}
              {isPulsing && (
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 3.5, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 rounded-full bg-foreground"
                />
              )}

              {/* Connection lines to conquered neighbors */}
              {isConquered && (
                <svg className="absolute pointer-events-none" style={{ width: "300px", height: "300px", left: "-150px", top: "-150px" }}>
                  {cities
                    .filter((c) => conquered.has(c.name) && c.name !== city.name)
                    .slice(0, 2)
                    .map((neighbor) => (
                      <motion.line
                        key={neighbor.name}
                        x1="150"
                        y1="150"
                        x2={150 + (neighbor.x - city.x) * 3}
                        y2={150 + (neighbor.y - city.y) * 3}
                        stroke="hsl(30, 6%, 10%)"
                        strokeWidth="0.5"
                        strokeOpacity="0.15"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                    ))}
                </svg>
              )}

              {/* Dot */}
              <motion.div
                animate={isConquered ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.3 }}
                className={`relative z-10 h-4 w-4 rounded-full border-2 transition-colors duration-300 ${
                  isConquered
                    ? "bg-foreground border-foreground"
                    : "bg-background border-foreground/30 hover:border-foreground"
                }`}
              />

              {/* Label */}
              <motion.span
                initial={false}
                animate={{ opacity: isConquered ? 1 : 0, y: isConquered ? 0 : 5 }}
                className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground"
              >
                {city.name}
              </motion.span>
            </motion.button>
          );
        })}

        {/* All conquered overlay */}
        {allConquered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="text-5xl mb-4"
            >
              🇮🇳
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2 text-center"
            >
              India. Dominated.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-muted-foreground text-center max-w-sm"
            >
              This is what Dexaz is building — a student tech force in every city. And you just watched it happen.
            </motion.p>
            <motion.a
              href="#cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
            >
              Join the domination →
            </motion.a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

/* ───────────────────────── MAIN SECTION ───────────────────────── */

const InteractiveJourney = () => {
  return (
    <section id="journey" className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-4">
        {/* Header */}
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
            The Dexaz Story
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
            This is not a story.
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl lg:text-6xl"
          >
            It's a warning.
          </motion.h2>
        </div>

        {/* Scroll Story */}
        <ScrollStory />

        {/* Domination Game */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32"
        >
          <div className="overflow-hidden mb-2">
            <motion.h3
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Claim every city.
            </motion.h3>
          </div>
          <p className="text-sm text-muted-foreground mb-2">A game of expansion. Tap to conquer.</p>
          <DominationGame />
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveJourney;
