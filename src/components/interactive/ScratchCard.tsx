import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

interface ScratchCardProps {
  label: string;
  stat: string;
}

const ScratchCard = ({ label, stat }: ScratchCardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Draw scratch layer
    ctx.fillStyle = "hsl(30, 6%, 10%)";
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Draw hint text
    ctx.fillStyle = "hsl(30, 3%, 46%)";
    ctx.font = "500 11px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Scratch here", rect.width / 2, rect.height / 2 + 4);
  }, []);

  const scratch = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    // Check scratch percentage
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    const percent = (transparent / (imageData.data.length / 4)) * 100;
    setScratchPercent(percent);

    if (percent > 45) {
      setRevealed(true);
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isScratching) return;
    scratch(e.clientX, e.clientY);
  }, [isScratching, scratch]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  }, [scratch]);

  return (
    <div className="relative h-40 rounded-2xl border border-border overflow-hidden select-none">
      {/* Content underneath */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 bg-card">
        <motion.h4
          initial={false}
          animate={revealed ? { scale: [1, 1.1, 1], opacity: 1 } : { opacity: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-display text-base font-semibold text-foreground text-center"
        >
          {label}
        </motion.h4>
        <motion.p
          initial={false}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xs text-muted-foreground"
        >
          {stat}
        </motion.p>
        {revealed && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.3 }}
            className="mt-1 text-xs font-medium text-foreground/60"
          >
            ✓ Unlocked
          </motion.div>
        )}
      </div>

      {/* Scratch canvas */}
      {!revealed && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair z-10"
          onMouseDown={() => setIsScratching(true)}
          onMouseUp={() => setIsScratching(false)}
          onMouseLeave={() => setIsScratching(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsScratching(true)}
          onTouchEnd={() => setIsScratching(false)}
          onTouchMove={handleTouchMove}
        />
      )}
    </div>
  );
};

export default ScratchCard;
