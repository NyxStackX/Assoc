/* ============================================================
   LIBOTA — reveal.js
   Responsabilité : animations déclenchées au défilement.
     - apparition des éléments « .reveal »
     - compteurs chiffrés animés « .compteur »
   ============================================================ */

(function () {
    'use strict';

    /* --------------------------------------------------------
       1. Apparition des éléments au défilement
       -------------------------------------------------------- */
    var observateurReveal = new IntersectionObserver(
        function (entrees) {
            entrees.forEach(function (entree) {
                if (entree.isIntersecting) {
                    entree.target.classList.add('visible');
                    observateurReveal.unobserve(entree.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -8% 0px'
        }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
        observateurReveal.observe(el);
    });


    /* --------------------------------------------------------
       2. Compteurs animés
          Chaque élément « .compteur » porte :
            data-cible  = valeur finale
            data-suffixe = texte ajouté (« K », « % »…)
       -------------------------------------------------------- */
    function animerCompteur(el) {
        var cible    = parseFloat(el.getAttribute('data-cible')) || 0;
        var suffixe  = el.getAttribute('data-suffixe') || '';
        var duree    = 1700;
        var debut    = performance.now();

        function etape(maintenant) {
            var p     = Math.min((maintenant - debut) / duree, 1);
            var eased = 1 - Math.pow(1 - p, 3);

            el.textContent = Math.round(cible * eased) + suffixe;

            if (p < 1) {
                requestAnimationFrame(etape);
            } else {
                el.textContent = cible + suffixe;
            }
        }

        requestAnimationFrame(etape);
    }

    var observateurCompteur = new IntersectionObserver(
        function (entrees) {
            entrees.forEach(function (entree) {
                if (entree.isIntersecting) {
                    animerCompteur(entree.target);
                    observateurCompteur.unobserve(entree.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    document.querySelectorAll('.compteur').forEach(function (el) {
        observateurCompteur.observe(el);
    });

})();
