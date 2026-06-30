/* ============================================================
   LIBOTA - contact.js
   Responsabilité : interactions de la page Contact.
     - boutons « s'engager » qui préremplissent le sujet
       et défilent vers le formulaire
     - envoi du formulaire (démonstration)
   ============================================================ */

(function () {
    'use strict';

    var champSujet = document.querySelector('[data-sujet]');
    var ancre      = document.querySelector('[data-form-ancre]');
    var form       = document.querySelector('.contact-form');


    /* --------------------------------------------------------
       1. Boutons « s'engager » -> préremplir + défiler
       -------------------------------------------------------- */
    document.querySelectorAll('[data-aller-form]').forEach(function (bouton) {
        bouton.addEventListener('click', function () {
            var sujet = bouton.getAttribute('data-aller-form');

            if (champSujet && sujet) {
                champSujet.value = sujet;
            }

            if (ancre) {
                var cible = ancre.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: cible, behavior: 'smooth' });
            }
        });
    });


    /* --------------------------------------------------------
       2. Envoi du formulaire (démonstration)
       -------------------------------------------------------- */
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var message = form.querySelector('.contact-message');
            if (message) {
                message.textContent =
                    'Merci ! Votre message a bien été envoyé. ' +
                    'Nous vous répondrons sous 24 h.';
            }
            form.reset();
        });
    }

})();
