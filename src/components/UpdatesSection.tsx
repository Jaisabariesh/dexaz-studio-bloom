import { motion } from "framer-motion";

const posts = [
  {
    tag: "Announcement",
    title: "Mission 365 — Applications Now Open for Cohort 3",
    excerpt: "Join the most transformative year-long student tech program in India. Apply before seats fill up.",
    date: "Feb 10, 2026",
    featured: true,
  },
  {
    tag: "Community",
    title: "Dexaz Hackathon 2026: Build for Impact",
    excerpt: "48 hours. 500+ builders. Real problems. Real prizes.",
    date: "Jan 28, 2026",
    featured: false,
  },
  {
    tag: "Insights",
    title: "Why Student-Led Innovation Matters More Than Ever",
    excerpt: "A look at how student tech ecosystems are shaping India's future.",
    date: "Jan 15, 2026",
    featured: false,
  },
];

const UpdatesSection = () => (
  <section id="updates" className="relative py-32 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Latest</p>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Updates & <span className="gradient-text">Insights</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group glass rounded-2xl gradient-border p-8 flex flex-col justify-end min-h-[320px] cursor-pointer"
        >
          <span className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {posts[0].tag}
          </span>
          <h3 className="mb-2 font-display text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
            {posts[0].title}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{posts[0].excerpt}</p>
          <p className="text-xs text-muted-foreground">{posts[0].date}</p>
        </motion.article>

        {/* Other posts */}
        <div className="flex flex-col gap-6">
          {posts.slice(1).map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
              className="group glass rounded-2xl gradient-border p-6 cursor-pointer"
            >
              <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.tag}
              </span>
              <h3 className="mb-1 font-display text-lg font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                {post.title}
              </h3>
              <p className="mb-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default UpdatesSection;
