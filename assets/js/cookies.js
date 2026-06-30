/* ============================================================
   LIBOTA - cookies.js
   Responsabilité : bannière de consentement aux cookies.
     - injecte la bannière en bas de page
     - mémorise le choix dans localStorage
     - ne réapparaît plus une fois un choix fait
   Clé de stockage : « libota_cookies » = « accepte » | « refuse »
   ============================================================ */

(function () {
    'use strict';

    var CLE = 'libota_cookies';

    // Chemin de base (« » à la racine, « ../ » dans /pages/).
    var base = document.body.getAttribute('data-base') || '';

    // Si un choix a déjà été fait, on n'affiche rien.
    if (localStorage.getItem(CLE)) {
        return;
    }


    /* --------------------------------------------------------
       Construction de la bannière
       -------------------------------------------------------- */
    var banniere = document.createElement('div');
    banniere.className = 'cookies';
    banniere.setAttribute('role', 'dialog');
    banniere.setAttribute('aria-label', 'Consentement aux cookies');

    banniere.innerHTML =
        '<div class="cookies-texte">' +
            'Nous utilisons des cookies pour améliorer votre navigation et ' +
            'mesurer notre audience. En poursuivant, vous acceptez notre ' +
            '<a href="' + base + 'pages/cookies.html">politique de cookies</a>.' +
        '</div>' +
        '<div class="cookies-actions">' +
            '<button class="cookies-refuser">Refuser</button>' +
            '<button class="cookies-accepter">Accepter</button>' +
        '</div>';

    document.body.appendChild(banniere);

    // Petite temporisation pour l'animation d'entrée
    requestAnimationFrame(function () {
        setTimeout(function () {
            banniere.classList.add('visible');
        }, 600);
    });


    /* --------------------------------------------------------
       Enregistrement du choix
       -------------------------------------------------------- */
    function enregistrer(choix) {
        localStorage.setItem(CLE, choix);
        banniere.classList.remove('visible');

        setTimeout(function () {
            banniere.remove();
        }, 500);
    }

    banniere
        .querySelector('.cookies-accepter')
        .addEventListener('click', function () {
            enregistrer('accepte');
        });

    banniere
        .querySelector('.cookies-refuser')
        .addEventListener('click', function () {
            enregistrer('refuse');
        });

})();
