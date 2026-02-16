import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Smartphone,
  Globe,
  Palette,
  Search,
  Megaphone,
  Code2,
  MessageSquare,
} from "lucide-react";

const services = [
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile apps that users love." },
  { icon: Globe, title: "Web Development", desc: "Blazing-fast, scalable web applications and platforms." },
  { icon: Palette, title: "UI/UX Design", desc: "Human-centered design that converts and delights." },
  { icon: Search, title: "SEO Optimization", desc: "Data-driven strategies for organic visibility and growth." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Performance campaigns across every channel that matters." },
  { icon: Code2, title: "Custom Software", desc: "Tailored solutions engineered for complex business needs." },
  { icon: MessageSquare, title: "IT Consulting", desc: "Strategic tech advisory for startups and enterprises." },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative cursor-pointer"
      style={{ perspective: "800px" }}
    >
      <motion.div
        animate={{
          rotateX: hovered ? -2 : 0,
          rotateY: hovered ? 3 : 0,
          y: hovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glass rounded-2xl p-8 gradient-border h-full transition-shadow duration-300 group-hover:glow-primary"
      >
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
        >
          <Icon className="h-6 w-6 text-primary" />
        </motion.div>
        <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">What We Build</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Services that{" "}
            <span className="gradient-text">move the needle.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
