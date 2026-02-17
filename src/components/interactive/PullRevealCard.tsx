import { motion, useMotionValue, useTransform, useSpring, PanInfo } from "framer-motion";
import { useState } from "react";

interface PullRevealCardProps {
  title: string;
  hidden: string;
  emoji: string;
}

const PullRevealCard = ({ title, hidden, emoji }: PullRevealCardProps) => {
  const [revealed, setRevealed] = useState(false);
  const dragY = useMotionValue(0);
  const springY = useSpring(dragY, { stiffness: 300, damping: 30 });
  
  const coverOpacity = useTransform(springY, [0, 120], [1, 0]);
  const coverScale = useTransform(springY, [0, 120], [1, 0.92]);
  const contentOpacity = useTransform(springY, [0, 80], [0, 1]);
  const contentY = useTransform(springY, [0, 120], [20, 0]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.y > 60) {
      setRevealed(true);
      dragY.set(150);
    } else {
      dragY.set(0);
    }
  };

  return (
    <div className="relative h-64 rounded-2xl border border-border overflow-hidden bg-card select-none">
      {/* Hidden content underneath */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center p-6"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <p className="text-sm leading-[1.7] text-muted-foreground">{hidden}</p>
      </motion.div>

      {/* Draggable cover */}
      {!revealed && (
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 160 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          style={{ y: springY, opacity: coverOpacity, scale: coverScale }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-foreground cursor-grab active:cursor-grabbing"
        >
          <span className="text-3xl">{emoji}</span>
          <h3 className="font-display text-lg font-semibold text-background">{title}</h3>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-background/50">
              <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* Revealed state */}
      {revealed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col justify-between p-6"
        >
          <div>
            <span className="text-2xl mb-2 block">{emoji}</span>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">{title}</h3>
            <p className="text-sm leading-[1.7] text-muted-foreground">{hidden}</p>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-0.5 bg-foreground/10 rounded-full"
          />
        </motion.div>
      )}
    </div>
  );
};

export default PullRevealCard;
