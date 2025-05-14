// Main application JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Initialize
  initApp();

  // Initialize back to top button
  initBackToTop();

  // Setup AJAX navigation
  setupAjaxNavigation();

  // Load initial page content
  loadPageContent(window.location.pathname);
});

// Initialize the application
function initApp() {
  // Populate categories in header dropdown
  const categories = window.productService.getCategories();
  const categoryDropdown = document.getElementById("categoryDropdown");

  if (categoryDropdown) {
    let dropdownHTML = "";

    categories.forEach((category) => {
      dropdownHTML += `
        <li><a class="dropdown-item" href="index.html" data-category="${category.id}">${category.name}</a></li>
      `;
    });

    categoryDropdown.innerHTML = dropdownHTML;
  }

  // Initialize search form
  const searchForm = document.getElementById("searchForm");

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchInput = document.getElementById("searchInput");
      const searchTerm = searchInput.value.trim();

      if (searchTerm) {
        loadProducts({ search: searchTerm });
        updateURL("index.html", { search: searchTerm });
      }
    });
  }
}

// Setup AJAX navigation
function setupAjaxNavigation() {
  // Handle all internal links
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (
      link &&
      link.href &&
      link.href.startsWith(window.location.origin) &&
      !link.hasAttribute("data-no-ajax")
    ) {
      e.preventDefault();

      const url = new URL(link.href);
      const category = link.getAttribute("data-category");

      if (category) {
        loadProducts({ category });
        updateURL(url.pathname, { category });
      } else {
        loadPageContent(url.pathname, url.search);
        updateURL(url.pathname, null, url.search);
      }
    }
  });

  // Handle browser back/forward
  window.addEventListener("popstate", (e) => {
    if (e.state) {
      loadPageContent(e.state.path, e.state.search);
    }
  });
}

// Load page content
async function loadPageContent(path, search = "") {
  const contentDiv = document.getElementById("main-content");
  if (!contentDiv) return;

  try {
    const response = await fetch(path + search);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const newContent = doc.getElementById("main-content");

    if (newContent) {
      contentDiv.innerHTML = newContent.innerHTML;

      // Update page title
      document.title = doc.title;

      // Initialize page-specific content
      if (path.includes("cart.html")) {
        window.cartService.renderCart();
        window.cartService.loadRecommendedProducts();
        initCartEvents();
      } else if (path.includes("product.html")) {
        loadProductDetail();
      } else {
        loadCategories();
        loadFeaturedProducts();
        initProductsPage();
      }
    }
  } catch (error) {
    console.error("Error loading page:", error);
  }
}

// Update URL without page reload
function updateURL(path, params = null, search = "") {
  const url = new URL(path, window.location.origin);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  } else if (search) {
    url.search = search;
  }

  history.pushState({ path, search: url.search }, "", url.href);
}

// Load products with AJAX
async function loadProducts(filters = {}) {
  const productsContainer = document.getElementById("productsList");
  const productCountElement = document.getElementById("productCount");

  if (!productsContainer) return;

  let products;

  if (filters.search) {
    products = window.productService.searchProducts(filters.search);
  } else {
    products = window.productService.filterProducts(filters);
  }

  // Update product count
  if (productCountElement) {
    productCountElement.textContent = `${products.length} produits`;
  }

  // Generate products HTML
  let productsHTML = "";

  if (products.length === 0) {
    productsHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search display-1 text-muted mb-3"></i>
        <h3>Aucun produit trouvé</h3>
        <p class="text-muted">Essayez de modifier vos filtres ou votre recherche.</p>
      </div>
    `;
  } else {
    products.forEach((product) => {
      productsHTML += window.cartService.createProductCard(product);
    });
  }

  productsContainer.innerHTML = productsHTML;

  // Add event listeners for add to cart buttons
  window.cartService.addToCartListeners();

  // Add animation for staggered loading
  const cards = productsContainer.querySelectorAll(".product-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("loaded");
    }, 100 * index);
  });
}

// Load categories on homepage
function loadCategories() {
  const categoryCardsContainer = document.getElementById("categoryCards");
  const categories = window.productService.getCategories();

  if (!categoryCardsContainer) return;

  let html = "";

  categories.forEach((category) => {
    html += `
      <div class="col-6 col-md-4 col-lg-2">
        <a href="index.html?category=${category.id}" class="text-decoration-none">
          <div class="category-card">
            <img src="${category.image}" alt="${category.name}" class="img-fluid">
            <div class="category-overlay">
              <h5 class="mb-0">${category.name}</h5>
            </div>
          </div>
        </a>
      </div>
    `;
  });

  categoryCardsContainer.innerHTML = html;

  // Add animation for staggered loading
  const cards = categoryCardsContainer.querySelectorAll(".category-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("fadeIn");
    }, 100 * index);
  });
}

// Load featured products on homepage
function loadFeaturedProducts() {
  const featuredProductsContainer = document.getElementById("featuredProducts");
  const featuredProducts = window.productService.getFeaturedProducts(4);

  if (!featuredProductsContainer) return;

  let html = "";

  featuredProducts.forEach((product) => {
    html += window.cartService.createProductCard(product);
  });

  featuredProductsContainer.innerHTML = html;

  // Add event listeners for add to cart buttons
  window.cartService.addToCartListeners();

  // Add animation for staggered loading
  const cards = featuredProductsContainer.querySelectorAll(".product-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("loaded");
    }, 100 * index);
  });
}

// Initialize product listing page
function initProductsPage() {
  loadProducts();
  initFilters();
  initSortingAndViewControls();
}

// Initialize filters
function initFilters() {
  const categoryFiltersContainer = document.getElementById("categoryFilters");
  const categoryParam = new URLSearchParams(window.location.search).get(
    "category"
  );

  if (categoryFiltersContainer) {
    const categories = window.productService.getCategories();
    let html = "";

    categories.forEach((category) => {
      const isChecked =
        categoryParam && parseInt(categoryParam) === category.id;

      html += `
        <div class="form-check mb-2">
          <input class="form-check-input category-filter" type="checkbox" id="category-${
            category.id
          }" value="${category.id}" ${isChecked ? "checked" : ""}>
          <label class="form-check-label" for="category-${category.id}">
            ${category.name}
          </label>
        </div>
      `;
    });

    categoryFiltersContainer.innerHTML = html;
  }

  // Initialize range slider
  const priceRange = document.getElementById("priceRange");
  const minPriceInput = document.getElementById("minPrice");
  const maxPriceInput = document.getElementById("maxPrice");

  if (priceRange && minPriceInput && maxPriceInput) {
    // Set initial value from inputs or default to min/max values
    const allProducts = window.productService.getAllProducts();
    const prices = allProducts.map((product) => product.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice / 2;

    // Update max input when range changes
    priceRange.addEventListener("input", (e) => {
      maxPriceInput.value = e.target.value;
    });

    // Apply filters button
    const applyFiltersBtn = document.getElementById("applyFilters");
    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener("click", () => {
        const selectedCategories = [];
        document
          .querySelectorAll(".category-filter:checked")
          .forEach((checkbox) => {
            selectedCategories.push(checkbox.value);
          });

        const filters = {};

        if (selectedCategories.length > 0) {
          filters.category = selectedCategories[0];
        }

        if (minPriceInput.value) {
          filters.minPrice = parseFloat(minPriceInput.value);
        }

        if (maxPriceInput.value) {
          filters.maxPrice = parseFloat(maxPriceInput.value);
        }

        loadProducts(filters);
        updateURL("index.html", filters);
      });
    }

    // Reset filters button
    const resetFiltersBtn = document.getElementById("resetFilters");
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener("click", () => {
        loadProducts();
        updateURL("index.html");
      });
    }
  }
}

// Initialize sorting and view controls
function initSortingAndViewControls() {
  const sortSelect = document.getElementById("sortSelect");
  const viewSelect = document.getElementById("viewSelect");
  const gridViewBtn = document.getElementById("gridViewBtn");
  const listViewBtn = document.getElementById("listViewBtn");

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      loadProducts({ sort: e.target.value });
      updateURL("index.html", { sort: e.target.value });
    });
  }

  if (viewSelect) {
    viewSelect.addEventListener("change", (e) => {
      loadProducts({ view: e.target.value });
      updateURL("index.html", { view: e.target.value });
    });
  }

  if (gridViewBtn) {
    gridViewBtn.addEventListener("click", () => {
      loadProducts({ view: "grid" });
      updateURL("index.html", { view: "grid" });
    });
  }

  if (listViewBtn) {
    listViewBtn.addEventListener("click", () => {
      loadProducts({ view: "list" });
      updateURL("index.html", { view: "list" });
    });
  }
}

// Initialize cart events
function initCartEvents() {
  const clearCartBtn = document.getElementById("clearCart");
  const applyCouponBtn = document.getElementById("applyCoupon");
  const checkoutBtn = document.getElementById("checkoutButton");

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (confirm("Êtes-vous sûr de vouloir vider votre panier ?")) {
        window.cartService.clearCart();
      }
    });
  }

  if (applyCouponBtn) {
    applyCouponBtn.addEventListener("click", () => {
      const couponInput = document.getElementById("couponCode");
      const couponCode = couponInput.value.trim().toUpperCase();

      if (couponCode) {
        window.cartService.applyCoupon(couponCode);
      }
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      alert(
        "Fonctionnalité de paiement en cours de développement. Merci de votre patience !"
      );
    });
  }
}

// Initialize back to top button
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");

  if (backToTopBtn) {
    // Show button when user scrolls down 200px
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    // Scroll to top when button is clicked
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}
