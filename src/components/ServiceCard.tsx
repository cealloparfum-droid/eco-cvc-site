import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  tint?: "blue" | "red" | "green";
  index?: number;
}

const tints = {
  blue: { bg: "bg-brand-blue/10", text: "text-brand-blue", ring: "ring-brand-blue/20" },
  red: { bg: "bg-brand-red/10", text: "text-brand-red", ring: "ring-brand-red/20" },
  green: { bg: "bg-brand-green/10", text: "text-brand-green", ring: "ring-brand-green/20" },
};

const ServiceCard = ({ icon: Icon, title, description, href, tint = "blue", index = 0 }: Props) => {
  const t = tints[tint];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl border border-border p-8 hover:border-brand-blue/40 hover:shadow-lifted transition-all duration-300"
    >
      <div className={`inline-flex w-14 h-14 rounded-xl items-center justify-center ${t.bg} ring-1 ${t.ring} mb-6`}>
        <Icon className={`w-7 h-7 ${t.text}`} />
      </div>
      <h3 className="text-xl font-bold font-display text-slate-900 mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      <Link
        to={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-bluedark group/link"
      >
        En savoir plus
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
