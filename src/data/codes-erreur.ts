export type CodeErreur = {
  slug: string;
  marque: "daikin" | "mitsubishi" | "atlantic" | "aux";
  marqueLabel: string;
  code: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  signification: string;
  causes: string[];
  diagnostic: string[];
  severite: "mineur" | "moyen" | "grave";
  resoluble_diy: boolean;
  delai: string;
};

export const codesErreur: CodeErreur[] = [
  // ─── DAIKIN ─────────────────────────────────────────
  {
    slug: "daikin-u4",
    marque: "daikin",
    marqueLabel: "Daikin",
    code: "U4",
    metaTitle: "Code erreur U4 Daikin : signification et solution | ECO CVC",
    metaDescription:
      "Code U4 Daikin : erreur de communication entre unité intérieure et extérieure. Causes, diagnostic et dépannage en Isère et Rhône-Alpes. ECO CVC, partenaire Daikin.",
    h1: "Code erreur U4 Daikin : erreur de communication",
    signification:
      "Le code U4 indique une perte de communication entre l'unité intérieure et l'unité extérieure de votre PAC ou climatiseur Daikin. C'est l'un des codes les plus fréquents.",
    causes: [
      "Câble de liaison entre unités endommagé (intempérie, rongeurs)",
      "Connecteurs S1/S2/S3 mal serrés ou oxydés",
      "Carte électronique d'une des deux unités défaillante",
      "Parasites électriques (foudre, surtension)",
      "Problème d'alimentation 230 V de l'unité extérieure",
    ],
    diagnostic: [
      "Couper l'alimentation au disjoncteur 5 minutes puis rallumer (reset complet)",
      "Vérifier visuellement le câble de liaison (côté ext. surtout)",
      "Resserrer les connecteurs S1/S2/S3 sans courant",
      "Si code persistant : intervention pro avec mesure de continuité",
    ],
    severite: "moyen",
    resoluble_diy: true,
    delai: "Sous 24-48h pour clients ECO CVC sous contrat.",
  },
  {
    slug: "daikin-e1",
    marque: "daikin",
    marqueLabel: "Daikin",
    code: "E1",
    metaTitle: "Code erreur E1 Daikin : carte électronique HS | ECO CVC",
    metaDescription:
      "Code E1 Daikin : panne de carte électronique unité intérieure. Causes, intervention et coût de réparation. ECO CVC en Isère et Rhône-Alpes.",
    h1: "Code erreur E1 Daikin : carte électronique défaillante",
    signification:
      "Le code E1 signale un dysfonctionnement de la carte électronique de l'unité intérieure. C'est une panne sérieuse qui nécessite une intervention.",
    causes: [
      "Carte électronique vieillissante (typique après 10-12 ans)",
      "Surtension (foudre, coupures réseau EDF)",
      "Humidité ou condensation dans le boîtier électronique",
      "Composant défaillant en interne (condensateur, relais)",
    ],
    diagnostic: [
      "Reset disjoncteur 5 minutes",
      "Vérifier l'état visuel de la carte (traces de brûlure, condensateurs gonflés)",
      "Test de tension d'alimentation",
      "Remplacement carte par technicien (200-500 € pièce + main d'œuvre)",
    ],
    severite: "grave",
    resoluble_diy: false,
    delai: "Sous 48-72h pour intervention pro. Pièce sous 24-48h en distribution Daikin France.",
  },
  {
    slug: "daikin-h6",
    marque: "daikin",
    marqueLabel: "Daikin",
    code: "H6",
    metaTitle: "Code erreur H6 Daikin : capteur volet bloqué | ECO CVC",
    metaDescription:
      "Code H6 Daikin : capteur de position du volet motorisé bloqué. Diagnostic et résolution. ECO CVC en Isère et Rhône-Alpes.",
    h1: "Code erreur H6 Daikin : capteur de position",
    signification:
      "Le code H6 indique un blocage du capteur de position du volet motorisé de l'unité intérieure. Panne mineure mais qui empêche le fonctionnement de la machine.",
    causes: [
      "Volet motorisé physiquement bloqué (poussière, débris)",
      "Capteur de position usé après plusieurs années",
      "Câble de capteur déconnecté ou abimé",
      "Moteur du volet défaillant",
    ],
    diagnostic: [
      "Couper l'alimentation, ouvrir le volet manuellement avec précaution",
      "Vérifier l'absence de poussière ou objet bloquant",
      "Reset disjoncteur 5 minutes",
      "Si persistant : remplacement capteur + nettoyage par pro (1h d'intervention)",
    ],
    severite: "mineur",
    resoluble_diy: true,
    delai: "Sous 24h pour clients sous contrat.",
  },
  {
    slug: "daikin-f3",
    marque: "daikin",
    marqueLabel: "Daikin",
    code: "F3",
    metaTitle: "Code erreur F3 Daikin : protection température | ECO CVC",
    metaDescription:
      "Code F3 Daikin : protection température élevée du compresseur. Causes (manque de fluide, échangeur sale) et solution. ECO CVC.",
    h1: "Code erreur F3 Daikin : protection thermique compresseur",
    signification:
      "Le F3 se déclenche quand le compresseur atteint une température excessive. C'est une sécurité qui protège la PAC, mais qui pointe vers une cause à régler.",
    causes: [
      "Échangeur extérieur encrassé (poussière, feuilles, peluches)",
      "Ventilateur extérieur défaillant ou bloqué",
      "Manque de fluide frigorigène (fuite à localiser)",
      "Surcharge en mode chauffage (sous-dimensionnement, isolation insuffisante)",
    ],
    diagnostic: [
      "Couper et laisser refroidir 30 min",
      "Vérifier visuellement l'état de l'échangeur extérieur",
      "Tester la rotation du ventilateur extérieur",
      "Si répétitif : intervention F-Gaz obligatoire (test pression + fuite éventuelle)",
    ],
    severite: "moyen",
    resoluble_diy: true,
    delai: "Sous 48h. Si fuite confirmée : pièces et fluide commandés sous 48h.",
  },
  {
    slug: "daikin-l5",
    marque: "daikin",
    marqueLabel: "Daikin",
    code: "L5",
    metaTitle: "Code erreur L5 Daikin : surintensité moteur | ECO CVC",
    metaDescription:
      "Code L5 Daikin : protection courant moteur compresseur. Causes (compresseur en fin de vie, alimentation) et solutions. ECO CVC, intervention rapide.",
    h1: "Code erreur L5 Daikin : surintensité moteur",
    signification:
      "Le L5 indique une surintensité électrique côté compresseur. Souvent signe que le compresseur arrive en fin de vie ou problème d'alimentation.",
    causes: [
      "Compresseur en fin de vie (PAC > 12 ans)",
      "Tension d'alimentation hors plage (180 V au lieu de 230 V)",
      "Condensateur de démarrage défaillant",
      "Court-circuit dans le bobinage du compresseur",
    ],
    diagnostic: [
      "Reset disjoncteur (parfois suffit en cas de pic ponctuel)",
      "Mesure tension d'alimentation par technicien",
      "Test du compresseur (résistance bobinage)",
      "Décision : remplacement compresseur (1 200-2 500 €) ou remplacement PAC complète selon âge",
    ],
    severite: "grave",
    resoluble_diy: false,
    delai: "Sous 48h pour diagnostic. Réparation 5-15 jours selon disponibilité pièce.",
  },

  // ─── MITSUBISHI ────────────────────────────────────
  {
    slug: "mitsubishi-p5",
    marque: "mitsubishi",
    marqueLabel: "Mitsubishi Electric",
    code: "P5",
    metaTitle: "Code erreur P5 Mitsubishi : protection compresseur | ECO CVC",
    metaDescription:
      "Code P5 Mitsubishi Electric : protection haute pression compresseur. Causes et dépannage en Isère et Rhône-Alpes par ECO CVC.",
    h1: "Code erreur P5 Mitsubishi : protection haute pression",
    signification:
      "Le P5 sur Mitsubishi indique que la haute pression du circuit frigorigène a dépassé le seuil de sécurité. Le compresseur est protégé mais la PAC ne fonctionne plus.",
    causes: [
      "Échangeur extérieur encrassé (manque d'évacuation chaleur)",
      "Ventilateur extérieur en panne",
      "Excès de fluide frigorigène (charge mal calibrée)",
      "Vanne 4 voies bloquée",
    ],
    diagnostic: [
      "Vérification visuelle échangeur ext. + ventilateur",
      "Reset après refroidissement 30 min",
      "Si répétitif : test pression par technicien F-Gaz",
      "Recharge ou décharge fluide selon résultat",
    ],
    severite: "moyen",
    resoluble_diy: true,
    delai: "Sous 48h pour intervention.",
  },
  {
    slug: "mitsubishi-u2",
    marque: "mitsubishi",
    marqueLabel: "Mitsubishi Electric",
    code: "U2",
    metaTitle: "Code erreur U2 Mitsubishi : sonde extérieure | ECO CVC",
    metaDescription:
      "Code U2 Mitsubishi : sonde de température extérieure défaillante. Diagnostic et remplacement. ECO CVC en Isère et Rhône-Alpes.",
    h1: "Code erreur U2 Mitsubishi Electric : sonde extérieure",
    signification:
      "Le code U2 signale une sonde de température extérieure défaillante. La PAC ne peut plus adapter son fonctionnement aux conditions extérieures.",
    causes: [
      "Sonde corrodée (humidité ou intempéries)",
      "Câble de sonde déconnecté ou abimé",
      "Sonde simplement vieillissante (8-10 ans)",
    ],
    diagnostic: [
      "Inspection visuelle de la sonde et de son câble",
      "Test résistance avec multimètre",
      "Remplacement sonde (50-150 € pièce, 1h d'intervention)",
    ],
    severite: "moyen",
    resoluble_diy: false,
    delai: "Sous 24-48h pour clients ECO CVC.",
  },
  {
    slug: "mitsubishi-e0",
    marque: "mitsubishi",
    marqueLabel: "Mitsubishi Electric",
    code: "E0",
    metaTitle: "Code erreur E0 Mitsubishi : télécommande | ECO CVC",
    metaDescription:
      "Code E0 Mitsubishi Electric : erreur de communication télécommande. Solutions simples et rapides.",
    h1: "Code erreur E0 Mitsubishi : télécommande déconnectée",
    signification:
      "Le E0 indique une perte de communication avec la télécommande. Souvent un simple problème de pile ou d'appairage.",
    causes: [
      "Piles HS de la télécommande",
      "Appairage perdu après coupure prolongée",
      "Télécommande hors de portée (changement d'aménagement)",
      "Récepteur infrarouge de l'unité encrassé",
    ],
    diagnostic: [
      "Remplacer les piles de la télécommande",
      "Procédure d'appairage (consulter le manuel ou nous demander)",
      "Nettoyer le capteur infrarouge avec un chiffon sec",
    ],
    severite: "mineur",
    resoluble_diy: true,
    delai: "Résolution en 5-10 minutes en autonomie.",
  },
  {
    slug: "mitsubishi-p8",
    marque: "mitsubishi",
    marqueLabel: "Mitsubishi Electric",
    code: "P8",
    metaTitle: "Code erreur P8 Mitsubishi : ventilateur extérieur | ECO CVC",
    metaDescription:
      "Code P8 Mitsubishi : protection moteur ventilateur extérieur. Causes et solutions par ECO CVC, partenaire Mitsubishi en Isère.",
    h1: "Code erreur P8 Mitsubishi : ventilateur extérieur",
    signification:
      "Le P8 signale que le ventilateur de l'unité extérieure est bloqué ou en surcharge.",
    causes: [
      "Feuilles, neige ou objets bloquant le ventilateur",
      "Roulement du moteur usé (bruit caractéristique)",
      "Carte de commande du moteur défaillante",
      "Givre exceptionnel en hiver",
    ],
    diagnostic: [
      "Couper le courant et nettoyer manuellement",
      "Reset après nettoyage",
      "Test rotation libre du ventilateur",
      "Remplacement moteur si rotation forcée (200-450 €)",
    ],
    severite: "moyen",
    resoluble_diy: true,
    delai: "Sous 48h. Pièces sous 24-48h.",
  },
  {
    slug: "mitsubishi-f1",
    marque: "mitsubishi",
    marqueLabel: "Mitsubishi Electric",
    code: "F1",
    metaTitle: "Code erreur F1 Mitsubishi : sonde refoulement | ECO CVC",
    metaDescription:
      "Code F1 Mitsubishi Electric : sonde de refoulement déconnectée ou HS. Diagnostic et remplacement par ECO CVC.",
    h1: "Code erreur F1 Mitsubishi : sonde de refoulement",
    signification:
      "Le F1 indique un problème avec la sonde de refoulement (température sortie compresseur). PAC en sécurité.",
    causes: [
      "Câble de sonde déconnecté",
      "Sonde HS (corrosion, vieillissement)",
      "Connecteur électronique encrassé",
    ],
    diagnostic: [
      "Vérification câble + connecteur par technicien",
      "Test résistance multimètre",
      "Remplacement sonde si nécessaire (60-180 € pièce)",
    ],
    severite: "moyen",
    resoluble_diy: false,
    delai: "Sous 48h.",
  },

  // ─── ATLANTIC ──────────────────────────────────────
  {
    slug: "atlantic-e03",
    marque: "atlantic",
    marqueLabel: "Atlantic",
    code: "E03",
    metaTitle: "Code erreur E03 Atlantic Alféa : pression eau | ECO CVC",
    metaDescription:
      "Code E03 Atlantic Alféa : pression eau insuffisante du circuit chauffage. Comment réajuster facilement.",
    h1: "Code erreur E03 Atlantic Alféa : pression eau insuffisante",
    signification:
      "Le E03 indique que la pression du circuit hydraulique de chauffage est passée sous 0,8 bar. Solution simple : ajouter de l'eau.",
    causes: [
      "Fuite progressive sur le circuit (à localiser)",
      "Purges récentes mal compensées",
      "Vase d'expansion percé",
      "Soupape de sécurité qui crache",
    ],
    diagnostic: [
      "Vérifier le manomètre du module hydraulique (doit être 1-1,5 bar à froid)",
      "Ouvrir le robinet de remplissage jusqu'à 1,2 bar (avec circuit froid)",
      "Reset après remplissage",
      "Si redescend rapidement : intervention pour localiser la fuite",
    ],
    severite: "mineur",
    resoluble_diy: true,
    delai: "Résolution autonome en 10 minutes. Si récidive : intervention pro 48h.",
  },
  {
    slug: "atlantic-e04",
    marque: "atlantic",
    marqueLabel: "Atlantic",
    code: "E04",
    metaTitle: "Code erreur E04 Atlantic Alféa : surpression | ECO CVC",
    metaDescription:
      "Code E04 Atlantic Alféa : pression eau trop élevée du circuit. Diagnostic vase d'expansion par ECO CVC.",
    h1: "Code erreur E04 Atlantic Alféa : pression eau trop élevée",
    signification:
      "Le E04 signale une pression > 3 bars dans le circuit hydraulique. Souvent vase d'expansion défaillant.",
    causes: [
      "Vase d'expansion percé (cause principale)",
      "Surremplissage manuel du circuit",
      "Soupape de sécurité bouchée",
    ],
    diagnostic: [
      "Purger via la soupape jusqu'à 1,5 bar",
      "Vérifier la pression de gonflage du vase d'expansion (1 bar à vide)",
      "Remplacement vase d'expansion si nécessaire (80-200 € pièce)",
    ],
    severite: "moyen",
    resoluble_diy: false,
    delai: "Sous 48h pour intervention.",
  },
  {
    slug: "atlantic-e29",
    marque: "atlantic",
    marqueLabel: "Atlantic",
    code: "E29",
    metaTitle: "Code erreur E29 Atlantic Alféa : fluide frigorigène | ECO CVC",
    metaDescription:
      "Code E29 Atlantic Alféa : défaut fluide frigorigène (fuite suspectée). Intervention F-Gaz urgente par ECO CVC.",
    h1: "Code erreur E29 Atlantic Alféa : fluide frigorigène",
    signification:
      "Le E29 indique une suspicion de manque de fluide frigorigène. Intervention F-Gaz obligatoire pour test étanchéité.",
    causes: [
      "Fuite micro-fissure sur le circuit frigorifique",
      "Joint de raccord détendu (vibrations)",
      "Capteur de pression défaillant",
    ],
    diagnostic: [
      "Test pression par manomètres pro",
      "Recherche fuite par traceur fluorescent ou hélium",
      "Réparation du point de fuite + recharge fluide",
      "Test d'étanchéité 24h post-réparation",
    ],
    severite: "grave",
    resoluble_diy: false,
    delai: "Sous 48h pour intervention F-Gaz.",
  },
  {
    slug: "atlantic-e32",
    marque: "atlantic",
    marqueLabel: "Atlantic",
    code: "E32",
    metaTitle: "Code erreur E32 Atlantic Alféa : sonde extérieure | ECO CVC",
    metaDescription:
      "Code E32 Atlantic Alféa : sonde extérieure défaillante. Remplacement par ECO CVC, partenaire Atlantic en Isère.",
    h1: "Code erreur E32 Atlantic Alféa : sonde extérieure",
    signification:
      "Le E32 signale une sonde de température extérieure HS. La régulation de la PAC perd sa donnée principale.",
    causes: [
      "Sonde corrodée (humidité prolongée)",
      "Câble rongé ou coupé",
      "Sonde vieillissante (>10 ans)",
    ],
    diagnostic: [
      "Inspection visuelle sonde et câble",
      "Test résistance avec multimètre",
      "Remplacement sonde (60-150 € pièce + 30 min d'intervention)",
    ],
    severite: "moyen",
    resoluble_diy: false,
    delai: "Sous 48h.",
  },
  {
    slug: "atlantic-e40",
    marque: "atlantic",
    marqueLabel: "Atlantic",
    code: "E40",
    metaTitle: "Code erreur E40 Atlantic Alféa : circulateur | ECO CVC",
    metaDescription:
      "Code E40 Atlantic Alféa : pompe de circulation HS. Remplacement par ECO CVC, intervention rapide.",
    h1: "Code erreur E40 Atlantic Alféa : circulateur en panne",
    signification:
      "Le E40 indique que la pompe de circulation hydraulique est en panne. L'eau ne circule plus dans le circuit chauffage.",
    causes: [
      "Pompe usée (typique après 10-12 ans)",
      "Bobinage électrique grillé",
      "Roulement bloqué par calcaire",
      "Carte de commande de la pompe HS",
    ],
    diagnostic: [
      "Test alimentation 230 V de la pompe",
      "Vérification rotation manuelle (avec courant coupé)",
      "Remplacement pompe (150-400 € pièce)",
    ],
    severite: "moyen",
    resoluble_diy: false,
    delai: "Sous 24-48h. Pompe en stock distribution Atlantic.",
  },
];

export const findCodeErreur = (slug: string) => codesErreur.find((c) => c.slug === slug);
