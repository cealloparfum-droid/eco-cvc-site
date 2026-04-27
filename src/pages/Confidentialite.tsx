import LegalLayout from "@/components/LegalLayout";

const Confidentialite = () => {
  return (
    <LegalLayout
      eyebrow="Données personnelles · RGPD"
      title={
        <>
          Politique de <span className="text-gradient-brand">confidentialité</span>
        </>
      }
      subtitle="Informations sur la collecte, l'utilisation et la protection de vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés."
      breadcrumbLabel="Confidentialité"
      lastUpdate="27 avril 2026"
    >
      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données personnelles collectées sur le site eco-cvc.fr
        est <strong>ECO CVC</strong> — coordonnées indiquées dans nos{" "}
        <a href="/mentions-legales">mentions légales</a>.
      </p>
      <p>
        Pour toute question relative à la protection de vos données, vous pouvez nous écrire à{" "}
        <a href="mailto:ecocvc69@gmail.com">ecocvc69@gmail.com</a>.
      </p>

      <h2>2. Données collectées</h2>
      <p>
        Nous collectons uniquement les données strictement nécessaires à la finalité poursuivie.
        Les catégories suivantes peuvent être traitées :
      </p>
      <ul>
        <li>
          <strong>Identité et contact</strong> : nom, prénom, adresse e-mail, numéro de téléphone,
          adresse postale, code postal, ville.
        </li>
        <li>
          <strong>Données de projet</strong> : nature de la demande (installation, entretien,
          dépannage, achat), surface à climatiser, marques souhaitées, contraintes techniques, etc.
        </li>
        <li>
          <strong>Données de navigation</strong> : adresse IP, type de navigateur, pages visitées,
          dates et heures de connexion (uniquement si vous acceptez les cookies analytiques —
          voir section 8).
        </li>
        <li>
          <strong>Données contractuelles et de facturation</strong> : pour les clients, les
          informations nécessaires à l'établissement du devis, à la facturation et au suivi
          (collectées hors du site web).
        </li>
      </ul>
      <p>
        Aucune donnée sensible (santé, opinion politique, religion, etc.) n'est demandée ni
        traitée par ECO CVC.
      </p>

      <h2>3. Finalités du traitement</h2>
      <p>Vos données sont collectées et traitées pour les finalités suivantes :</p>
      <ul>
        <li>répondre à vos demandes de devis et de renseignements ;</li>
        <li>planifier et exécuter les visites techniques, installations et interventions ;</li>
        <li>établir les devis, factures et documents contractuels ;</li>
        <li>assurer le suivi des contrats d'entretien et des garanties ;</li>
        <li>vous informer ponctuellement sur l'avancement de votre projet ;</li>
        <li>respecter nos obligations légales et fiscales (conservation des factures, etc.).</li>
      </ul>

      <h2>4. Base légale du traitement</h2>
      <p>Conformément au RGPD, nos traitements reposent sur les bases légales suivantes :</p>
      <ul>
        <li>
          <strong>Exécution du contrat ou mesures précontractuelles</strong> : pour les devis,
          commandes et prestations (art. 6.1.b RGPD).
        </li>
        <li>
          <strong>Obligation légale</strong> : conservation des documents comptables et fiscaux
          (art. 6.1.c RGPD).
        </li>
        <li>
          <strong>Consentement</strong> : pour les cookies non strictement nécessaires et
          l'inscription éventuelle à une newsletter (art. 6.1.a RGPD).
        </li>
        <li>
          <strong>Intérêt légitime</strong> : pour la prospection commerciale auprès d'anciens
          clients sur des produits ou services analogues (art. 6.1.f RGPD).
        </li>
      </ul>

      <h2>5. Destinataires des données</h2>
      <p>
        Vos données ne font <strong>l'objet d'aucune vente, location ou cession</strong> à des
        tiers à des fins commerciales. Elles peuvent être communiquées :
      </p>
      <ul>
        <li>aux salariés et techniciens de ECO CVC, dans la limite de leurs missions ;</li>
        <li>
          aux prestataires techniques nous accompagnant (hébergement web, service d'envoi de
          formulaires, comptabilité), dans le cadre d'un contrat de sous-traitance conforme à
          l'article 28 du RGPD ;
        </li>
        <li>
          aux autorités administratives et organismes publics lorsque la loi l'exige
          (administration fiscale, urssaf, organismes de certification RGE).
        </li>
      </ul>

      <h2>6. Transferts hors Union européenne</h2>
      <p>
        Le service Web3Forms, utilisé pour la transmission des formulaires, peut traiter
        ponctuellement des données dans des pays tiers (États-Unis), sous réserve de garanties
        appropriées (clauses contractuelles types de la Commission européenne). Aucun autre
        transfert hors UE n'est réalisé.
      </p>

      <h2>7. Durée de conservation</h2>
      <ul>
        <li>
          <strong>Demandes de devis non concrétisées</strong> : 3 ans à compter du dernier contact.
        </li>
        <li>
          <strong>Données clients</strong> : pendant la durée de la relation contractuelle, puis
          archivées 10 ans pour répondre aux obligations comptables et à la garantie décennale.
        </li>
        <li>
          <strong>Données de prospection</strong> : 3 ans à compter du dernier contact.
        </li>
        <li>
          <strong>Cookies analytiques</strong> : 13 mois maximum.
        </li>
      </ul>

      <h2>8. Cookies</h2>
      <p>
        Le site eco-cvc.fr utilise un nombre minimal de cookies, classés en deux catégories :
      </p>
      <ul>
        <li>
          <strong>Cookies strictement nécessaires</strong> au fonctionnement du site (mémorisation
          du panier devis dans le navigateur via <em>localStorage</em>, gestion de la fermeture du
          bandeau mobile via <em>sessionStorage</em>). Ces cookies ne nécessitent pas votre
          consentement.
        </li>
        <li>
          <strong>Cookies de mesure d'audience anonymisée</strong> (le cas échéant) : ils
          permettent d'établir des statistiques de fréquentation. Ils ne sont déposés qu'après
          votre consentement explicite.
        </li>
      </ul>
      <p>
        Vous pouvez à tout moment retirer votre consentement ou supprimer les cookies via les
        paramètres de votre navigateur.
      </p>

      <h2>9. Sécurité des données</h2>
      <p>
        ECO CVC met en œuvre les mesures techniques et organisationnelles appropriées pour
        garantir la sécurité de vos données : connexion HTTPS sur l'ensemble du site, accès
        restreints, sauvegardes régulières, sensibilisation des salariés à la confidentialité.
      </p>
      <p>
        En cas de violation de données susceptible d'engendrer un risque pour vos droits et
        libertés, nous nous engageons à en informer la CNIL dans les 72 heures et, le cas échéant,
        les personnes concernées.
      </p>

      <h2>10. Vos droits</h2>
      <p>
        Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants sur vos
        données personnelles :
      </p>
      <ul>
        <li><strong>Droit d'accès</strong> : obtenir la copie des données vous concernant ;</li>
        <li><strong>Droit de rectification</strong> : corriger des données inexactes ;</li>
        <li>
          <strong>Droit à l'effacement</strong> (« droit à l'oubli ») : demander la suppression de
          vos données dans les conditions prévues par la loi ;
        </li>
        <li>
          <strong>Droit à la limitation</strong> du traitement et <strong>droit d'opposition</strong>{" "}
          (notamment à la prospection commerciale) ;
        </li>
        <li><strong>Droit à la portabilité</strong> de vos données ;</li>
        <li>
          <strong>Droit de définir des directives</strong> sur le sort de vos données après votre
          décès.
        </li>
      </ul>
      <p>
        Pour exercer ces droits, écrivez-nous à <a href="mailto:ecocvc69@gmail.com">ecocvc69@gmail.com</a>{" "}
        en joignant un justificatif d'identité. Nous répondons dans un délai maximal d'un mois.
      </p>

      <h2>11. Réclamation auprès de la CNIL</h2>
      <p>
        Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous
        pouvez adresser une réclamation à la CNIL :
      </p>
      <ul>
        <li>
          Site web :{" "}
          <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">
            cnil.fr/fr/plaintes
          </a>
        </li>
        <li>Adresse : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
      </ul>

      <h2>12. Modifications</h2>
      <p>
        La présente politique peut être modifiée à tout moment pour tenir compte d'évolutions
        légales ou techniques. La date de dernière mise à jour figure en haut de la page.
      </p>
    </LegalLayout>
  );
};

export default Confidentialite;
