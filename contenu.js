/* ============================================================
   LIBOTA - CONTENU DU SITE
   ------------------------------------------------------------
   Ce fichier contient TOUT le texte du site.
   Pour modifier le site, changez uniquement le texte entre
   les guillemets « ... ». Ne touchez pas aux mots avant les
   deux-points, ni aux virgules, crochets et accolades.
   Voir GUIDE-CONTENU.md pour les explications détaillées.
   ============================================================ */

window.CONTENU = {

  /* ============ RÉGLAGES COMMUNS À TOUTES LES PAGES ======== */

  /* Bandeau tout en haut de chaque page */
  annonce: "Campagne 2026 · Objectif 100 000 enfants scolarisés d'ici 2030",

  /* Menu principal. url = adresse depuis la racine du site. */
  menu: [
    { label: "Accueil",   url: "index.html" },
    { label: "À propos",  url: "pages/a-propos.html" },
    { label: "Projets",   url: "pages/projets.html" },
    { label: "Équipe",    url: "pages/equipe.html" },
    { label: "Presse",    url: "pages/presse.html" },
    { label: "Contact",   url: "pages/contact.html" }
  ],

  /* Bouton du menu, en haut à droite */
  bouton_entete: { label: "Faire un don", url: "pages/contact.html" },

  /* Barre fixe en bas d'écran, sur téléphone uniquement */
  barre_mobile: [
    { label: "Nos projets", url: "pages/projets.html" },
    { label: "Faire un don", url: "pages/contact.html" }
  ],

  /* --- Pied de page ------------------------------------- */
  pied: {
    intro: "Pour un monde où chaque enfant a accès à une éducation de qualité. Association à but non lucratif depuis 2000.",
    copyright: "© 2026 Libota - Tous droits réservés.",
    colonne_1_titre: "Navigation",
    colonne_1: [
      { label: "À propos", url: "pages/a-propos.html" },
      { label: "Projets", url: "pages/projets.html" },
      { label: "Équipe", url: "pages/equipe.html" },
      { label: "Presse", url: "pages/presse.html" },
      { label: "Contact", url: "pages/contact.html" }
    ],
    colonne_2_titre: "Informations légales",
    colonne_2: [
      { label: "Politique de cookies", url: "pages/legal.html?p=cookies" },
      { label: "Mentions légales", url: "pages/legal.html?p=mentions-legales" },
      { label: "Confidentialité", url: "pages/legal.html?p=confidentialite" },
      { label: "Conditions d'utilisation", url: "pages/legal.html?p=conditions" }
    ]
  },

  /* ==================== PAGE D'ACCUEIL ==================== */

  /* --- Haut de page (le grand titre) -------------------- */
  hero: {
    surtitre: "Association à but non lucratif · depuis 2000",
    titre: "Apprendre, c'est déjà <em>changer sa vie</em>.",
    intro: "Depuis 2000, Libota œuvre pour offrir une éducation de qualité aux enfants défavorisés à travers le monde. Rejoignez notre mission.",
    bouton_don: "Faire un don",
    bouton_actions: "Découvrir nos actions",
    photo: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=1200&auto=format&fit=crop",
    photo_legende: "Programme d'équipement scolaire, 2025."
  },

  /* --- Les quatre chiffres sous le titre ---------------- */
  chiffres: [
    { valeur: "40 K+", label: "Dons récoltés" },
    { valeur: "15 K",  label: "Enfants aidés" },
    { valeur: "24",    label: "Pays présents" },
    { valeur: "120",   label: "Centres actifs" }
  ],

  /* --- Notre mission ------------------------------------ */
  mission: {
    label: "Notre mission",
    texte: "Libota œuvre pour un monde où chaque enfant, quelle que soit son origine, a accès à une éducation de qualité. Nous croyons que <em>l'éducation est le fondement</em> de tout développement durable.",
    lien: "En savoir plus sur l'association",
    lien_url: "pages/a-propos.html",
    encadre_annee: "2030",
    encadre_texte: "L'année où nous visons 100 000 enfants scolarisés."
  },

  /* --- Notre impact ------------------------------------- */
  impact: {
    label: "Notre impact",
    titre: "Des résultats concrets depuis 2000.",
    chapeau: "Chaque chiffre représente une vie transformée, un avenir bâti grâce à l'éducation.",
    blocs: [
      { chiffre: "45 K", titre: "Enfants scolarisés", texte: "À travers 24 pays depuis 2000." },
      { chiffre: "850",  titre: "Écoles équipées",    texte: "Matériel et ressources pédagogiques." },
      { chiffre: "12 K", titre: "Bénévoles actifs",   texte: "Engagés sur le terrain." }
    ]
  },

  /* --- Nos domaines d'action (la liste numérotée) ------- */
  domaines: {
    label: "Nos domaines d'action",
    titre: "Six leviers pour une éducation complète",
    liste: [
      { titre: "Éducation",           texte: "Écoles équipées, manuels et soutien scolaire pour les enfants défavorisés.", url: "pages/projet.html?p=education" },
      { titre: "Santé & bien-être",   texte: "Suivi médical, vaccination et nutrition pour apprendre en bonne santé.", url: "pages/projet.html?p=sante" },
      { titre: "Numérique éducatif",  texte: "Tablettes, salles informatiques et apprentissage à distance en zone rurale.", url: "pages/projet.html?p=numerique" },
      { titre: "Formation",           texte: "Enseignants locaux formés aux méthodes pédagogiques modernes et inclusives.", url: "pages/projet.html?p=formation" },
      { titre: "Bourses scolaires",   texte: "Scolarité, fournitures et transport financés pour les familles vulnérables.", url: "pages/projet.html?p=bourses" },
      { titre: "Infrastructures",     texte: "Salles de classe, eau potable et sanitaires pour des écoles sûres et durables.", url: "pages/projet.html?p=infrastructures" }
    ]
  },

  /* --- Transparence : où va votre don ? ----------------- */
  transparence: {
    label: "Transparence",
    titre: "Où va votre don ?",
    texte: "Nous publions chaque année la répartition de nos dépenses. Votre générosité va là où elle compte vraiment : sur le terrain, auprès des enfants.",
    chiffre: "85 %",
    chiffre_legende: "des fonds sont consacrés directement à nos programmes.",
    repartition: [
      { nom: "Programmes éducatifs",   pct: 72, desc: "Écoles, matériel, bourses et formation des enseignants." },
      { nom: "Aide sur le terrain",    pct: 13, desc: "Santé, nutrition et logistique au plus près des communautés." },
      { nom: "Frais de fonctionnement", pct: 9, desc: "Coordination, suivi des projets et évaluation d'impact." },
      { nom: "Collecte de dons",        pct: 6, desc: "Sensibilisation et recherche de nouveaux soutiens." }
    ]
  },

  /* --- Notre parcours (la frise des dates) -------------- */
  parcours: {
    label: "Notre parcours",
    titre: "Vingt-cinq ans d'engagement",
    etapes: [
      { annee: "2000", titre: "Création de Libota", texte: "Fondation de l'association par un groupe d'éducateurs passionnés avec une vision claire : l'éducation pour tous, partout dans le monde." },
      { annee: "2008", titre: "Premier grand projet international", texte: "Lancement de notre premier programme d'équipement scolaire en Afrique subsaharienne, marquant le début de notre expansion." },
      { annee: "2015", titre: "Expansion mondiale", texte: "Passage de 5 à 24 pays d'intervention. Mise en place de programmes de formation des enseignants et de bourses scolaires." },
      { annee: "2024", titre: "15 000 enfants accompagnés", texte: "Cap symbolique franchi avec 15 000 enfants scolarisés. Lancement de notre programme numérique pour l'éducation à distance." }
    ]
  },

  /* --- Actualités --------------------------------------- */
  actualites: {
    label: "À la une",
    titre: "Nos dernières actualités",
    lien: "Toutes les actualités",
    lien_url: "pages/presse.html",
    liste: [
      { date: "15 janvier 2026", categorie: "Projet", titre: "Lancement du programme ÉducaNum 2026", texte: "Éducation numérique dans 12 écoles rurales avec distribution de 5 000 tablettes.", image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=600&auto=format&fit=crop", url: "pages/presse.html" },
      { date: "8 janvier 2026", categorie: "Résultats", titre: "Record historique : 2 500 diplômés en 2025", texte: "Année record avec 2 500 jeunes diplômés grâce à nos programmes.", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop", url: "pages/presse.html" },
      { date: "20 décembre 2025", categorie: "Partenariat", titre: "Nouveau partenariat avec l'UNESCO", texte: "Accord triennal pour l'éducation inclusive dans 5 pays d'Afrique subsaharienne.", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop", url: "pages/presse.html" }
    ]
  },

  /* --- Témoignages -------------------------------------- */
  temoignages: {
    label: "Ils en parlent",
    liste: [
      { citation: "Grâce à Libota, mon fils a pu accéder à une éducation de qualité malgré nos difficultés financières. L'association a changé notre vie.", auteur: "Marie Lefebvre", role: "Parent bénéficiaire" },
      { citation: "Être bénévole chez Libota est une expérience enrichissante. Voir les enfants grandir et apprendre, c'est la plus belle des récompenses.", auteur: "Thomas Bernard", role: "Bénévole depuis 2018" },
      { citation: "Le partenariat avec Libota nous a permis d'équiper 12 écoles rurales. Un impact concret et mesurable sur le terrain.", auteur: "Sophie Moreau", role: "Directrice Partenariats" }
    ]
  },

  /* --- Partenaires (simples noms) ----------------------- */
  partenaires: {
    titre: "Ils nous font confiance",
    liste: ["UNESCO", "Fondation Orange", "AFD", "TotalEnergies", "Enseignons", "Educo"]
  },

  /* --- Questions fréquentes ----------------------------- */
  faq: {
    label: "Bon à savoir",
    titre: "Questions fréquentes",
    liste: [
      { question: "Mon don est-il déductible des impôts ?", reponse: "Oui. Votre don ouvre droit à une réduction d'impôt de 66 % de son montant, dans la limite prévue par la loi. Un reçu fiscal vous est envoyé automatiquement par e-mail." },
      { question: "Comment savoir où va mon argent ?", reponse: "Nous publions chaque année un rapport d'impact et notre bilan financier détaillé. 85 % des fonds sont consacrés directement à nos programmes sur le terrain." },
      { question: "Puis-je faire un don mensuel ?", reponse: "Bien sûr. Lors de votre don, choisissez l'option « Mensuel ». Le don régulier nous permet d'inscrire nos actions dans la durée. Vous pouvez l'arrêter à tout moment." },
      { question: "Comment devenir bénévole ?", reponse: "Rendez-vous sur notre page Contact et choisissez « Devenir bénévole ». Notre équipe vous recontacte sous 24 h pour trouver la mission qui vous correspond." }
    ]
  },

  /* --- Grand appel au don ------------------------------- */
  appel_don: {
    titre: "Votre don change une vie.",
    texte: "25 € financent le matériel scolaire d'un enfant pour une année entière. Rejoignez les 12 000 donateurs qui soutiennent Libota.",
    bouton: "Faire un don sécurisé"
  },

  /* --- Contact et newsletter (bas de l'accueil) --------- */
  contact: {
    label: "Contact",
    titre: "Une question, un projet ?",
    intro: "Notre équipe vous répond sous 24 h. Retrouvez aussi toutes nos façons de nous rejoindre sur la page Contact.",
    lignes: [
      { cle: "Téléphone", valeur: "+33 1 23 45 67 89" },
      { cle: "E-mail", valeur: "contact@libota.org" },
      { cle: "Adresse", valeur: "42 Avenue de l'Éducation, 75008 Paris" },
      { cle: "Organisme caritatif", valeur: "W751 234 567" }
    ],
    newsletter_titre: "Restez informé",
    newsletter_texte: "Recevez nos actualités et rapports d'impact directement dans votre boîte mail.",
    newsletter_champ: "Votre adresse e-mail",
    newsletter_bouton: "S'abonner"
  },

  /* --- Bande vidéo de l'accueil -------------------------
     Déposez votre film dans assets/media/ puis écrivez son
     nom dans « video », par exemple "assets/media/film.mp4".
     Laissez vide si vous n'avez pas encore de vidéo. */
  film: {
    label: "En vidéo",
    titre: "Une année sur le terrain, en six minutes.",
    texte: "Nos équipes ont filmé une rentrée scolaire dans les écoles que nous accompagnons.",
    bouton: "Activer le son",
    poster: "https://images.pexels.com/videos/1580507/free-video-1580507.jpg?auto=compress&cs=tinysrgb&w=1600",
    /* Deux façons de mettre la vidéo, au choix :
       - « video »   : un fichier déposé dans assets/media/ (ex. "assets/media/film.mp4")
                       ou l'adresse d'un fichier .mp4 en ligne ;
       - « youtube » : l'identifiant d'une vidéo YouTube, c'est-à-dire ce qui suit
                       « v= » dans son adresse (ex. "dQw4w9WgXcQ").
       Remplissez l'un des deux, laissez l'autre vide. */
    video: "https://videos.pexels.com/video-files/1580507/1580507-hd_1280_720_30fps.mp4",
    youtube: "",
    note: "La vidéo sera bientôt disponible.",
    credit: "Images : Adailton Batista / Pexels - à remplacer par le film de l'association."
  },

  /* --- Grande image pleine largeur ---------------------- */
  bandeau: {
    /* « video » a la priorité sur « image » si les deux sont remplis. */
    video: "https://videos.pexels.com/video-files/1580509/1580509-hd_1280_720_30fps.mp4",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920&auto=format&fit=crop",
    poster: "https://images.pexels.com/videos/1580509/free-video-1580509.jpg?auto=compress&cs=tinysrgb&w=1600",
    legende: "Atelier de lecture dans une école partenaire."
  },

  /* ===================== PAGE À PROPOS ==================== */

  apropos: {
    etiquette: "L'association",
    titre: "À propos de Libota",
    intro: "Une organisation dédiée à faire de l'éducation un droit accessible à tous, pas un privilège.",
    histoire_label: "Notre histoire",
    histoire_titre: "L'éducation, la clé pour transformer des vies.",
    histoire_texte: [
      "Libota est une organisation dédiée à l'éducation pour tous. Notre mission est de garantir que chaque enfant, où qu'il se trouve, ait accès à une éducation de qualité. Nous croyons que l'éducation est la clé pour transformer des vies et construire un avenir meilleur.",
      "Depuis notre création en 2000, nous avons accompagné des milliers d'enfants dans leur parcours scolaire, en leur offrant non seulement un soutien académique, mais aussi un environnement propice à leur épanouissement personnel et social.",
      "Notre approche combine l'innovation pédagogique, l'engagement communautaire et des partenariats solides pour maximiser notre impact. Chaque jour, nous travaillons avec passion pour faire de l'éducation un droit accessible à tous."
    ],
    documents: [
      { label: "Bilan financier 2023", url: "#" },
      { label: "Registre de certification", url: "#" }
    ],
    objectifs_label: "Nos objectifs",
    objectifs_titre: "Ce vers quoi nous tendons",
    objectifs: [
      { titre: "Propager l'empathie par l'éducation", texte: "Développer les valeurs humaines et l'empathie chez les enfants à travers des programmes éducatifs innovants." },
      { titre: "Répartir les dons équitablement", texte: "Étendre notre impact international en répartissant équitablement les ressources dans 24 pays à travers le monde." },
      { titre: "Plus d'enfants diplômés", texte: "Accompagner les enfants et adolescents jusqu'à l'obtention de leur diplôme d'études secondaires." }
    ],
    galerie_label: "Sur le terrain",
    galerie_titre: "L'éducation en images",
    galerie: [
      "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=900&auto=format&fit=crop"
    ],
    appel_titre: "Soutenez notre mission.",
    appel_texte: "Chaque don nous rapproche d'un monde où chaque enfant a accès à l'éducation.",
    appel_bouton: "Faire un don"
  },

  /* ====================== PAGE PROJETS ==================== */

  projets: {
    etiquette: "Nos pôles d'action",
    titre: "Nos projets sur le terrain",
    intro: "Six pôles d'action complémentaires pour accompagner chaque enfant, de la salle de classe jusqu'au diplôme.",
    appel_titre: "Financez un projet.",
    appel_texte: "Votre don soutient directement l'un de nos six pôles d'action sur le terrain.",
    appel_bouton: "Faire un don"
  },

  /* --- Les six pôles, en détail -------------------------
     « cle » sert d'adresse : pages/projet.html?p=education
     Ne changez pas les « cle » sans changer aussi les liens. */
  poles: [
    {
      cle: "education", numero: "01", titre: "Éducation",
      accroche: "Notre pôle historique : des écoles équipées, des manuels et un soutien scolaire pour que chaque enfant apprenne dans de bonnes conditions.",
      resume: "Construction et équipement d'écoles, fourniture de matériel pédagogique et soutien scolaire pour les enfants défavorisés.",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1400&auto=format&fit=crop",
      stats: [
        { valeur: "850", label: "Écoles équipées" },
        { valeur: "45 K", label: "Enfants scolarisés" },
        { valeur: "24", label: "Pays" }
      ],
      projet: [
        "L'éducation est le cœur de l'action de Libota depuis 2000. Nous construisons et équipons des écoles, fournissons manuels et matériel pédagogique, et organisons un soutien scolaire personnalisé pour les enfants les plus en difficulté.",
        "Notre approche est globale : nous travaillons main dans la main avec les communautés, les familles et les enseignants locaux pour que chaque école devienne un lieu d'apprentissage durable et bienveillant."
      ],
      objectifs: [
        "Garantir l'accès à une école de qualité dans les zones rurales",
        "Fournir manuels et fournitures à chaque élève accompagné",
        "Réduire le décrochage scolaire par un soutien individualisé",
        "Impliquer durablement les communautés locales"
      ],
      actions: [
        "Équipement de 12 écoles rurales au Sénégal",
        "Bibliothèques mobiles dans 3 régions",
        "Programme de soutien scolaire après l'école",
        "Distribution annuelle de kits de fournitures"
      ],
      beneficiaires: "Les enfants de 6 à 16 ans issus de familles défavorisées, en priorité dans les zones rurales et isolées de nos 24 pays d'intervention.",
      galerie: [
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=700&auto=format&fit=crop"
      ]
    },
    {
      cle: "sante", numero: "02", titre: "Santé & bien-être",
      accroche: "Suivi médical, campagnes de vaccination et programmes nutritionnels pour que chaque enfant apprenne dans de bonnes conditions.",
      resume: "Suivi médical, campagnes de vaccination et programmes nutritionnels pour que chaque enfant apprenne dans de bonnes conditions.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
      stats: [
        { valeur: "38 K", label: "Enfants suivis" },
        { valeur: "310", label: "Écoles couvertes" },
        { valeur: "24", label: "Pays" }
      ],
      projet: [
        "Un enfant malade ou mal nourri n'apprend pas. Nos équipes organisent des visites médicales dans les écoles, des campagnes de vaccination et des repas quotidiens dans les zones les plus fragiles.",
        "Le programme est conçu avec les centres de santé locaux, afin que le suivi continue après notre passage."
      ],
      objectifs: [
        "Assurer une visite médicale annuelle à chaque enfant accompagné",
        "Garantir un repas équilibré par jour d'école",
        "Sensibiliser les familles à l'hygiène et à la nutrition",
        "Renforcer les centres de santé partenaires"
      ],
      actions: [
        "Campagnes de vaccination dans 310 écoles",
        "Cantines scolaires dans 4 régions",
        "Formation de 900 référents santé",
        "Distribution de kits d'hygiène"
      ],
      beneficiaires: "Les élèves des écoles partenaires et leurs familles, avec une priorité donnée aux zones sans accès à un centre de santé.",
      galerie: [
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=700&auto=format&fit=crop"
      ]
    },
    {
      cle: "numerique", numero: "03", titre: "Numérique éducatif",
      /* « video » remplace l'image de tête par un film, si elle est remplie. */
      video: "https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4",
      accroche: "Distribution de tablettes, salles informatiques et plateformes d'apprentissage à distance pour les zones rurales isolées.",
      resume: "Distribution de tablettes, salles informatiques et plateformes d'apprentissage à distance pour les zones rurales isolées.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      stats: [
        { valeur: "5 000", label: "Tablettes distribuées" },
        { valeur: "12", label: "Écoles pilotes" },
        { valeur: "200", label: "Enseignants formés" }
      ],
      projet: [
        "Le programme ÉducaNum équipe les écoles rurales en tablettes et salles informatiques, et met à disposition des contenus utilisables hors connexion.",
        "Chaque déploiement est accompagné d'une formation des enseignants, condition indispensable pour que le matériel serve réellement en classe."
      ],
      objectifs: [
        "Équiper 12 écoles rurales en salles informatiques",
        "Former 200 enseignants au numérique éducatif",
        "Rendre les contenus disponibles hors connexion",
        "Mesurer l'effet sur les résultats scolaires"
      ],
      actions: [
        "Distribution de 5 000 tablettes",
        "Installation de 12 salles informatiques",
        "Bibliothèque de contenus hors ligne",
        "Ateliers de maintenance avec les équipes locales"
      ],
      beneficiaires: "Les élèves et enseignants des écoles rurales isolées, là où la connexion et l'électricité restent intermittentes.",
      galerie: [
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?q=80&w=700&auto=format&fit=crop"
      ]
    },
    {
      cle: "formation", numero: "04", titre: "Formation des enseignants",
      accroche: "Programmes de formation continue pour les enseignants locaux, aux méthodes pédagogiques modernes et inclusives.",
      resume: "Programmes de formation continue pour les enseignants locaux, aux méthodes pédagogiques modernes et inclusives.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
      stats: [
        { valeur: "2 400", label: "Enseignants formés" },
        { valeur: "18", label: "Centres de formation" },
        { valeur: "24", label: "Pays" }
      ],
      projet: [
        "Former les enseignants est le levier le plus durable de notre action : un enseignant formé accompagne des centaines d'élèves au fil de sa carrière.",
        "Nos modules portent sur la pédagogie active, la gestion de classe, l'inclusion des enfants en situation de handicap et l'usage des outils numériques."
      ],
      objectifs: [
        "Former chaque année 400 enseignants supplémentaires",
        "Créer un réseau de formateurs locaux autonomes",
        "Diffuser des supports pédagogiques libres",
        "Accompagner les enseignants après la formation"
      ],
      actions: [
        "18 centres de formation ouverts",
        "Parcours certifiant de 6 modules",
        "Réseau de 120 formateurs locaux",
        "Visites de suivi en classe"
      ],
      beneficiaires: "Les enseignants des écoles publiques et associatives partenaires, et à travers eux l'ensemble de leurs élèves.",
      galerie: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=700&auto=format&fit=crop"
      ]
    },
    {
      cle: "bourses", numero: "05", titre: "Bourses scolaires",
      accroche: "Financement de la scolarité, des fournitures et du transport pour les familles les plus vulnérables, jusqu'au diplôme.",
      resume: "Financement de la scolarité, des fournitures et du transport pour les familles les plus vulnérables, jusqu'au diplôme.",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200&auto=format&fit=crop",
      stats: [
        { valeur: "7 800", label: "Bourses actives" },
        { valeur: "2 500", label: "Diplômés en 2025" },
        { valeur: "92 %", label: "Taux de réussite" }
      ],
      projet: [
        "La bourse Libota couvre les frais de scolarité, les fournitures et le transport, les trois obstacles qui écartent le plus souvent un enfant de l'école.",
        "L'accompagnement est pensé sur la durée : un élève boursier est suivi jusqu'à l'obtention de son diplôme."
      ],
      objectifs: [
        "Lever les freins financiers à la scolarisation",
        "Accompagner chaque boursier jusqu'au diplôme",
        "Assurer la parité filles-garçons parmi les boursiers",
        "Impliquer les familles dans le suivi scolaire"
      ],
      actions: [
        "7 800 bourses attribuées en 2025",
        "Transport scolaire dans 6 régions",
        "Tutorat mensuel pour chaque boursier",
        "Aide à l'orientation post-diplôme"
      ],
      beneficiaires: "Les enfants et adolescents de familles à très faibles revenus, identifiés avec les écoles et les autorités locales.",
      galerie: [
        "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503437313881-503a91226402?q=80&w=700&auto=format&fit=crop"
      ]
    },
    {
      cle: "infrastructures", numero: "06", titre: "Infrastructures",
      accroche: "Construction de classes, accès à l'eau potable et installations sanitaires pour des écoles sûres et durables.",
      resume: "Construction de classes, accès à l'eau potable et installations sanitaires pour des écoles sûres et durables.",
      image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1200&auto=format&fit=crop",
      stats: [
        { valeur: "140", label: "Classes construites" },
        { valeur: "96", label: "Points d'eau" },
        { valeur: "24", label: "Pays" }
      ],
      projet: [
        "Une école sans toit, sans eau ni sanitaires ne retient pas ses élèves. Nous construisons et rénovons des salles de classe, installons des points d'eau et des sanitaires séparés.",
        "Les chantiers sont menés avec des entreprises et des matériaux locaux, pour que l'entretien reste possible après notre départ."
      ],
      objectifs: [
        "Construire ou rénover 30 classes par an",
        "Garantir l'eau potable dans chaque école partenaire",
        "Installer des sanitaires séparés filles-garçons",
        "Former les communautés à l'entretien des bâtiments"
      ],
      actions: [
        "140 classes construites ou rénovées",
        "96 points d'eau installés",
        "Blocs sanitaires dans 88 écoles",
        "Comités d'entretien dans chaque village"
      ],
      beneficiaires: "Les élèves et enseignants des écoles rurales, ainsi que les habitants des villages qui partagent les points d'eau.",
      galerie: [
        "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=700&auto=format&fit=crop"
      ]
    }
  ],

  /* --- Textes communs aux pages de projet --------------- */
  projet_page: {
    retour: "Retour aux projets",
    titre_projet: "Le projet",
    titre_objectifs: "Nos objectifs",
    titre_actions: "Actions réalisées",
    titre_beneficiaires: "Bénéficiaires",
    titre_galerie: "En images",
    soutien_titre: "Soutenir ce projet",
    soutien_texte: "Votre don finance directement ce pôle d'action sur le terrain.",
    soutien_bouton: "Faire un don",
    suivant: "Projet suivant"
  },

  /* ====================== PAGE ÉQUIPE ===================== */

  equipe: {
    etiquette: "Les visages de Libota",
    titre: "Notre équipe",
    intro: "Des femmes et des hommes engagés, du siège jusqu'au terrain, au service d'une seule mission : l'éducation pour tous.",
    direction_label: "La direction",
    direction_titre: "Celles et ceux qui pilotent",
    direction: [
      { nom: "Claire Dubois", role: "Directrice générale", texte: "Vingt ans d'engagement dans l'éducation et la coopération internationale.", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop" },
      { nom: "Marc Lévêque", role: "Directeur des programmes", texte: "Coordonne nos six pôles d'action dans 24 pays.", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
      { nom: "Sophie Moreau", role: "Directrice des partenariats", texte: "Tisse les liens avec institutions et entreprises engagées.", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" },
      { nom: "David Nguyen", role: "Responsable terrain", texte: "Présent au plus près des écoles et des communautés.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" }
    ],
    benevoles_label: "Nos bénévoles",
    benevoles_titre: "12 000 bénévoles, un même engagement",
    benevoles_texte: "Sur le terrain ou à distance, nos bénévoles donnent de leur temps et de leur énergie. Ils animent les classes, forment les enseignants, organisent les collectes et portent notre voix partout dans le monde.",
    benevoles_chiffres: [
      { valeur: "12 K", label: "Bénévoles actifs" },
      { valeur: "24", label: "Pays" },
      { valeur: "98 %", label: "Recommandent Libota" }
    ],
    benevoles_bouton: "Devenir bénévole",
    benevoles_photos: [
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=600&auto=format&fit=crop"
    ],
    rejoindre_titre: "Rejoignez l'équipe Libota",
    rejoindre_texte: "Bénévolat, mécénat de compétences ou poste salarié : il y a forcément une façon de contribuer qui vous ressemble.",
    rejoindre_bouton_1: "Nous rejoindre",
    rejoindre_bouton_2: "Faire un don"
  },

  /* ====================== PAGE PRESSE ===================== */

  presse: {
    etiquette: "Salle de presse",
    titre: "Actualités & presse",
    intro: "Communiqués, temps forts et revue de presse. Suivez l'actualité de Libota et de ses programmes.",
    une_badge: "À la une",
    une: {
      date: "15 janvier 2026", categorie: "Communiqué",
      titre: "Lancement du programme ÉducaNum 2026",
      texte: "Libota déploie l'éducation numérique dans 12 écoles rurales avec la distribution de 5 000 tablettes et la formation de 200 enseignants au numérique éducatif.",
      lien: "Lire le communiqué",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1200&auto=format&fit=crop"
    },
    liste: [
      { date: "8 janvier 2026", categorie: "Résultats", titre: "Record historique : 2 500 diplômés en 2025", texte: "Une année record grâce à nos programmes de bourses et de soutien scolaire.", image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800&auto=format&fit=crop" },
      { date: "20 décembre 2025", categorie: "Partenariat", titre: "Nouveau partenariat avec l'UNESCO", texte: "Un accord triennal pour l'éducation inclusive dans 5 pays d'Afrique subsaharienne.", image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=800&auto=format&fit=crop" },
      { date: "2 décembre 2025", categorie: "Événement", titre: "Gala annuel : 480 000 € récoltés", texte: "Une soirée de solidarité au profit de nos programmes d'infrastructures scolaires.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop" }
    ],
    revue_label: "Ils parlent de nous",
    revue_titre: "Revue de presse",
    revue: [
      { titre: "« Libota, vingt-cinq ans au service de l'éducation »", source: "Le Monde · Janvier 2026", url: "#" },
      { titre: "« Quand le numérique rejoint les écoles rurales »", source: "France Info · Décembre 2025", url: "#" },
      { titre: "« 45 000 enfants scolarisés : le bilan d'une ONG »", source: "La Croix · Novembre 2025", url: "#" },
      { titre: "« Le modèle Libota face aux défis de l'éducation »", source: "Radio France · Octobre 2025", url: "#" }
    ],
    kit_titre: "Espace presse",
    kit_texte: "Journalistes : retrouvez nos communiqués, visuels HD et logos dans notre kit média.",
    kit_liens: [
      { label: "Kit média (ZIP)", url: "#" },
      { label: "Logos & charte", url: "#" }
    ],
    kit_contact_label: "Contact presse",
    kit_contact_mail: "presse@libota.org",
    kit_contact_tel: "+33 1 23 45 67 90"
  },

  /* ====================== PAGE CONTACT ==================== */

  page_contact: {
    etiquette: "Nous rejoindre",
    titre: "Engagez-vous à nos côtés",
    intro: "Bénévole, partenaire ou donateur : trois façons de faire grandir notre mission. Choisissez la vôtre.",
    engagements: [
      { titre: "Devenir bénévole", texte: "Donnez de votre temps sur le terrain ou à distance. Animation, formation, événements : votre énergie compte.", action: "Je me porte volontaire", sujet: "Bénévolat" },
      { titre: "Devenir partenaire", texte: "Entreprises et institutions : mécénat, dons en nature ou mécénat de compétences au service de l'éducation.", action: "Construire un partenariat", sujet: "Partenariat" },
      { titre: "Faire un don", texte: "Chaque don finance concrètement nos programmes. 25 € équipent un enfant pour une année entière.", action: "Faire un don", sujet: "Don" }
    ],
    form_label: "Écrivez-nous",
    form_titre: "Une question, un projet ?",
    form_intro: "Remplissez ce formulaire, notre équipe vous répond sous 24 h ouvrées.",
    form_champs: { prenom: "Prénom", nom: "Nom", email: "Adresse e-mail", message: "Votre message" },
    form_sujet_defaut: "Sujet de votre message",
    form_sujets: ["Devenir bénévole", "Devenir partenaire", "Question sur les dons", "Demande presse", "Autre"],
    form_bouton: "Envoyer le message",
    form_confirmation: "Merci, votre message a bien été envoyé. Nous revenons vers vous sous 24 h.",
    coordonnees_titre: "Nos coordonnées",
    coordonnees: [
      { cle: "Téléphone", valeur: "+33 1 23 45 67 89" },
      { cle: "E-mail", valeur: "contact@libota.org" },
      { cle: "Adresse", valeur: "42 Avenue de l'Éducation, 75008 Paris" },
      { cle: "Horaires", valeur: "Lun - Ven · 9h - 18h" }
    ],
    reseaux: [
      { label: "Facebook", url: "#" },
      { label: "Instagram", url: "#" },
      { label: "LinkedIn", url: "#" }
    ]
  },

  /* ================== PAGES D'INFORMATIONS ================
     Textes juridiques. À faire relire par l'association :
     les mentions entre crochets [ ] doivent être complétées. */

  legal: [
    {
      cle: "mentions-legales", titre: "Mentions légales",
      intro: "Informations légales relatives au site libota.org.",
      blocs: [
        { titre: "Éditeur du site", texte: "Libota, association à but non lucratif, 42 Avenue de l'Éducation, 75008 Paris. Numéro d'enregistrement : W751 234 567. Téléphone : +33 1 23 45 67 89. E-mail : contact@libota.org." },
        { titre: "Responsable de la publication", texte: "La directrice générale de l'association, Claire Dubois." },
        { titre: "Hébergement", texte: "[Nom et adresse de l'hébergeur du site à compléter.]" },
        { titre: "Propriété intellectuelle", texte: "L'ensemble des contenus du site (textes, photographies, logos) est la propriété de Libota ou de ses partenaires. Toute reproduction sans autorisation écrite est interdite." },
        { titre: "Crédits photographiques", texte: "Les photographies illustrant ce site sont des images de démonstration issues d'Unsplash. Elles seront remplacées par les photographies de l'association." }
      ]
    },
    {
      cle: "confidentialite", titre: "Politique de confidentialité",
      intro: "Comment nous collectons et utilisons vos données personnelles.",
      blocs: [
        { titre: "Données collectées", texte: "Nous collectons uniquement les données que vous nous transmettez : nom, prénom, adresse e-mail et message via le formulaire de contact, adresse e-mail via l'inscription à la lettre d'information." },
        { titre: "Utilisation des données", texte: "Vos données servent à répondre à votre demande, vous envoyer nos actualités si vous y avez consenti, et établir les reçus fiscaux pour les dons. Elles ne sont jamais vendues ni cédées à des tiers." },
        { titre: "Durée de conservation", texte: "Les demandes de contact sont conservées trois ans après le dernier échange. Les données liées aux dons sont conservées le temps requis par les obligations comptables et fiscales." },
        { titre: "Vos droits", texte: "Vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos données en écrivant à contact@libota.org. Vous pouvez également introduire une réclamation auprès de la CNIL." }
      ]
    },
    {
      cle: "cookies", titre: "Politique de cookies",
      intro: "Les cookies utilisés sur ce site et comment les refuser.",
      blocs: [
        { titre: "Qu'est-ce qu'un cookie ?", texte: "Un cookie est un petit fichier déposé sur votre appareil lors de la visite d'un site. Il permet de mémoriser certaines informations, comme vos préférences d'affichage." },
        { titre: "Cookies utilisés", texte: "Ce site utilise uniquement des cookies nécessaires à son bon fonctionnement, notamment la mémorisation de votre choix concernant les cookies. Aucun cookie publicitaire n'est déposé." },
        { titre: "Mesure d'audience", texte: "[Si une solution de mesure d'audience est mise en place, la préciser ici : nom de l'outil, données collectées, durée de conservation.]" },
        { titre: "Gérer vos cookies", texte: "Vous pouvez à tout moment supprimer les cookies déposés sur votre appareil depuis les réglages de votre navigateur." }
      ]
    },
    {
      cle: "conditions", titre: "Conditions d'utilisation",
      intro: "Règles d'usage du site et des services associés.",
      blocs: [
        { titre: "Objet du site", texte: "Le site libota.org présente les missions, projets et actualités de l'association, et permet de la soutenir par un don ou un engagement bénévole." },
        { titre: "Utilisation des contenus", texte: "Les contenus sont mis à disposition à titre d'information. Toute réutilisation à des fins commerciales est soumise à l'accord écrit de l'association." },
        { titre: "Dons", texte: "Les dons effectués en ligne sont traités par notre prestataire de paiement. Un reçu fiscal est adressé par e-mail. Les dons réguliers peuvent être interrompus à tout moment sur simple demande." },
        { titre: "Responsabilité", texte: "L'association met tout en œuvre pour assurer l'exactitude des informations publiées, sans pouvoir en garantir l'exhaustivité. Les liens vers des sites externes n'engagent pas sa responsabilité." }
      ]
    }
  ]
};
