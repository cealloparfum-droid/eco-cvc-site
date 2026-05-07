import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Sun, Battery, Snowflake, Phone, ArrowRight, TrendingUp, Shield, Wallet } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABand from "@/components/CTABand";
import { useSeo } from "@/lib/useSeo";

const PacSolaireBatterie = () => {
  const baseUrl = "https://ecocvc.pro";
  const canonical = `${baseUrl}/pac-solaire-batterie`;

  useSeo({
    title: "PAC + solaire + batterie : autonomie énergétique totale | ECO CVC",
    description:
      "Combo PAC + panneaux solaires + batterie 2026 : autonomie 70-90%, factures divisées par 5, indépendance face aux hausses EDF. Étude personnalisée par ECO CVC.",
    canonical,
    ogImage: `${baseUrl}/og-image.jpg`,
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative pt-44 pb-14 md:pt-48 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-brand-blue/5 -z-10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl -z-10" />
          <div className="container mx-auto relative">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-brand-blue transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">PAC + Solaire + Batterie</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-wider mb-4">
                <Sun className="w-3.5 h-3.5" /> Autonomie énergétique 2026
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                PAC + solaire + batterie : <span className="text-gradient-brand">l'autonomie totale</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-7">
                Le combo ultime pour devenir quasi-indépendant du réseau électrique. 70-90% d'autoconsommation, factures EDF divisées par 5, sécurité face aux hausses tarifaires et coupures réseau.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors">
                  Étude personnalisée gratuite <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+33758459900" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold border border-border hover:border-brand-blue/50">
                  <Phone className="w-4 h-4" /> 07 58 45 99 00
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 max-w-3xl">Le trio gagnant 2026</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="p-6 rounded-2xl bg-white border border-border">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">1. Solaire produit</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">Panneaux photovoltaïques sur toiture (3-6 kWc selon besoins). Production 3 600-7 200 kWh/an en Isère. Couvre 100% des besoins en journée d'été.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-border">
                <div className="w-12 h-12 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center mb-4">
                  <Battery className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">2. Batterie stocke</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">Batterie domestique 5-15 kWh (Tesla Powerwall, Huawei, Pylontech). Stocke le surplus solaire jour pour utiliser nuit. Durée de vie 15-20 ans, 6000+ cycles.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-border">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                  <Snowflake className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">3. PAC consomme</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">Pompe à chaleur air-eau ou air-air pilotée par un onduleur intelligent. Tourne en priorité sur l'énergie solaire stockée. Réseau EDF en dernier recours uniquement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 max-w-3xl">Cas concret chiffré : maison 130 m² Isère</h2>
            <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
              <div className="p-6 rounded-2xl bg-white border border-border">
                <h3 className="font-display font-bold text-lg mb-3">📋 Configuration retenue</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ PAC air-eau Daikin Altherma 3 H, 11 kW</li>
                  <li>✓ Kit solaire 5 kWc (12 panneaux 420 W)</li>
                  <li>✓ Onduleur hybride Huawei SUN2000-5KTL-M1</li>
                  <li>✓ Batterie LFP 10 kWh (LUNA 2000 ou équivalent)</li>
                  <li>✓ Bornes de pilotage intelligent (programmation jour/nuit)</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/20">
                <h3 className="font-display font-bold text-lg mb-3">💰 Investissement total</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span>PAC posée :</span><strong>14 500 €</strong></li>
                  <li className="flex justify-between"><span>Solaire 5 kWc + onduleur :</span><strong>11 000 €</strong></li>
                  <li className="flex justify-between"><span>Batterie 10 kWh + intégration :</span><strong>9 500 €</strong></li>
                  <li className="flex justify-between text-brand-green"><span>Aides PAC (MPR + CEE) :</span><strong>-9 000 €</strong></li>
                  <li className="flex justify-between text-brand-green"><span>Prime autoconso solaire :</span><strong>-1 850 €</strong></li>
                  <li className="flex justify-between pt-2 border-t border-border"><span className="font-bold">Reste à charge :</span><strong className="text-xl">24 150 €</strong></li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-brand-green/5 border border-brand-green/20 md:col-span-2">
                <h3 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-brand-green" />
                  📊 Économies sur 25 ans
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span>Facture EDF actuelle (chauffage + autres) :</span><strong>3 600 €/an</strong></li>
                  <li className="flex justify-between"><span>Facture EDF après combo :</span><strong>450 €/an</strong></li>
                  <li className="flex justify-between text-brand-green"><span>Économie annuelle :</span><strong>3 150 €/an</strong></li>
                  <li className="flex justify-between"><span>Autoconsommation solaire :</span><strong>85% (avec batterie)</strong></li>
                  <li className="flex justify-between text-brand-green pt-2 border-t border-border"><span className="font-bold">Économie cumulée 25 ans :</span><strong className="text-xl">78 750 €</strong></li>
                  <li className="flex justify-between text-brand-blue"><span className="font-bold">Bénéfice net après reste à charge :</span><strong className="text-xl">+54 600 €</strong></li>
                  <li className="flex justify-between text-xs text-muted-foreground"><span>Amortissement complet :</span><span>~7-8 ans</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Avantages au-delà des économies</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: Shield, title: "Sécurité face aux coupures", body: "En cas de coupure EDF, votre batterie maintient le frigo, la PAC en mode éco, l'éclairage essentiel pendant 12-24h. Critique en hiver." },
                { icon: Wallet, title: "Indépendance hausses tarifaires", body: "Le tarif EDF a augmenté de 35% entre 2021 et 2026. Avec 85% d'autoconsommation, vous êtes protégé des futures hausses." },
                { icon: TrendingUp, title: "Plus-value immobilière", body: "Maison équipée PAC + solaire + batterie : étiquette DPE A, valorisation +10-20% à la revente. Argument fort en zones tendues." },
                { icon: Sun, title: "Bilan carbone très favorable", body: "Réduction de 80-90% de vos émissions liées au chauffage et à l'électricité. Argument important pour la sensibilité environnementale." },
              ].map((b, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-border">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-3">
                    <b.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold mb-1">{b.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50/60">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Questions fréquentes</h2>
            <div className="space-y-3">
              {[
                { q: "Faut-il faire les 3 en même temps ou progressivement ?", a: "Idéalement en même temps : optimisation des onduleurs, des aides cumulées, et de la programmation. Mais on peut commencer par PAC + solaire, et ajouter la batterie 1-2 ans après." },
                { q: "Quelle taille de batterie pour ma PAC ?", a: "Pour une PAC 11 kW + foyer 4 personnes : batterie 8-12 kWh idéale. Permet de stocker la production solaire jour pour utiliser nuit (PAC fonctionne 24h/24)." },
                { q: "Durée de vie de la batterie ?", a: "Batteries LFP modernes : 15-20 ans, 6 000+ cycles. Garantie constructeur typique 10 ans, capacité résiduelle 80% à 10 ans. Recyclage prévu en fin de vie." },
                { q: "ECO CVC fait-il aussi le solaire et la batterie ?", a: "Nous coordonnons avec un partenaire certifié RGE QualiPV/QualiBat pour le volet solaire+batterie. Vous restez avec un seul interlocuteur (ECO CVC) pour la conception, la pose et le SAV." },
              ].map((item, i) => (
                <details key={i} className="group bg-white border border-border rounded-2xl px-6 py-5 open:shadow-md">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold">
                    {item.q}
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90 shrink-0" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PacSolaireBatterie;
