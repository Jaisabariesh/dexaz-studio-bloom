import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative border-t border-border px-6 py-16">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="mb-3 font-display text-xl font-bold text-foreground">Dexaz</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              India's largest student tech ecosystem and digital innovation studio.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors">Mission 365</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">Impact</a>
              <a href="#updates" className="text-muted-foreground hover:text-foreground transition-colors">Updates</a>
              <a href="#cta" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="mb-3 text-sm font-medium text-foreground">Stay in the loop</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-lg border border-border bg-secondary px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform hover:scale-105"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Dexaz. All rights reserved.</p>
          <div className="flex gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                whileHover={{ y: -2 }}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <s.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
