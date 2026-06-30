/* ============================================================
   LIBOTA - projets.js
   Responsabilité : fenêtre de détail d'un pôle d'action.
   Au clic sur une carte « .pole », on remplit puis on ouvre
   la fenêtre avec les données du pôle correspondant.
   ============================================================ */

(function () {
    'use strict';

    /* --------------------------------------------------------
       1. Données des six pôles
       -------------------------------------------------------- */
    var POLES = {

        education: {
            titre: 'Éducation',
            image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop',
            texte: 'Notre pôle historique : construction et équipement d\u2019écoles, fourniture de manuels et de matériel pédagogique, et soutien scolaire personnalisé pour les enfants en difficulté.',
            stats: [['850', 'Écoles équipées'], ['45K', 'Enfants scolarisés'], ['24', 'Pays']],
            projets: ['Équipement de 12 écoles rurales au Sénégal', 'Bibliothèques mobiles dans 3 régions', 'Programme de soutien scolaire après l\u2019école']
        },

        sante: {
            titre: 'Santé & bien-être',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
            texte: 'Parce qu\u2019un enfant en bonne santé apprend mieux : suivi médical scolaire, campagnes de vaccination et programmes nutritionnels dans nos centres.',
            stats: [['120', 'Centres de santé'], ['38K', 'Suivis médicaux'], ['9', 'Pays']],
            projets: ['Cantines scolaires dans 40 écoles', 'Campagnes de vaccination annuelles', 'Distribution de kits d\u2019hygiène']
        },

        numerique: {
            titre: 'Numérique éducatif',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
            texte: 'Réduire la fracture numérique : distribution de tablettes, création de salles informatiques et plateformes d\u2019apprentissage à distance pour les zones isolées.',
            stats: [['5K', 'Tablettes distribuées'], ['60', 'Salles informatiques'], ['12', 'Écoles connectées']],
            projets: ['Programme ÉducaNum 2026', 'Classes virtuelles en zone rurale', 'Formation au numérique des élèves']
        },

        formation: {
            titre: 'Formation des enseignants',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
            texte: 'Investir dans ceux qui transmettent : formation continue des enseignants locaux aux méthodes pédagogiques modernes, inclusives et bienveillantes.',
            stats: [['2 400', 'Enseignants formés'], ['18', 'Centres de formation'], ['15', 'Pays']],
            projets: ['Certification pédagogique reconnue', 'Échanges entre enseignants', 'Modules de pédagogie inclusive']
        },

        bourses: {
            titre: 'Bourses scolaires',
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
            texte: 'Lever l\u2019obstacle financier : financement de la scolarité, des fournitures et du transport pour les familles les plus vulnérables, jusqu\u2019au diplôme.',
            stats: [['7 800', 'Bourses actives'], ['2 500', 'Diplômés 2025'], ['92%', 'Taux de réussite']],
            projets: ['Bourses d\u2019excellence', 'Aide au transport scolaire', 'Accompagnement vers l\u2019enseignement supérieur']
        },

        infrastructure: {
            titre: 'Infrastructures',
            image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1200&auto=format&fit=crop',
            texte: 'Des écoles sûres et durables : construction de salles de classe, accès à l\u2019eau potable et installations sanitaires adaptées.',
            stats: [['180', 'Classes construites'], ['95', 'Points d\u2019eau'], ['11', 'Pays']],
            projets: ['Nouvelle école à 6 classes au Mali', 'Réseaux d\u2019eau potable scolaires', 'Sanitaires séparés filles/garçons']
        }

    };


    /* --------------------------------------------------------
       2. Références
       -------------------------------------------------------- */
    var overlay = document.querySelector('.pole-overlay');
    var modal   = document.querySelector('.pole-modal');

    if (!overlay) {
        return;
    }


    /* --------------------------------------------------------
       3. Remplissage et ouverture
       -------------------------------------------------------- */
    function ouvrir(cle) {
        var p = POLES[cle];
        if (!p) {
            return;
        }

        overlay.querySelector('[data-modal-image]').src = p.image;
        overlay.querySelector('[data-modal-titre]').textContent = p.titre;
        overlay.querySelector('[data-modal-texte]').textContent = p.texte;

        overlay.querySelector('[data-modal-stats]').innerHTML =
            p.stats.map(function (s) {
                return '<div class="pole-stat">' +
                           '<div class="pole-stat-num">' + s[0] + '</div>' +
                           '<div class="pole-stat-label">' + s[1] + '</div>' +
                       '</div>';
            }).join('');

        overlay.querySelector('[data-modal-projets]').innerHTML =
            '<p class="titre">Projets en cours</p>' +
            p.projets.map(function (texte) {
                return '<div class="pole-projet">' +
                           '<span class="puce">▸</span>' +
                           '<span>' + texte + '</span>' +
                       '</div>';
            }).join('');

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


    /* --------------------------------------------------------
       4. Branchements
       -------------------------------------------------------- */
    document.querySelectorAll('.pole').forEach(function (carte) {
        carte.addEventListener('click', function () {
            ouvrir(carte.getAttribute('data-pole'));
        });
    });

    overlay.querySelector('[data-modal-fermer]').addEventListener('click', fermer);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            fermer();
        }
    });

    // Bouton « soutenir ce pôle » -> ferme puis ouvre le don
    var boutonDon = overlay.querySelector('[data-don-pole]');
    if (boutonDon) {
        boutonDon.addEventListener('click', function () {
            fermer();
            setTimeout(function () {
                if (window.ouvrirDon) {
                    window.ouvrirDon();
                }
            }, 250);
        });
    }

})();
