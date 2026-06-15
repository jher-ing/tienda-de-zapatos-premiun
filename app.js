// --- DATABASE: 23 SNEAKERS & STREETWEAR ITEMS ---
const products = [
  {
    id: "kn-01",
    name: "KINETIC VAPOR PRO",
    price: 320.00,
    image: "photo-1460353581641-37baddab0fa2.avif",
    category: "sneakers",
    tag: "HERO EXCLUSIVE",
    description: "Silueta conceptual emblemática equipada con nuestro sistema patentado Vapor-Grid. Su chasis de fibra de carbono entrelazada reduce el peso estructural un 30% mientras maximiza el retorno de energía en cada pisada."
  },
  {
    id: "kn-02",
    name: "NEON VAPOR-X CARBON",
    price: 380.00,
    image: "photo-1512374382149-233c42b6a83b.avif",
    category: "limited",
    tag: "DROP INMINENTE",
    description: "La joya de la corona de la ingeniería urbana contemporánea. Paneles de nylon balístico Ripstop fusionados con micro-gamuza premium en contraste eléctrico. Amortiguación neumática encapsulada."
  },
  {
    id: "kn-03",
    name: "NEO-CEMENT RUNNER",
    price: 260.00,
    image: "photo-1543508282-6319a3e2621f.avif",
    category: "sneakers",
    tag: "BEST SELLER",
    description: "Inspirado en la textura porosa del hormigón brutalista. Presenta un empeine de hilo técnico transpirable de una sola pieza y estabilizadores laterales impresos en 3D para mayor torsión."
  },
  {
    id: "kn-04",
    name: "A-CW HYBRID S1",
    price: 290.00,
    image: "photo-1551107696-a4b0c5a0d9a2.avif",
    category: "limited",
    tag: "EDICIÓN LIMITADA",
    description: "Diseño asimétrico desarrollado en colaboración con talleres industriales de vanguardia. La suela exterior cuenta con tacos sobredimensionados inspirados en neumáticos de motocross urbano."
  },
  {
    id: "kn-05",
    name: "O-W WHITE CHASSIS",
    price: 340.00,
    image: "photo-1552346154-21d32810aba3.avif",
    category: "sneakers",
    tag: "NEW IN",
    description: "Estética deconstruida de alto impacto visual. Emplea costuras expuestas de hilo elástico de alta tensión y cordones técnicos reflectantes con extremos metálicos marcados a láser."
  },
  {
    id: "kn-06",
    name: "C-UT STREETJACKET X1",
    price: 450.00,
    image: "photo-1556906781-9a412961c28c.avif",
    category: "streetwear",
    tag: "COLECCIÓN ROPA",
    description: "Prenda de abrigo utilitaria de alta gama confeccionada en tejido laminado impermeable de tres capas. Hebillas de aluminio de grado aeronáutico y arneses de sujeción interna desmontables."
  },
  {
    id: "kn-07",
    name: "VOLT EXPLORER-90",
    price: 310.00,
    image: "photo-1560769629-975ec94e6a86.avif",
    category: "high-tops",
    tag: "HIGH DEMAND",
    description: "Silueta de caña alta diseñada para soportar condiciones climáticas adversas en la metrópolis. Aislamiento térmico ultra-delgado integrado y cremalleras selladas de poliuretano."
  },
  {
    id: "kn-08",
    name: "SHADOW RUNNER CORE",
    price: 240.00,
    image: "photo-1579338559194-a162d19bf842.avif",
    category: "sneakers",
    tag: "DAILY WEAR",
    description: "Una silueta minimalista y discreta construida con materiales reciclados avanzados. Ligereza excepcional para el corredor urbano de larga distancia."
  },
  {
    id: "kn-09",
    name: "PROJECT X COUPE",
    price: 370.00,
    image: "photo-1579446565308-427218a2c60e.avif",
    category: "limited",
    tag: "1 OF 100",
    description: "Paneles reflectantes termosellados y una suela translúcida que revela la estructura de soporte de polímero termoplástico interior. El futuro es ahora."
  },
  {
    id: "kn-10",
    name: "KINETIC MOTO-BOOT",
    price: 410.00,
    image: "photo-1579446650032-86effeeb3389.avif",
    category: "high-tops",
    tag: "PREMIUM LEATHER",
    description: "Híbrido experimental entre bota de motociclismo clásica y sneaker de lujo. Cuero vacuno de grano completo y hebillas de metal cepillado de ajuste rápido."
  },
  {
    id: "kn-11",
    name: "CHROME WAVE-04",
    price: 280.00,
    image: "photo-1584735175315-9d5df23860e6.avif",
    category: "sneakers",
    tag: "RESTOCK",
    description: "Empeine elástico de neopreno técnico acoplado a un exoesqueleto de TPU inyectado. Ajuste anatómico perfecto que emula una segunda piel con soporte lateral extremo."
  },
  {
    id: "kn-12",
    name: "GRAFFITI SLICKER",
    price: 190.00,
    image: "photo-1586525198428-225f6f12cff5.avif",
    category: "streetwear",
    tag: "ART SERIES",
    description: "Camiseta de manga larga texturizada de algodón cepillado pesado con estampación digital de alta resolución que representa grafitis urbanos conceptuales."
  },
  {
    id: "kn-13",
    name: "METROPOLIS RUNNER",
    price: 250.00,
    image: "photo-1595341888016-a392ef81b7de.avif",
    category: "sneakers",
    tag: "NEW COLORWAY",
    description: "Diseño ergonómico y estilizado concebido para el tránsito rápido entre edificios y transportes metropolitanos. Suela de goma antideslizante con dibujo de tracción omnidireccional."
  },
  {
    id: "kn-14",
    name: "KINETIC APEX-Z",
    price: 360.00,
    image: "photo-1595950653106-6c9ebd614d3a.avif",
    category: "sneakers",
    tag: "EXCLUSIVE",
    description: "Una de nuestras siluetas más galardonadas en el ámbito del diseño de modas. Capas superpuestas de malla balística y ante curtido de forma ecológica."
  },
  {
    id: "kn-15",
    name: "ORANGE CRUSH V2",
    price: 295.00,
    image: "photo-1597045566677-8cf032ed6634.avif",
    category: "sneakers",
    tag: "COLOR POP",
    description: "Un destello de color neón naranja en el asfalto. Cuenta con refuerzos de Kevlar en la puntera para resistir la abrasión en terrenos hostiles."
  },
  {
    id: "kn-16",
    name: "INDUSTRIAL MESH",
    price: 220.00,
    image: "photo-1600269452121-4f2416e55c28.avif",
    category: "sneakers",
    tag: "ESSENTIAL",
    description: "Malla metálica tejida ultrafina para una ventilación sin precedentes. Ideal para la temporada de verano en climas urbanos densos."
  },
  {
    id: "kn-17",
    name: "CYBERPUNK HI-TOP",
    price: 480.00,
    image: "photo-1605523741177-cd660595c2cf.avif",
    category: "high-tops",
    tag: "CYBER COLLECTION",
    description: "Diseño disruptivo con correas elásticas cruzadas magnéticas Fidlock que sustituyen a los cordones convencionales. Paneles laterales con retroiluminación pasiva reflectante."
  },
  {
    id: "kn-18",
    name: "VAPOR SPEED ELEMENT",
    price: 275.00,
    image: "photo-1656335362192-2bc9051b1824.avif",
    category: "sneakers",
    tag: "SPEED LAB",
    description: "Entresuela de última generación con geometría curva que asiste dinámicamente en la transición de la zancada. Ideal para entrenamientos de alta intensidad."
  },
  {
    id: "kn-19",
    name: "UTILITY URBAN BELT",
    price: 110.00,
    image: "photo-1656944227421-416b1d2186c9.avif",
    category: "streetwear",
    tag: "ACCESSORIES",
    description: "Cinturón de cincha técnica militar de alta resistencia con hebilla metálica táctica Cobra de liberación rápida. Grabados logotípicos de precisión."
  },
  {
    id: "kn-20",
    name: "CONCRETE SHADOW HOODIE",
    price: 210.00,
    image: "photo-1679800558771-0e1737f489c0.avif",
    category: "streetwear",
    tag: "OVERSIZED FIT",
    description: "Sudadera con capucha sobredimensionada con un gramaje superior de 500 GSM. Teñido en prenda para un acabado vintage gris cemento lavado con ácido."
  },
  {
    id: "kn-21",
    name: "KINETIC MONOCHROME",
    price: 330.00,
    image: "photo-1698108223397-3d222e80d7ea.avif",
    category: "limited",
    tag: "MINIMALIST 1/1",
    description: "Un estudio del minimalismo monocromático absoluto. Sin logotipos visibles, centrándose exclusivamente en la pureza de la silueta geométrica y la excelencia del material."
  },
  {
    id: "kn-22",
    name: "KINETIC BASE ARCHIVE",
    price: 180.00,
    image: "templade base.avif",
    category: "sneakers",
    tag: "ARCHIVE ESSENTIAL",
    description: "Nuestra silueta fundacional rediseñada con materiales modernos. El calzado base óptimo para construir cualquier atuendo de inspiración urbana y técnica."
  },
  {
    id: "kn-23",
    name: "TEMPLADE EDITION",
    price: 350.00,
    image: "templade.avif",
    category: "limited",
    tag: "COLLECTOR DROP",
    description: "Calzado de exhibición y archivo de producción conceptual. La silueta pura sobre la cual diseñadores construyen el calzado del futuro."
  }
];

// --- SHOPPING CART STATE ---
let cart = JSON.parse(localStorage.getItem('kinetic_cart')) || [];

// --- GSAP REGISTER TRIGGER ---
gsap.registerPlugin(ScrollTrigger);

// --- PRELOADER ANIMATION ---
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('preloader-progress');
  const logo = document.getElementById('preloader-logo');
  
  let width = 0;
  const interval = setInterval(() => {
    width += Math.floor(Math.random() * 15) + 5;
    if (width >= 100) {
      width = 100;
      clearInterval(interval);
      
      // Hide preloader and trigger hero entrance animations
      setTimeout(() => {
        preloader.classList.add('hidden');
        triggerHeroAnimations();
        // Force scroll trigger recalculation after layout settles
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }, 400);
    }
    progressBar.style.width = width + '%';
  }, 80);
}

// --- HERO ENTRANCE ANIMATIONS ---
function triggerHeroAnimations() {
  const tl = gsap.timeline();
  
  tl.to('.hero-tag', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .to('.hero-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power4.out'
  }, '-=0.5')
  .to('.hero-cta', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  .fromTo('#hero-sneaker', {
    opacity: 0,
    scale: 0.5,
    rotation: -35,
    x: 100
  }, {
    opacity: 1,
    scale: 1,
    rotation: -15,
    x: 0,
    duration: 1.5,
    ease: 'elastic.out(1, 0.75)'
  }, '-=1')
  // Animate Catalog Section Header and Cards on load (after hero) using robust fromTo
  .fromTo('#catalog .section-label, #catalog .section-title-editorial', {
    opacity: 0,
    y: 40
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  }, '-=0.4')
  .fromTo('.catalog-card', {
    opacity: 0,
    y: 50
  }, {
    opacity: 1,
    y: 0,
    duration: 1.0,
    stagger: 0.12,
    ease: 'power3.out'
  }, '-=0.3');
}

// --- 3D INTERACTIVE SNEAKER EFFECT ---
function init3dHeroSneaker() {
  const heroSection = document.getElementById('hero');
  const sneaker = document.getElementById('hero-sneaker');
  
  if (!heroSection || !sneaker) return;
  
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left - (rect.width / 2);
    const y = e.clientY - rect.top - (rect.height / 2);
    
    // Smooth 3D tilt
    const tiltX = (y / (rect.height / 2)) * -15; // Max 15 deg tilt
    const tiltY = (x / (rect.width / 2)) * 15;
    
    // Subtle translation
    const transX = (x / (rect.width / 2)) * 25; // Max 25px translation
    const transY = (y / (rect.height / 2)) * 25;
    
    gsap.to(sneaker, {
      rotateX: tiltX,
      rotateY: tiltY - 15, // Keep default -15 deg rotate offset
      x: transX,
      y: transY,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
  
  heroSection.addEventListener('mouseleave', () => {
    // Reset to default floating state
    gsap.to(sneaker, {
      rotateX: 0,
      rotateY: -15,
      x: 0,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    });
  });
}

// --- SCROLL ANIMATIONS (GSAP SCROLLTRIGGER) ---
function initScrollAnimations() {

  // Lookbook Title
  gsap.from('#lookbook .section-title-editorial', {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#lookbook',
      start: 'top 90%',
    }
  });

  // Storytelling
  gsap.from('.story-text-container > *', {
    opacity: 0,
    x: -40,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.storytelling',
      start: 'top 85%',
    }
  });

  gsap.from('.story-detail-box > div', {
    opacity: 0,
    x: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.storytelling',
      start: 'top 85%',
    }
  });

  // Drops
  gsap.from('.drop-card', {
    opacity: 0,
    scale: 0.96,
    y: 40,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#drops',
      start: 'top 90%',
    }
  });

  // Community
  gsap.from('.masonry-item', {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 0.9,
    stagger: 0.08,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#community',
      start: 'top 90%',
    }
  });
}

// --- DYNAMIC FEATURED CATALOG GALLERY (MAX 6 ITEMS) ---
function renderFeaturedCatalog() {
  const catalogGrid = document.getElementById('featured-catalog-grid');
  if (!catalogGrid) return;

  catalogGrid.innerHTML = '';

  // 6 standout product IDs chosen for high visual impact and variety
  const featuredIds = ["kn-02", "kn-04", "kn-05", "kn-14", "kn-15", "kn-17"];
  
  // Filter products by the selected IDs
  const featuredProducts = products.filter(p => featuredIds.includes(p.id));

  featuredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'catalog-card';
    card.setAttribute('data-id', product.id);
    
    card.innerHTML = `
      <span class="catalog-card-tag">${product.tag}</span>
      <div class="catalog-card-img-box">
        <img src="assets/${product.image}" alt="${product.name}" class="catalog-card-img" loading="lazy">
      </div>
      <div class="catalog-card-info">
        <div class="catalog-card-title-wrap">
          <span class="catalog-card-category">${product.category}</span>
          <h3 class="catalog-card-title">${product.name}</h3>
        </div>
        <div class="catalog-card-price">$${product.price.toFixed(2)}</div>
      </div>
    `;

    // Click handler to open detailed product modal
    card.addEventListener('click', () => openProductModal(product));

    catalogGrid.appendChild(card);
  });
}

// --- DYNAMIC LOOKBOOK PRODUCT CAROUSEL ---
let currentSlideIndex = 0;

function getSlideWidth() {
  const slide = document.querySelector('.product-slide');
  if (slide) {
    const slider = document.getElementById('product-slider');
    const style = window.getComputedStyle(slider);
    const gap = parseFloat(style.gap) || 0;
    return slide.getBoundingClientRect().width + gap;
  }
  return 460; // fallback
}

function renderLookbookProducts() {
  const slider = document.getElementById('product-slider');
  if (!slider) return;
  
  slider.innerHTML = '';
  
  products.forEach(product => {
    const isNew = product.tag.includes("NEW") || product.tag.includes("EXCLUSIVE");
    const isLimited = product.tag.includes("LIMITADA") || product.tag.includes("1 OF 100") || product.tag.includes("DROP");
    
    let badgeClass = '';
    if (isNew) badgeClass = 'style="color: var(--accent-neon); background-color: rgba(0, 255, 102, 0.1);"';
    if (isLimited) badgeClass = 'style="color: #ff5500; background-color: rgba(255, 85, 0, 0.1); border-color: rgba(255, 85, 0, 0.2);"';

    const card = document.createElement('div');
    card.className = 'product-slide';
    card.setAttribute('data-id', product.id);
    card.innerHTML = `
      <span class="product-badge" ${badgeClass}>${product.tag}</span>
      <div class="product-slide-img-box">
        <img src="assets/${product.image}" alt="${product.name}" class="product-img" loading="lazy">
      </div>
      <div class="product-meta">
        <div>
          <h3 class="product-title">${product.name}</h3>
          <span class="product-category">${product.category}</span>
        </div>
        <div class="product-price">$${product.price.toFixed(2)}</div>
      </div>
    `;
    
    // Open product detail modal on click
    card.addEventListener('click', () => openProductModal(product));
    
    slider.appendChild(card);
  });

  updateSliderControls();
}

function updateSliderControls() {
  const slider = document.getElementById('product-slider');
  const prevBtn = document.getElementById('slide-prev');
  const nextBtn = document.getElementById('slide-next');
  
  if (!slider || !prevBtn || !nextBtn) return;
  
  const totalSlides = products.length;
  const currentSlideWidth = getSlideWidth();
  const maxSlides = Math.max(0, totalSlides - Math.round(slider.parentElement.clientWidth / currentSlideWidth));
  
  prevBtn.onclick = () => {
    currentSlideIndex--;
    if (currentSlideIndex < 0) currentSlideIndex = 0;
    slideSlider();
  };
  
  nextBtn.onclick = () => {
    currentSlideIndex++;
    if (currentSlideIndex > maxSlides) currentSlideIndex = maxSlides;
    slideSlider();
  };
}

function slideSlider() {
  const slider = document.getElementById('product-slider');
  if (!slider) return;
  
  const currentSlideWidth = getSlideWidth();
  const translationValue = -currentSlideIndex * currentSlideWidth;
  slider.style.transform = `translateX(${translationValue}px)`;
}

// Re-calculate visible slides on window resize
window.addEventListener('resize', () => {
  currentSlideIndex = 0;
  slideSlider();
  updateSliderControls();
});

// --- EXCLUSIVE DROP COUNTDOWN TIMER ---
function initCountdown() {
  const countdownEl = document.getElementById('drop-countdown');
  if (!countdownEl) return;
  
  const targetDateStr = countdownEl.getAttribute('data-time');
  const targetDate = new Date(targetDateStr).getTime();
  
  const cdDays = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMins = document.getElementById('cd-mins');
  const cdSecs = document.getElementById('cd-secs');
  
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference <= 0) {
      clearInterval(interval);
      countdownEl.innerHTML = "<span class='countdown-number' style='font-size:2rem; color:var(--accent-neon);'>DROP ACTIVO AHORA</span>";
      return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    cdDays.innerHTML = `${String(days).padStart(2, '0')}<span>d</span>`;
    cdHours.innerHTML = `${String(hours).padStart(2, '0')}<span>h</span>`;
    cdMins.innerHTML = `${String(minutes).padStart(2, '0')}<span>m</span>`;
    cdSecs.innerHTML = `${String(seconds).padStart(2, '0')}<span>s</span>`;
  }, 1000);
}

// --- DETAILED PRODUCT MODAL ---
let activeProduct = null;

function openProductModal(product) {
  activeProduct = product;
  const modal = document.getElementById('product-modal');
  const backdrop = document.getElementById('overlay-backdrop');
  
  document.getElementById('modal-img').src = 'assets/' + product.image;
  document.getElementById('modal-img').alt = product.name;
  document.getElementById('modal-cat').textContent = product.category;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-price').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('modal-desc').textContent = product.description;
  
  // Highlight default size
  const sizeBtns = document.querySelectorAll('#modal-sizes-box .size-btn');
  sizeBtns.forEach(btn => btn.classList.remove('active'));
  if (sizeBtns.length > 1) sizeBtns[1].classList.add('active'); // Default size 9
  
  modal.classList.add('active');
  backdrop.classList.add('active');
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  const backdrop = document.getElementById('overlay-backdrop');
  
  modal.classList.remove('active');
  // Only remove backdrop active state if cart drawer is not active either
  const cartDrawer = document.getElementById('cart-drawer');
  if (!cartDrawer.classList.contains('active')) {
    backdrop.classList.remove('active');
  }
  activeProduct = null;
}

// Size Selector Click handler
document.querySelectorAll('#modal-sizes-box .size-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('#modal-sizes-box .size-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  });
});

// --- CART DRAWER & OPERATIONS ---
const cartDrawer = document.getElementById('cart-drawer');
const overlayBackdrop = document.getElementById('overlay-backdrop');

function openCartDrawer() {
  cartDrawer.classList.add('active');
  overlayBackdrop.classList.add('active');
}

function closeCartDrawer() {
  cartDrawer.classList.remove('active');
  // Only remove backdrop active state if product modal is not active either
  const productModal = document.getElementById('product-modal');
  if (!productModal.classList.contains('active')) {
    overlayBackdrop.classList.remove('active');
  }
}

function addToCart(productId, sizeSelected) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Look if product already in cart with same size
  const existingItemIndex = cart.findIndex(item => item.id === productId && item.size === sizeSelected);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      size: sizeSelected,
      quantity: 1
    });
  }
  
  // Trigger notification/visual effects on cart icon
  const cartToggleBtn = document.getElementById('cart-toggle');
  cartToggleBtn.classList.add('pulse-glow');
  setTimeout(() => cartToggleBtn.classList.remove('pulse-glow'), 400);

  saveCart();
  updateCartUI();
  openCartDrawer();
}

function changeQty(productId, sizeSelected, delta) {
  const itemIndex = cart.findIndex(item => item.id === productId && item.size === sizeSelected);
  if (itemIndex === -1) return;
  
  cart[itemIndex].quantity += delta;
  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
  }
  
  saveCart();
  updateCartUI();
}

function removeFromCart(productId, sizeSelected) {
  cart = cart.filter(item => !(item.id === productId && item.size === sizeSelected));
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('kinetic_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const cartList = document.getElementById('cart-items-list');
  const cartCountNav = document.getElementById('cart-count');
  const cartDrawerCount = document.getElementById('cart-drawer-count');
  const cartSubtotal = document.getElementById('cart-subtotal');
  
  if (!cartList) return;
  
  cartList.innerHTML = '';
  let totalCount = 0;
  let subtotalPrice = 0.00;
  
  if (cart.length === 0) {
    cartList.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--text-secondary); text-align:center; padding: 40px 0;">
        <i class="fa-solid fa-folder-open" style="font-size:3rem; margin-bottom:20px; color:var(--text-muted);"></i>
        <h4 style="font-family:var(--font-display); font-size:1.1rem; text-transform:uppercase; margin-bottom:10px; color:var(--text-primary);">EL ARCHIVO ESTÁ VACÍO</h4>
        <p style="font-size:0.85rem; font-weight:300; max-width:80%;">Agrega siluetas y prendas desde nuestro catálogo digital para iniciar tu envío.</p>
      </div>
    `;
  } else {
    cart.forEach(item => {
      totalCount += item.quantity;
      subtotalPrice += item.price * item.quantity;
      
      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <div class="cart-item-img-box">
          <img src="assets/${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <p class="cart-item-category">${item.category} // TALLA: ${item.size}</p>
          <div class="cart-item-qty-selector">
            <button class="cart-qty-btn qty-minus" data-id="${item.id}" data-size="${item.size}"><i class="fa-solid fa-minus"></i></button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button class="cart-qty-btn qty-plus" data-id="${item.id}" data-size="${item.size}"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
        <div class="cart-item-price-box">
          <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
          <button class="cart-item-remove" data-id="${item.id}" data-size="${item.size}">Eliminar</button>
        </div>
      `;
      cartList.appendChild(itemEl);
    });
  }
  
  cartCountNav.textContent = totalCount;
  cartDrawerCount.textContent = totalCount;
  cartSubtotal.textContent = `$${subtotalPrice.toFixed(2)}`;
  
  // Rebind event listeners for quantities/removal
  document.querySelectorAll('.qty-minus').forEach(btn => {
    btn.onclick = (e) => {
      const id = btn.getAttribute('data-id');
      const size = btn.getAttribute('data-size');
      changeQty(id, size, -1);
    };
  });
  
  document.querySelectorAll('.qty-plus').forEach(btn => {
    btn.onclick = (e) => {
      const id = btn.getAttribute('data-id');
      const size = btn.getAttribute('data-size');
      changeQty(id, size, 1);
    };
  });
  
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.onclick = (e) => {
      const id = btn.getAttribute('data-id');
      const size = btn.getAttribute('data-size');
      removeFromCart(id, size);
    };
  });
}

// --- EVENT LISTENERS INITIALIZATION ---
function initEvents() {
  // Toggle Cart Drawer
  document.getElementById('cart-toggle').addEventListener('click', openCartDrawer);
  document.getElementById('cart-close').addEventListener('click', closeCartDrawer);
  
  // Close Modals / Cart on Backdrop Click
  overlayBackdrop.addEventListener('click', () => {
    closeCartDrawer();
    closeProductModal();
  });
  
  document.getElementById('modal-close').addEventListener('click', closeProductModal);
  
  // Add to cart from Modal
  document.getElementById('modal-add-to-cart').addEventListener('click', () => {
    if (!activeProduct) return;
    const activeSizeBtn = document.querySelector('#modal-sizes-box .size-btn.active');
    const size = activeSizeBtn ? activeSizeBtn.textContent : "9";
    addToCart(activeProduct.id, size);
    closeProductModal();
  });

  // Catalog cards are rendered dynamically and have click event listeners bound inline.

  // Notify Drop Glitch Effect Action
  const notifyBtn = document.getElementById('notify-drop');
  if (notifyBtn) {
    notifyBtn.addEventListener('click', () => {
      notifyBtn.querySelector('span').textContent = 'REGISTRADO // CONFIRMADO';
      notifyBtn.style.backgroundColor = 'var(--accent-neon)';
      notifyBtn.style.color = '#000';
      notifyBtn.style.boxShadow = '0 0 30px var(--accent-neon-glow)';
      
      // Reset back after 3 seconds
      setTimeout(() => {
        notifyBtn.querySelector('span').textContent = 'NOTIFICARME AL DROP';
        notifyBtn.style.backgroundColor = 'var(--text-primary)';
        notifyBtn.style.color = '#000';
        notifyBtn.style.boxShadow = 'none';
      }, 3000);
    });
  }

  // Checkout button interaction
  const checkoutBtn = document.getElementById('cart-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;
      checkoutBtn.querySelector('span').textContent = 'CREANDO ORDEN EN EL BLOCKCHAIN...';
      checkoutBtn.style.backgroundColor = 'var(--accent-neon)';
      checkoutBtn.style.boxShadow = '0 0 30px var(--accent-neon-glow)';
      
      setTimeout(() => {
        alert("ORDEN PRE-APROBADA // CONEXIÓN ESTABLECIDA CON PASARELA DE PAGO DE LUJO");
        cart = [];
        saveCart();
        updateCartUI();
        closeCartDrawer();
        checkoutBtn.querySelector('span').textContent = 'PROCEDER AL CHECKOUT';
        checkoutBtn.style.backgroundColor = 'var(--text-primary)';
        checkoutBtn.style.boxShadow = 'none';
      }, 2000);
    });
  }

  // Toggle Search (just a luxury visual indicator)
  const searchBtn = document.getElementById('search-toggle');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const searchTerm = prompt("INGRESAR TERMINO DE BUSQUEDA EN EL ARCHIVO DE LUXE (ej: VAPOR, SILHOUETTE, URBAN):");
      if (searchTerm) {
        const query = searchTerm.toLowerCase().trim();
        const found = products.findIndex(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
        if (found > -1) {
          const matchedProduct = products[found];
          openProductModal(matchedProduct);
        } else {
          alert(`NINGUNA SILUETA ENCONTRADA CON EL TÉRMINO "${searchTerm.toUpperCase()}"`);
        }
      }
    });
  }
}

// Add Dynamic Styling helper for CSS pulsing
const extraStyles = document.createElement('style');
extraStyles.innerHTML = `
  @keyframes pulse-glow-btn {
    0% { box-shadow: 0 0 0px var(--accent-neon-glow); }
    50% { box-shadow: 0 0 20px var(--accent-neon); }
    100% { box-shadow: 0 0 0px var(--accent-neon-glow); }
  }
  .pulse-glow {
    animation: pulse-glow-btn 0.4s ease-out;
  }
`;
document.head.appendChild(extraStyles);

// --- APP INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  init3dHeroSneaker();
  renderFeaturedCatalog();
  renderLookbookProducts();
  initCountdown();
  updateCartUI();
  initEvents();
  
  // Small delay for scroll triggers to calculate bounds correctly
  setTimeout(() => {
    initScrollAnimations();
    ScrollTrigger.refresh();
  }, 100);
});

// Refresh ScrollTrigger when all assets (including images) are fully loaded
window.addEventListener('load', () => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 200);
});
