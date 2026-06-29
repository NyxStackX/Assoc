/* ============================================================
   LIBOTA — home.js
   Responsabilité : interactions propres à la page d'accueil.
     - parallaxe légère du hero
     - apparition de la ligne de frise
     - carrousel de témoignages
     - formulaire newsletter (démo)
   ============================================================ */

(function () {
    'use strict';

    /* --------------------------------------------------------
       1. Parallaxe légère sur les halos du hero
       -------------------------------------------------------- */
    var halos = document.querySelectorAll('.hero-halo');

    window.addEventListener('scroll', function () {
        var y = window.scrollY;
        halos.forEach(function (halo, i) {
            var vitesse = i === 0 ? 0.12 : -0.08;
            halo.style.transform = 'translateY(' + (y * vitesse) + 'px)';
        });
    }, { passive: true });


    /* --------------------------------------------------------
       2. Apparition de la ligne de frise (effet « se dessine »)
       -------------------------------------------------------- */
    var ligne = document.querySelector('.frise-ligne');

    if (ligne) {
        var obs = new IntersectionObserver(function (entrees) {
            entrees.forEach(function (entree) {
                if (entree.isIntersecting) {
                    entree.target.classList.add('visible');
                    obs.unobserve(entree.target);
                }
            });
        }, { threshold: 0.2 });

        obs.observe(ligne);
    }


    /* --------------------------------------------------------
       3. Carrousel de témoignages
       -------------------------------------------------------- */
    var temoignages = document.querySelectorAll('.temoignage');
    var puces       = document.querySelectorAll('.puce');
    var index       = 0;
    var minuteur    = null;

    function afficher(n) {
        index = (n + temoignages.length) % temoignages.length;

        temoignages.forEach(function (t, i) {
            t.classList.toggle('actif', i === index);
        });
        puces.forEach(function (p, i) {
            p.classList.toggle('actif', i === index);
        });
    }

    function lancerDefilement() {
        clearInterval(minuteur);
        minuteur = setInterval(function () {
            afficher(index + 1);
        }, 6000);
    }

    puces.forEach(function (puce) {
        puce.addEventListener('click', function () {
            afficher(parseInt(puce.getAttribute('data-puce'), 10));
            lancerDefilement();
        });
    });

    if (temoignages.length) {
        afficher(0);
        lancerDefilement();
    }


    /* --------------------------------------------------------
       4. Formulaire newsletter (démonstration)
       -------------------------------------------------------- */
    var form = document.querySelector('.newsletter-form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var message = form.querySelector('.newsletter-message');
            if (message) {
                message.textContent = 'Merci ! Votre inscription est confirmée.';
            }
            form.reset();
        });
    }


    /* --------------------------------------------------------
       5. Révélations en cascade
          Les .reveal voisines dans une même rangée s'animent
          l'une après l'autre pour un effet plus vivant.
       -------------------------------------------------------- */
    document.querySelectorAll('.grille-3, .impact-grille, .galerie').forEach(function (groupe) {
        var enfants = groupe.querySelectorAll('.reveal');
        enfants.forEach(function (el, i) {
            el.style.transitionDelay = (i * 0.09) + 's';
        });
    });


    /* --------------------------------------------------------
       6. Révélation par balayage + soulignement des titres
       -------------------------------------------------------- */
    var obsClip = new IntersectionObserver(function (entrees) {
        entrees.forEach(function (entree) {
            if (entree.isIntersecting) {
                entree.target.classList.add('visible');
                obsClip.unobserve(entree.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.clip-reveal, .titre-anim').forEach(function (el) {
        obsClip.observe(el);
    });

    // Soulignement animé appliqué à tous les titres de section
    document.querySelectorAll('.titre-section').forEach(function (titre) {
        titre.classList.add('titre-anim');
        obsClip.observe(titre);
    });


    /* --------------------------------------------------------
       7. Parallaxe au mouvement de la souris (hero)
       -------------------------------------------------------- */
    var hero  = document.querySelector('.hero');
    var halos = document.querySelectorAll('.hero-halo');

    if (hero) {
        hero.addEventListener('mousemove', function (e) {
            var dx = (e.clientX / window.innerWidth - 0.5);
            var dy = (e.clientY / window.innerHeight - 0.5);

            halos.forEach(function (halo, i) {
                var amp = i === 0 ? 40 : -28;
                halo.style.transform =
                    'translate(' + (dx * amp) + 'px,' + (dy * amp) + 'px)';
            });
        });

        hero.addEventListener('mouseleave', function () {
            halos.forEach(function (halo) {
                halo.style.transform = 'translate(0,0)';
            });
        });
    }


    /* --------------------------------------------------------
       8. Boutons magnétiques
       -------------------------------------------------------- */
    document.querySelectorAll('[data-magnetic]').forEach(function (bouton) {
        bouton.addEventListener('mousemove', function (e) {
            var r = bouton.getBoundingClientRect();
            var x = e.clientX - r.left - r.width / 2;
            var y = e.clientY - r.top - r.height / 2;
            bouton.style.transform = 'translate(' + (x * 0.3) + 'px,' + (y * 0.4) + 'px)';
        });

        bouton.addEventListener('mouseleave', function () {
            bouton.style.transform = 'translate(0,0)';
        });
    });


    /* --------------------------------------------------------
       9. Léger relief 3D des cartes au survol
       -------------------------------------------------------- */
    document.querySelectorAll('.carte, .carte-actu').forEach(function (carte) {
        carte.addEventListener('mousemove', function (e) {
            var r = carte.getBoundingClientRect();
            var px = (e.clientX - r.left) / r.width - 0.5;
            var py = (e.clientY - r.top) / r.height - 0.5;
            carte.style.transform =
                'translateY(-8px) rotateX(' + (-py * 5) + 'deg) rotateY(' + (px * 5) + 'deg)';
        });

        carte.addEventListener('mouseleave', function () {
            carte.style.transform = '';
        });
    });


    /* --------------------------------------------------------
       10. Barres de répartition (« Où va votre don ? »)
           Chaque jauge se remplit jusqu'à sa valeur data-pct
           lorsqu'elle entre dans le champ de vision.
       -------------------------------------------------------- */
    var obsJauge = new IntersectionObserver(function (entrees) {
        entrees.forEach(function (entree) {
            if (entree.isIntersecting) {
                var jauge = entree.target.querySelector('.repartition-jauge');
                if (jauge) {
                    jauge.style.width = jauge.getAttribute('data-pct') + '%';
                }
                obsJauge.unobserve(entree.target);
            }
        });
    }, { threshold: 0.4 });

    document.querySelectorAll('.repartition-ligne').forEach(function (ligne) {
        obsJauge.observe(ligne);
    });


    /* --------------------------------------------------------
       11. Accordéon des questions fréquentes
       -------------------------------------------------------- */
    document.querySelectorAll('.faq-question').forEach(function (question) {
        question.addEventListener('click', function () {
            var item    = question.parentElement;
            var reponse = item.querySelector('.faq-reponse');
            var ouvert  = item.classList.contains('ouvert');

            // Ferme les autres pour ne garder qu'une réponse ouverte
            document.querySelectorAll('.faq-item.ouvert').forEach(function (autre) {
                if (autre !== item) {
                    autre.classList.remove('ouvert');
                    autre.querySelector('.faq-reponse').style.maxHeight = null;
                }
            });

            if (ouvert) {
                item.classList.remove('ouvert');
                reponse.style.maxHeight = null;
            } else {
                item.classList.add('ouvert');
                reponse.style.maxHeight = reponse.scrollHeight + 'px';
            }
        });
    });

})();
