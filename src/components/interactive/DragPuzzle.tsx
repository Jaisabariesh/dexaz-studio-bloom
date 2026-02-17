import { motion, Reorder, useDragControls } from "framer-motion";
import { useState, useEffect } from "react";

const PIECES = [
  { id: "learn", label: "Learn", desc: "Master in-demand skills", order: 1, emoji: "📚" },
  { id: "build", label: "Build", desc: "Ship real projects", order: 2, emoji: "🔨" },
  { id: "grow", label: "Grow", desc: "Get mentored by pros", order: 3, emoji: "🌱" },
  { id: "lead", label: "Lead", desc: "Run teams at Dexaz", order: 4, emoji: "👑" },
];

const SHUFFLED = [...PIECES].sort(() => Math.random() - 0.5);

const DragPuzzle = () => {
  const [items, setItems] = useState(SHUFFLED);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    const isCorrect = items.every((item, i) => item.order === i + 1);
    if (isCorrect && !solved) {
      setSolved(true);
    }
  }, [items, solved]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <p className="text-sm text-muted-foreground">
          Arrange in order: <span className="text-foreground font-medium">Learn → Build → Grow → Lead</span>
        </p>
        {solved && (
          <motion.span
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="text-sm font-medium text-foreground"
          >
            ✨ Path unlocked!
          </motion.span>
        )}
      </div>

      <Reorder.Group
        axis="x"
        values={items}
        onReorder={setItems}
        className="flex flex-wrap gap-4"
      >
        {items.map((item, index) => (
          <Reorder.Item
            key={item.id}
            value={item}
            className="cursor-grab active:cursor-grabbing"
          >
            <motion.div
              layout
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={
                solved
                  ? {
                      borderColor: "hsl(30, 6%, 10%)",
                      transition: { delay: index * 0.1 },
                    }
                  : {}
              }
              className={`relative flex flex-col items-center gap-2 rounded-2xl border border-border p-6 sm:p-8 bg-card transition-colors select-none ${
                solved && item.order === index + 1 ? "" : ""
              }`}
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="font-display text-sm font-semibold text-foreground">
                {item.label}
              </span>
              <span className="text-[11px] text-muted-foreground text-center">
                {item.desc}
              </span>
              {solved && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-2 right-2 h-0.5 origin-left rounded-full bg-foreground"
                />
              )}
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {solved && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 rounded-2xl border border-border p-6 bg-card"
        >
          <p className="text-sm leading-[1.7] text-muted-foreground">
            <span className="font-semibold text-foreground">This is the Dexaz path.</span>{" "}
            We take raw talent through a structured journey — from learning cutting-edge skills to leading
            real teams on real projects. No fake internships. No certificate mills. Just real work, real growth,
            and a real career in tech.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default DragPuzzle;
