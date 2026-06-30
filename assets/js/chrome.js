/* ============================================================
   LIBOTA - chrome.js
   Responsabilité : injecter l'en-tête et le pied de page
   communs sur les pages intérieures, afin de ne pas répéter
   ce markup dans chaque fichier HTML.

   Chaque page règle, sur sa balise <body> :
     data-base = chemin vers la racine (« ../ » dans /pages/)
     data-page = identifiant pour surligner l'onglet actif
                 (accueil | apropos | projets | equipe | presse | contact)
   ============================================================ */

(function () {
    'use strict';

    var base = document.body.getAttribute('data-base') || '';
    var page = document.body.getAttribute('data-page') || '';

    // Liens de navigation : [identifiant, libellé, url relative à la racine]
    var liens = [
        ['accueil', 'Accueil',  'index.html'],
        ['apropos', 'À propos', 'pages/a-propos.html'],
        ['projets', 'Projets',  'pages/projets.html'],
        ['equipe',  'Équipe',   'pages/equipe.html'],
        ['presse',  'Presse',   'pages/presse.html'],
        ['contact', 'Contact',  'pages/contact.html']
    ];


    /* --------------------------------------------------------
       1. Construction des liens de navigation
       -------------------------------------------------------- */
    function construireLiens() {
        return liens.map(function (l) {
            var actif = l[0] === page ? ' actif' : '';
            return '<a class="lien-souligne' + actif + '" href="' + base + l[2] + '">' + l[1] + '</a>';
        }).join('');
    }


    /* --------------------------------------------------------
       2. En-tête
       -------------------------------------------------------- */
    var entete = document.createElement('div');
    entete.innerHTML =
        '<div class="progress-track"><div class="progress-bar"></div></div>' +

        '<div class="annonce">' +
            '<span class="annonce-point"></span>' +
            '<span>Campagne&nbsp;2026&nbsp;·&nbsp;Objectif&nbsp;100&nbsp;000&nbsp;enfants scolarisés d\'ici 2030</span>' +
        '</div>' +

        '<header class="entete">' +
            '<a class="logo" href="' + base + 'index.html">' +
                '<span class="logo-marque"><span></span></span>' +
                '<span class="logo-nom">Libota</span>' +
            '</a>' +
            '<nav class="nav">' + construireLiens() + '</nav>' +
            '<button class="btn btn-ambre btn-sm shine btn-don-header" data-don>Faire un don</button>' +
        '</header>';

    // Insertion en tout début de <body>
    while (entete.lastChild) {
        document.body.insertBefore(entete.lastChild, document.body.firstChild);
    }


    /* --------------------------------------------------------
       3. Pied de page
       -------------------------------------------------------- */
    var pied = document.createElement('footer');
    pied.className = 'pied';
    pied.innerHTML =
        '<div class="pied-grille">' +

            '<div>' +
                '<a class="logo" href="' + base + 'index.html" style="color:var(--ivoire)">' +
                    '<span class="logo-marque"><span></span></span>' +
                    '<span class="logo-nom">Libota</span>' +
                '</a>' +
                '<p class="intro">Pour un monde où chaque enfant a accès à une éducation de qualité. Association à but non lucratif depuis 2000.</p>' +
            '</div>' +

            '<div>' +
                '<p class="pied-titre">Navigation</p>' +
                '<div class="pied-liens">' +
                    '<a href="' + base + 'pages/a-propos.html">À propos</a>' +
                    '<a href="' + base + 'pages/projets.html">Projets</a>' +
                    '<a href="' + base + 'pages/equipe.html">Équipe</a>' +
                    '<a href="' + base + 'pages/presse.html">Presse</a>' +
                    '<a href="' + base + 'pages/contact.html">Contact</a>' +
                '</div>' +
            '</div>' +

            '<div>' +
                '<p class="pied-titre">Informations légales</p>' +
                '<div class="pied-liens">' +
                    '<a href="' + base + 'pages/cookies.html">Politique de cookies</a>' +
                    '<a href="' + base + 'pages/mentions-legales.html">Mentions légales</a>' +
                    '<a href="' + base + 'pages/confidentialite.html">Confidentialité</a>' +
                    '<a href="' + base + 'pages/conditions.html">Conditions d\'utilisation</a>' +
                '</div>' +
            '</div>' +

        '</div>' +
        '<p class="pied-bas">© 2026 Libota - Tous droits réservés.</p>';

    document.body.appendChild(pied);

})();
