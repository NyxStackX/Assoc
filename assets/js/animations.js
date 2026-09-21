/* ============================================================
   LIBOTA - animations au défilement
   À charger après site.js et après le script de la page.
   ============================================================ */
(function () {
  var doux = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* --- encadrer les images pour le zoom ------------------- */
  document.querySelectorAll('.une-photo img,.galerie img,.pole img,.carte-actu img,.membre img,.grande-actu img,.film>img,.projet-photo img').forEach(function (img) {
    if (img.parentNode.classList.contains('cadre')) return;
    var c = document.createElement('span');
    c.className = 'cadre';
    img.parentNode.insertBefore(c, img);
    c.appendChild(img);
  });

  var barres = [].slice.call(document.querySelectorAll('.piste span'));

  if (doux) return;

  /* --- titre de la une : apparition mot à mot ------------- */
  var titre = document.querySelector('.une h1');
  if (titre) {
    var decoupe = function (n) {
      var out = [];
      [].slice.call(n.childNodes).forEach(function (c) {
        if (c.nodeType === 3) {
          c.textContent.split(/(\s+)/).forEach(function (w) {
            if (!w.trim()) { if (w) out.push(document.createTextNode(w)); return }
            var s = document.createElement('span');
            s.className = 'm';
            s.textContent = w;
            out.push(s);
          });
        } else {
          var el = c.cloneNode(false);
          decoupe(c).forEach(function (x) { el.appendChild(x) });
          out.push(el);
        }
      });
      return out;
    };
    var frag = document.createDocumentFragment();
    decoupe(titre).forEach(function (n) { frag.appendChild(n) });
    titre.textContent = '';
    titre.appendChild(frag);
    titre.querySelectorAll('.m').forEach(function (s, i) { s.style.animationDelay = (90 + i * 75) + 'ms' });
  }

  /* --- éléments à faire apparaître ------------------------ */
  var cibles = '.chiffres>div,.tete,.mission>*,.impact>div,.domaine,.ligne-rep,.etape,.actu,.temoin,.partenaires,.faq details,.appel .enveloppe>*,.contact>*,.duo>*,.trio>*,.galerie .cadre,.pole,.membre,.carte-actu,.grande-actu>*,.bloc,.aside .encadre,.revue a,.bloc-legal,.rejoindre,.film .sur>*,.bandeau figcaption';
  var aVoir = [].slice.call(document.querySelectorAll(cibles));
  aVoir.forEach(function (el) { el.classList.add('rv') });

  /* --- compteurs ------------------------------------------ */
  var compteurs = [].slice.call(document.querySelectorAll('.chiffres .v,.impact .c,.transp .gros,.encadre .annee'));
  compteurs.forEach(function (el) { el.dataset.fin = el.textContent.trim() });

  function compte(el) {
    var brut = el.dataset.fin || el.textContent.trim();
    var m = brut.match(/^([^\d]*)([\d\s\u00a0]+)(.*)$/);
    if (!m) return;
    var avant = m[1], cible = parseInt(m[2].replace(/[\s\u00a0]/g, ''), 10), apres = m[3];
    if (!isFinite(cible) || cible === 0) return;
    var espace = /[\s\u00a0]/.test(m[2]);
    function fmt(n) { return espace ? n.toLocaleString('fr-FR').replace(/[\u202f\u00a0]/g, ' ') : String(n) }
    var t0 = null, duree = 1100;
    function pas(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / duree, 1);
      el.textContent = avant + fmt(Math.round(cible * (1 - Math.pow(1 - p, 3)))) + apres;
      if (p < 1) requestAnimationFrame(pas); else el.textContent = brut;
    }
    requestAnimationFrame(pas);
  }

  /* --- barres de répartition ------------------------------ */
  barres.forEach(function (s) { s.dataset.w = s.style.width; s.style.width = '0' });

  /* --- déclenchement au défilement (sans IntersectionObserver,
         qui reste inactif dans certains aperçus) ----------- */
  function visible(el, marge) {
    var r = el.getBoundingClientRect();
    if (r.height === 0 && r.width === 0) return false;
    return r.top < (window.innerHeight || 0) - (marge || 0) && r.bottom > 0;
  }

  function verifie() {
    try { verifieVraiment() } catch (e) { tout() }
  }

  function tout() {
    aVoir.forEach(function (el) { el.classList.add('vu') });
    aVoir = [];
    barres.forEach(function (s) { s.style.width = s.dataset.w });
    barres = [];
  }

  function verifieVraiment() {
    aVoir = aVoir.filter(function (el) {
      if (!visible(el, 40)) return true;
      var i = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.transitionDelay = Math.min(i, 6) * 70 + 'ms';
      el.classList.add('vu');
      return false;
    });
    compteurs = compteurs.filter(function (el) {
      if (!visible(el, 80)) return true;
      compte(el);
      return false;
    });
    barres = barres.filter(function (s) {
      if (!visible(s, 60)) return true;
      s.style.width = s.dataset.w;
      return false;
    });
    if (ent) ent.classList.toggle('compacte', window.scrollY > 40);
    bouge();
  }

  var ent = document.querySelector('.entete');

  /* --- bande d'image : léger décalage au défilement ------- */
  var bandeaux = [].slice.call(document.querySelectorAll('.bandeau img'));
  function bouge() {
    bandeaux.forEach(function (img) {
      var r = img.parentNode.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      var p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      img.style.transform = 'translate3d(0,' + (-p * 26).toFixed(1) + 'px,0) scale(1.08)';
    });
  }

  var attend = false;
  function auDefilement() {
    if (attend) return;
    attend = true;
    requestAnimationFrame(function () {
      try { verifie() } finally { attend = false }
    });
    setTimeout(function () { attend = false }, 120);
  }
  window.addEventListener('scroll', auDefilement, { passive: true });
  window.addEventListener('resize', auDefilement);
  window.addEventListener('load', verifie);
  verifie();
  setTimeout(verifie, 400);

  /* --- filets de sécurité ---------------------------------
     1. un passage régulier, au cas où un événement manque ;
     2. au bout de 8 s, on affiche tout ce qui reste caché. */
  var minuterie = setInterval(function () {
    verifie();
    if (!aVoir.length && !compteurs.length && !barres.length) clearInterval(minuterie);
  }, 600);
  document.addEventListener('visibilitychange', verifie);
  window.addEventListener('pageshow', verifie);
  /* si des éléments visibles à l'écran sont encore cachés au bout de
     4 s, c'est que le défilement n'est pas détecté : on affiche tout. */
  setTimeout(function () {
    if (aVoir.some(function (el) { return visible(el, 0) })) tout();
  }, 4000);
})();
