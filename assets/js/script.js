const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// ==========================================
// COOKIE CONSENT MANAGEMENT
// ==========================================

const cookieBanner = document.getElementById("cookieBanner");
const cookieModal = document.getElementById("cookieModal");
const cookieModalOverlay = document.getElementById("cookieModalOverlay");
const acceptAllBtn = document.getElementById("acceptAllCookies");
const rejectAllBtn = document.getElementById("rejectAllCookies");
const customizeBtn = document.getElementById("customizeCookies");
const closeModalBtn = document.getElementById("closeCookieModal");
const savePreferencesBtn = document.getElementById("saveCookiePreferences");

// Cookie preferences
let cookiePreferences = {
  necessary: true, // Always true
  analytics: false,
  marketing: false
};

// Check if user has already made a choice
function checkCookieConsent() {
  const stored = localStorage.getItem("cookieConsent");
  if (stored) {
    cookiePreferences = JSON.parse(stored);
    return true;
  }
  return false;
}

// Show cookie banner if no consent yet
function initCookieBanner() {
  if (!checkCookieConsent() && cookieBanner) {
    setTimeout(() => {
      cookieBanner.classList.add("active");
    }, 1000);
  }
}

// Hide banner
function hideCookieBanner() {
  if (cookieBanner) {
    cookieBanner.classList.remove("active");
  }
}

// Open modal
function openCookieModal() {
  if (cookieModalOverlay && cookieModal) {
    // Update toggles based on current preferences
    document.getElementById("toggleAnalytics").checked = cookiePreferences.analytics;
    document.getElementById("toggleMarketing").checked = cookiePreferences.marketing;
    
    cookieModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Close modal
function closeCookieModal() {
  if (cookieModalOverlay) {
    cookieModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Save all cookies accepted
function acceptAllCookies() {
  cookiePreferences = {
    necessary: true,
    analytics: true,
    marketing: true
  };
  saveCookiePreferences();
}

// Save all cookies rejected (only necessary)
function rejectAllCookies() {
  cookiePreferences = {
    necessary: true,
    analytics: false,
    marketing: false
  };
  saveCookiePreferences();
}

// Save custom preferences
function saveCustomPreferences() {
  cookiePreferences.analytics = document.getElementById("toggleAnalytics").checked;
  cookiePreferences.marketing = document.getElementById("toggleMarketing").checked;
  saveCookiePreferences();
  closeCookieModal();
}

// Save to localStorage and hide banner
function saveCookiePreferences() {
  localStorage.setItem("cookieConsent", JSON.stringify(cookiePreferences));
  localStorage.setItem("cookieConsentDate", new Date().toISOString());
  hideCookieBanner();
  
  // Apply cookie settings
  applyCookieSettings();
}

// Apply settings based on preferences
function applyCookieSettings() {
  // Analytics cookies
  if (cookiePreferences.analytics) {
    enableAnalyticsCookies();
  } else {
    disableAnalyticsCookies();
  }
  
  // Marketing cookies
  if (cookiePreferences.marketing) {
    enableMarketingCookies();
  } else {
    disableMarketingCookies();
  }
}

// Enable analytics (placeholder for actual implementation)
function enableAnalyticsCookies() {
  console.log("Analytics cookies enabled");
  // Example: gtag('consent', 'update', {'analytics_storage': 'granted'});
}

// Disable analytics
function disableAnalyticsCookies() {
  console.log("Analytics cookies disabled");
  // Example: gtag('consent', 'update', {'analytics_storage': 'denied'});
}

// Enable marketing (placeholder for actual implementation)
function enableMarketingCookies() {
  console.log("Marketing cookies enabled");
  // Example: gtag('consent', 'update', {'ad_storage': 'granted'});
}

// Disable marketing
function disableMarketingCookies() {
  console.log("Marketing cookies disabled");
  // Example: gtag('consent', 'update', {'ad_storage': 'denied'});
}

// Event listeners
if (acceptAllBtn) {
  acceptAllBtn.addEventListener("click", acceptAllCookies);
}

if (rejectAllBtn) {
  rejectAllBtn.addEventListener("click", rejectAllCookies);
}

if (customizeBtn) {
  customizeBtn.addEventListener("click", openCookieModal);
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeCookieModal);
}

if (savePreferencesBtn) {
  savePreferencesBtn.addEventListener("click", saveCustomPreferences);
}

// Close modal when clicking overlay
if (cookieModalOverlay) {
  cookieModalOverlay.addEventListener("click", (e) => {
    if (e.target === cookieModalOverlay) {
      closeCookieModal();
    }
  });
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && cookieModalOverlay && cookieModalOverlay.classList.contains("active")) {
    closeCookieModal();
  }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  const header = document.getElementById("mainHeader");
  
  if (header) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  // ============================================
  // SCROLL ANIMATIONS (Intersection Observer)
  // ============================================
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  
  revealElements.forEach(el => revealObserver.observe(el));

  // ============================================
  // COUNTER ANIMATION
  // ============================================
  const statNumbers = document.querySelectorAll(".stat-number");
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute("data-target"));
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  statNumbers.forEach(num => counterObserver.observe(num));
  
  function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);
      
      element.textContent = current.toLocaleString();
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString();
      }
    }
    
    requestAnimationFrame(updateCounter);
  }

  // ============================================
  // HERO PARALLAX EFFECT
  // ============================================
  const heroVideo = document.querySelector(".hero-video");
  
  if (heroVideo) {
    window.addEventListener("scroll", function() {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.3;
      heroVideo.style.transform = `translateY(${rate}px)`;
    }, { passive: true });
  }

  // ============================================
  // COOKIE BANNER
  // ============================================
  initCookieBanner();
  if (checkCookieConsent()) {
    applyCookieSettings();
  }

  // ============================================
  // MOBILE MENU
  // ============================================
  initMobileMenu();
});

// ==========================================
// END COOKIE CONSENT MANAGEMENT
// ==========================================

// ============================================
// HAMBURGER MENU - VERSION QUI MARCHE
// ============================================

function initMobileMenu() {
  console.log("Initializing mobile menu...");
  
  // Récupérer les éléments comme dans votre exemple
  var menuToggle = document.getElementById("menuToggle");
  var mainNav = document.getElementById("mainNav");
  
  // Vérifier que les éléments existent
  if (!menuToggle || !mainNav) {
    console.error("Menu elements not found!");
    return;
  }
  
  console.log("Menu elements found, setting up event listeners...");
  
  // Toggle menu on button click - EXACTEMENT comme votre exemple
  menuToggle.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Menu toggle clicked");
    
    // Toggle la classe active
    mainNav.classList.toggle("active");
    menuToggle.classList.toggle("active");
    
    // Gérer le scroll du body
    if (mainNav.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
  
  // Fermer le menu quand on clique sur un lien - EXACTEMENT comme votre exemple
  var navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      console.log("Nav link clicked:", this.getAttribute("href"));
      
      // Laisser la navigation se faire normalement
      // Fermer le menu après un court délai pour permettre la navigation
      setTimeout(function() {
        mainNav.classList.remove("active");
        menuToggle.classList.remove("active");
        document.body.style.overflow = "";
      }, 100);
    });
  });
  
  // Fermer le menu quand on clique en dehors - EXACTEMENT comme votre exemple
  document.addEventListener("click", function(e) {
    var clickedInsideNav = mainNav.contains(e.target);
    var clickedMenuToggle = menuToggle.contains(e.target);
    
    if (!clickedInsideNav && !clickedMenuToggle && mainNav.classList.contains("active")) {
      console.log("Clicked outside menu, closing...");
      mainNav.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
  
  // Touche Echap pour fermer
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && mainNav.classList.contains("active")) {
      mainNav.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
  
  console.log("Mobile menu initialized successfully!");
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formMessage.textContent =
      "Merci pour votre message. Notre équipe vous répondra rapidement.";
    contactForm.reset();
  });
}

// ==========================================
// TESTIMONIALS CAROUSEL
// ==========================================

const testimonialSlides = document.querySelectorAll(".testimonial-slide");
const prevArrow = document.querySelector(".testimonial-arrow.prev");
const nextArrow = document.querySelector(".testimonial-arrow.next");
const dots = document.querySelectorAll(".t-dot");

let currentSlide = 0;
let autoPlayInterval;

// Show specific slide
function showSlide(index) {
  // Handle index bounds
  if (index >= testimonialSlides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = testimonialSlides.length - 1;
  } else {
    currentSlide = index;
  }

  // Hide all slides
  testimonialSlides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Show current slide
  testimonialSlides[currentSlide].classList.add("active");

  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

// Next slide
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Previous slide
function prevSlide() {
  showSlide(currentSlide - 1);
}

// Start auto-play
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Stop auto-play
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Event listeners for arrows
if (prevArrow && nextArrow) {
  prevArrow.addEventListener("click", () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  nextArrow.addEventListener("click", () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
  });
}

// Event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    stopAutoPlay();
    startAutoPlay();
  });
});

// Pause auto-play on hover
const testimonialsSection = document.querySelector(".testimonials-section");
if (testimonialsSection) {
  testimonialsSection.addEventListener("mouseenter", stopAutoPlay);
  testimonialsSection.addEventListener("mouseleave", startAutoPlay);
}

// Initialize carousel
if (testimonialSlides.length > 0) {
  showSlide(0);
  startAutoPlay();
}

// ==========================================
// END TESTIMONIALS CAROUSEL
// ==========================================

// ==========================================
// DONATION MODAL - SYSTÈME DE PAIEMENT SÉCURISÉ
// ==========================================

// Variables pour la modale de donation
let selectedAmount = null;
let isCustomAmount = false;
let stripe = null;
let cardElement = null;
let applePayAvailable = false;

// Configuration Stripe (clé publique de test - remplacer par la vraie clé en production)
const STRIPE_PUBLIC_KEY = 'pk_test_51O...'; // Remplacer par votre clé Stripe

// Initialiser Stripe
function initStripe() {
  if (typeof Stripe === 'undefined') {
    console.error('Stripe.js non chargé');
    return;
  }
  
  try {
    stripe = Stripe(STRIPE_PUBLIC_KEY);
    const elements = stripe.elements();
    
    // Créer l'élément carte
    cardElement = elements.create('card', {
      style: {
        base: {
          fontSize: '16px',
          color: '#1c1c1c',
          fontFamily: '"Questrial", Arial, sans-serif',
          '::placeholder': {
            color: '#6b7280',
          },
        },
        invalid: {
          color: '#dc2626',
        },
      },
    });
    
    // Monter l'élément
    const cardElementContainer = document.getElementById('cardElement');
    if (cardElementContainer) {
      cardElement.mount('#cardElement');
      
      // Gérer les erreurs
      cardElement.on('change', function(event) {
        const errorElement = document.getElementById('cardErrors');
        if (event.error) {
          errorElement.textContent = event.error.message;
        } else {
          errorElement.textContent = '';
        }
      });
    }
    
    // Vérifier Apple Pay
    checkApplePay();
    
    console.log('Stripe initialisé avec succès');
  } catch (error) {
    console.error('Erreur initialisation Stripe:', error);
  }
}

// Vérifier si Apple Pay est disponible
function checkApplePay() {
  if (stripe && stripe.paymentRequest) {
    const paymentRequest = stripe.paymentRequest({
      country: 'FR',
      currency: 'eur',
      total: {
        label: 'Don Libota',
        amount: selectedAmount ? selectedAmount * 100 : 1000, // en centimes
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });
    
    paymentRequest.canMakePayment().then(function(result) {
      if (result && result.applePay) {
        applePayAvailable = true;
        const applePayButton = document.getElementById('applePayButton');
        if (applePayButton) {
          applePayButton.style.display = 'block';
        }
        console.log('Apple Pay disponible');
      }
    });
  }
}

// Payer avec Apple Pay
function payWithApplePay() {
  if (!selectedAmount || selectedAmount <= 0) {
    alert('Veuillez sélectionner un montant');
    return;
  }
  
  const paymentRequest = stripe.paymentRequest({
    country: 'FR',
    currency: 'eur',
    total: {
      label: 'Don Libota',
      amount: selectedAmount * 100,
    },
    requestPayerName: true,
    requestPayerEmail: true,
  });
  
  paymentRequest.on('token', async function(event) {
    try {
      // Envoyer le token au serveur
      const response = await processPayment({
        token: event.token.id,
        amount: selectedAmount,
        email: event.payerEmail,
        name: event.payerName,
        recurring: document.getElementById('recurringDonation').checked,
      });
      
      if (response.success) {
        event.complete('success');
        showDonationSuccess();
      } else {
        event.complete('fail');
        alert('Erreur de paiement: ' + response.error);
      }
    } catch (error) {
      event.complete('fail');
      console.error('Erreur:', error);
    }
  });
  
  paymentRequest.show();
}

// Traiter le paiement (simulation - remplacer par appel serveur réel)
async function processPayment(paymentData) {
  console.log('Traitement paiement:', paymentData);
  
  // SIMULATION - En production, appeler votre backend:
  // const response = await fetch('/api/process-donation', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(paymentData),
  // });
  // return await response.json();
  
  // Simulation réussie
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, paymentId: 'sim_' + Date.now() });
    }, 1500);
  });
}

// Ouvrir la modale de donation
function openDonationModal() {
  console.log("Opening donation modal...");
  const overlay = document.getElementById("donationModalOverlay");
  if (overlay) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    
    // Réinitialiser la sélection
    selectedAmount = null;
    isCustomAmount = false;
    updateAmountDisplay();
    
    // Cacher l'input personnalisé
    const customInput = document.getElementById("customAmountInput");
    if (customInput) {
      customInput.style.display = "none";
    }
    
    // Cacher le montant sélectionné
    const amountDisplay = document.getElementById("selectedAmountDisplay");
    if (amountDisplay) {
      amountDisplay.style.display = "none";
    }
    
    // Désélectionner tous les boutons
    document.querySelectorAll(".amount-btn").forEach(btn => {
      btn.classList.remove("selected");
    });
    
    // Désactiver le bouton submit
    updateSubmitButton();
    
    // Initialiser Stripe si pas déjà fait
    if (!stripe) {
      initStripe();
    }
  }
}

// Fermer la modale de donation
function closeDonationModal() {
  console.log("Closing donation modal...");
  const overlay = document.getElementById("donationModalOverlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Fermer le message de succès
function closeDonationSuccess() {
  console.log("Closing donation success...");
  const overlay = document.getElementById("donationSuccessOverlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Mettre à jour l'affichage du montant
function updateAmountDisplay() {
  const displayElement = document.getElementById("displayAmount");
  const submitAmountElement = document.getElementById("submitAmount");
  
  if (displayElement) {
    if (selectedAmount) {
      displayElement.textContent = selectedAmount + " €";
    } else {
      displayElement.textContent = "--";
    }
  }
  
  if (submitAmountElement) {
    if (selectedAmount) {
      submitAmountElement.textContent = selectedAmount + " €";
    } else {
      submitAmountElement.textContent = "--";
    }
  }
}

// Mettre à jour le bouton submit
function updateSubmitButton() {
  const submitBtn = document.getElementById("donationSubmitBtn");
  if (submitBtn) {
    if (selectedAmount && selectedAmount > 0) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }
}

// Sélectionner un montant
function selectAmount(amount) {
  console.log('Montant sélectionné:', amount);
  
  // Désélectionner tous les boutons
  document.querySelectorAll(".amount-btn").forEach(b => {
    b.classList.remove("selected");
  });
  
  // Sélectionner le bouton cliqué
  const clickedBtn = document.querySelector(`.amount-btn[data-amount="${amount}"]`);
  if (clickedBtn) {
    clickedBtn.classList.add("selected");
  }
  
  const customInput = document.getElementById("customAmountInput");
  const amountDisplay = document.getElementById("selectedAmountDisplay");
  
  if (amount === "custom") {
    // Montant personnalisé
    isCustomAmount = true;
    selectedAmount = null;
    if (customInput) {
      customInput.style.display = "block";
      const input = document.getElementById("customAmount");
      if (input) {
        input.focus();
        input.value = '';
      }
    }
    if (amountDisplay) {
      amountDisplay.style.display = "none";
    }
  } else {
    // Montant prédéfini
    isCustomAmount = false;
    selectedAmount = parseInt(amount);
    if (customInput) {
      customInput.style.display = "none";
    }
    if (amountDisplay) {
      amountDisplay.style.display = "block";
    }
  }
  
  updateAmountDisplay();
  updateSubmitButton();
  
  // Mettre à jour Apple Pay si disponible
  if (applePayAvailable && stripe) {
    checkApplePay();
  }
}

// Gérer l'input personnalisé
function handleCustomAmountInput(value) {
  const parsedValue = parseInt(value);
  const amountDisplay = document.getElementById("selectedAmountDisplay");
  
  if (parsedValue && parsedValue > 0 && parsedValue <= 10000) {
    selectedAmount = parsedValue;
    if (amountDisplay) {
      amountDisplay.style.display = "block";
    }
  } else {
    selectedAmount = null;
    if (amountDisplay) {
      amountDisplay.style.display = "none";
    }
  }
  
  updateAmountDisplay();
  updateSubmitButton();
}

// Gérer la sélection du montant (pour les écouteurs d'événements)
function handleAmountSelection() {
  // Les boutons utilisent maintenant onclick inline pour une meilleure réactivité
  console.log('handleAmountSelection: utilisation des onclick inline');
}

// Gérer la soumission du formulaire avec Stripe
function handleDonationSubmit() {
  const form = document.getElementById("donationForm");
  if (form) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();
      
      if (!selectedAmount || selectedAmount <= 0) {
        alert("Veuillez sélectionner un montant.");
        return;
      }
      
      // Vérifier que Stripe est initialisé
      if (!stripe || !cardElement) {
        alert("Erreur de chargement du système de paiement. Veuillez réessayer.");
        return;
      }
      
      // Récupérer les données
      const firstName = document.getElementById("donorFirstName").value;
      const lastName = document.getElementById("donorLastName").value;
      const email = document.getElementById("donorEmail").value;
      const isRecurring = document.getElementById("recurringDonation").checked;
      
      // Afficher le loading
      const loadingDiv = document.getElementById("paymentLoading");
      const submitBtn = document.getElementById("donationSubmitBtn");
      if (loadingDiv) loadingDiv.style.display = "block";
      if (submitBtn) submitBtn.disabled = true;
      
      try {
        console.log("Création du token Stripe...");
        
        // Créer un token Stripe avec les données de la carte
        const {token, error} = await stripe.createToken(cardElement, {
          name: `${firstName} ${lastName}`,
          email: email,
        });
        
        if (error) {
          // Afficher l'erreur
          const errorElement = document.getElementById("cardErrors");
          if (errorElement) {
            errorElement.textContent = error.message;
          }
          console.error("Erreur Stripe:", error);
          
          // Cacher le loading
          if (loadingDiv) loadingDiv.style.display = "none";
          if (submitBtn) submitBtn.disabled = false;
          return;
        }
        
        console.log("Token créé:", token.id);
        
        // Envoyer le token au serveur pour traitement
        const paymentData = {
          token: token.id,
          amount: selectedAmount,
          email: email,
          name: `${firstName} ${lastName}`,
          recurring: isRecurring,
        };
        
        const response = await processPayment(paymentData);
        
        if (response.success) {
          console.log("Paiement réussi!");
          
          // Fermer la modale de donation
          closeDonationModal();
          
          // Afficher le message de succès
          showDonationSuccess();
          
          // Réinitialiser le formulaire
          form.reset();
          selectedAmount = null;
          isCustomAmount = false;
          
          // Désélectionner les boutons
          document.querySelectorAll(".amount-btn").forEach(btn => {
            btn.classList.remove("selected");
          });
          
          // Cacher l'input personnalisé
          const customInput = document.getElementById("customAmountInput");
          if (customInput) customInput.style.display = "none";
          
          // Cacher le montant sélectionné
          const amountDisplay = document.getElementById("selectedAmountDisplay");
          if (amountDisplay) amountDisplay.style.display = "none";
          
          // Vider l'élément carte
          cardElement.clear();
          
          updateAmountDisplay();
          updateSubmitButton();
        } else {
          throw new Error(response.error || "Erreur de paiement");
        }
        
      } catch (error) {
        console.error("Erreur paiement:", error);
        alert("Erreur lors du paiement: " + error.message);
        
        // Cacher le loading
        if (loadingDiv) loadingDiv.style.display = "none";
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }
}

// Afficher le message de succès
function showDonationSuccess() {
  const successOverlay = document.getElementById("donationSuccessOverlay");
  const successAmount = document.getElementById("successAmount");
  
  if (successOverlay && successAmount) {
    successAmount.textContent = selectedAmount + " €";
    successOverlay.classList.add("active");
  }
}

// Fermer la modale quand on clique sur l'overlay
function handleDonationOverlayClick() {
  const overlay = document.getElementById("donationModalOverlay");
  if (overlay) {
    overlay.addEventListener("click", function(e) {
      if (e.target === overlay) {
        closeDonationModal();
      }
    });
  }
}

// Fermer avec la touche Echap
function handleDonationEscape() {
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      const donationOverlay = document.getElementById("donationModalOverlay");
      const successOverlay = document.getElementById("donationSuccessOverlay");
      
      if (donationOverlay && donationOverlay.classList.contains("active")) {
        closeDonationModal();
      }
      
      if (successOverlay && successOverlay.classList.contains("active")) {
        closeDonationSuccess();
      }
    }
  });
}

// Initialiser la donation
function initDonation() {
  console.log("Initializing donation modal...");
  handleAmountSelection();
  handleCustomAmount();
  handleDonationSubmit();
  handleDonationOverlayClick();
  handleDonationEscape();
  console.log("Donation modal initialized successfully!");
}

// Initialiser au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
  initDonation();
  
  // ============================================
  // AMÉLIORATIONS PROFESSIONNELLES
  // ============================================
  initParallaxEffects();
  initMagneticButtons();
  initTextReveal();
  initStaggerAnimations();
  initFocusEffects();
  initCursorEffects();
  initPageTransition();
  initRippleEffects();
  initSmoothScrollEnhanced();
});

// ============================================
// EFFETS DE PARALLAXE AVANCÉS
// ============================================

function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll('.hero-video, .hero-bg');
  
  if (parallaxElements.length === 0) return;
  
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.3;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick, { passive: true });
}

// ============================================
// BOUTONS MAGNÉTIQUES (EFFET SUBTIL)
// ============================================

function initMagneticButtons() {
  const magneticElements = document.querySelectorAll('.hero-btn, .content-card a, .amount-btn');
  
  if (window.matchMedia('(pointer: coarse)').matches) return;
  
  magneticElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0, 0)';
    });
  });
}

// ============================================
// RÉVÉLATION DE TEXTE PROGRESSIVE
// ============================================

function initTextReveal() {
  const textElements = document.querySelectorAll('.hero-top h2, .stats-title-new, .section-title, .reveal-text');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'textReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  textElements.forEach(el => observer.observe(el));
}

// ============================================
// ANIMATIONS EN CASCADE (STAGGER)
// ============================================

function initStaggerAnimations() {
  const staggerContainers = document.querySelectorAll('.stats-grid-new, .partners-grid, .content-grid');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  staggerContainers.forEach(container => observer.observe(container));
}

// ============================================
// EFFETS DE FOCUS AMÉLIORÉS
// ============================================

function initFocusEffects() {
  const focusableElements = document.querySelectorAll('a, button, input, textarea, select, .content-card');
  
  focusableElements.forEach(element => {
    element.addEventListener('focus', (e) => {
      e.target.classList.add('focus-active');
    });
    
    element.addEventListener('blur', (e) => {
      e.target.classList.remove('focus-active');
    });
  });
}

// ============================================
// EFFETS DE CURSEUR PERSONNALISÉS
// ============================================

function initCursorEffects() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.innerHTML = `
    <div class="cursor-dot"></div>
    <div class="cursor-circle"></div>
  `;
  document.body.appendChild(cursor);
  
  const cursorDot = cursor.querySelector('.cursor-dot');
  const cursorCircle = cursor.querySelector('.cursor-circle');
  
  let mouseX = 0, mouseY = 0;
  let circleX = 0, circleY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });
  
  function animateCursor() {
    circleX += (mouseX - circleX) * 0.15;
    circleY += (mouseY - circleY) * 0.15;
    
    cursorCircle.style.left = circleX + 'px';
    cursorCircle.style.top = circleY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  
  const interactiveElements = document.querySelectorAll('a, button, .content-card, .partner-logo, .amount-btn');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });
}

// ============================================
// TRANSITION DE PAGE FLUIDE
// ============================================

function initPageTransition() {
  document.body.classList.add('page-transition');
  
  window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
  });
}

// ============================================
// EFFET DE VAGUE SUR LES BOUTONS (RIPPLE)
// ============================================

function initRippleEffects() {
  const buttons = document.querySelectorAll('.hero-btn, button, .amount-btn, .content-card a');
  
  buttons.forEach(button => {
    button.classList.add('ripple');
    button.addEventListener('click', createRipple);
  });
}

function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add('ripple-effect');
  
  const existingRipple = button.getElementsByClassName('ripple-effect')[0];
  if (existingRipple) {
    existingRipple.remove();
  }
  
  button.appendChild(circle);
  
  setTimeout(() => {
    circle.remove();
  }, 600);
}

// ============================================
// SCCREL ALMODE MÉORÉ
// ====================================