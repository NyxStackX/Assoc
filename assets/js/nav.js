/* ============================================================
   LIBOTA — nav.js
   Responsabilité : comportement de l'en-tête.
     - état « défilé » (fond clair au scroll)
     - barre de progression de lecture
     - menu mobile (burger + panneau plein écran)
   ============================================================ */

(function () {
    'use strict';

    var entete   = document.querySelector('.entete');
    var barre    = document.querySelector('.progress-bar');
    var nav      = entete ? entete.querySelector('.nav') : null;


    /* --------------------------------------------------------
       1. En-tête au défilement + barre de progression
       -------------------------------------------------------- */
    function auDefilement() {
        var y = window.scrollY;

        if (entete) {
            if (y > 40) {
                entete.classList.add('defile');
            } else {
                entete.classList.remove('defile');
            }
        }

        if (barre) {
            var hauteur = document.documentElement.scrollHeight - window.innerHeight;
            var ratio   = hauteur > 0 ? (y / hauteur) * 100 : 0;
            barre.style.width = ratio + '%';
        }
    }

    window.addEventListener('scroll', auDefilement, { passive: true });
    auDefilement();


    /* --------------------------------------------------------
       2. Menu mobile
       -------------------------------------------------------- */
    if (entete && nav) {

        // Bouton burger
        var burger = document.createElement('button');
        burger.className = 'burger';
        burger.setAttribute('aria-label', 'Ouvrir le menu');
        burger.innerHTML = '<span></span><span></span><span></span>';
        entete.appendChild(burger);

        // Panneau plein écran (copie des liens de la nav)
        var menu = document.createElement('div');
        menu.className = 'menu-mobile';
        menu.innerHTML =
            nav.innerHTML +
            '<button class="fermer" aria-label="Fermer le menu">\u00d7</button>';
        document.body.appendChild(menu);

        function ouvrir() {
            menu.classList.add('ouvert');
            document.body.style.overflow = 'hidden';
        }

        function fermer() {
            menu.classList.remove('ouvert');
            document.body.style.overflow = '';
        }

        burger.addEventListener('click', ouvrir);

        menu.querySelector('.fermer').addEventListener('click', fermer);

        menu.querySelectorAll('a').forEach(function (lien) {
            lien.addEventListener('click', fermer);
        });
    }

})();
