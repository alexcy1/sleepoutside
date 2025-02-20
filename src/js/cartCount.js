// // File: cartCount.js

// import { getLocalStorage, qs } from "./utils.mjs";

// function updateCartCount() {
//   const cartItems = getLocalStorage("so-cart") || [];
//   const totalItems = cartItems.length;

//   const cartCountElement = qs("#cart-count");
//   if (cartCountElement) {
//     cartCountElement.textContent = totalItems;

//     // Hide the count if it's zero
//     cartCountElement.style.display = totalItems > 0 ? "flex" : "none";
//   }
// }

// // Update cart count when the page loads
// document.addEventListener("DOMContentLoaded", updateCartCount);

// // Export the function so it can be called from other scripts if needed
// export { updateCartCount };












// // File: cartCount.js
// import { getLocalStorage, qs } from "./utils.mjs";

// export function updateCartCount() {
//   const cartItems = getLocalStorage("so-cart") || [];
//   const totalItems = cartItems.length;

//   const cartCountElement = qs("#cart-count");
//   if (cartCountElement) {
//     cartCountElement.textContent = totalItems;

//     // Hide the count if it's zero
//     cartCountElement.style.display = totalItems > 0 ? "flex" : "none";
//   }
// }

// // Update cart count when the page loads
// document.addEventListener("DOMContentLoaded", updateCartCount);










// // File: cartCount.js
// import { getLocalStorage, qs } from "./utils.mjs";

// export function updateCartCount() {
//   const cartItems = getLocalStorage("so-cart") || [];
//   const totalItems = cartItems.length;

//   const cartCountElement = qs("#cart-count");
//   if (cartCountElement) {
//     cartCountElement.textContent = totalItems;

//     // Hide the count if it's zero
//     cartCountElement.style.display = totalItems > 0 ? "flex" : "none";
//   }
// }

// // Update cart count when the page loads
// document.addEventListener("DOMContentLoaded", updateCartCount);

// // Export a function to add event listener for cart changes
// export function addCartListener(callback) {
//   window.addEventListener('cart-change', callback);
// }











// // File: cartCount.js
// import { getLocalStorage, qs } from "./utils.mjs";

// export function updateCartCount() {
//   const cartItems = getLocalStorage("so-cart") || [];
//   const totalItems = cartItems.length;

//   const cartCountElement = qs("#cart-count");
//   if (cartCountElement) {
//     cartCountElement.textContent = totalItems;

//     // Hide the count if it's zero
//     cartCountElement.style.display = totalItems > 0 ? "flex" : "none";
//     console.log(`Cart updated: ${totalItems} items`);
//   } else {
//     console.warn("#cart-count not found in the DOM");
//   }
// }

// // Export a function to add an event listener for cart changes
// export function addCartListener(callback) {
//   window.addEventListener("cart-change", callback);
// }









// File: cartCount.js
import { getLocalStorage, qs } from "./utils.mjs";

export function updateCartCount() {
  const cartItems = getLocalStorage("so-cart") || [];

  // Calculate the total number of items in the cart by summing up the quantities
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  const cartCountElement = qs("#cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;

    // Hide the count if it's zero
    cartCountElement.style.display = totalItems > 0 ? "flex" : "none";
    console.log(`Cart updated: ${totalItems} items`);
  } else {
    console.warn("#cart-count not found in the DOM");
  }
}

// Export a function to add an event listener for cart changes
export function addCartListener(callback) {
  window.addEventListener("cart-change", callback);
}
