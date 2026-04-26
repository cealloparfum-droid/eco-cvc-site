import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({ eyebrow, title, subtitle, align = "center", className = "" }: Props) => {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${isCenter ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div className={`flex ${isCenter ? "justify-center" : ""} mb-4`}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-brand-bluedark text-xs font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
      <div className={`divider-brand mt-6 ${isCenter ? "mx-auto" : ""}`} />
    </motion.div>
  );
};

export default SectionHeading;
