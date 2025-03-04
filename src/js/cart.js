
// import { getLocalStorage, qs } from "./utils.mjs";

// function fixPath(path) {
//   if (!path) return '';

//   const isProduction = window.location.hostname !== 'localhost' &&
//                       window.location.hostname !== '127.0.0.1';

//   if (isProduction) {
//     return '/' + path.replace(/^\.+\//, '');
//   }

//   return path;
// }

// function calculateCartTotals(cartItems) {
//   if (!Array.isArray(cartItems)) return { totalItems: 0, totalAmount: 0 };

//   return cartItems.reduce((acc, item) => ({
//     totalItems: acc.totalItems + 1,
//     totalAmount: acc.totalAmount + (item.FinalPrice || 0)
//   }), { totalItems: 0, totalAmount: 0 });
// }

// function cartItemTemplate(item, totals) {
//   if (!item) return "";

//   try {
//     const imagePath = fixPath(item.Image);
//     return `<li class="cart-card divider">
//       <a href="#" class="cart-card__image">
//         <img
//           src="${imagePath}"
//           alt="${item.Name || 'Product'}"
//         />
//       </a>
//       <a href="#">
//         <h2 class="card__name">${item.Name || 'Unknown Product'}</h2>
//       </a>
//       <p class="cart-card__color">${item.Colors?.[0]?.ColorName || 'N/A'}</p>
//       <p class="cart-card__quantity">qty: 1</p>
//       <p class="cart-card__price">$${item.FinalPrice ? item.FinalPrice.toFixed(2) : '0.00'}</p>
//     </li>`;
//   } catch (e) {
//     console.error("Error creating cart item template:", e);
//     return "";
//   }
// }

// function cartSummaryTemplate(totals) {
//   return `
//     <li class="cart-card divider cart-summary">
//       <div class="cart-summary__details">
//         <p class="cart-summary__total-items">Total Items: ${totals.totalItems}</p>
//         <p class="cart-summary__total-amount">Total Amount: $${totals.totalAmount.toFixed(2)}</p>
//       </div>
//     </li>`;
// }

// export function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart") || [];
//   const totals = calculateCartTotals(cartItems);

//   // Generate HTML for cart items
//   const itemsHtml = cartItems.map(item => cartItemTemplate(item)).join("");

//   // Add summary at the end
//   const summaryHtml = cartSummaryTemplate(totals);

//   // Combine items and summary
//   const finalHtml = itemsHtml + summaryHtml;

//   // Update the DOM
//   const productList = document.querySelector(".cart-product");
//   if (productList) {
//     productList.innerHTML = finalHtml;
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   renderCartContents();
// });

















// SHOW TOTAL ITEMS ONLY WHEN THERE'S ITEM IN THE CART

// import { getLocalStorage, qs } from "./utils.mjs";

// function fixPath(path) {
//   if (!path) return '';

//   const isProduction = window.location.hostname !== 'localhost' &&
//                       window.location.hostname !== '127.0.0.1';

//   if (isProduction) {
//     return '/' + path.replace(/^\.+\//, '');
//   }

//   return path;
// }

// function calculateCartTotals(cartItems) {
//   if (!Array.isArray(cartItems)) return { totalItems: 0, totalAmount: 0 };

//   return cartItems.reduce((acc, item) => ({
//     totalItems: acc.totalItems + 1,
//     totalAmount: acc.totalAmount + (item.FinalPrice || 0)
//   }), { totalItems: 0, totalAmount: 0 });
// }

// function cartItemTemplate(item, totals) {
//   if (!item) return "";

//   try {
//     const imagePath = fixPath(item.Image);
//     return `<li class="cart-card divider">
//       <a href="#" class="cart-card__image">
//         <img
//           src="${imagePath}"
//           alt="${item.Name || 'Product'}"
//         />
//       </a>
//       <a href="#">
//         <h2 class="card__name">${item.Name || 'Unknown Product'}</h2>
//       </a>
//       <p class="cart-card__color">${item.Colors?.[0]?.ColorName || 'N/A'}</p>
//       <p class="cart-card__quantity">qty: 1</p>
//       <p class="cart-card__price">$${item.FinalPrice ? item.FinalPrice.toFixed(2) : '0.00'}</p>
//     </li>`;
//   } catch (e) {
//     console.error("Error creating cart item template:", e);
//     return "";
//   }
// }

// function cartSummaryTemplate(totals) {
//   if (totals.totalItems === 0) {
//     return ''; // Return an empty string if the cart is empty
//   }

//   return `
//     <li class="cart-card divider cart-summary">
//       <div class="cart-summary__details">
//         <p class="cart-summary__total-items">Total Items: ${totals.totalItems}</p>
//         <p class="cart-summary__total-amount">Total Amount: $${totals.totalAmount.toFixed(2)}</p>
//       </div>
//     </li>`;
// }

// export function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart") || [];
//   const totals = calculateCartTotals(cartItems);

//   // Generate HTML for cart items
//   const itemsHtml = cartItems.map(item => cartItemTemplate(item)).join("");

//   // Add summary at the end if there are items
//   const summaryHtml = cartSummaryTemplate(totals);

//   // Combine items and summary
//   const finalHtml = itemsHtml + summaryHtml;

//   // Update the DOM
//   const productList = document.querySelector(".cart-product");
//   if (productList) {
//     productList.innerHTML = finalHtml;
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   renderCartContents();
// });
























// // NEW UPDATED AND WORKING.

// // File: cart.js
// import { getLocalStorage, setLocalStorage, qs } from "./utils.mjs";
// import { updateCartCount } from "./cartCount.js";

// function fixPath(path) {
//   if (!path) return '';

//   const isProduction = window.location.hostname !== 'localhost' &&
//                       window.location.hostname !== '127.0.0.1';

//   if (isProduction) {
//     return '/' + path.replace(/^\.+\//, '');
//   }

//   return path;
// }

// function calculateCartTotals(cartItems) {
//   if (!Array.isArray(cartItems)) return { totalItems: 0, totalAmount: 0 };

//   return cartItems.reduce((acc, item) => ({
//     totalItems: acc.totalItems + 1,
//     totalAmount: acc.totalAmount + (item.FinalPrice || 0)
//   }), { totalItems: 0, totalAmount: 0 });
// }

// function cartItemTemplate(item) {
//   if (!item) return "";

//   try {
//     const imagePath = fixPath(item.Image);
//     return `<li class="cart-card divider">
//       <a href="#" class="cart-card__image">
//         <img
//           src="${imagePath}"
//           alt="${item.Name || 'Product'}"
//         />
//       </a>
//       <a href="#">
//         <h2 class="card__name">${item.Name || 'Unknown Product'}</h2>
//       </a>
//       <p class="cart-card__color">${item.Colors?.[0]?.ColorName || 'N/A'}</p>
//       <p class="cart-card__quantity">qty: 1</p>
//       <p class="cart-card__price">$${item.FinalPrice ? item.FinalPrice.toFixed(2) : '0.00'}</p>
//       <span class="delete-item" data-id="${item.Id}">X</span>
//     </li>`;
//   } catch (e) {
//     console.error("Error creating cart item template:", e);
//     return "";
//   }
// }

// function cartSummaryTemplate(totals) {
//   if (totals.totalItems === 0) {
//     return ''; // Return an empty string if the cart is empty
//   }

//   return `
//     <li class="cart-card divider cart-summary">
//       <div class="cart-summary__details">
//         <p class="cart-summary__total-items">Total Items: ${totals.totalItems}</p>
//         <p class="cart-summary__total-amount">Total Amount: $${totals.totalAmount.toFixed(2)}</p>
//       </div>
//     </li>`;
// }

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart") || [];
//   const totals = calculateCartTotals(cartItems);

//   // Generate HTML for cart items
//   const itemsHtml = cartItems.map(item => cartItemTemplate(item)).join("");

//   // Add summary at the end if there are items
//   const summaryHtml = cartSummaryTemplate(totals);

//   // Combine items and summary
//   const finalHtml = itemsHtml + summaryHtml;

//   // Update the DOM
//   const productList = qs(".cart-product");
//   if (productList) {
//     productList.innerHTML = finalHtml;
//   }

//   // Add "Clear All" button if there are items in the cart
//   const clearAllButton = qs("#clear-all");
//   if (cartItems.length > 0) {
//     if (!clearAllButton) {
//       const button = document.createElement("button");
//       button.id = "clear-all";
//       button.textContent = "Clear All Items";
//       button.addEventListener("click", clearAllItems);
//       qs(".products").appendChild(button);
//     }
//   } else if (clearAllButton) {
//     clearAllButton.remove();
//   }

//   // Add event listeners for delete buttons
//   document.querySelectorAll(".delete-item").forEach(button => {
//     button.addEventListener("click", deleteItem);
//   });
// }

// function deleteItem(event) {
//   const itemId = event.target.dataset.id;
//   let cartItems = getLocalStorage("so-cart") || [];
//   cartItems = cartItems.filter(item => item.Id !== itemId);
//   setLocalStorage("so-cart", cartItems);
//   renderCartContents();
//   updateCartCount();
// }

// function clearAllItems() {
//   localStorage.removeItem("so-cart");
//   renderCartContents();
//   updateCartCount();
// }

// document.addEventListener("DOMContentLoaded", () => {
//   renderCartContents();
// });

// export { renderCartContents };

























// import { getLocalStorage, setLocalStorage, qs } from "./utils.mjs"
// import { updateCartCount } from "./cartCount.js"

// function fixPath(path) {
//   if (!path) return ""

//   const isProduction = window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1"

//   if (isProduction) {
//     return "/" + path.replace(/^\.+\//, "")
//   }

//   return path
// }

// function calculateCartTotals(cartItems) {
//   if (!Array.isArray(cartItems)) return { totalItems: 0, totalAmount: 0 }

//   return cartItems.reduce(
//     (acc, item) => ({
//       totalItems: acc.totalItems + (item.quantity || 1),
//       totalAmount: acc.totalAmount + (item.FinalPrice || 0) * (item.quantity || 1),
//     }),
//     { totalItems: 0, totalAmount: 0 },
//   )
// }

// function cartItemTemplate(item) {
//   if (!item) return ""

//   try {
//     const imagePath = fixPath(item.Image)
//     return `<li class="cart-card divider">
//       <a href="#" class="cart-card__image">
//         <img
//           src="${imagePath}"
//           alt="${item.Name || "Product"}"
//         />
//       </a>
//       <a href="#">
//         <h2 class="card__name">${item.Name || "Unknown Product"}</h2>
//       </a>
//       <p class="cart-card__color">${item.Colors?.[0]?.ColorName || "N/A"}</p>
//       <p class="cart-card__quantity">qty: ${item.quantity || 1}</p>
//       <p class="cart-card__price">$${((item.FinalPrice || 0) * (item.quantity || 1)).toFixed(2)}</p>
//       <span class="delete-item" data-id="${item.Id}">X</span>
//     </li>`
//   } catch (e) {
//     console.error("Error creating cart item template:", e)
//     return ""
//   }
// }

// function cartSummaryTemplate(totals) {
//   if (totals.totalItems === 0) {
//     return "" // Return an empty string if the cart is empty
//   }

//   return `
//     <li class="cart-card divider cart-summary">
//       <div class="cart-summary__details">
//         <p class="cart-summary__total-items">Total Items: ${totals.totalItems}</p>
//         <p class="cart-summary__total-amount">Total Amount: $${totals.totalAmount.toFixed(2)}</p>
//       </div>
//     </li>`
// }

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart") || []
//   const totals = calculateCartTotals(cartItems)

//   // Generate HTML for cart items
//   const itemsHtml = cartItems.map((item) => cartItemTemplate(item)).join("")

//   // Add summary at the end if there are items
//   const summaryHtml = cartSummaryTemplate(totals)

//   // Combine items and summary
//   const finalHtml = itemsHtml + summaryHtml

//   // Update the DOM
//   const productList = qs(".cart-product")
//   if (productList) {
//     productList.innerHTML = finalHtml
//   }

//   // Add "Clear All" button if there are items in the cart
//   const clearAllButton = qs("#clear-all")
//   if (cartItems.length > 0) {
//     if (!clearAllButton) {
//       const button = document.createElement("button")
//       button.id = "clear-all"
//       button.textContent = "Clear All Items"
//       button.addEventListener("click", clearAllItems)
//       qs(".products").appendChild(button)
//     }
//   } else if (clearAllButton) {
//     clearAllButton.remove()
//   }

//   // Add event listeners for delete buttons
//   document.querySelectorAll(".delete-item").forEach((button) => {
//     button.addEventListener("click", deleteItem)
//   })
// }

// function deleteItem(event) {
//   const itemId = event.target.dataset.id
//   let cartItems = getLocalStorage("so-cart") || []
//   cartItems = cartItems.filter((item) => item.Id !== itemId)
//   setLocalStorage("so-cart", cartItems)
//   renderCartContents()
//   updateCartCount()
// }

// function clearAllItems() {
//   localStorage.removeItem("so-cart")
//   renderCartContents()
//   updateCartCount()
// }

// document.addEventListener("DOMContentLoaded", () => {
//   renderCartContents()
// })

// export { renderCartContents }
























// import { getLocalStorage, setLocalStorage, qs } from "./utils.mjs"
// import { updateCartCount } from "./cartCount.js"

// function fixPath(path) {
//   if (!path) return ""

//   const isProduction = window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1"

//   if (isProduction) {
//     return "/" + path.replace(/^\.+\//, "")
//   }

//   return path
// }

// function calculateCartTotals(cartItems) {
//   if (!Array.isArray(cartItems)) return { totalItems: 0, totalAmount: 0 }

//   return cartItems.reduce(
//     (acc, item) => ({
//       totalItems: acc.totalItems + (item.quantity || 1),
//       totalAmount: acc.totalAmount + (item.FinalPrice || 0) * (item.quantity || 1),
//     }),
//     { totalItems: 0, totalAmount: 0 },
//   )
// }

// function cartItemTemplate(item) {
//   if (!item) return ""

//   try {
//     const imagePath = fixPath(item.Image)
//     return `<li class="cart-card divider">
//       <a href="#" class="cart-card__image">
//         <img
//           src="${imagePath}"
//           alt="${item.Name || "Product"}"
//         />
//       </a>
//       <a href="#">
//         <h2 class="card__name">${item.Name || "Unknown Product"}</h2>
//       </a>
//       <p class="cart-card__color">${item.Colors?.[0]?.ColorName || "N/A"}</p>
//       <div class="cart-card__quantity">
//         <button class="quantity-btn decrease-quantity" data-id="${item.Id}">-</button>
//         <span class="quantity-display">${item.quantity || 1}</span>
//         <button class="quantity-btn increase-quantity" data-id="${item.Id}">+</button>
//       </div>
//       <p class="cart-card__price">$${((item.FinalPrice || 0) * (item.quantity || 1)).toFixed(2)}</p>
//       <span class="delete-item" data-id="${item.Id}">X</span>
//     </li>`
//   } catch (e) {
//     console.error("Error creating cart item template:", e)
//     return ""
//   }
// }

// function cartSummaryTemplate(totals) {
//   if (totals.totalItems === 0) {
//     return "" // Return an empty string if the cart is empty
//   }

//   return `
//     <li class="cart-card divider cart-summary">
//       <div class="cart-summary__details">
//         <p class="cart-summary__total-items">Total Items: ${totals.totalItems}</p>
//         <p class="cart-summary__total-amount">Total Amount: $${totals.totalAmount.toFixed(2)}</p>
//       </div>
//     </li>`
// }

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart") || []
//   const totals = calculateCartTotals(cartItems)

//   // Generate HTML for cart items
//   const itemsHtml = cartItems.map((item) => cartItemTemplate(item)).join("")

//   // Add summary at the end if there are items
//   const summaryHtml = cartSummaryTemplate(totals)

//   // Combine items and summary
//   const finalHtml = itemsHtml + summaryHtml

//   // Update the DOM
//   const productList = qs(".cart-product")
//   if (productList) {
//     productList.innerHTML = finalHtml
//   }

//   // Add "Clear All" button if there are items in the cart
//   const clearAllButton = qs("#clear-all")
//   if (cartItems.length > 0) {
//     if (!clearAllButton) {
//       const button = document.createElement("button")
//       button.id = "clear-all"
//       button.textContent = "Clear All Items"
//       button.addEventListener("click", clearAllItems)
//       qs(".products").appendChild(button)
//     }
//   } else if (clearAllButton) {
//     clearAllButton.remove()
//   }

//   // Add event listeners for delete buttons
//   document.querySelectorAll(".delete-item").forEach((button) => {
//     button.addEventListener("click", deleteItem)
//   })

//   // Add event listeners for quantity buttons
//   document.querySelectorAll(".increase-quantity").forEach((button) => {
//     button.addEventListener("click", increaseQuantity)
//   })
//   document.querySelectorAll(".decrease-quantity").forEach((button) => {
//     button.addEventListener("click", decreaseQuantity)
//   })
// }

// function deleteItem(event) {
//   const itemId = event.target.dataset.id
//   let cartItems = getLocalStorage("so-cart") || []
//   cartItems = cartItems.filter((item) => item.Id !== itemId)
//   setLocalStorage("so-cart", cartItems)
//   renderCartContents()
//   updateCartCount()
// }

// function increaseQuantity(event) {
//   const itemId = event.target.dataset.id
//   const cartItems = getLocalStorage("so-cart") || []
//   const itemIndex = cartItems.findIndex((item) => item.Id === itemId)
//   if (itemIndex !== -1) {
//     cartItems[itemIndex].quantity = (cartItems[itemIndex].quantity || 1) + 1
//     setLocalStorage("so-cart", cartItems)
//     renderCartContents()
//     updateCartCount()
//   }
// }

// function decreaseQuantity(event) {
//   const itemId = event.target.dataset.id
//   const cartItems = getLocalStorage("so-cart") || []
//   const itemIndex = cartItems.findIndex((item) => item.Id === itemId)
//   if (itemIndex !== -1) {
//     if (cartItems[itemIndex].quantity > 1) {
//       cartItems[itemIndex].quantity -= 1
//     } else {
//       cartItems.splice(itemIndex, 1)
//     }
//     setLocalStorage("so-cart", cartItems)
//     renderCartContents()
//     updateCartCount()
//   }
// }

// function clearAllItems() {
//   localStorage.removeItem("so-cart")
//   renderCartContents()
//   updateCartCount()
// }

// document.addEventListener("DOMContentLoaded", () => {
//   renderCartContents()
// })

// export { renderCartContents }




























import { getLocalStorage, setLocalStorage, qs } from "./utils.mjs"
import { updateCartCount } from "./cartCount.js"

function fixPath(path) {
  if (!path) return ""

  const isProduction = window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1"

  if (isProduction) {
    return "/" + path.replace(/^\.+\//, "")
  }

  return path
}

function calculateCartTotals(cartItems) {
  if (!Array.isArray(cartItems)) return { totalItems: 0, totalAmount: 0 }

  return cartItems.reduce(
    (acc, item) => ({
      totalItems: acc.totalItems + (item.quantity || 1),
      totalAmount: acc.totalAmount + (item.FinalPrice || 0) * (item.quantity || 1),
    }),
    { totalItems: 0, totalAmount: 0 },
  )
}



function cartItemTemplate(item) {
  if (!item) return ""

  try {
    let imagePath
    if (item.Image) {
      // For tents.json structure
      imagePath = fixPath(item.Image)
    } else if (item.Images && item.Images.PrimaryLarge) {
      // For backpacks.json structure
      imagePath = item.Images.PrimaryLarge
    } else {
      // Fallback image if no image is available
      imagePath = "/images/no-image-available.jpg"
    }

    return `<li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img
          src="${imagePath}"
          alt="${item.Name || "Product"}"
        />
      </a>
      <a href="#">
        <h2 class="card__name">${item.Name || "Unknown Product"}</h2>
      </a>
      <p class="cart-card__color">${item.Colors?.[0]?.ColorName || "N/A"}</p>
      <div class="cart-card__quantity">
        <button class="quantity-btn decrease-quantity" data-id="${item.Id}">-</button>
        <span class="quantity-display">${item.quantity || 1}</span>
        <button class="quantity-btn increase-quantity" data-id="${item.Id}">+</button>
      </div>
      <p class="cart-card__price">$${((item.FinalPrice || 0) * (item.quantity || 1)).toFixed(2)}</p>
      <span class="delete-item" data-id="${item.Id}">X</span>
    </li>`
  } catch (e) {
    console.error("Error creating cart item template:", e)
    return ""
  }
}


function cartSummaryTemplate(totals) {
  if (totals.totalItems === 0) {
    return "" // Return an empty string if the cart is empty
  }

  return `
    <li class="cart-card divider cart-summary">
      <div class="cart-summary__details">
        <p class="cart-summary__total-items">Total Items: ${totals.totalItems}</p>
        <p class="cart-summary__total-amount">Total Amount: $${totals.totalAmount.toFixed(2)}</p>
      </div>
    </li>`
}

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || []
  const totals = calculateCartTotals(cartItems)

  // Generate HTML for cart items
  const itemsHtml = cartItems.map((item) => cartItemTemplate(item)).join("")

  // Add summary at the end if there are items
  const summaryHtml = cartSummaryTemplate(totals)

  // Combine items and summary
  const finalHtml = itemsHtml + summaryHtml

  // Update the DOM
  const productList = qs(".cart-product")
  if (productList) {
    productList.innerHTML = finalHtml
  }

  // Add "Clear All" button if there are items in the cart
  const clearAllButton = qs("#clear-all")
  if (cartItems.length > 0) {
    if (!clearAllButton) {
      const button = document.createElement("button")
      button.id = "clear-all"
      button.textContent = "Clear All Items"
      button.addEventListener("click", clearAllItems)
      qs(".products").appendChild(button)
    }
  } else if (clearAllButton) {
    clearAllButton.remove()
  }

  // Add event listeners for delete buttons
  document.querySelectorAll(".delete-item").forEach((button) => {
    button.addEventListener("click", deleteItem)
  })

  // Add event listeners for quantity buttons
  document.querySelectorAll(".increase-quantity").forEach((button) => {
    button.addEventListener("click", increaseQuantity)
  })
  document.querySelectorAll(".decrease-quantity").forEach((button) => {
    button.addEventListener("click", decreaseQuantity)
  })
}

function deleteItem(event) {
  const itemId = event.target.dataset.id
  let cartItems = getLocalStorage("so-cart") || []
  cartItems = cartItems.filter((item) => item.Id !== itemId)
  setLocalStorage("so-cart", cartItems)
  renderCartContents()
  updateCartCount()
}

function increaseQuantity(event) {
  const itemId = event.target.dataset.id
  const cartItems = getLocalStorage("so-cart") || []
  const itemIndex = cartItems.findIndex((item) => item.Id === itemId)
  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity = (cartItems[itemIndex].quantity || 1) + 1
    setLocalStorage("so-cart", cartItems)
    renderCartContents()
    updateCartCount()
  }
}

function decreaseQuantity(event) {
  const itemId = event.target.dataset.id
  const cartItems = getLocalStorage("so-cart") || []
  const itemIndex = cartItems.findIndex((item) => item.Id === itemId)
  if (itemIndex !== -1) {
    if (cartItems[itemIndex].quantity > 1) {
      cartItems[itemIndex].quantity -= 1
    } else {
      cartItems.splice(itemIndex, 1)
    }
    setLocalStorage("so-cart", cartItems)
    renderCartContents()
    updateCartCount()
  }
}

function clearAllItems() {
  localStorage.removeItem("so-cart")
  renderCartContents()
  updateCartCount()
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartContents()
})

export { renderCartContents }
