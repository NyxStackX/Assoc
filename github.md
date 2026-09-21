repo: NyxStackX/Assoc
branch: main
site: http://libota.org/

## Last sync
date: 2026-09-21T10:34:00Z
commit: 93d5b46569c4

### Updated in this project
- Refonte éditoriale complète : accueil + 6 pages intérieures (`index.html`, `pages/`)
- Tout le contenu texte extrait dans `contenu.js`, modifiable sans coder (`GUIDE-CONTENU.md`)
- En-tête, pied de page et menu mobile générés par `assets/js/site.js` (une seule source)
- Styles refaits : `assets/css/libota-editorial.css` + `libota-pages.css` (filets 1px, zéro arrondi, pas de halos ni compteurs animés)
- Les 6 pages de pôles du dépôt sont remplacées par une page unique pilotée par les données (`pages/projet.html?p=…`) ; idem pour les 4 pages légales (`pages/legal.html?p=…`)

## Screen map
| Écran du projet | Fichiers du dépôt |
| --- | --- |
| index.html | index.html, assets/css/base.css, assets/css/components.css, assets/css/home.css |
| pages/a-propos.html | pages/a-propos.html, assets/css/apropos.css |
| pages/projets.html | pages/projets.html, assets/css/projets.css |
| pages/projet.html | pages/projets/*.html, assets/css/projet-detail.css |
| pages/equipe.html | pages/equipe.html, assets/css/equipe.css |
| pages/presse.html | pages/presse.html, assets/css/presse.css |
| pages/contact.html | pages/contact.html, assets/css/contact.css, assets/js/contact.js |
| pages/legal.html | pages/mentions-legales.html, confidentialite.html, cookies.html, conditions.html |
