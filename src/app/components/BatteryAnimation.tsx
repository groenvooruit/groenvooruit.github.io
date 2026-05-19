import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Home, Zap, BatteryCharging } from "lucide-react";

const ENERGY_DOTS_COUNT = 5;

function EnergyDot({ delay, duration, path }: { delay: number; duration: number; path: string }) {
  return (
    <motion.div
      className="absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.6)]"
      style={{ offsetPath: `path('${path}')` }}
      initial={{ offsetDistance: "0%", opacity: 0 }}
      animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function BatteryAnimation() {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [phase, setPhase] = useState<"charging" | "discharging">("charging");

  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel((prev) => {
        if (phase === "charging") {
          if (prev >= 95) {
            setPhase("discharging");
            return prev;
          }
          return prev + 1;
        } else {
          if (prev <= 20) {
            setPhase("charging");
            return prev;
          }
          return prev - 0.6;
        }
      });
    }, 80);
    return () => clearInterval(interval);
  }, [phase]);

  const batteryColor =
    batteryLevel > 60 ? "#10b981" : batteryLevel > 30 ? "#f59e0b" : "#ef4444";

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main layout: Sun -> Battery -> House */}
      <div className="flex items-center justify-between gap-4 sm:gap-8">
        {/* Solar panel / Sun */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center"
            animate={phase === "charging" ? { boxShadow: ["0 0 0px rgba(245,158,11,0.2)", "0 0 20px rgba(245,158,11,0.4)", "0 0 0px rgba(245,158,11,0.2)"] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sun className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500" />
          </motion.div>
          <span className="text-[0.8rem] text-muted-foreground" style={{ fontWeight: 500 }}>Zonnepanelen</span>
        </div>

        {/* Energy flow: Solar to Battery */}
        <div className="flex-1 relative h-20 min-w-[60px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none" fill="none">
            <path
              d="M 0 40 C 60 40, 60 40, 100 40 C 140 40, 140 40, 200 40"
              stroke={phase === "charging" ? "#10b981" : "#e5e7eb"}
              strokeWidth="2"
              strokeDasharray="6 4"
              opacity={0.5}
            />
          </svg>
          <AnimatePresence>
            {phase === "charging" && (
              <>
                {Array.from({ length: ENERGY_DOTS_COUNT }).map((_, i) => (
                  <motion.div
                    key={`solar-dot-${i}`}
                    className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                    initial={{ left: "0%", opacity: 0 }}
                    animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 1.8, delay: i * 0.36, repeat: Infinity, ease: "linear" }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-[0.7rem] text-primary" style={{ fontWeight: 600 }}>
              {phase === "charging" ? "Opladen" : ""}
            </span>
          </div>
        </div>

        {/* Battery */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <motion.div
              className="w-24 h-32 sm:w-28 sm:h-36 rounded-2xl border-3 flex flex-col justify-end p-1.5 overflow-hidden relative"
              style={{ borderColor: batteryColor }}
              animate={{ boxShadow: [`0 0 0px ${batteryColor}40`, `0 0 15px ${batteryColor}40`, `0 0 0px ${batteryColor}40`] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Battery cap */}
              <div
                className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-3 rounded-t-md"
                style={{ backgroundColor: batteryColor }}
              />
              {/* Battery level fill */}
              <motion.div
                className="w-full rounded-lg relative overflow-hidden"
                style={{ backgroundColor: batteryColor }}
                animate={{ height: `${batteryLevel}%` }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              {/* Battery segments */}
              <div className="absolute inset-1.5 flex flex-col justify-evenly pointer-events-none">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-full h-px bg-white/30" />
                ))}
              </div>
            </motion.div>
            {/* Percentage badge */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-white text-[0.75rem] whitespace-nowrap"
              style={{ backgroundColor: batteryColor, fontWeight: 700 }}
            >
              {Math.round(batteryLevel)}%
            </motion.div>
          </div>
          <span className="text-[0.8rem] text-muted-foreground mt-2" style={{ fontWeight: 500 }}>Thuisbatterij</span>
        </div>

        {/* Energy flow: Battery to House */}
        <div className="flex-1 relative h-20 min-w-[60px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none" fill="none">
            <path
              d="M 0 40 C 60 40, 60 40, 100 40 C 140 40, 140 40, 200 40"
              stroke={phase === "discharging" ? "#10b981" : "#e5e7eb"}
              strokeWidth="2"
              strokeDasharray="6 4"
              opacity={0.5}
            />
          </svg>
          <AnimatePresence>
            {phase === "discharging" && (
              <>
                {Array.from({ length: ENERGY_DOTS_COUNT }).map((_, i) => (
                  <motion.div
                    key={`house-dot-${i}`}
                    className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                    initial={{ left: "0%", opacity: 0 }}
                    animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 1.8, delay: i * 0.36, repeat: Infinity, ease: "linear" }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-[0.7rem] text-primary" style={{ fontWeight: 600 }}>
              {phase === "discharging" ? "Verbruik" : ""}
            </span>
          </div>
        </div>

        {/* House */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center"
            animate={phase === "discharging" ? { boxShadow: ["0 0 0px rgba(30,58,138,0.2)", "0 0 20px rgba(30,58,138,0.3)", "0 0 0px rgba(30,58,138,0.2)"] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Home className="w-10 h-10 sm:w-12 sm:h-12 text-[#1e3a8a]" />
          </motion.div>
          <span className="text-[0.8rem] text-muted-foreground" style={{ fontWeight: 500 }}>Uw woning</span>
        </div>
      </div>

      {/* Status text */}
      <motion.div
        className="mt-8 text-center"
        key={phase}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[0.875rem]" style={{ fontWeight: 500 }}>
          <BatteryCharging className="w-4 h-4" />
          {phase === "charging"
            ? "Zonne-energie wordt opgeslagen in uw thuisbatterij"
            : "Opgeslagen energie wordt gebruikt in uw woning"}
        </div>
      </motion.div>
    </div>
  );
}
