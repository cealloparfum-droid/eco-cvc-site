import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTABand = ({
  title = "Prêt à profiter d'un confort toute l'année ?",
  subtitle = "Nos techniciens vous rappellent sous 24h pour étudier votre projet.",
}: { title?: string; subtitle?: string }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bluedark via-brand-blue to-brand-sky" />
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            "radial-gradient(600px circle at 10% 40%, rgba(208,32,39,0.25), transparent 60%)",
            "radial-gradient(600px circle at 90% 60%, rgba(208,32,39,0.25), transparent 60%)",
            "radial-gradient(600px circle at 10% 40%, rgba(208,32,39,0.25), transparent 60%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white leading-tight mb-5">
            {title}
          </h2>
          <p className="text-lg text-white/85 leading-relaxed mb-10">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-bluedark font-bold hover:bg-slate-100 transition-colors shadow-lifted"
            >
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33758459900"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/70 text-white font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              07 58 45 99 00
            </a>
            <a
              href="tel:+33629634045"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/70 text-white font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              06 29 63 40 45
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABand;
