import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sparkles, ArrowRight } from "lucide-react";
import { NavLink as RouterNavLink, Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-ecocvc-officiel.jpeg";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/installation", label: "Installation" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/depannage", label: "Dépannage" },
  { href: "/chambre-froide", label: "Chambre froide" },
  { href: "/vitrines-refrigerees", label: "Vitrines réfrigérées" },
  { href: "/ventilation", label: "Ventilation" },
  { href: "/calculateur", label: "Calculateur" },
  { href: "/boutique", label: "Boutique" },
  { href: "/produits", label: "Produits AUX" },
  { href: "/certifications", label: "Certifications" },
  { href: "/qui-sommes-nous", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Promo banner */}
      <div className="fixed top-0 left-0 right-0 z-[51] bg-gradient-to-r from-brand-red via-brand-bluedark to-brand-blue text-white text-[11px] md:text-xs font-semibold">
        <Link to="/contact" className="container mx-auto h-8 flex items-center justify-center gap-2 md:gap-3 px-4 group">
          <motion.span
            animate={{ rotate: [0, 14, -14, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
          </motion.span>
          <span className="hidden sm:inline">Offre spéciale :</span>
          <span className="font-bold">Climatisation AUX 3,5 kW posée</span>
          <span className="hidden md:inline text-white/80">à partir de</span>
          <span className="bg-white text-brand-red px-2 py-0.5 rounded-full font-extrabold">990 €</span>
          <span className="hidden lg:inline text-white/85">— devis gratuit</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-soft"
            : "bg-white/70 backdrop-blur-lg border-b border-transparent"
        }`}
      >
        <div className="w-full pl-4 pr-3 md:pl-6 md:pr-4 xl:pl-8 xl:pr-6 h-20 flex items-center gap-4">
          <RouterNavLink to="/" className="flex items-center shrink-0">
            <img src={logo} alt="eco cvc" className="h-12 md:h-14 w-auto" />
          </RouterNavLink>

          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-sm font-medium text-foreground/70 whitespace-nowrap">
            {links.map((link) => (
              <RouterNavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `relative transition-colors hover:text-brand-blue ${
                    isActive ? "text-brand-blue" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-blue rounded-full"
                      />
                    )}
                  </>
                )}
              </RouterNavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2.5 shrink-0">
            <a
              href="tel:+33758459900"
              className="hidden 2xl:inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-bluedark transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              07 58 45 99 00
            </a>
            <motion.a
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 md:px-5 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-bluedark transition-colors shadow-lifted relative whitespace-nowrap"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-brand-blue"
                animate={{ scale: [1, 1.25], opacity: [0.5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
              <Sparkles className="w-3.5 h-3.5 relative" />
              <span className="relative">Devis gratuit</span>
            </motion.a>

            <button
              className="xl:hidden w-10 h-10 flex items-center justify-center text-foreground/80 rounded-full hover:bg-secondary"
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[80] bg-white flex flex-col p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <img src={logo} alt="eco cvc" className="h-12 w-auto" />
              <button
                className="w-10 h-10 flex items-center justify-center text-foreground/80 rounded-full hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 mt-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <RouterNavLink
                    to={link.href}
                    end={link.href === "/"}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg text-lg font-semibold transition-colors ${
                        isActive
                          ? "bg-accent text-brand-blue"
                          : "text-foreground hover:bg-secondary"
                      }`
                    }
                  >
                    {link.label}
                  </RouterNavLink>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto space-y-3 pt-6">
              <a
                href="tel:+33758459900"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full border-2 border-brand-red text-brand-red font-semibold"
              >
                <Phone className="w-4 h-4" />
                07 58 45 99 00
              </a>
              <a
                href="/contact"
                className="flex items-center justify-center w-full py-4 rounded-full bg-brand-blue text-white font-semibold"
              >
                Demander un devis gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
