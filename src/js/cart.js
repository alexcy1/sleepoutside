
// import { getLocalStorage, qs } from "./utils.mjs";

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart");
//   const productList = qs(".product-list");

//   if (!Array.isArray(cartItems) || cartItems.length === 0) {
//     productList.innerHTML = "<li class='empty-cart'>No items in cart</li>";
//     return;
//   }

//   try {
//     const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//     productList.innerHTML = htmlItems.join("");
//     displayCartTotal(cartItems);
//   } catch (e) {
//     console.error("Error rendering cart contents:", e);
//     productList.innerHTML = "<li>Error displaying cart items</li>";
//   }
// }

// function cartItemTemplate(item) {
//   if (!item) return "";

//   try {
//     return `<li class="cart-card divider">
//       <a href="#" class="cart-card__image">
//         <img
//           src="${item.Image || ''}"
//           alt="${item.Name || 'Product'}"
//         />
//       </a>
//       <a href="#">
//         <h2 class="card__name">${item.Name || 'Unknown Product'}</h2>
//       </a>
//       <p class="cart-card__color">${item.Colors?.[0]?.ColorName || 'N/A'}</p>
//       <p class="cart-card__quantity">qty: 1</p>
//       <p class="cart-card__price">$${item.FinalPrice || '0.00'}</p>
//     </li>`;
//   } catch (e) {
//     console.error("Error creating cart item template:", e);
//     return "";
//   }
// }

// function displayCartTotal(cartItems) {
//   try {
//     const total = cartItems.reduce((sum, item) => sum + (parseFloat(item.FinalPrice) || 0), 0);

//     let totalContainer = qs('.cart-total-container');
//     if (!totalContainer) {
//       totalContainer = document.createElement('div');
//       totalContainer.classList.add('cart-total-container');
//       qs('.product-list').after(totalContainer);
//     }

//     totalContainer.innerHTML = `<div class="cart-total">
//       <p>Total: $${total.toFixed(2)}</p>
//     </div>`;
//   } catch (e) {
//     console.error("Error calculating total:", e);
//   }
// }

// // Initialize cart display
// renderCartContents();














import { qs } from "./utils.mjs";

function getCartItems() {
    const items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
}

function renderCartItems() {
    const cartItemsContainer = document.querySelector('#cart-items');
    const cartItems = getCartItems();

    if (!cartItemsContainer) {
        console.error("Cart items container not found!");
        return;
    }

    cartItemsContainer.innerHTML = cartItems
        .map(item => cartItemTemplate(item))
        .join('');
}

function fixPath(path) {
    if (!path) return '';
    const isProduction = window.location.hostname !== 'localhost' &&
                         window.location.hostname !== '127.0.0.1';
    return isProduction ? '/' + path.replace(/^\.+\//, '') : path;
}

function cartItemTemplate(item) {
    if (!item) return "";

    try {
        const imagePath = fixPath(item.Image);
        return `<li class="cart-card divider">
          <a href="#" class="cart-card__image">
            <img src="${imagePath}" alt="${item.Name || 'Product'}" />
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

renderCartItems();

