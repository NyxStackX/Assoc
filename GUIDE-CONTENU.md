# Modifier le site Libota sans coder

Tout le texte du site se trouve dans **un seul fichier : `contenu.js`**.
Vous pouvez l'ouvrir avec n'importe quel éditeur de texte (Bloc-notes,
TextEdit, VS Code) ou directement sur GitHub.

Les pages HTML n'ont **pas besoin d'être touchées** pour changer un texte,
une photo, un chiffre, un lien de menu ou une question de la FAQ.

---

## La règle d'or

Ne modifiez **que ce qui est entre guillemets** `" ... "`.

```js
titre: "Notre équipe",
        ^^^^^^^^^^^^^  ← ceci, vous pouvez le changer
^^^^^                  ← ceci, ne le changez pas
```

Ne supprimez jamais :

- les virgules `,` en fin de ligne
- les crochets `[` `]` et les accolades `{` `}`
- les mots avant les deux-points (`titre:`, `texte:`, `url:`…)

---

## Exemples concrets

**Changer le bandeau du haut**

```js
annonce: "Campagne 2026 · Objectif 100 000 enfants scolarisés d'ici 2030",
```

**Changer un chiffre de la page d'accueil**

```js
chiffres: [
  { valeur: "40 K+", label: "Dons récoltés" },
  ...
]
```

**Ajouter une question à la FAQ** - copiez une ligne existante, collez-la
en dessous et changez le texte. Attention à la virgule entre chaque ligne :

```js
{ question: "Votre question ?", reponse: "Votre réponse." },
```

**Supprimer un élément** - effacez la ligne entière, virgule comprise.

**Changer une photo** - remplacez l'adresse entre guillemets :

```js
photo: "https://…/ma-photo.jpg",
```

Pour utiliser une photo de l'association : déposez le fichier dans
`assets/media/`, puis écrivez `photo: "assets/media/ma-photo.jpg"`
(depuis une page dans `pages/`, l'adresse commence par `../`).

**Mettre la vidéo de l'accueil** - trois possibilités, dans la section
`film` de `contenu.js` :

```js
video: "assets/media/film.mp4",   // un fichier déposé dans assets/media/
video: "https://.../film.mp4",   // ou l'adresse d'un fichier .mp4 en ligne
youtube: "dQw4w9WgXcQ",          // ou l'identifiant d'une vidéo YouTube
```

Pour YouTube, l'identifiant est ce qui suit `v=` dans l'adresse de la
vidéo. Remplissez un seul de ces champs. Les vidéos actuellement en place
sont des images de démonstration (Pexels, libres de droits) : remplacez-les
par le film de l'association.

La grande bande après « Notre parcours » (`bandeau`) et la page du pôle
Numérique (`poles`, champ `video`) fonctionnent de la même façon : si le
champ `video` est vide, l'image `image` est affichée à la place.

**Les textes avec `<em>…</em>`** : ce qui est entre `<em>` et `</em>`
s'affiche en italique vert. Vous pouvez déplacer ces balises ou les retirer.

---

## Où trouver quoi dans `contenu.js`

| Section du fichier | Ce qu'elle contrôle |
| --- | --- |
| `annonce`, `menu`, `bouton_entete`, `barre_mobile`, `pied` | Éléments présents sur toutes les pages |
| `hero`, `chiffres`, `mission`, `impact`, `film`, `domaines`, `transparence`, `parcours`, `bandeau`, `actualites`, `temoignages`, `partenaires`, `faq`, `appel_don`, `contact` | Page d'accueil, dans l'ordre d'affichage |
| `apropos` | Page À propos |
| `projets` + `poles` | Page Projets et les six pages de détail |
| `equipe` | Page Équipe |
| `presse` | Page Presse |
| `page_contact` | Page Contact |
| `legal` | Mentions légales, confidentialité, cookies, conditions |

Les six pôles de `poles` alimentent **à la fois** la liste de l'accueil, la
page Projets et la page de détail. La valeur `cle` sert d'adresse
(`pages/projet.html?p=education`) : si vous la changez, changez aussi le
lien correspondant dans `domaines`.

---

## Après modification

1. Enregistrez `contenu.js`.
2. Rechargez la page dans le navigateur (Ctrl+R / Cmd+R).
3. Si la page s'affiche vide : une virgule ou un guillemet a été supprimé.
   Annulez votre modification (Ctrl+Z) et reprenez pas à pas.

---

## Structure des fichiers

```
index.html              page d'accueil
contenu.js              TOUS les textes du site  ← le fichier à modifier
GUIDE-CONTENU.md        ce guide
styles.css              point d'entrée des styles
pages/
  a-propos.html         page À propos
  projets.html          liste des six pôles
  projet.html           page de détail d'un pôle (?p=education, ?p=sante…)
  equipe.html           page Équipe
  presse.html           page Presse
  contact.html          page Contact
  legal.html            pages d'informations (?p=mentions-legales…)
assets/
  css/                  feuilles de style
  js/site.js            en-tête, pied de page, insertion des textes
  js/animations.js      apparitions au défilement, compteurs
  media/                favicon, images et vidéos de l'association
```
