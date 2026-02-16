import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Story side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Our Story</p>
            <h2 className="mb-8 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Built by students,{" "}
              <span className="gradient-text">for the future.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Dexaz was born from a simple frustration — talented students with ideas, but no
                platform, no mentorship, and no real-world exposure. We're changing that.
              </p>
              <p>
                What started as a small campus community has scaled into India's most ambitious
                student tech ecosystem — a digital innovation studio where students don't just learn
                to code, they build, ship, and make an impact.
              </p>
              <p>
                From app development to AI-driven projects, from hackathons to enterprise
                consulting — Dexaz bridges the gap between academic theory and industry practice.
              </p>
            </div>
          </motion.div>

          {/* Vision & Mission Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <div className="glass rounded-2xl p-8 gradient-border">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">Vision</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To become the world's most impactful student-led technology ecosystem — where every
                young innovator has the tools, community, and platform to turn ideas into reality.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 gradient-border">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Target className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">Mission</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Empower 100,000+ students with real-world tech skills, mentorship, and
                opportunities — bridging the gap between learning and building.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
