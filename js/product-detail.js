// Product Detail Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
  loadProductDetail();
  setupRatingInput();
  setupReviewForm();
});

// Load product detail
function loadProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  if (!productId) {
    window.location.href = 'index.html';
    return;
  }
  
  const product = window.productService.getProductById(productId);
  
  if (!product) {
    displayProductNotFound();
    return;
  }
  
  // Update page title
  document.title = `${product.name} - ShopEasy`;
  
  // Update breadcrumb
  updateBreadcrumb(product);
  
  // Load product details
  displayProductDetail(product);
  
  // Load product tabs content
  loadTabsContent(product);
  
  // Load related products
  loadRelatedProducts(productId);
  
  // Save to recently viewed
  saveToRecentlyViewed(product);
  
  // Load recently viewed products
  loadRecentlyViewed(productId);
}

// Update breadcrumb
function updateBreadcrumb(product) {
  const categoryBreadcrumb = document.getElementById('categoryBreadcrumb');
  const categoryLink = document.getElementById('categoryLink');
  const productBreadcrumb = document.getElementById('productBreadcrumb');
  
  if (categoryBreadcrumb && categoryLink && productBreadcrumb) {
    categoryLink.textContent = product.categoryName;
    categoryLink.href = `index.html?category=${product.category}`;
    productBreadcrumb.textContent = product.name;
  }
}

// Display product details
function displayProductDetail(product) {
  const productDetailContainer = document.getElementById('productDetail');
  
  if (!productDetailContainer) return;
  
  let discountBadge = '';
  let oldPriceElement = '';
  
  if (product.discount > 0) {
    discountBadge = `<div class="badge bg-danger mb-2">-${product.discount}%</div>`;
    oldPriceElement = `<span class="price-old">${window.cartService.formatPrice(product.oldPrice)}</span>`;
  }
  
  let newBadge = product.isNew ? '<div class="badge bg-success ms-2">Nouveau</div>' : '';
  let stockStatus = product.inStock 
    ? '<div class="text-success"><i class="bi bi-check-circle-fill"></i> En stock</div>' 
    : '<div class="text-danger"><i class="bi bi-x-circle-fill"></i> Rupture de stock</div>';
  
  const html = `
    <div class="col-lg-6 mb-4 mb-lg-0">
      <div class="product-gallery">
        <div class="mb-3">
          <img src="${product.image}" class="img-fluid rounded shadow-sm w-100" id="mainProductImage" alt="${product.name}">
        </div>
        <div class="row g-2">
          <div class="col-3">
            <img src="${product.image}" class="img-fluid rounded product-gallery-img active" alt="${product.name}" onclick="changeMainImage(this)">
          </div>
          <!-- Additional images would be added here in a real app -->
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="ps-lg-4">
        ${discountBadge}
        <h1 class="h2 mb-3">${product.name}</h1>
        <div class="d-flex align-items-center mb-3">
          <div class="rating me-2">
            ${window.cartService.createStarRating(product.rating)}
          </div>
          <a href="#reviews" class="text-decoration-none">
            ${product.reviewCount} avis
          </a>
        </div>
        <div class="mb-4">
          <h2 class="h4 mb-3">Description</h2>
          <p>${product.description}</p>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="h3 mb-0 me-3">${window.cartService.formatPrice(product.price)}</div>
          ${oldPriceElement}
          ${newBadge}
        </div>
        <div class="mb-4">
          ${stockStatus}
        </div>
        <div class="d-flex mb-4">
          <div class="me-3">
            <label for="productQuantity" class="form-label">Quantité</label>
            <div class="quantity-control">
              <button class="btn btn-outline-secondary" id="decreaseQuantity">-</button>
              <input type="number" min="1" value="1" class="form-control" id="productQuantity">
              <button class="btn btn-outline-secondary" id="increaseQuantity">+</button>
            </div>
          </div>
        </div>
        <div class="d-flex flex-wrap mb-4">
          <button class="btn btn-primary me-3 mb-2 mb-md-0" id="addToCartBtn">
            <i class="bi bi-cart-plus me-2"></i>Ajouter au panier
          </button>
          <button class="btn btn-outline-danger me-3 mb-2 mb-md-0">
            <i class="bi bi-heart me-2"></i>Ajouter aux favoris
          </button>
          <button class="btn btn-outline-secondary mb-2 mb-md-0">
            <i class="bi bi-share me-2"></i>Partager
          </button>
        </div>
        <div class="mb-4">
          <h3 class="h6 mb-3">Livraison</h3>
          <ul class="list-unstyled">
            <li class="mb-2"><i class="bi bi-truck me-2"></i> Livraison standard (2-4 jours ouvrables)</li>
            <li class="mb-2"><i class="bi bi-rocket-takeoff me-2"></i> Livraison express disponible (24h)</li>
            <li><i class="bi bi-arrow-return-left me-2"></i> Retours gratuits sous 30 jours</li>
          </ul>
        </div>
        <div class="d-flex align-items-center mb-3">
          <span class="me-3">Partager :</span>
          <a href="#" class="social-link me-2"><i class="bi bi-facebook"></i></a>
          <a href="#" class="social-link me-2"><i class="bi bi-twitter"></i></a>
          <a href="#" class="social-link me-2"><i class="bi bi-pinterest"></i></a>
          <a href="#" class="social-link"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>
  `;
  
  productDetailContainer.innerHTML = html;
  
  // Add event listeners for quantity controls
  document.getElementById('decreaseQuantity').addEventListener('click', () => {
    const quantityInput = document.getElementById('productQuantity');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });
  
  document.getElementById('increaseQuantity').addEventListener('click', () => {
    const quantityInput = document.getElementById('productQuantity');
    const currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  });
  
  // Add event listener for add to cart button
  document.getElementById('addToCartBtn').addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('productQuantity').value);
    window.cartService.addToCart(product.id, quantity);
  });
  
  // Add function to change main image (for gallery)
  window.changeMainImage = function(imgElement) {
    document.getElementById('mainProductImage').src = imgElement.src;
    
    // Remove active class from all thumbnails
    document.querySelectorAll('.product-gallery-img').forEach(img => {
      img.classList.remove('active');
    });
    
    // Add active class to clicked thumbnail
    imgElement.classList.add('active');
  };
}

// Display product not found
function displayProductNotFound() {
  const productDetailContainer = document.getElementById('productDetail');
  
  if (!productDetailContainer) return;
  
  productDetailContainer.innerHTML = `
    <div class="col-12 text-center py-5">
      <i class="bi bi-exclamation-triangle display-1 text-warning mb-4"></i>
      <h2>Produit non trouvé</h2>
      <p class="text-muted mb-4">Désolé, le produit que vous recherchez n'existe pas ou a été supprimé.</p>
      <a href="index.html" class="btn btn-primary">Retour à l'accueil</a>
    </div>
  `;
}

// Load tabs content
function loadTabsContent(product) {
  const descriptionTab = document.getElementById('description');
  const specificationsTab = document.getElementById('specifications');
  const reviewsTab = document.getElementById('productReviews');
  
  if (descriptionTab) {
    descriptionTab.innerHTML = `
      <h3 class="h4 mb-4">À propos de ce produit</h3>
      <p>${product.description}</p>
    `;
  }
  
  if (specificationsTab && product.specifications) {
    let specsHTML = '<h3 class="h4 mb-4">Spécifications techniques</h3>';
    specsHTML += '<div class="table-responsive">';
    specsHTML += '<table class="table table-bordered">';
    specsHTML += '<tbody>';
    
    product.specifications.forEach(spec => {
      specsHTML += `
        <tr>
          <th style="width: 30%" class="bg-light">${spec.name}</th>
          <td>${spec.value}</td>
        </tr>
      `;
    });
    
    specsHTML += '</tbody></table></div>';
    specificationsTab.innerHTML = specsHTML;
  }
  
  if (reviewsTab && product.reviews) {
    let reviewsHTML = `
      <h3 class="h4 mb-4">Avis des clients (${product.reviews.length})</h3>
      <div class="mb-4">
        <div class="d-flex align-items-center mb-2">
          <h4 class="h1 mb-0 me-3">${product.rating.toFixed(1)}</h4>
          <div>
            <div class="rating mb-1">
              ${window.cartService.createStarRating(product.rating)}
            </div>
            <div class="text-muted small">${product.reviewCount} avis</div>
          </div>
        </div>
      </div>
    `;
    
    if (product.reviews.length > 0) {
      reviewsHTML += '<div class="mb-4">';
      
      product.reviews.forEach(review => {
        reviewsHTML += `
          <div class="card mb-3">
            <div class="card-body">
              <div class="d-flex mb-3">
                <div class="flex-shrink-0">
                  <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                    ${review.name.charAt(0)}
                  </div>
                </div>
                <div class="ms-3">
                  <h5 class="mb-1">${review.name}</h5>
                  <div class="d-flex align-items-center">
                    <div class="rating me-2">
                      ${window.cartService.createStarRating(review.rating)}
                    </div>
                    <span class="text-muted small">${review.date}</span>
                  </div>
                </div>
              </div>
              <p class="mb-0">${review.comment}</p>
            </div>
          </div>
        `;
      });
      
      reviewsHTML += '</div>';
    } else {
      reviewsHTML += `
        <div class="alert alert-info">
          Aucun avis pour ce produit. Soyez le premier à donner votre avis !
        </div>
      `;
    }
    
    reviewsTab.innerHTML = reviewsHTML;
  }
}

// Load related products
function loadRelatedProducts(productId) {
  const relatedProductsContainer = document.getElementById('relatedProducts');
  
  if (!relatedProductsContainer) return;
  
  const relatedProducts = window.productService.getRelatedProducts(productId, 4);
  
  if (relatedProducts.length === 0) {
    relatedProductsContainer.innerHTML = '<div class="col-12 text-center">Aucun produit similaire disponible.</div>';
    return;
  }
  
  let html = '';
  
  relatedProducts.forEach(product => {
    html += window.cartService.createProductCard(product);
  });
  
  relatedProductsContainer.innerHTML = html;
  
  // Add event listeners for add to cart buttons
  window.cartService.addToCartListeners();
  
  // Add animation for staggered loading
  const cards = relatedProductsContainer.querySelectorAll('.product-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('loaded');
    }, 100 * index);
  });
}

// Save product to recently viewed
function saveToRecentlyViewed(product) {
  const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
  
  // Remove if already exists
  const existingIndex = recentlyViewed.findIndex(item => item.id === product.id);
  if (existingIndex !== -1) {
    recentlyViewed.splice(existingIndex, 1);
  }
  
  // Add to the beginning
  recentlyViewed.unshift({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    category: product.category,
    timestamp: Date.now()
  });
  
  // Keep only the last 8 products
  if (recentlyViewed.length > 8) {
    recentlyViewed.pop();
  }
  
  localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
}

// Load recently viewed products
function loadRecentlyViewed(currentProductId) {
  const recentlyViewedContainer = document.getElementById('recentlyViewed');
  
  if (!recentlyViewedContainer) return;
  
  const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
  
  // Filter out current product
  const filteredRecent = recentlyViewed.filter(item => item.id !== parseInt(currentProductId));
  
  if (filteredRecent.length === 0) {
    recentlyViewedContainer.parentElement.style.display = 'none';
    return;
  }
  
  let html = '';
  
  // Display up to 4 recently viewed products
  filteredRecent.slice(0, 4).forEach(item => {
    const product = window.productService.getProductById(item.id);
    if (product) {
      html += window.cartService.createProductCard(product);
    }
  });
  
  recentlyViewedContainer.innerHTML = html;
  
  // Add event listeners for add to cart buttons
  window.cartService.addToCartListeners();
  
  // Add animation for staggered loading
  const cards = recentlyViewedContainer.querySelectorAll('.product-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('loaded');
    }, 100 * index);
  });
}

// Setup rating input for the review form
function setupRatingInput() {
  const ratingInputStars = document.querySelectorAll('.rating-input i');
  const ratingValueInput = document.getElementById('ratingValue');
  
  if (!ratingInputStars.length || !ratingValueInput) return;
  
  ratingInputStars.forEach(star => {
    star.addEventListener('mouseover', () => {
      const rating = parseInt(star.dataset.rating);
      updateStars(rating);
    });
    
    star.addEventListener('mouseout', () => {
      const currentRating = parseInt(ratingValueInput.value);
      updateStars(currentRating);
    });
    
    star.addEventListener('click', () => {
      const rating = parseInt(star.dataset.rating);
      ratingValueInput.value = rating;
      updateStars(rating);
    });
  });
  
  function updateStars(rating) {
    ratingInputStars.forEach(star => {
      const starRating = parseInt(star.dataset.rating);
      if (starRating <= rating) {
        star.classList.remove('bi-star');
        star.classList.add('bi-star-fill');
        star.classList.add('active');
      } else {
        star.classList.remove('bi-star-fill');
        star.classList.remove('active');
        star.classList.add('bi-star');
      }
    });
  }
}

// Setup review form
function setupReviewForm() {
  const reviewForm = document.getElementById('reviewForm');
  
  if (!reviewForm) return;
  
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('reviewerName').value;
    const email = document.getElementById('reviewerEmail').value;
    const rating = parseInt(document.getElementById('ratingValue').value);
    const content = document.getElementById('reviewContent').value;
    
    if (!name || !email || !rating || !content) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    
    // In a real app, this would be sent to a server
    alert('Merci pour votre avis ! Il sera examiné et publié prochainement.');
    reviewForm.reset();
    document.querySelectorAll('.rating-input i').forEach(star => {
      star.classList.remove('bi-star-fill');
      star.classList.remove('active');
      star.classList.add('bi-star');
    });
    document.getElementById('ratingValue').value = 0;
  });
}