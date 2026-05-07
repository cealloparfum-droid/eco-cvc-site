export type DepannageCase = {
  slug: string;
  problem: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  urgence: "haute" | "moyenne" | "basse";
  symptomes: string[];
  causesPossibles: { cause: string; description: string; severite: "mineur" | "moyen" | "grave" }[];
  diagnostic: { etape: string; detail: string }[];
  solutionDiy?: string; // ce que le client peut faire seul
  solutionPro: string;
  delaiIntervention: string;
};

export const depannageCases: DepannageCase[] = [
  {
    slug: "pompe-a-chaleur-ne-chauffe-plus",
    problem: "Ma pompe à chaleur ne chauffe plus",
    metaTitle: "Pompe à chaleur ne chauffe plus — diagnostic et solution | ECO CVC",
    metaDescription:
      "Pompe à chaleur ne chauffe plus en Isère et Rhône-Alpes : causes possibles, diagnostic, solution. Intervention sous 24h ECO CVC. Tél 07 58 45 99 00.",
    h1: "Pompe à chaleur qui ne chauffe plus : diagnostic & dépannage",
    urgence: "haute",
    symptomes: [
      "L'unité extérieure tourne mais l'intérieur reste froid",
      "Le thermostat affiche la consigne mais aucun air chaud n'arrive",
      "Les radiateurs (PAC air-eau) sont tièdes ou froids",
      "L'eau chaude sanitaire fonctionne mais pas le chauffage (PAC air-eau)",
      "Code erreur affiché sur l'écran (souvent E1, F1, P0, U6 selon marque)",
    ],
    causesPossibles: [
      {
        cause: "Manque de fluide frigorigène (fuite)",
        description: "C'est la cause la plus fréquente. Une PAC perd 1-3 g/an normalement. Plus = fuite à localiser. Sans fluide, le rendement chute drastiquement puis devient nul.",
        severite: "grave",
      },
      {
        cause: "Compresseur en panne",
        description: "Panne mécanique ou électrique du compresseur, le cœur de la PAC. Coût pièce 800-2 500 € selon marque/puissance.",
        severite: "grave",
      },
      {
        cause: "Détendeur thermostatique bloqué",
        description: "Pièce qui régule le passage du fluide. Peut se boucher avec le temps. Remplacement 200-500 €.",
        severite: "moyen",
      },
      {
        cause: "Pressostat haute pression déclenché",
        description: "Sécurité qui coupe la PAC si trop de pression dans le circuit. Souvent dû à un échangeur encrassé ou ventilateur en panne.",
        severite: "moyen",
      },
      {
        cause: "Pompe de circulation HS (PAC air-eau)",
        description: "L'eau ne circule plus dans le circuit de chauffage. Pompe à remplacer (150-400 € pièce).",
        severite: "moyen",
      },
      {
        cause: "Filtre à air totalement obstrué (PAC air-air)",
        description: "Cause simple : filtre intérieur bouché, l'air ne passe plus. À nettoyer ou remplacer (gratuit/15 €).",
        severite: "mineur",
      },
    ],
    diagnostic: [
      { etape: "1. Lire le code erreur", detail: "Sur l'écran de la PAC ou de la télécommande. Notez-le. Chaque code correspond à une cause précise." },
      { etape: "2. Vérifier les filtres (PAC air-air)", detail: "Splits intérieurs : filtres dépoussiérables. À nettoyer 1 fois par mois en pleine saison." },
      { etape: "3. Vérifier la circulation eau (PAC air-eau)", detail: "Manomètre du circuit de chauffage : doit être entre 1 et 1,5 bar. Sinon réajustement (eau ou purge d'air)." },
      { etape: "4. Tester en mode forcé", detail: "Couper et rallumer la PAC, attendre 5 min. Si elle redémarre normalement = problème ponctuel. Sinon = panne structurelle." },
      { etape: "5. Faire intervenir un pro F-Gaz", detail: "Si manque de fluide ou panne compresseur : intervention obligatoire par technicien certifié F-Gaz." },
    ],
    solutionDiy:
      "Vérifier les filtres, la pression d'eau (PAC air-eau), redémarrer la PAC. Notez le code erreur affiché. Si pas de résolution sous 1h, appelez-nous.",
    solutionPro:
      "Diagnostic complet par technicien F-Gaz : test étanchéité (manomètres), mesure pression haute/basse, vérification compresseur et organes électriques, recherche de fuite si suspectée. Devis transparent avant toute intervention. Pour la majorité des cas : remise en service le jour même, parfois avec retour pour pièce détachée.",
    delaiIntervention: "Intervention sous 24h pour clients sous contrat, 48-72h hors contrat selon saison.",
  },
  {
    slug: "code-erreur-daikin",
    problem: "Codes erreur Daikin : E1, U4, A6, H6…",
    metaTitle: "Codes erreur Daikin : signification et solutions | ECO CVC dépannage Isère",
    metaDescription:
      "Codes erreur Daikin (E1, U4, A6, H6, F3…) : signification et solutions par technicien certifié F-Gaz. Dépannage Daikin en Isère et Rhône-Alpes par ECO CVC.",
    h1: "Codes erreur Daikin — signification et dépannage",
    urgence: "moyenne",
    symptomes: [
      "Code à 2-3 caractères (alphanumérique) qui clignote sur la télécommande Daikin",
      "Voyant rouge sur l'unité intérieure ou extérieure",
      "Arrêt de la PAC ou du climatiseur Daikin",
    ],
    causesPossibles: [
      { cause: "U4 : erreur de communication entre unité int. et ext.", description: "Câble de liaison débranché, abimé, ou problème carte électronique. Fréquent après tempête ou intervention proche.", severite: "moyen" },
      { cause: "E1 : erreur carte électronique unité intérieure", description: "Carte HS, parasites électriques, foudre. Souvent : remplacement carte (200-500 € pièce).", severite: "grave" },
      { cause: "A6 : moteur ventilateur intérieur bloqué", description: "Ventilateur de l'unité intérieure défaillant. Test moteur + remplacement si nécessaire.", severite: "moyen" },
      { cause: "H6 : capteur de position bloqué", description: "Capteur volet motorisé en panne. Pièce peu coûteuse mais nécessite démontage.", severite: "mineur" },
      { cause: "F3 : protection température élevée", description: "Compresseur en surchauffe : encrassement échangeur extérieur, ventilateur ext. en panne, ou manque de fluide.", severite: "moyen" },
      { cause: "L5 : protection courant moteur", description: "Surintensité électrique. Souvent compresseur en fin de vie ou problème alimentation.", severite: "grave" },
    ],
    diagnostic: [
      { etape: "1. Noter le code complet", detail: "Sur la télécommande Daikin : maintenir CHECK pour défilement des codes. Notez tout (parfois plusieurs codes simultanés)." },
      { etape: "2. Couper l'alimentation 5 min", detail: "Reset complet via le disjoncteur dédié. Rallumez et observez si le code disparaît." },
      { etape: "3. Vérifier le câble de liaison", detail: "Si U4 : inspecter visuellement le câble entre unités int. et ext. Cherchez traces d'humidité, rongeurs, ou faux contact." },
      { etape: "4. Diagnostic pro pour codes 'graves'", detail: "Codes E1, F3, L5 : intervention F-Gaz obligatoire. Lecture mémoire interne, test pressions, mesures électriques." },
    ],
    solutionPro:
      "ECO CVC est certifié partenaire Daikin et dispose de l'outillage de diagnostic spécifique (interface DTA + lecteur mémoire). Diagnostic précis sous 1h, devis transparent, pièces commandées sous 48h max si non en stock. Pour les codes graves nécessitant intervention compresseur ou carte, garantie pièces 1 an de notre côté.",
    delaiIntervention: "Sous 24h pour contrat, 48h hors contrat. Pièces Daikin sous 24-48h en métropole.",
  },
  {
    slug: "code-erreur-mitsubishi",
    problem: "Codes erreur Mitsubishi Electric : E0, P5, U2, F1…",
    metaTitle: "Codes erreur Mitsubishi : E0, P5, U2 — diagnostic | ECO CVC Isère",
    metaDescription:
      "Codes erreur Mitsubishi Electric (E0, P5, U2, F1…) : signification et dépannage. Technicien certifié F-Gaz en Isère et Rhône-Alpes par ECO CVC.",
    h1: "Codes erreur Mitsubishi Electric — diagnostic et dépannage",
    urgence: "moyenne",
    symptomes: [
      "Code lumineux clignotant sur l'unité intérieure Mitsubishi",
      "LED qui s'allument selon une séquence spécifique",
      "Arrêt système avec affichage code sur la télécommande",
    ],
    causesPossibles: [
      { cause: "E0 : erreur communication télécommande", description: "Pile HS ou télécommande à reprogrammer. Souvent réglable en 5 min.", severite: "mineur" },
      { cause: "P5 : protection compresseur (haute pression)", description: "Compresseur en sécurité. Causes : ventilateur ext. en panne, échangeur sale, manque ou excès de fluide.", severite: "grave" },
      { cause: "U2 : sonde de température extérieure défaillante", description: "Sonde à remplacer (50-150 €). Peut bloquer le démarrage en froid extrême.", severite: "moyen" },
      { cause: "F1 : sonde refoulement déconnectée", description: "Câble débranché ou sonde HS. Vérification puis remplacement si nécessaire.", severite: "moyen" },
      { cause: "P8 : protection moteur ventilateur", description: "Ventilateur extérieur bloqué (feuilles, neige, panne moteur). Souvent simple nettoyage suffit.", severite: "moyen" },
    ],
    diagnostic: [
      { etape: "1. Identifier le modèle Mitsubishi", detail: "Ecodan (PAC air-eau), MSZ (split mural), MUZ (unité ext.), Kirigamine (gamme premium). Codes différents selon série." },
      { etape: "2. Reset via disjoncteur", detail: "Couper 5-10 min puis rallumer. Si code persistant = panne réelle." },
      { etape: "3. Sur Ecodan : consulter l'écran Mitsubishi", detail: "Menu → Service → Erreurs récentes. Liste complète des codes mémorisés." },
    ],
    solutionPro:
      "ECO CVC dispose de l'interface MELCloud Mitsubishi pour diagnostic à distance et de l'outillage M-NET pour les Ecodan. Sur les modèles récents, télémaintenance possible : nous identifions souvent le problème avant même le déplacement, ce qui accélère la réparation.",
    delaiIntervention: "Sous 24h pour contrat, 48h hors contrat. Pièces Mitsubishi en stock distributeur Lyon (24-48h).",
  },
  {
    slug: "code-erreur-atlantic",
    problem: "Codes erreur Atlantic Alféa : E03, E29, E04…",
    metaTitle: "Codes erreur Atlantic Alféa Excellia : diagnostic | ECO CVC Isère",
    metaDescription:
      "Codes erreur Atlantic Alféa (E03, E04, E29…) : causes et solutions. Dépannage Atlantic en Isère et Rhône-Alpes par ECO CVC, technicien certifié.",
    h1: "Codes erreur Atlantic Alféa — diagnostic et dépannage",
    urgence: "moyenne",
    symptomes: [
      "Code Exx affiché sur l'écran de l'Alféa Excellia",
      "Voyant rouge sur le module hydraulique",
      "Chauffage et eau chaude qui ne fonctionnent plus",
    ],
    causesPossibles: [
      { cause: "E03 : pression eau insuffisante", description: "Manomètre < 0,8 bar. Réajuster en ajoutant de l'eau via le robinet de remplissage, jusqu'à 1,2-1,5 bar.", severite: "mineur" },
      { cause: "E04 : pression eau trop élevée", description: "Manomètre > 3 bars. Purger via la soupape de sécurité. Souvent vase d'expansion en cause.", severite: "moyen" },
      { cause: "E29 : défaut fluide frigorigène", description: "Fuite suspectée. Test étanchéité par technicien F-Gaz obligatoire.", severite: "grave" },
      { cause: "E32 : sonde extérieure défaillante", description: "Sonde T° ext. à vérifier puis remplacer (souvent corrosion).", severite: "moyen" },
      { cause: "E40 : circulateur en panne", description: "Pompe de circulation à remplacer (150-300 €).", severite: "moyen" },
    ],
    diagnostic: [
      { etape: "1. Vérifier le manomètre du module hydraulique", detail: "Doit être entre 1 et 1,5 bar à froid. Sinon : action immédiate (ajouter eau ou purger)." },
      { etape: "2. Reset depuis l'écran", detail: "Menu → Reset défaut. Si le code revient en moins d'1h : panne réelle." },
      { etape: "3. Lire l'historique des défauts", detail: "Menu → Service → Historique. Permet de voir les pannes intermittentes." },
    ],
    solutionPro:
      "ECO CVC est partenaire Atlantic et dispose des codes service techniques + cartes électroniques de remplacement en stock. Diagnostic précis et réparation souvent le jour même. Garantie constructeur Atlantic préservée si nous intervenons (RGE QualiPAC obligatoire).",
    delaiIntervention: "Sous 24h pour contrat, 48-72h hors contrat. Pièces Atlantic disponibles SAV France sous 48h.",
  },
  {
    slug: "pompe-a-chaleur-givre",
    problem: "Ma pompe à chaleur givre tout le temps",
    metaTitle: "Pompe à chaleur qui givre : causes et solutions | ECO CVC Isère",
    metaDescription:
      "Pompe à chaleur qui givre en permanence en Isère et Rhône-Alpes : causes, diagnostic, solutions. Intervention rapide ECO CVC, technicien F-Gaz.",
    h1: "Pompe à chaleur qui givre : faut-il s'inquiéter ?",
    urgence: "moyenne",
    symptomes: [
      "Glace épaisse sur l'unité extérieure (ailettes ou bac sous l'unité)",
      "Cycle de dégivrage qui ne se déclenche pas (PAC reste givrée)",
      "Eau qui coule en abondance sous la PAC pendant le dégivrage",
      "Arrêt fréquent du chauffage en hiver",
    ],
    causesPossibles: [
      { cause: "Givrage normal en hiver", description: "Toute PAC givre par temps froid et humide. Cycles de dégivrage automatiques tous les 30-60 min : c'est normal. Inquiétez-vous seulement si le givre dure > 2h.", severite: "mineur" },
      { cause: "Sonde de dégivrage HS", description: "La PAC ne sait plus quand lancer un dégivrage. Givrage permanent qui finit par bloquer le ventilateur. Sonde à remplacer.", severite: "moyen" },
      { cause: "Manque de fluide frigorigène", description: "Cause majeure de surgivrage. La PAC pompe dans des conditions trop dégradées. Test étanchéité obligatoire.", severite: "grave" },
      { cause: "Vanne 4 voies bloquée", description: "Empêche l'inversion du cycle pour le dégivrage. Pièce mécanique à remplacer (300-700 € selon modèle).", severite: "moyen" },
      { cause: "Évacuation des condensats bouchée", description: "Eau qui ne s'écoule pas, regele en bloc sous l'unité. Nettoyage simple suffit.", severite: "mineur" },
    ],
    diagnostic: [
      { etape: "1. Observer la durée du givre", detail: "Givre qui disparaît tous les 30-60 min = normal. Givre qui dure > 2h = panne réelle." },
      { etape: "2. Vérifier l'évacuation des condensats", detail: "Sous la PAC, vérifiez qu'aucun débris ne bouche le tuyau. Démanteler si gelé." },
      { etape: "3. Mesurer les pressions (pro)", detail: "Test des pressions HP/BP par technicien F-Gaz pour vérifier la charge frigorifique." },
    ],
    solutionDiy:
      "Si le givre est récent (< 2h) et qu'il est dégivré dans le cycle suivant : pas d'action. Sinon : couper la PAC, la laisser dégeler complètement (2-4h), redémarrer. Si le problème revient : panne réelle, appelez-nous.",
    solutionPro:
      "Diagnostic en 4 étapes : sondes, vanne 4 voies, charge frigorifique, fonctionnement dégivrage. Intervention F-Gaz obligatoire si fuite suspectée. Retour à la normale en 1-2 heures dans 80% des cas.",
    delaiIntervention: "Sous 24h en hiver pour contrat, 48-72h sinon.",
  },
  {
    slug: "pompe-a-chaleur-bruit-anormal",
    problem: "Ma pompe à chaleur fait du bruit anormal",
    metaTitle: "Pompe à chaleur bruyante : causes et solutions | ECO CVC Isère",
    metaDescription:
      "Pompe à chaleur qui fait du bruit (sifflement, vibration, claquement) : causes, diagnostic, solutions. ECO CVC, intervention en Isère et Rhône-Alpes.",
    h1: "Pompe à chaleur qui fait du bruit : pourquoi et comment résoudre",
    urgence: "moyenne",
    symptomes: [
      "Sifflement aigu en continu (compresseur ou détendeur)",
      "Vibrations qui se transmettent au mur ou au sol",
      "Claquements métalliques au démarrage ou à l'arrêt",
      "Ronronnement plus fort qu'avant",
      "Bruit de roulement (ventilateur)",
    ],
    causesPossibles: [
      { cause: "Plots anti-vibrations dégradés", description: "Avec le temps, le caoutchouc des plots se durcit et ne filtre plus les vibrations. Remplacement simple (50-100 €).", severite: "mineur" },
      { cause: "Roulement ventilateur usé", description: "Ronflement caractéristique qui s'aggrave. Remplacement du moteur ventilateur (200-500 €).", severite: "moyen" },
      { cause: "Compresseur en fin de vie", description: "Sifflement métallique progressif. Intervention coûteuse (800-2 500 €). Souvent meilleure solution : remplacement complet de la PAC.", severite: "grave" },
      { cause: "Fuite de fluide (sifflement aigu)", description: "Fuite à proximité du compresseur ou du détendeur. Localisation par traceur fluorescent.", severite: "grave" },
      { cause: "Vis de fixation desserrée", description: "Carrosserie de l'unité ext. qui vibre. Resserrage simple, parfois en 10 min.", severite: "mineur" },
    ],
    diagnostic: [
      { etape: "1. Identifier le type de bruit", detail: "Sifflement, vibration, claquement, ronronnement : chaque type pointe vers une cause différente." },
      { etape: "2. Mesurer le niveau (smartphone)", detail: "App décibelmètre type Decibel X. Si > 50 dB à 1 m de l'unité = anormal. Comparer à votre fiche technique." },
      { etape: "3. Regarder l'âge de la PAC", detail: "Bruit qui apparaît après 8-10 ans = usure normale. Avant 5 ans = défaut sérieux." },
    ],
    solutionDiy:
      "Vérifier que rien ne touche l'unité extérieure (feuilles, branche). Resserrer les vis visibles de la carrosserie. Si le bruit reste : intervention pro.",
    solutionPro:
      "Diagnostic acoustique : identification du composant en cause par stéthoscope mécanique. Remplacement ciblé (plots, ventilateur, etc.) ou recommandation de remplacement de la PAC selon âge et coût.",
    delaiIntervention: "72h-1 semaine selon urgence (bruit avec arrêt = priorité).",
  },
  {
    slug: "pompe-a-chaleur-fuite-eau",
    problem: "Ma pompe à chaleur fuit de l'eau",
    metaTitle: "Pompe à chaleur qui fuit de l'eau : diagnostic | ECO CVC Isère",
    metaDescription:
      "Pompe à chaleur qui fuit de l'eau (intérieur ou extérieur) : causes possibles et solutions. Intervention rapide ECO CVC en Isère et Rhône-Alpes.",
    h1: "Pompe à chaleur qui fuit : que faire ?",
    urgence: "haute",
    symptomes: [
      "Eau qui coule sous l'unité intérieure (split) ou autour",
      "Flaque permanente sous l'unité extérieure",
      "Mur ou sol humide près de la PAC",
      "Goutte-à-goutte sur le module hydraulique (PAC air-eau)",
    ],
    causesPossibles: [
      { cause: "Évacuation des condensats bouchée (intérieur)", description: "Cause n°1 sur split mural. Le tuyau d'évacuation est bouché par poussière/insectes. Soufflage ou démontage.", severite: "mineur" },
      { cause: "Bac à condensats fissuré", description: "Plastique dégradé après plusieurs années. Remplacement du bac (50-150 €).", severite: "moyen" },
      { cause: "Pompe à condensats HS (sur certaines installations)", description: "Pompe qui évacue les condensats vers le réseau d'évacuation. Remplacement pompe (100-300 €).", severite: "moyen" },
      { cause: "Soupape de sécurité (PAC air-eau)", description: "Fuite goutte-à-goutte par la soupape : surpression du circuit. Vase d'expansion à vérifier.", severite: "moyen" },
      { cause: "Joint de tuyauterie dégradé", description: "Sur PAC air-eau, joint hydraulique qui suinte. Remplacement joint (rapide).", severite: "mineur" },
    ],
    diagnostic: [
      { etape: "1. Identifier d'où vient l'eau", detail: "Split intérieur, unité ext., module hydraulique. Chaque source = cause différente." },
      { etape: "2. Goûter l'eau (split intérieur)", detail: "Si l'eau est neutre = condensats normaux mal évacués. Si elle a un goût (huile, glycol) = fuite circuit, intervention urgente." },
      { etape: "3. Vérifier la pression (PAC air-eau)", detail: "Manomètre du module hydraulique : entre 1 et 1,5 bar. Hors plage = problème de pression à régler." },
    ],
    solutionDiy:
      "Pour split intérieur qui goutte : éteindre la PAC, prévoir un récipient sous l'évacuation, attendre l'intervention. Pour PAC air-eau qui fuit : couper la PAC pour éviter dégâts d'eau. Appelez-nous rapidement.",
    solutionPro:
      "Diagnostic complet en moins d'1h : localisation de la fuite, identification du composant, devis transparent. Pour la majorité des cas (évacuation, joint) : réparation le jour même.",
    delaiIntervention: "Intervention sous 24h (fuite = risque dégât des eaux).",
  },
  {
    slug: "climatisation-ne-froid-plus",
    problem: "Ma climatisation ne fait plus de froid",
    metaTitle: "Climatisation qui ne refroidit plus : diagnostic | ECO CVC Isère",
    metaDescription:
      "Climatisation qui souffle mais ne refroidit plus : causes, diagnostic, solution. Intervention ECO CVC technicien F-Gaz, Isère et Rhône-Alpes.",
    h1: "Climatisation qui souffle mais ne refroidit pas",
    urgence: "moyenne",
    symptomes: [
      "L'unité tourne et souffle de l'air, mais l'air n'est pas froid",
      "Température de la pièce qui ne baisse pas malgré la consigne basse",
      "Compresseur (unité extérieure) qui ne démarre pas alors que l'intérieur souffle",
      "Givre sur les tuyaux d'unité extérieure",
    ],
    causesPossibles: [
      { cause: "Manque de fluide frigorigène", description: "Cause n°1 : fuite progressive sur plusieurs années. Pas de fluide = pas de froid. Test étanchéité par F-Gaz.", severite: "grave" },
      { cause: "Filtres intérieurs encrassés", description: "Air ne passe plus correctement, sensation de pas de froid. Nettoyage = solution gratuite.", severite: "mineur" },
      { cause: "Échangeur extérieur sale", description: "Feuilles, poussière, peluches : la chaleur ne s'évacue plus. Nettoyage à l'eau (en coupant le courant) suffit souvent.", severite: "mineur" },
      { cause: "Compresseur HS", description: "Compresseur ne démarre plus malgré commande. Intervention F-Gaz, coût élevé, parfois remplacement complet de la PAC.", severite: "grave" },
      { cause: "Carte électronique défaillante", description: "Pas de communication entre intérieur et extérieur. Carte à remplacer (150-500 €).", severite: "moyen" },
    ],
    diagnostic: [
      { etape: "1. Vérifier le mode et la consigne", detail: "Mode = Cool (flocon), consigne réglée à 5 °C en dessous de la pièce. Sinon, la clim ne descend pas." },
      { etape: "2. Nettoyer les filtres", detail: "Sortir les filtres (clip ou clic), passer à l'eau froide, sécher, remettre. Test 30 min après." },
      { etape: "3. Inspecter l'unité extérieure", detail: "Couper le courant. Vérifier que les ailettes ne sont pas obstruées. Nettoyer doucement à l'eau." },
      { etape: "4. Si rien ne change : pro", detail: "Manque de fluide ou compresseur HS : intervention F-Gaz nécessaire." },
    ],
    solutionDiy:
      "Nettoyer filtres + ailettes externe. Tester en mode auto pendant 30 min. Si pas d'amélioration : panne réelle.",
    solutionPro:
      "Test des pressions, recherche de fuite (traceur fluorescent ou fluide hélium), recharge fluide après réparation. Pour 90% des cas : remise en service même jour, parfois retour le lendemain pour pièce.",
    delaiIntervention: "Sous 48h en saison estivale, 24h pour contrat.",
  },
  {
    slug: "thermostat-pac-ne-fonctionne-plus",
    problem: "Mon thermostat de PAC ne fonctionne plus",
    metaTitle: "Thermostat PAC qui ne fonctionne plus : solutions | ECO CVC Isère",
    metaDescription:
      "Thermostat de pompe à chaleur en panne : commande sans effet, écran éteint, programmation perdue. Diagnostic et réparation ECO CVC, Isère et Rhône-Alpes.",
    h1: "Thermostat PAC qui ne répond plus : que faire ?",
    urgence: "basse",
    symptomes: [
      "Boutons sans effet sur la commande",
      "Écran éteint ou affichage incomplet",
      "Programmation perdue après une coupure de courant",
      "Pile faible affichée en permanence (thermostat sans fil)",
      "PAC qui ne suit plus la consigne (chauffe trop ou pas assez)",
    ],
    causesPossibles: [
      { cause: "Piles HS (thermostat sans fil)", description: "Cause la plus fréquente. Remplacer les piles (LR03 ou LR06 selon modèle).", severite: "mineur" },
      { cause: "Perte d'appairage radio", description: "Thermostat et récepteur ne se reconnaissent plus. Procédure d'appairage à reprendre (5 min).", severite: "mineur" },
      { cause: "Carte du récepteur en panne", description: "Le boîtier qui reçoit le signal du thermostat est HS. Remplacement (50-200 €).", severite: "moyen" },
      { cause: "Sonde de température défaillante", description: "Le thermostat lit une mauvaise température. Recalibrage ou remplacement.", severite: "moyen" },
      { cause: "Pile de sauvegarde HS (vieux thermostat)", description: "Pile bouton interne qui maintient la programmation lors des coupures. À remplacer.", severite: "mineur" },
    ],
    diagnostic: [
      { etape: "1. Remplacer les piles", detail: "Test n°1 sur thermostats sans fil. Solution gratuite et rapide." },
      { etape: "2. Reset du thermostat", detail: "Maintenir Reset 10 sec ou retirer puis remettre les piles. Vérifier ensuite la consigne." },
      { etape: "3. Réappairage avec le récepteur", detail: "Procédure dans le manuel. Souvent : maintenir 'Pair' sur les 2 unités simultanément 5 sec." },
      { etape: "4. Si toujours rien : intervention pro", detail: "Carte récepteur ou sonde HS : remplacement par technicien." },
    ],
    solutionDiy:
      "Remplacer piles, reset, réappairer. 70% des cas résolus en 5 min sans pro.",
    solutionPro:
      "Si après les actions ci-dessus le problème persiste : intervention pour test du récepteur, des sondes, et de la communication avec la PAC. Remplacement carte si nécessaire.",
    delaiIntervention: "1 semaine en standard. Si la PAC est totalement bloquée : 48h.",
  },
  {
    slug: "facture-electricite-explose-pac",
    problem: "Ma facture d'électricité explose depuis l'installation de la PAC",
    metaTitle: "Facture électricité élevée avec PAC : pourquoi et solutions | ECO CVC",
    metaDescription:
      "Facture d'électricité plus élevée que prévue après installation d'une pompe à chaleur : causes, diagnostic, optimisation. Conseils ECO CVC, Isère et Rhône-Alpes.",
    h1: "Ma PAC consomme trop : pourquoi et comment l'optimiser",
    urgence: "basse",
    symptomes: [
      "Facture annuelle plus élevée que l'estimation pré-installation",
      "Consommation chauffage qui ne baisse pas par rapport à l'ancien système",
      "Compresseur qui tourne en quasi-continu",
      "Appoint électrique qui se déclenche fréquemment",
    ],
    causesPossibles: [
      { cause: "PAC sous-dimensionnée", description: "PAC trop petite pour les besoins réels : compense en mode appoint électrique (résistance 1:1, très énergivore). Erreur de dimensionnement initial.", severite: "grave" },
      { cause: "Mauvaise isolation du logement", description: "PAC parfaite mais maison passoire : la PAC tourne pour rien. Bilan thermique recommandé.", severite: "moyen" },
      { cause: "Loi d'eau mal réglée (PAC air-eau)", description: "Température de départ d'eau trop élevée. Réglage qui peut diviser la consommation par 2.", severite: "moyen" },
      { cause: "Programmation horaire absente", description: "PAC qui chauffe à pleine charge même la nuit ou en absence. Programmation = 15-25% d'économies.", severite: "moyen" },
      { cause: "Manque d'entretien", description: "Échangeurs sales, fluide en charge limite : COP réel divisé par 2.", severite: "moyen" },
      { cause: "Tarif électrique non optimisé", description: "PAC qui tourne en heures pleines coûteuses. Bascule sur Tempo ou heures creuses = économies importantes.", severite: "mineur" },
    ],
    diagnostic: [
      { etape: "1. Comparer la consommation réelle vs. estimation", detail: "Relever la conso annuelle exacte. Si > estimation +20% : optimisation utile." },
      { etape: "2. Vérifier la programmation horaire", detail: "Programmation = au minimum coupure nuit (1-3 °C de baisse) et absence." },
      { etape: "3. Analyser la loi d'eau (PAC air-eau)", detail: "Loi d'eau adaptée à votre logement : pas trop élevée. Consultation pro recommandée." },
      { etape: "4. Audit énergétique global", detail: "Si maison mal isolée, isolation combles/murs réduit fortement la conso de la PAC." },
    ],
    solutionDiy:
      "Vérifier programmation horaire (couper la nuit), nettoyer les filtres mensuellement, ne pas surchauffer (consigne 19-20 °C max).",
    solutionPro:
      "Audit complet de votre installation : dimensionnement, loi d'eau, programmation, état du matériel, isolation. Optimisation possible 15-40% d'économies sans changer la PAC.",
    delaiIntervention: "1-2 semaines selon disponibilité. Audit non urgent.",
  },
];

export const findDepannage = (slug: string) => depannageCases.find((d) => d.slug === slug);
