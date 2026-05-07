import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-ecocvc-officiel.jpeg";
import { cities } from "@/data/cities";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/installation", label: "Installation clim réversible" },
      { href: "/installation", label: "Pompe à chaleur air-air" },
      { href: "/maintenance", label: "Entretien annuel" },
      { href: "/depannage", label: "Dépannage 7j/7" },
      { href: "/produits", label: "Gamme AUX" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
      { href: "/certifications", label: "Certifications RGE" },
      { href: "/blog", label: "Blog & guides" },
      { href: "/faq", label: "FAQ" },
      { href: "/glossaire", label: "Glossaire CVC" },
      { href: "/avis", label: "Avis clients" },
      { href: "/contact", label: "Nous contacter" },
      { href: "/contact", label: "Demander un devis" },
    ],
  },
  {
    title: "Zones d'intervention",
    links: [
      { href: "/pompe-a-chaleur/bourgoin-jallieu", label: "Bourgoin-Jallieu" },
      { href: "/pompe-a-chaleur/l-isle-d-abeau", label: "L'Isle-d'Abeau" },
      { href: "/pompe-a-chaleur/vienne", label: "Vienne" },
      { href: "/pompe-a-chaleur/lyon", label: "Lyon" },
      { href: "/pompe-a-chaleur/grenoble", label: "Grenoble" },
      { href: "/pompe-a-chaleur/chambery", label: "Chambéry" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="bg-white rounded-xl p-4 inline-block mb-6">
              <img src={logo} alt="eco cvc" className="h-14 w-auto" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Artisan spécialiste de la climatisation réversible et de la pompe à
              chaleur air-air. Installation, entretien et dépannage certifiés RGE.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-brand-blue/20 text-brand-sky border border-brand-blue/40">
                RGE QualiPAC
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/40">
                Attestation F-Gaz
              </span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-display font-semibold mb-5 text-sm tracking-wider uppercase">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-display font-semibold mb-5 text-sm tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-brand-red shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+33758459900" className="hover:text-white transition-colors">
                    07 58 45 99 00
                  </a>
                  <a href="tel:+33629634045" className="hover:text-white transition-colors">
                    06 29 63 40 45
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-brand-sky shrink-0" />
                <a href="mailto:ecocvc69@gmail.com" className="hover:text-white transition-colors">
                  ecocvc69@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-green shrink-0" />
                <span>Région Rhône-Alpes<br />Rhône (69) · Loire (42) · Isère (38)<br />Savoie (73) · Haute-Savoie (74)</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                <span>Lun. – Sam. : 8 h – 19 h<br />Dépannage d'urgence 7j/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Maillage interne SEO : toutes les zones d'intervention */}
        <div className="pt-8 border-t border-slate-800">
          <h4 className="text-white font-display font-semibold mb-4 text-sm tracking-wider uppercase">
            Toutes nos zones d'intervention
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
            {cities.map((c) => (
              <Link
                key={c.slug}
                to={`/pompe-a-chaleur/${c.slug}`}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Pompe à chaleur {c.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} eco cvc. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 justify-center md:justify-end">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link to="/cgv" className="hover:text-white transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
