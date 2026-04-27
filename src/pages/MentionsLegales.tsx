import LegalLayout from "@/components/LegalLayout";

const MentionsLegales = () => {
  return (
    <LegalLayout
      eyebrow="Informations légales"
      title={
        <>
          Mentions <span className="text-gradient-brand">légales</span>
        </>
      }
      subtitle="Informations relatives à l'éditeur du site eco-cvc.fr, à son hébergement et aux conditions d'utilisation."
      breadcrumbLabel="Mentions légales"
      lastUpdate="27 avril 2026"
    >
      <h2>1. Éditeur du site</h2>
      <p>
        Le site <strong>eco-cvc.fr</strong> est édité par :
      </p>
      <ul>
        <li>
          <strong>ECO CVC</strong> — entreprise artisanale spécialisée en climatisation,
          pompe à chaleur, ventilation et froid commercial.
        </li>
        <li>Forme juridique : <strong>Société par actions simplifiée (SAS)</strong></li>
        <li>Capital social : <strong>1 000 €</strong></li>
        <li>
          Siège social : <strong>1074 Route Départementale 1085, 38300 Nivolas-Vermelle</strong>
        </li>
        <li>
          Établissement actif : 25 Avenue de Champ-Fleuri, 38300 Bourgoin-Jallieu
        </li>
        <li>SIREN : <strong>909 994 527</strong></li>
        <li>SIRET (siège) : <strong>909 994 527 00010</strong></li>
        <li>RCS : <strong>Vienne 909 994 527</strong></li>
        <li>Code APE / NAF : <strong>43.22B</strong> — Travaux d'installation d'équipements thermiques et de climatisation</li>
        <li>N° TVA intracommunautaire : <strong>FR73 909 994 527</strong></li>
        <li>Date d'immatriculation : 8 février 2022</li>
        <li>
          Direction : <strong>Abdelazziz BETTAHAR</strong> et <strong>Abdelkader MHAMDI</strong>
        </li>
        <li>
          Directeur de la publication : <strong>Anthony Rodriguez</strong>
        </li>
      </ul>

      <h2>2. Coordonnées</h2>
      <ul>
        <li>Téléphone : <a href="tel:+33758459900">07 58 45 99 00</a> / <a href="tel:+33629634045">06 29 63 40 45</a></li>
        <li>Email : <a href="mailto:ecocvc69@gmail.com">ecocvc69@gmail.com</a></li>
        <li>Zone d'intervention : Rhône-Alpes (Rhône 69, Loire 42, Isère 38, Savoie 73, Haute-Savoie 74)</li>
      </ul>

      <h2>3. Hébergement</h2>
      <p>
        Le site est hébergé par : <span className="placeholder">[Nom de l'hébergeur — ex. OVH, Vercel, Netlify]</span>,
        dont le siège social est situé à <span className="placeholder">[Adresse hébergeur à compléter]</span>.
        Téléphone : <span className="placeholder">[À compléter]</span>.
      </p>

      <h2>4. Assurance professionnelle</h2>
      <p>
        ECO CVC est couvert par une <strong>assurance responsabilité civile professionnelle et décennale</strong>{" "}
        souscrite auprès de <strong>MAAF Pro</strong> — police n° <span className="placeholder">[Numéro de police à compléter]</span>.
        Cette garantie couvre l'ensemble des prestations exécutées en France métropolitaine.
      </p>

      <h2>5. Qualifications et certifications</h2>
      <p>L'entreprise dispose des qualifications suivantes :</p>
      <ul>
        <li>
          <strong>RGE QualiPAC</strong> — qualification reconnue par l'État et vérifiable sur{" "}
          <a href="https://www.qualit-enr.org/annuaire-installateurs/" target="_blank" rel="noopener noreferrer">
            qualit-enr.org
          </a>{" "}
          et sur l'annuaire officiel{" "}
          <a href="https://france-renov.gouv.fr/annuaire-rge" target="_blank" rel="noopener noreferrer">
            france-renov.gouv.fr/annuaire-rge
          </a>
          . N° de qualification : <span className="placeholder">[À compléter]</span>.
        </li>
        <li>
          <strong>Attestation de capacité fluides frigorigènes</strong> (catégorie 1) — n°{" "}
          <span className="placeholder">[À compléter]</span>, délivrée par un organisme certifié.
        </li>
        <li>Bureau Veritas — audit qualité périodique.</li>
      </ul>

      <h2>6. Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus du site (textes, photographies, logos, vidéos, illustrations,
        marques, charte graphique, code source) est la propriété exclusive de ECO CVC ou de ses
        partenaires, et est protégé par la législation française et internationale relative à la
        propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication, transmission, adaptation
        totale ou partielle des éléments du site, par quelque procédé que ce soit, sans
        l'autorisation écrite préalable de l'éditeur, est strictement interdite et constitue un
        acte de contrefaçon (articles L.335-2 et suivants du Code de la propriété intellectuelle).
      </p>
      <p>
        Les marques tierces affichées sur le site (Daikin, Mitsubishi Electric, Panasonic, Toshiba,
        Atlantic, AUX, Tecumseh, Emerson, Danfoss, Ventilex, etc.) appartiennent à leurs détenteurs
        respectifs. Leur mention est purement descriptive et ne saurait laisser supposer un lien
        commercial autre que celui de revendeur ou installateur agréé lorsque cela est précisé.
      </p>

      <h2>7. Responsabilité</h2>
      <p>
        Les informations diffusées sur le site sont fournies à titre indicatif. Malgré le soin
        apporté à leur mise à jour, ECO CVC ne peut garantir l'exactitude, la complétude ou
        l'actualité des informations publiées (tarifs, disponibilités, caractéristiques techniques,
        montants des aides publiques, etc.).
      </p>
      <p>
        Tout devis ferme nécessite une visite technique préalable. Seul le devis écrit signé par
        les deux parties engage ECO CVC.
      </p>
      <p>
        ECO CVC ne saurait être tenu responsable des dommages directs ou indirects résultant de
        l'utilisation du site, ni de l'indisponibilité temporaire de celui-ci.
      </p>

      <h2>8. Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers (registres officiels, fournisseurs,
        organismes publics). ECO CVC n'exerce aucun contrôle sur ces sites et décline toute
        responsabilité quant à leur contenu.
      </p>

      <h2>9. Médiation de la consommation</h2>
      <p>
        Conformément aux articles L.611-1 et suivants du Code de la consommation, en cas de litige
        non résolu à l'amiable, le consommateur peut recourir gratuitement au service de médiation{" "}
        <span className="placeholder">[Nom du médiateur conventionné à compléter — ex. CNPM Médiation Consommation]</span>{" "}
        — site : <span className="placeholder">[URL]</span>.
      </p>

      <h2>10. Droit applicable</h2>
      <p>
        Le présent site et l'ensemble de ses contenus sont régis par le droit français.
        Tout litige relatif à son utilisation relève de la compétence exclusive des tribunaux
        français.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions légales, vous pouvez nous écrire à{" "}
        <a href="mailto:ecocvc69@gmail.com">ecocvc69@gmail.com</a> ou via notre{" "}
        <a href="/contact">formulaire de contact</a>.
      </p>
    </LegalLayout>
  );
};

export default MentionsLegales;
