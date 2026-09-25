# Libota — site web

## Ouvrir le projet

1. Ouvrir ce dossier dans VS Code.
2. Installer les extensions recommandées (Prettier, Live Server).
3. Clic droit sur `index.html` → **Open with Live Server**.

## Structure

```
libota-site/
├── index.html            Page d'accueil
├── contenu.js            Textes, chiffres, liens (à modifier en priorité)
├── styles.css            Point d'entrée CSS (importe les fichiers de assets/css)
├── pages/                À propos, équipe, projets, presse, contact, mentions légales
└── assets/
    ├── css/
    │   ├── fonts.css             Polices
    │   ├── libota-editorial.css  Couleurs, typographie, composants de base
    │   ├── libota-pages.css      Mise en page des pages secondaires
    │   ├── libota-accueil.css    Page d'accueil
    │   ├── libota-form.css       Formulaire de contact
    │   └── libota-anim.css       Animations
    ├── js/
    │   ├── site.js               Navigation, menu mobile
    │   └── animations.js         Effets au défilement, compteurs
    └── media/            Favicon et médias
```

## Conventions

- Indentation : tabulations (`.editorconfig`).
- Formatage automatique à l'enregistrement (Prettier).
