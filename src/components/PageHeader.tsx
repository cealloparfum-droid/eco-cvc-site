import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface HeroImage {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
  /** object-fit position when image is inside the card. Default 'center'. */
  objectPosition?: string;
  /** Fill the whole card without padding. Default true. */
  fill?: boolean;
}

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  breadcrumb: { label: string; href?: string }[];
  heroImage?: HeroImage;
}

const PageHeader = ({ eyebrow, title, subtitle, breadcrumb, heroImage }: Props) => {
  return (
    <section className="relative pt-44 pb-14 md:pt-48 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-mesh-cool -z-10" />
      <div className="absolute inset-0 bg-grid opacity-[0.2] -z-10" />
      <div className="container mx-auto relative">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3" />
              {b.href ? (
                <Link to={b.href} className="hover:text-brand-blue transition-colors">{b.label}</Link>
              ) : (
                <span className="text-foreground font-medium">{b.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className={heroImage ? "grid lg:grid-cols-[1.15fr,1fr] gap-10 lg:gap-14 items-center" : ""}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={heroImage ? "" : "max-w-3xl"}
          >
            {eyebrow && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-brand-bluedark text-xs font-bold tracking-wider uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                {eyebrow}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 leading-[1.05] mb-5">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
            )}
            <div className="divider-brand mt-6" />
          </motion.div>

          {heroImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-gradient-to-br from-brand-sky/15 to-brand-red/10 rounded-3xl blur-xl -z-10" />
              <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden bg-white border border-border shadow-lifted">
                <img loading="lazy" decoding="async"
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className={`absolute inset-0 w-full h-full ${heroImage.fill === false ? "object-contain p-6" : "object-cover"}`}
                  style={heroImage.objectPosition ? { objectPosition: heroImage.objectPosition } : undefined}
                />
                {heroImage.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase shadow-lifted">
                    {heroImage.badge}
                  </div>
                )}
                {heroImage.caption && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-brand-bluedark shadow-soft">
                      {heroImage.caption}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
