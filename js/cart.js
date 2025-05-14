// Cart functionality

// Initialize cart from localStorage or create empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Update cart count in the UI
function updateCartCount() {
  const cartCountElements = document.querySelectorAll("#cartCount");
  cartCountElements.forEach((element) => {
    element.textContent = getTotalItems();
  });
}

// Get total number of items in cart
function getTotalItems() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

// Add item to cart
function addToCart(productId, quantity = 1) {
  const product = window.productService.getProductById(productId);

  if (!product) {
    console.error("Product not found");
    return false;
  }

  // Check if product already exists in cart
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    });
  }

  saveCart();
  showToast(`${product.name} ajouté au panier !`);
  return true;
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();

  // If we're on the cart page, update the cart display
  if (document.getElementById("cartItems")) {
    renderCart();
  }
}

// Update item quantity
function updateItemQuantity(productId, quantity) {
  const item = cart.find((item) => item.id === productId);

  if (item) {
    if (quantity > 0) {
      item.quantity = quantity;
    } else {
      // If quantity is 0 or negative, remove the item
      return removeFromCart(productId);
    }

    saveCart();

    // If we're on the cart page, update the cart display
    if (document.getElementById("cartItems")) {
      renderCart();
    }

    return true;
  }

  return false;
}

// Clear cart
function clearCart() {
  cart = [];
  saveCart();

  // If we're on the cart page, update the cart display
  if (document.getElementById("cartItems")) {
    renderCart();
  }
}

// Get cart subtotal
function getSubtotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Calculate shipping cost
function getShippingCost() {
  const subtotal = getSubtotal();
  // Free shipping over €100
  if (subtotal >= 100) {
    return 0;
  }
  // Base shipping cost
  return subtotal > 0 ? 5.99 : 0;
}

// Get total cost
function getTotal() {
  return getSubtotal() + getShippingCost();
}

// Format price
function formatPrice(price) {
  return `€${price.toFixed(2)}`;
}

// Show toast notification
function showToast(message) {
  // Create toast container if it doesn't exist
  let toastContainer = document.querySelector(".toast-container");

  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className =
      "toast-container position-fixed bottom-0 end-0 p-3";
    document.body.appendChild(toastContainer);
  }

  // Create toast element
  const toastId = `toast-${Date.now()}`;
  const toast = document.createElement("div");
  toast.className = "toast align-items-center text-white bg-primary border-0";
  toast.id = toastId;
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "assertive");
  toast.setAttribute("aria-atomic", "true");

  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        ${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  toastContainer.appendChild(toast);

  // Initialize Bootstrap toast
  const toastInstance = new bootstrap.Toast(toast, {
    animation: true,
    autohide: true,
    delay: 3000,
  });

  // Show toast
  toastInstance.show();

  // Remove toast after it's hidden
  toast.addEventListener("hidden.bs.toast", () => {
    toast.remove();
  });
}

// Render cart items in the cart page
function renderCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const emptyCartMessage = document.getElementById("emptyCart");
  const subtotalElement = document.getElementById("subtotal");
  const shippingElement = document.getElementById("shipping");
  const totalElement = document.getElementById("total");
  const checkoutButton = document.getElementById("checkoutButton");

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "";
    emptyCartMessage.classList.remove("d-none");
    subtotalElement.textContent = formatPrice(0);
    shippingElement.textContent = formatPrice(0);
    totalElement.textContent = formatPrice(0);
    checkoutButton.disabled = true;
    return;
  }

  emptyCartMessage.classList.add("d-none");
  checkoutButton.disabled = false;

  let cartHTML = "";

  cart.forEach((item) => {
    cartHTML += `
      <div class="card mb-3">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-md-2 mb-2 mb-md-0">
              <img src="${item.image}" alt="${
      item.name
    }" class="img-fluid rounded cart-item-img">
            </div>
            <div class="col-md-4 mb-2 mb-md-0">
              <h5 class="card-title mb-1">${item.name}</h5>
              <p class="card-text text-muted">ID: ${item.id}</p>
            </div>
            <div class="col-md-2 mb-2 mb-md-0 text-md-center">
              <span class="fw-bold">${formatPrice(item.price)}</span>
            </div>
            <div class="col-md-2 mb-2 mb-md-0">
              <div class="quantity-control">
                <button class="btn btn-sm btn-outline-secondary decrease-quantity" data-id="${
                  item.id
                }">-</button>
                <input type="number" min="1" value="${
                  item.quantity
                }" class="form-control item-quantity" data-id="${item.id}">
                <button class="btn btn-sm btn-outline-secondary increase-quantity" data-id="${
                  item.id
                }">+</button>
              </div>
            </div>
            <div class="col-md-2 text-md-end">
              <span class="fw-bold d-block mb-2">${formatPrice(
                item.price * item.quantity
              )}</span>
              <button class="btn btn-sm btn-outline-danger remove-item" data-id="${
                item.id
              }">
                <i class="bi bi-trash me-1"></i>Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  cartItemsContainer.innerHTML = cartHTML;

  // Set summary values
  const subtotal = getSubtotal();
  const shipping = getShippingCost();
  const total = getTotal();

  subtotalElement.textContent = formatPrice(subtotal);
  shippingElement.textContent = formatPrice(shipping);
  totalElement.textContent = formatPrice(total);

  // Add event listeners for quantity controls
  document.querySelectorAll(".decrease-quantity").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      const item = cart.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        updateItemQuantity(id, item.quantity - 1);
      }
    });
  });

  document.querySelectorAll(".increase-quantity").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      const item = cart.find((item) => item.id === id);
      if (item) {
        updateItemQuantity(id, item.quantity + 1);
      }
    });
  });

  document.querySelectorAll(".item-quantity").forEach((input) => {
    input.addEventListener("change", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      const quantity = parseInt(e.currentTarget.value);
      if (!isNaN(quantity) && quantity > 0) {
        updateItemQuantity(id, quantity);
      } else {
        // Reset to current value if invalid
        e.currentTarget.value = cart.find((item) => item.id === id).quantity;
      }
    });
  });

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      removeFromCart(id);
    });
  });
}

// Load recommended products on cart page
function loadRecommendedProducts() {
  const recommendedContainer = document.getElementById("recommendedProducts");

  if (!recommendedContainer) return;

  // Get product IDs from cart
  const cartProductIds = cart.map((item) => item.id);

  // Get all products and filter out those already in cart
  let availableProducts = window.productService
    .getAllProducts()
    .filter((product) => !cartProductIds.includes(product.id))
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, 4); // Take 4 random products

  let html = "";

  availableProducts.forEach((product) => {
    html += createProductCard(product);
  });

  recommendedContainer.innerHTML = html;

  // Add event listeners for add to cart buttons
  addToCartListeners();
}

// Create product card HTML
function createProductCard(product) {
  let discountBadge = "";
  let oldPriceElement = "";

  if (product.discount > 0) {
    discountBadge = `<div class="badge bg-danger badge-corner">-${product.discount}%</div>`;
    oldPriceElement = `<span class="price-old">${formatPrice(
      product.oldPrice
    )}</span>`;
  }

  let newBadge = product.isNew
    ? '<div class="badge bg-success ms-2">Nouveau</div>'
    : "";

  return `
    <div class="col-md-6 col-lg-3">
      <div class="card product-card h-100">
        ${discountBadge}
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <div class="rating mb-2">
            ${createStarRating(product.rating)}
            <span class="text-muted ms-1">(${product.reviewCount})</span>
          </div>
          <div class="card-price mt-auto mb-2">
            <span class="fw-bold">${formatPrice(product.price)}</span>
            ${oldPriceElement}
            ${newBadge}
          </div>
          <button class="btn btn-primary btn-add-cart" data-id="${product.id}">
            <i class="bi bi-cart-plus me-1"></i>Ajouter au panier
          </button>
          <a href="product.html?id=${product.id}" class="stretched-link"></a>
        </div>
      </div>
    </div>
  `;
}

// Create star rating HTML
function createStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let starsHTML = "";

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="bi bi-star-fill"></i>';
  }

  // Add half star
  if (halfStar) {
    starsHTML += '<i class="bi bi-star-half"></i>';
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="bi bi-star"></i>';
  }

  return starsHTML;
}

// Add event listeners for add to cart buttons
function addToCartListeners() {
  document.querySelectorAll(".btn-add-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const productId = parseInt(e.currentTarget.dataset.id);
      addToCart(productId);
    });
  });
}

// Coupon code handling
function applyCoupon(code) {
  // Simple coupon code implementation
  const validCoupons = {
    WELCOME10: { type: "percentage", value: 10 },
    FREESHIP: { type: "shipping", value: 0 },
    DISCOUNT20: { type: "percentage", value: 20 },
  };

  const coupon = validCoupons[code];

  if (!coupon) {
    showToast("Code promo invalide");
    return false;
  }

  showToast("Code promo appliqué avec succès!");

  // Apply coupon based on type
  if (coupon.type === "percentage") {
    // Implementation would be here in a real app
    showToast(`${coupon.value}% de réduction appliqué !`);
  } else if (coupon.type === "shipping") {
    showToast("Livraison gratuite appliquée !");
  }

  return true;
}

// Export cart functions
window.cartService = {
  getCart: () => cart,
  addToCart,
  removeFromCart,
  updateItemQuantity,
  clearCart,
  getSubtotal,
  getShippingCost,
  getTotal,
  formatPrice,
  renderCart,
  loadRecommendedProducts,
  createProductCard,
  createStarRating,
  addToCartListeners,
  applyCoupon,
};

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});
