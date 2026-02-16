import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Globe,
  Palette,
  Search,
  Megaphone,
  Code2,
  MessageSquare } from
"lucide-react";

const services = [
{ icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile apps that users love.", num: "01" },
{ icon: Globe, title: "Web Development", desc: "Blazing-fast, scalable web applications and platforms.", num: "02" },
{ icon: Palette, title: "UI/UX Design", desc: "Human-centered design that converts and delights.", num: "03" },
{ icon: Search, title: "SEO Optimization", desc: "Data-driven strategies for organic visibility and growth.", num: "04" },
{ icon: Megaphone, title: "Digital Marketing", desc: "Performance campaigns across every channel that matters.", num: "05" },
{ icon: Code2, title: "Custom Software", desc: "Tailored solutions engineered for complex business needs.", num: "06" },
{ icon: MessageSquare, title: "IT Consulting", desc: "Strategic tech advisory for startups and enterprises.", num: "07" }];


const ServiceCard = ({ service, index }: {service: typeof services[0];index: number;}) => {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="group cursor-default"
      style={{ perspective: 600 }}>

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative rounded-2xl border border-border p-8 transition-shadow duration-500 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] bg-[#f5f5d6]">

        {/* Number */}
        <span className="absolute top-6 right-6 font-display text-xs font-medium text-muted-foreground/40">
          {service.num}
        </span>

        <motion.div
          className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-border"
          whileHover={{ rotate: 15, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}>

          <Icon className="h-5 w-5 text-foreground" />
        </motion.div>

        <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{service.title}</h3>
        <p className="text-sm leading-[1.7] text-muted-foreground">{service.desc}</p>

        {/* Reveal underline on hover */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          className="mt-6 h-px w-full origin-left bg-foreground/15" />

      </motion.div>
    </motion.div>);

};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-40 px-6">
      <div className="mx-auto max-w-7xl lg:px-4">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-4">

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px w-10 origin-left bg-foreground/30" />

            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              What We Build
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">

              Services that move
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl lg:text-6xl">

              the needle.
            </motion.h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-[#c2bdbd]">
          {services.map((s, i) =>
          <ServiceCard key={s.title} service={s} index={i} />
          )}
        </div>
      </div>
    </section>);

};

export default ServicesSection;