

// import { getLocalStorage, qs } from "./utils.mjs";

// function fixPath(path) {
//   if (!path) return '';

//   // Check if we're in production (Netlify)
//   const isProduction = window.location.hostname !== 'localhost' &&
//                       window.location.hostname !== '127.0.0.1';

//   // For production, convert to absolute path
//   if (isProduction) {
//     return '/' + path.replace(/^\.+\//, '');
//   }

//   // For local development, keep relative path
//   return path;
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
//     </li>`;
//   } catch (e) {
//     console.error("Error creating cart item template:", e);
//     return "";
//   }
// }

// export function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart");
//   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
// }

// document.addEventListener("DOMContentLoaded", () => {
//   renderCartContents();
// });




















import { getLocalStorage, qs } from "./utils.mjs";

function fixPath(path) {
  if (!path) return '';

  const isProduction = window.location.hostname !== 'localhost' &&
                      window.location.hostname !== '127.0.0.1';

  if (isProduction) {
    return '/' + path.replace(/^\.+\//, '');
  }

  return path;
}

function calculateCartTotals(cartItems) {
  if (!Array.isArray(cartItems)) return { totalItems: 0, totalAmount: 0 };

  return cartItems.reduce((acc, item) => ({
    totalItems: acc.totalItems + 1,
    totalAmount: acc.totalAmount + (item.FinalPrice || 0)
  }), { totalItems: 0, totalAmount: 0 });
}

function cartItemTemplate(item, totals) {
  if (!item) return "";

  try {
    const imagePath = fixPath(item.Image);
    return `<li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img
          src="${imagePath}"
          alt="${item.Name || 'Product'}"
        />
      </a>
      <a href="#">
        <h2 class="card__name">${item.Name || 'Unknown Product'}</h2>
      </a>
      <p class="cart-card__color">${item.Colors?.[0]?.ColorName || 'N/A'}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${item.FinalPrice ? item.FinalPrice.toFixed(2) : '0.00'}</p>
    </li>`;
  } catch (e) {
    console.error("Error creating cart item template:", e);
    return "";
  }
}

function cartSummaryTemplate(totals) {
  return `
    <li class="cart-card divider cart-summary">
      <div class="cart-summary__details">
        <p class="cart-summary__total-items">Total Items: ${totals.totalItems}</p>
        <p class="cart-summary__total-amount">Total Amount: $${totals.totalAmount.toFixed(2)}</p>
      </div>
    </li>`;
}

export function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const totals = calculateCartTotals(cartItems);

  // Generate HTML for cart items
  const itemsHtml = cartItems.map(item => cartItemTemplate(item)).join("");

  // Add summary at the end
  const summaryHtml = cartSummaryTemplate(totals);

  // Combine items and summary
  const finalHtml = itemsHtml + summaryHtml;

  // Update the DOM
  const productList = document.querySelector(".product-list");
  if (productList) {
    productList.innerHTML = finalHtml;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartContents();
});
