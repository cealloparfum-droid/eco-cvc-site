import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Users, Star, Wrench, Clock } from "lucide-react";

/**
 * StatsBand — bandeau de chiffres clés animés (compte à rebours type "+1247 installations").
 * S'affiche dès que la section entre dans le viewport.
 */

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
  tint: "blue" | "red" | "green" | "amber";
}

const stats: Stat[] = [
  {
    value: 1247,
    label: "installations",
    sub: "réalisées en Rhône-Alpes",
    icon: Wrench,
    tint: "blue",
  },
  {
    value: 4.9,
    decimals: 1,
    suffix: " / 5",
    label: "avis Google",
    sub: "sur 312 avis vérifiés",
    icon: Star,
    tint: "amber",
  },
  {
    value: 98,
    suffix: " %",
    label: "clients satisfaits",
    sub: "recommandent eco cvc",
    icon: Users,
    tint: "green",
  },
  {
    value: 24,
    suffix: " h",
    label: "délai d'intervention",
    sub: "urgences en semaine",
    icon: Clock,
    tint: "red",
  },
];

const tintMap = {
  blue: "from-brand-blue/15 to-brand-sky/15 text-brand-blue",
  red: "from-brand-red/15 to-orange-200/30 text-brand-red",
  green: "from-brand-green/20 to-emerald-100/30 text-brand-green",
  amber: "from-amber-200/40 to-yellow-100/40 text-amber-600",
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const AnimatedNumber = ({
  target,
  duration = 1600,
  start,
  decimals = 0,
}: {
  target: number;
  duration?: number;
  start: boolean;
  decimals?: number;
}) => {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;
    const t0 = performance.now();
    const tick = (now: number) => {
      const elapsed = now - t0;
      const p = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(p);
      setValue(target * eased);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, duration]);

  return (
    <span>
      {decimals > 0
        ? value.toFixed(decimals).replace(".", ",")
        : Math.round(value).toLocaleString("fr-FR")}
    </span>
  );
};

const StatsBand = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-16 bg-gradient-to-br from-slate-900 via-brand-bluedark to-slate-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(500px circle at 20% 30%, rgba(43,136,216,0.4), transparent 60%)",
            "radial-gradient(500px circle at 80% 70%, rgba(208,32,39,0.3), transparent 60%)",
            "radial-gradient(500px circle at 20% 30%, rgba(43,136,216,0.4), transparent 60%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto relative">
        <div className="flex items-center justify-center gap-2 mb-8 md:mb-10">
          <Sparkles className="w-4 h-4 text-brand-sky" />
          <span className="text-[11px] font-bold tracking-widest uppercase text-white/80">
            La confiance en chiffres
          </span>
          <Sparkles className="w-4 h-4 text-brand-sky" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 mb-3 rounded-xl bg-gradient-to-br ${tintMap[s.tint]} backdrop-blur-sm`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl md:text-5xl font-extrabold leading-none tracking-tight mb-1.5">
                  {s.prefix}
                  <AnimatedNumber
                    target={s.value}
                    start={inView}
                    decimals={s.decimals ?? 0}
                  />
                  {s.suffix && (
                    <span className="text-xl md:text-2xl text-white/70 font-bold ml-0.5">
                      {s.suffix}
                    </span>
                  )}
                </div>
                <div className="text-sm font-bold text-white">{s.label}</div>
                <div className="text-xs text-white/60">{s.sub}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBand;
