/* ============================================================
   LIBOTA — don.js
   Responsabilité : parcours de don sécurisé en 3 étapes.
     Étape 1 : montant + fréquence (+ message d'impact)
     Étape 2 : coordonnées (reçu fiscal)
     Étape 3 : paiement + confirmation

   La fenêtre est injectée une seule fois puis ouverte par
   tout bouton portant l'attribut « data-don ».

   NOTE SÉCURITÉ (production) :
   ce formulaire est une maquette de démonstration. Pour
   encaisser de vrais dons, il faut rediriger vers une page
   de paiement hébergée (Stripe Checkout, etc.) : les numéros
   de carte ne doivent jamais transiter par ce site. Voir la
   fonction « lancerPaiement() » plus bas.
   ============================================================ */

(function () {
    'use strict';

    /* --------------------------------------------------------
       1. Données : messages d'impact par montant
       -------------------------------------------------------- */
    var IMPACTS = {
        10:  'Des fournitures scolaires pour un élève pendant un trimestre.',
        25:  'Le matériel scolaire complet d\u2019un enfant pour une année entière.',
        50:  'Un mois de repas chauds à la cantine pour cinq enfants.',
        100: 'La formation d\u2019un enseignant local aux méthodes modernes.',
        200: 'L\u2019équipement numérique complet d\u2019une salle de classe.'
    };


    /* --------------------------------------------------------
       2. Injection du markup de la fenêtre
       -------------------------------------------------------- */
    var gabarit =
    '<div class="don-overlay">' +
      '<div class="don-modal">' +

        '<div class="don-entete">' +
          '<div class="don-entete-haut">' +
            '<h2>Faire un don</h2>' +
            '<button class="don-fermer" aria-label="Fermer">' +
              '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
            '</button>' +
          '</div>' +
          '<div class="don-etapes">' +
            '<div class="don-etape-barre active" data-barre="1"></div>' +
            '<div class="don-etape-barre" data-barre="2"></div>' +
            '<div class="don-etape-barre" data-barre="3"></div>' +
          '</div>' +
          '<div class="don-etapes-labels">' +
            '<span class="active" data-label="1">Montant</span>' +
            '<span data-label="2">Coordonnées</span>' +
            '<span data-label="3">Paiement</span>' +
          '</div>' +
        '</div>' +

        '<div class="don-corps">' +

          /* --- Étape 1 --- */
          '<div class="don-panneau" data-panneau="1">' +
            '<div class="don-freq">' +
              '<button class="actif" data-freq="once">Ponctuel</button>' +
              '<button data-freq="monthly">Mensuel</button>' +
            '</div>' +
            '<div class="don-montants">' +
              '<button class="don-montant" data-montant="10">10 €</button>' +
              '<button class="don-montant" data-montant="25">25 €</button>' +
              '<button class="don-montant" data-montant="50">50 €</button>' +
              '<button class="don-montant" data-montant="100">100 €</button>' +
              '<button class="don-montant" data-montant="200">200 €</button>' +
              '<button class="don-montant" data-montant="custom">Autre</button>' +
            '</div>' +
            '<input class="don-champ don-perso" data-perso type="number" min="1" placeholder="Montant personnalisé (€)" />' +
            '<div class="don-impact" data-impact></div>' +
            '<button class="don-suite inactif" data-suite>Continuer</button>' +
          '</div>' +

          /* --- Étape 2 --- */
          '<div class="don-panneau" data-panneau="2" style="display:none">' +
            '<p style="color:#585952;font-size:.92rem;margin-bottom:18px">Vos coordonnées pour votre reçu fiscal.</p>' +
            '<div class="don-grille-2">' +
              '<input class="don-champ" type="text" placeholder="Prénom" />' +
              '<input class="don-champ" type="text" placeholder="Nom" />' +
            '</div>' +
            '<input class="don-champ" type="email" placeholder="Adresse e-mail" style="margin-top:10px" />' +
            '<input class="don-champ" type="tel" placeholder="Téléphone (facultatif)" style="margin-top:10px" />' +
            '<div class="don-actions">' +
              '<button class="don-retour" data-retour>Retour</button>' +
              '<button class="don-suite" data-suite2 style="margin-top:0">Continuer</button>' +
            '</div>' +
          '</div>' +

          /* --- Étape 3 --- */
          '<div class="don-panneau" data-panneau="3" style="display:none">' +
            '<div class="don-securite">' +
              '<span class="don-badge">SSL 256-bit</span>' +
              '<span class="don-badge">PCI DSS</span>' +
              '<span class="don-badge">RGPD</span>' +
            '</div>' +
            '<div class="don-recap">' +
              '<div>' +
                '<div style="font-size:.76rem;color:rgba(244,241,233,.7);letter-spacing:.04em">Votre don</div>' +
                '<div class="don-recap-montant" data-recap>—</div>' +
              '</div>' +
              '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ddb878" stroke-width="1.5"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>' +
            '</div>' +
            '<label style="display:block;font-size:.8rem;color:#585952;margin-bottom:6px;font-weight:600">Numéro de carte</label>' +
            '<input class="don-champ" type="text" placeholder="1234 5678 9012 3456" />' +
            '<div class="don-grille-2" style="margin-top:10px">' +
              '<input class="don-champ" type="text" placeholder="MM / AA" />' +
              '<input class="don-champ" type="text" placeholder="CVC" />' +
            '</div>' +
            '<div class="don-actions">' +
              '<button class="don-retour" data-retour>Retour</button>' +
              '<button class="don-suite shine" data-payer style="margin-top:0">Faire un don de <span data-montant-texte>—</span></button>' +
            '</div>' +
            '<p class="don-note">Paiement 100 % sécurisé. Vos données bancaires ne transitent jamais par nos serveurs.</p>' +
          '</div>' +

        '</div>' +
      '</div>' +
    '</div>' +

    /* --- Écran de confirmation --- */
    '<div class="don-succes">' +
      '<div class="don-succes-carte">' +
        '<div class="don-succes-icone">' +
          '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
        '</div>' +
        '<h3 style="font-family:var(--serif);font-weight:500;font-size:1.7rem;color:#1c2b22;margin-top:22px">Merci pour votre don !</h3>' +
        '<p style="color:#585952;font-size:1rem;line-height:1.6;margin-top:10px">Votre générosité nous aide à poursuivre notre mission. Un reçu vous a été envoyé par e-mail.</p>' +
        '<p style="color:#1c2b22;font-weight:600;margin-top:14px">Montant : <span data-succes-montant>—</span></p>' +
        '<button class="btn btn-vert" data-fermer-succes style="margin-top:26px;padding:13px 32px">Fermer</button>' +
      '</div>' +
    '</div>';

    var hote = document.createElement('div');
    hote.innerHTML = gabarit;
    while (hote.firstChild) {
        document.body.appendChild(hote.firstChild);
    }


    /* --------------------------------------------------------
       3. Références aux éléments
       -------------------------------------------------------- */
    var overlay = document.querySelector('.don-overlay');
    var modal   = document.querySelector('.don-modal');
    var succes  = document.querySelector('.don-succes');
    var perso   = document.querySelector('[data-perso]');
    var impact  = document.querySelector('[data-impact]');
    var boutonSuite1 = document.querySelector('[data-suite]');

    var montant   = null;
    var frequence = 'once';
    var etape     = 1;


    /* --------------------------------------------------------
       4. Mise à jour de l'affichage du montant
       -------------------------------------------------------- */
    function formater(valeur) {
        if (!valeur) {
            return '—';
        }
        return valeur + ' €' + (frequence === 'monthly' ? ' /mois' : '');
    }

    function rafraichirMontant() {
        document.querySelectorAll('[data-recap], [data-montant-texte]')
            .forEach(function (el) {
                el.textContent = formater(montant);
            });

        boutonSuite1.classList.toggle('inactif', !montant);

        if (montant) {
            var message = IMPACTS[montant];
            impact.style.display = 'block';
            impact.innerHTML = '<strong>' + formater(montant) + '</strong> — ' +
                (message || 'Merci, votre générosité a un impact direct sur le terrain.');
        } else {
            impact.style.display = 'none';
        }
    }


    /* --------------------------------------------------------
       5. Navigation entre les étapes
       -------------------------------------------------------- */
    function allerEtape(n) {
        etape = n;

        for (var i = 1; i <= 3; i++) {
            var panneau = document.querySelector('[data-panneau="' + i + '"]');
            var barre   = document.querySelector('[data-barre="' + i + '"]');
            var label   = document.querySelector('[data-label="' + i + '"]');

            if (panneau) {
                if (i === n) {
                    panneau.style.display = 'block';
                    panneau.style.opacity = '0';
                    panneau.style.transform = 'translateX(' + (i > 1 ? 16 : -16) + 'px)';
                    requestAnimationFrame(function (el) {
                        return function () {
                            el.style.opacity = '1';
                            el.style.transform = 'none';
                        };
                    }(panneau));
                } else {
                    panneau.style.display = 'none';
                }
            }

            if (barre) {
                barre.classList.toggle('active', i <= n);
            }
            if (label) {
                label.classList.toggle('active', i <= n);
            }
        }
    }


    /* --------------------------------------------------------
       6. Ouverture / fermeture
       -------------------------------------------------------- */
    function ouvrir() {
        allerEtape(1);
        overlay.classList.add('affiche');
        requestAnimationFrame(function () {
            overlay.classList.add('visible');
        });
        document.body.style.overflow = 'hidden';
    }

    function fermer() {
        overlay.classList.remove('visible');
        setTimeout(function () {
            overlay.classList.remove('affiche');
        }, 350);
        document.body.style.overflow = '';
    }

    // Exposé pour les boutons « data-don » de toutes les pages
    window.ouvrirDon = ouvrir;

    document.querySelectorAll('[data-don]').forEach(function (bouton) {
        bouton.addEventListener('click', ouvrir);
    });

    overlay.querySelector('.don-fermer').addEventListener('click', fermer);
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            fermer();
        }
    });


    /* --------------------------------------------------------
       7. Choix de la fréquence
       -------------------------------------------------------- */
    document.querySelectorAll('[data-freq]').forEach(function (bouton) {
        bouton.addEventListener('click', function () {
            frequence = bouton.getAttribute('data-freq');
            document.querySelectorAll('[data-freq]').forEach(function (b) {
                b.classList.toggle('actif', b === bouton);
            });
            rafraichirMontant();
        });
    });


    /* --------------------------------------------------------
       8. Choix du montant
       -------------------------------------------------------- */
    document.querySelectorAll('.don-montant').forEach(function (bouton) {
        bouton.addEventListener('click', function () {
            document.querySelectorAll('.don-montant').forEach(function (b) {
                b.classList.remove('actif');
            });
            bouton.classList.add('actif');

            var valeur = bouton.getAttribute('data-montant');

            if (valeur === 'custom') {
                perso.style.display = 'block';
                perso.focus();
                montant = parseInt(perso.value, 10) || null;
            } else {
                perso.style.display = 'none';
                montant = parseInt(valeur, 10);
            }

            rafraichirMontant();
        });
    });

    perso.addEventListener('input', function () {
        montant = parseInt(perso.value, 10) || null;
        rafraichirMontant();
    });


    /* --------------------------------------------------------
       9. Boutons « suivant » / « retour »
       -------------------------------------------------------- */
    boutonSuite1.addEventListener('click', function () {
        if (montant) {
            allerEtape(2);
        }
    });

    document.querySelector('[data-suite2]').addEventListener('click', function () {
        allerEtape(3);
    });

    document.querySelectorAll('[data-retour]').forEach(function (bouton) {
        bouton.addEventListener('click', function () {
            allerEtape(etape - 1);
        });
    });


    /* --------------------------------------------------------
       10. Paiement
       -------------------------------------------------------- */
    function lancerPaiement() {
        // --- EN PRODUCTION ---
        // Remplacer le bloc ci-dessous par une redirection vers
        // une session de paiement Stripe Checkout créée par votre
        // serveur, p. ex. :
        //   window.location = sessionStripe.url;
        // Ainsi aucune donnée bancaire ne transite par ce site.

        fermer();
        document.querySelectorAll('[data-succes-montant]').forEach(function (el) {
            el.textContent = formater(montant);
        });

        setTimeout(function () {
            succes.classList.add('affiche');
            requestAnimationFrame(function () {
                succes.classList.add('visible');
            });
            document.body.style.overflow = 'hidden';
        }, 400);
    }

    document.querySelector('[data-payer]').addEventListener('click', function () {
        if (!montant) {
            allerEtape(1);
            return;
        }
        lancerPaiement();
    });

    document.querySelector('[data-fermer-succes]').addEventListener('click', function () {
        succes.classList.remove('visible');
        setTimeout(function () {
            succes.classList.remove('affiche');
        }, 350);
        document.body.style.overflow = '';
    });

})();
