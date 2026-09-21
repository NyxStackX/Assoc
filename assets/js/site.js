/* ============================================================
   LIBOTA - script commun à toutes les pages
   Construit l'en-tête, le pied de page et remplace les textes
   marqués data-t par leur valeur dans contenu.js.
   ============================================================ */
(function () {
  var C = window.CONTENU || {};
  var body = document.body;
  var base = body.getAttribute('data-base') || '';
  var page = body.getAttribute('data-page') || '';

  function g(p) { return String(p).split('.').reduce(function (o, k) { return o ? o[k] : undefined }, C) }
  function e(s) { return String(s == null ? '' : s) }
  function u(url) { return /^(https?:|mailto:|tel:|#)/.test(url || '') ? url : base + (url || '') }

  /* --- en-tête ------------------------------------------ */
  var menu = (g('menu') || []).map(function (m) {
    var courant = m.url && page && m.url.indexOf(page) > -1 ? ' aria-current="page"' : '';
    return '<a href="' + u(m.url) + '"' + courant + '>' + e(m.label) + '</a>';
  }).join('');
  var btn = g('bouton_entete') || {};
  var html = '';
  if (g('annonce')) html += '<div class="annonce">' + e(g('annonce')) + '</div>';
  html += '<header class="entete">' +
    '<a class="marque" href="' + u('index.html') + '">Libota<sup>est. 2000</sup></a>' +
    '<nav class="nav" id="nav">' + menu + '</nav>' +
    '<button class="burger" id="burger" aria-expanded="false">Menu</button>' +
    '<a class="bouton" href="' + u(btn.url) + '">' + e(btn.label) + '</a>' +
    '</header>';
  body.insertAdjacentHTML('afterbegin', html);

  /* --- pied de page ------------------------------------- */
  function liens(arr) {
    return (arr || []).map(function (l) { return '<a href="' + u(l.url) + '">' + e(l.label) + '</a>' }).join('');
  }
  var p = g('pied') || {};
  var pied = '<footer class="pied"><div class="enveloppe pied-grille">' +
    '<div><a class="marque" href="' + u('index.html') + '">Libota<sup>est. 2000</sup></a>' +
    '<p class="intro">' + e(p.intro) + '</p></div>' +
    '<div><h4>' + e(p.colonne_1_titre) + '</h4><nav>' + liens(p.colonne_1) + '</nav></div>' +
    '<div><h4>' + e(p.colonne_2_titre) + '</h4><nav>' + liens(p.colonne_2) + '</nav></div>' +
    '</div><p class="enveloppe bas">' + e(p.copyright) + '</p></footer>';
  var barre = (g('barre_mobile') || []).map(function (b) {
    return '<a href="' + u(b.url) + '">' + e(b.label) + '</a>';
  }).join('');
  body.insertAdjacentHTML('beforeend', pied + '<div class="barre-mobile">' + barre + '</div>');

  /* --- remplacement des textes -------------------------- */
  document.querySelectorAll('[data-t]').forEach(function (el) {
    var v = g(el.dataset.t);
    if (v != null && v !== '') el.innerHTML = v;
  });

  /* --- menu mobile -------------------------------------- */
  var b = document.getElementById('burger'), n = document.getElementById('nav');
  b.addEventListener('click', function () {
    var o = n.classList.toggle('ouvert');
    b.textContent = o ? 'Fermer' : 'Menu';
    b.setAttribute('aria-expanded', o);
  });
  n.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'A') { n.classList.remove('ouvert'); b.textContent = 'Menu' }
  });

  /* --- outils mis à disposition des pages --------------- */
  window.SITE = {
    contenu: C, base: base, get: g, esc: e, url: u,
    set: function (id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html },
    lien: function (id, url) { var el = document.getElementById(id); if (el && url) el.href = u(url) }
  };
})();
