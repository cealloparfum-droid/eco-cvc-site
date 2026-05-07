export type ComparatifMarques = {
  slug: string;
  marqueA: string;
  marqueB: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  criteres: { critere: string; marqueA: string; marqueB: string; gagnant: "A" | "B" | "egal" }[];
  conclusion: string;
  recoSelon: { profil: string; reco: "A" | "B" }[];
  faq: { q: string; a: string }[];
};

export const comparatifsMarques: ComparatifMarques[] = [
  {
    slug: "daikin-vs-mitsubishi",
    marqueA: "Daikin Altherma",
    marqueB: "Mitsubishi Ecodan",
    metaTitle: "Daikin vs Mitsubishi : laquelle choisir en 2026 ? | ECO CVC",
    metaDescription:
      "Comparatif Daikin Altherma vs Mitsubishi Ecodan en 2026 : performance, prix, durée de vie, plage froid, app. Notre avis terrain d'artisan RGE QualiPAC.",
    h1: "Daikin Altherma vs Mitsubishi Ecodan : comparatif 2026",
    intro:
      "Les deux géants japonais du froid sont au coude à coude depuis 30 ans. Choix difficile pour les acheteurs : performance équivalente, prix similaires, fiabilité identique. Voici les vraies différences que nous observons sur le terrain en Isère et Rhône-Alpes.",
    criteres: [
      { critere: "Performance pure (SCOP)", marqueA: "4,2-4,5", marqueB: "4,1-4,4", gagnant: "egal" },
      { critere: "Plage de fonctionnement", marqueA: "-25 °C garantis (Altherma 3 H)", marqueB: "-28 °C garantis (Ecodan Plus)", gagnant: "B" },
      { critere: "Niveau sonore (mode silence)", marqueA: "32-35 dB", marqueB: "35-40 dB", gagnant: "A" },
      { critere: "Application mobile", marqueA: "MyDaikin Cloud (très complète)", marqueB: "MELCloud (très bonne)", gagnant: "A" },
      { critere: "Prix posée 130 m²", marqueA: "14 500 - 17 000 €", marqueB: "13 500 - 16 500 €", gagnant: "B" },
      { critere: "Durée de vie observée", marqueA: "18-22 ans", marqueB: "18-22 ans", gagnant: "egal" },
      { critere: "Garantie pièces", marqueA: "5 ans (10 ans avec entretien)", marqueB: "5-7 ans", gagnant: "egal" },
      { critere: "Réseau distribution France", marqueA: "Très large", marqueB: "Large mais moins en zones rurales", gagnant: "A" },
      { critere: "Pièces détachées en stock", marqueA: "24-48h national", marqueB: "24-48h, parfois plus", gagnant: "A" },
      { critere: "Compatibilité radiateurs anciens", marqueA: "Altherma 3 H jusqu'à 65 °C", marqueB: "Ecodan jusqu'à 60 °C", gagnant: "A" },
    ],
    conclusion:
      "Daikin l'emporte légèrement sur le silence, l'app et la disponibilité pièces. Mitsubishi est meilleur sur la plage de froid extrême et un poil moins cher. Sur 18-22 ans d'usage, la différence finale est marginale : choisir selon votre besoin spécifique.",
    recoSelon: [
      { profil: "Logement en climat très froid (Voiron, Chambéry, Annecy hauteurs)", reco: "B" },
      { profil: "Maison en pierre avec radiateurs anciens", reco: "A" },
      { profil: "Sensibilité forte au bruit (lotissement dense)", reco: "A" },
      { profil: "Recherche de prix optimal sans compromis fiabilité", reco: "B" },
      { profil: "Utilisateur app mobile fréquent (pilotage à distance)", reco: "A" },
    ],
    faq: [
      { q: "Quelle est vraiment la différence sur la facture ?", a: "Sur 15 ans d'usage, écart de consommation Daikin vs Mitsubishi : 3-5% maximum. Soit 50-100 € par an. Négligeable face aux autres critères de choix." },
      { q: "Vous installez les deux marques ?", a: "Oui, ECO CVC est partenaire Daikin et Mitsubishi. Pas d'incitation commerciale à pousser l'une plus que l'autre, on choisit selon votre situation." },
      { q: "En cas de panne, le SAV est aussi rapide pour les deux ?", a: "Très proche : 24-48h pour pièces sur les 2 marques. Daikin a un léger avantage en zone rurale (réseau plus dense)." },
    ],
  },
  {
    slug: "daikin-vs-atlantic",
    marqueA: "Daikin Altherma",
    marqueB: "Atlantic Alféa",
    metaTitle: "Daikin vs Atlantic : Altherma ou Alféa Excellia en 2026 | ECO CVC",
    metaDescription:
      "Daikin Altherma vs Atlantic Alféa Excellia en 2026 : performance, prix, made in France, garanties. Comparatif d'artisan RGE par ECO CVC.",
    h1: "Daikin Altherma vs Atlantic Alféa : comparatif 2026",
    intro:
      "Daikin (Japon, premium) ou Atlantic (France, milieu de gamme) : deux philosophies différentes pour la même fonction. Voici comment trancher selon votre projet, votre budget et votre sensibilité au made in France.",
    criteres: [
      { critere: "Origine", marqueA: "Japon (filiale française à Lyon)", marqueB: "France (production en partie française)", gagnant: "B" },
      { critere: "Performance pure (SCOP)", marqueA: "4,2-4,5", marqueB: "4,0-4,3", gagnant: "A" },
      { critere: "Niveau sonore", marqueA: "32-35 dB (silence)", marqueB: "40-44 dB", gagnant: "A" },
      { critere: "Prix posée 130 m²", marqueA: "14 500 - 17 000 €", marqueB: "12 500 - 15 000 €", gagnant: "B" },
      { critere: "Durée de vie observée", marqueA: "18-22 ans", marqueB: "15-18 ans", gagnant: "A" },
      { critere: "Garantie pièces", marqueA: "5-10 ans (avec entretien)", marqueB: "5-7 ans (Atlantic Pro)", gagnant: "A" },
      { critere: "App mobile", marqueA: "MyDaikin Cloud", marqueB: "Cozytouch", gagnant: "egal" },
      { critere: "SAV France", marqueA: "Réseau dense, pièces 48h", marqueB: "Très réactif (Atlantic Pro 24h)", gagnant: "B" },
      { critere: "Plage de fonctionnement", marqueA: "-25 °C (Altherma 3 H)", marqueB: "-20 °C", gagnant: "A" },
      { critere: "Adaptée rénovation française", marqueA: "Bonne", marqueB: "Excellente (gamme dédiée)", gagnant: "B" },
    ],
    conclusion:
      "Daikin gagne sur la performance pure, le silence et la durée de vie. Atlantic gagne sur le prix, le made in France et le SAV ultra-réactif. Sur 15-20 ans d'usage, Daikin est plus rentable. Sur un budget serré ou un projet 10 ans, Atlantic est imbattable.",
    recoSelon: [
      { profil: "Investissement long terme (15+ ans), résidence principale", reco: "A" },
      { profil: "Budget serré (-15 à -20% sur la facture)", reco: "B" },
      { profil: "Projet locatif ou court terme (5-10 ans)", reco: "B" },
      { profil: "Sensibilité achat français", reco: "B" },
      { profil: "Recherche performance maximale", reco: "A" },
      { profil: "Climat très froid (>-15 °C)", reco: "A" },
    ],
    faq: [
      { q: "L'écart de prix de 2 000 € se justifie ?", a: "Oui sur 18-22 ans : Daikin a une durée de vie de 3-5 ans supérieure et un COP légèrement meilleur. Sur 15 ans : économies 800-1 200 € + amortissement plus long. Pour un projet long terme, Daikin est plus rentable." },
      { q: "Atlantic est vraiment français ?", a: "Atlantic Group est français mais une partie de la production est en Europe (Italie, Pologne) selon les composants. La conception, R&D et SAV restent français." },
      { q: "ECO CVC est partenaire des deux ?", a: "Oui. Nous installons Daikin Altherma et Atlantic Alféa selon votre choix. Conseils impartiaux." },
    ],
  },
  {
    slug: "atlantic-vs-aux",
    marqueA: "Atlantic Alféa",
    marqueB: "AUX",
    metaTitle: "Atlantic vs AUX : laquelle choisir en 2026 ? | ECO CVC",
    metaDescription:
      "Atlantic Alféa vs AUX en 2026 : milieu de gamme français vs entrée de gamme chinoise. Comparatif honnête d'artisan ECO CVC en Isère.",
    h1: "Atlantic Alféa vs AUX : comparatif 2026",
    intro:
      "Atlantic (français, milieu de gamme) ou AUX (chinois, entrée de gamme à prix bas) : deux niveaux différents pour des budgets différents. AUX peut représenter 30-40% d'économie initiale, mais avec compromis. Voici l'honnête vérité.",
    criteres: [
      { critere: "Origine", marqueA: "France (production partielle)", marqueB: "Chine (groupe AUX, 30 milliards $ CA)", gagnant: "A" },
      { critere: "Prix posée 130 m²", marqueA: "12 500 - 15 000 €", marqueB: "9 000 - 12 000 €", gagnant: "B" },
      { critere: "Performance pure (SCOP)", marqueA: "4,0-4,3", marqueB: "3,7-4,0", gagnant: "A" },
      { critere: "Durée de vie observée", marqueA: "15-18 ans", marqueB: "12-15 ans", gagnant: "A" },
      { critere: "Garantie pièces", marqueA: "5-7 ans (Atlantic Pro)", marqueB: "3 ans + 5 ans compresseur", gagnant: "A" },
      { critere: "SAV national", marqueA: "Très bon (Atlantic Pro 24h)", marqueB: "En construction, plus restreint", gagnant: "A" },
      { critere: "Compresseur", marqueA: "Toshiba ou Mitsubishi", marqueB: "Souvent Mitsubishi Heavy Industries (sous-traité)", gagnant: "egal" },
      { critere: "App mobile", marqueA: "Cozytouch (intuitive)", marqueB: "Smart Home (basique)", gagnant: "A" },
      { critere: "Image revente immobilière", marqueA: "Bonne (marque connue)", marqueB: "Neutre (peu connue France)", gagnant: "A" },
      { critere: "Conformité européenne", marqueA: "CE complète", marqueB: "CE complète, R32 standard", gagnant: "egal" },
    ],
    conclusion:
      "Atlantic gagne sur quasi tous les critères qualité. AUX gagne uniquement sur le prix (-30 à -40%). Pour un investissement locatif ou un budget serré, AUX est un choix défendable (compresseur Mitsubishi sous-traité = bon). Pour résidence principale long terme, Atlantic est plus solide.",
    recoSelon: [
      { profil: "Budget < 12 000 € impératif", reco: "B" },
      { profil: "Investissement locatif (le locataire ne fait pas la différence)", reco: "B" },
      { profil: "Projet 10-15 ans en résidence principale", reco: "A" },
      { profil: "Sensibilité durée de vie / SAV", reco: "A" },
      { profil: "Sensibilité achat français", reco: "A" },
      { profil: "Premier achat PAC, équipement en complément", reco: "B" },
    ],
    faq: [
      { q: "AUX = 'PAC chinoise low cost' à éviter ?", a: "Non, c'est un mythe. AUX est un groupe industriel sérieux avec compresseurs Mitsubishi sous-traités. La fiabilité est correcte. Mais durée de vie 12-15 ans vs 15-18 ans pour Atlantic : à intégrer dans le calcul TCO." },
      { q: "L'écart de 30-40% est-il rentabilisé ?", a: "Sur 10 ans : oui, AUX est moins cher au total. Sur 15 ans : ça se rapproche (Atlantic dure plus longtemps). Sur 20 ans : Atlantic prend l'avantage clairement (durée de vie supérieure)." },
      { q: "Pour un loueur Airbnb / locatif court terme ?", a: "AUX est parfaitement adapté. Le locataire ou le voyageur ne fait pas la différence. Vous sécurisez 4 000-6 000 € de marge pour le même résultat utilisateur." },
    ],
  },
];

export const findComparatif = (slug: string) => comparatifsMarques.find((c) => c.slug === slug);
