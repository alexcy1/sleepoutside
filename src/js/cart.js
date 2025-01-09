// import { getLocalStorage } from "./utils.mjs";

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart");
//   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
// }

// function cartItemTemplate(item) {
//   const newItem = `<li class="cart-card divider">
//   <a href="#" class="cart-card__image">
//     <img
//       src="${item.Image}"
//       alt="${item.Name}"
//     />
//   </a>
//   <a href="#">
//     <h2 class="card__name">${item.Name}</h2>
//   </a>
//   <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//   <p class="cart-card__quantity">qty: 1</p>
//   <p class="cart-card__price">$${item.FinalPrice}</p>
// </li>`;

//   return newItem;
// }

// renderCartContents();










// // =================================================================

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

















import { getLocalStorage, qs } from "./utils.mjs";

function fixImagePath(imagePath) {
  if (!imagePath) return '';
  // Remove any leading dots and slashes
  const cleanPath = imagePath.replace(/^\.+\//, '');
  // Calculate path depth
  const pathDepth = window.location.pathname.split('/').length - 2;
  const pathPrefix = '../'.repeat(pathDepth);
  return `${pathPrefix}${cleanPath}`;
}

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const productList = qs(".product-list");

  if (!productList) {
    console.error("Product list element not found");
    return;
  }

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    productList.innerHTML = "<li class='empty-cart'>No items in cart</li>";
    return;
  }

  try {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    productList.innerHTML = htmlItems.join("");
    displayCartTotal(cartItems);
  } catch (e) {
    console.error("Error rendering cart contents:", e);
    productList.innerHTML = "<li>Error displaying cart items</li>";
  }
}

function cartItemTemplate(item) {
  if (!item) return "";

  try {
    // Create product detail link
    const productLink = `../product-pages/product-details.html?product=${item.Id}`;

    return `<li class="cart-card divider">
      <a href="${productLink}" class="cart-card__image">
        <img
          src="${fixImagePath(item.Image)}"
          alt="${item.Name || 'Product'}"
        />
      </a>
      <a href="${productLink}">
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

function displayCartTotal(cartItems) {
  try {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item?.FinalPrice) || 0;
      return sum + price;
    }, 0);

    let totalContainer = qs('.cart-total-container');
    if (!totalContainer) {
      totalContainer = document.createElement('div');
      totalContainer.classList.add('cart-total-container');
      const productList = qs('.product-list');
      if (productList && productList.parentNode) {
        productList.parentNode.insertBefore(totalContainer, productList.nextSibling);
      }
    }

    totalContainer.innerHTML = `<div class="cart-total">
      <p>Total: $${total.toFixed(2)}</p>
    </div>`;
  } catch (e) {
    console.error("Error calculating total:", e);
  }
}

// Add error boundary
function initCart() {
  try {
    renderCartContents();
  } catch (e) {
    console.error("Error initializing cart:", e);
    const productList = qs(".product-list");
    if (productList) {
      productList.innerHTML = "<li>Error loading cart</li>";
    }
  }
}

// Initialize cart display when DOM is ready
document.addEventListener('DOMContentLoaded', initCart);
