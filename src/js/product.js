
// import { setLocalStorage, qs } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";

// const dataSource = new ProductData("tents");

// function addProductToCart(product) {
//   try {
//     if (product) {
//       setLocalStorage("so-cart", product);
//       alert("Item added to cart successfully!");
//     }
//   } catch (e) {
//     console.error("Error adding product to cart:", e);
//     alert("Error adding item to cart. Please try again.");
//   }
// }

// // add to cart button event handler
// async function addToCartHandler(e) {
//   try {
//     const product = await dataSource.findProductById(e.target.dataset.id);
//     if (product) {
//       addProductToCart(product);
//     }
//   } catch (e) {
//     console.error("Error in add to cart handler:", e);
//     alert("Error adding item to cart. Please try again.");
//   }
// }

// // add listener to Add to Cart button
// qs("#addToCart").addEventListener("click", addToCartHandler);









///// WORKING TODAY 2 ==========================================
// import { setLocalStorage, getParam } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";

// const dataSource = new ProductData("tents");

// function addProductToCart(product) {
//   setLocalStorage("so-cart", product);
//   alert("Item added to cart successfully!"); // Added alert message
// }

// async function renderProductDetails(productId) {
//   const product = await dataSource.findProductById(productId);
//   document.querySelector(".product-detail").innerHTML = productTemplate(product);
//   document.getElementById("addToCart").addEventListener("click", () => addProductToCart(product));
// }

// function productTemplate(product) {
//   return `<h3>${product.Brand.Name}</h3>
//     <h2 class="divider">${product.NameWithoutBrand}</h2>
//     <img
//       class="divider"
//       src="${product.Image}"
//       alt="${product.NameWithoutBrand}"
//     />
//     <p class="product-card__price">$${product.FinalPrice}</p>
//     <p class="product__color">${product.Colors[0].ColorName}</p>
//     <p class="product__description">
//     ${product.DescriptionHtmlSimple}
//     </p>
//     <div class="product-detail__add">
//       <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
//     </div>`;
// }

// const productId = getParam("product");
// renderProductDetails(productId);








// THE BESTIS SO FAR ====================================================

// // File: product.js
// import { setLocalStorage, getParam } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";
// import { updateCartCount, addCartListener } from "./cartCount.js";

// const dataSource = new ProductData("tents");

// function addProductToCart(product) {
//   setLocalStorage("so-cart", product);
//   // Dispatch a custom event to notify of cart changes
//   window.dispatchEvent(new Event('cart-change'));
//   alert("Item added to cart successfully!");
// }

// async function renderProductDetails(productId) {
//   const product = await dataSource.findProductById(productId);
//   document.querySelector(".product-detail").innerHTML = productTemplate(product);
//   document.getElementById("addToCart").addEventListener("click", () => addProductToCart(product));
// }

// function productTemplate(product) {
//   return `<h3>${product.Brand.Name}</h3>
//     <h2 class="divider">${product.NameWithoutBrand}</h2>
//     <img
//       class="divider"
//       src="${product.Image}"
//       alt="${product.NameWithoutBrand}"
//     />
//     <p class="product-card__price">$${product.FinalPrice}</p>
//     <p class="product__color">${product.Colors[0].ColorName}</p>
//     <p class="product__description">
//     ${product.DescriptionHtmlSimple}
//     </p>
//     <div class="product-detail__add">
//       <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
//     </div>`;
// }

// const productId = getParam("product");
// renderProductDetails(productId);

// // Add listener for cart changes and update count
// addCartListener(updateCartCount);













// import { setLocalStorage, getParam } from "./utils.mjs"
// import ProductData from "./ProductData.mjs"
// import { updateCartCount, addCartListener } from "./cartCount.js"

// const dataSource = new ProductData("tents")

// function addProductToCart(product) {
//   setLocalStorage("so-cart", product)
//   // Dispatch a custom event to notify of cart changes
//   window.dispatchEvent(new Event("cart-change"))
//   alert("Item added to cart successfully!")
// }

// function calculateDiscount(suggestedRetailPrice, finalPrice) {
//   return suggestedRetailPrice - finalPrice
// }

// async function renderProductDetails(productId) {
//   const product = await dataSource.findProductById(productId)
//   document.querySelector(".product-detail").innerHTML = productTemplate(product)
//   document.getElementById("addToCart").addEventListener("click", () => addProductToCart(product))
// }

// function productTemplate(product) {
//   const discount = calculateDiscount(product.SuggestedRetailPrice, product.FinalPrice)
//   const discountPercentage = (discount / product.SuggestedRetailPrice) * 100

//   return `
//     <h3>${product.Brand.Name}</h3>
//     <h2 class="divider">${product.NameWithoutBrand}</h2>
//     <img
//       class="divider"
//       src="${product.Image}"
//       alt="${product.NameWithoutBrand}"
//     />
//     <div class="product-card__price-container">
//       <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//       <p class="product-card__suggested-price">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
//       ${
//         discount > 0
//           ? `
//         <p class="product-card__discount">
//           You save: $${discount.toFixed(2)} (${discountPercentage.toFixed(0)}% off)
//         </p>
//       `
//           : ""
//       }
//     </div>
//     <p class="product__color">${product.Colors[0].ColorName}</p>
//     <p class="product__description">
//     ${product.DescriptionHtmlSimple}
//     </p>
//     <div class="product-detail__add">
//       <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
//     </div>`
// }

// const productId = getParam("product")
// renderProductDetails(productId)

// // Add listener for cart changes and update count
// addCartListener(updateCartCount)



























// import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs"
// import ProductData from "./ProductData.mjs"
// import { updateCartCount, addCartListener } from "./cartCount.js"

// const dataSource = new ProductData("tents")

// function addProductToCart(product) {
//   const cart = getLocalStorage("so-cart") || []

//   // Check if the product is already in the cart
//   const existingProductIndex = cart.findIndex((item) => item.Id === product.Id)

//   if (existingProductIndex !== -1) {
//     // If the product exists, increment its quantity
//     cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1
//   } else {
//     // If the product doesn't exist, add it with a quantity of 1
//     product.quantity = 1
//     cart.push(product)
//   }

//   setLocalStorage("so-cart", cart)
//   // Dispatch a custom event to notify of cart changes
//   window.dispatchEvent(new Event("cart-change"))
//   alert("Item added to cart successfully!")
// }

// function calculateDiscount(suggestedRetailPrice, finalPrice) {
//   return suggestedRetailPrice - finalPrice
// }

// async function renderProductDetails(productId) {
//   const product = await dataSource.findProductById(productId)
//   document.querySelector(".product-detail").innerHTML = productTemplate(product)
//   document.getElementById("addToCart").addEventListener("click", () => addProductToCart(product))
// }

// function productTemplate(product) {
//   const discount = calculateDiscount(product.SuggestedRetailPrice, product.FinalPrice)
//   const discountPercentage = (discount / product.SuggestedRetailPrice) * 100

//   return `
//     <h3>${product.Brand.Name}</h3>
//     <h2 class="divider">${product.NameWithoutBrand}</h2>
//     <img
//       class="divider"
//       src="${product.Image}"
//       alt="${product.NameWithoutBrand}"
//     />
//     <div class="product-card__price-container">
//       <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//       <p class="product-card__suggested-price">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
//       ${
//         discount > 0
//           ? `
//         <p class="product-card__discount">
//           You save: $${discount.toFixed(2)} (${discountPercentage.toFixed(0)}% off)
//         </p>
//       `
//           : ""
//       }
//     </div>
//     <p class="product__color">${product.Colors[0].ColorName}</p>
//     <p class="product__description">
//     ${product.DescriptionHtmlSimple}
//     </p>
//     <div class="product-detail__add">
//       <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
//     </div>`
// }

// const productId = getParam("product")
// renderProductDetails(productId)

// // Add listener for cart changes and update count
// addCartListener(updateCartCount)
























import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs"
import ProductData from "./ProductData.mjs"
import { updateCartCount, addCartListener } from "./cartCount.js"

const dataSource = new ProductData("tents")

function addProductToCart(product) {
  const cart = getLocalStorage("so-cart") || []

  // Check if the product is already in the cart
  const existingProductIndex = cart.findIndex((item) => item.Id === product.Id)

  if (existingProductIndex !== -1) {
    // If the product exists, increment its quantity
    cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1
  } else {
    // If the product doesn't exist, add it with a quantity of 1
    product.quantity = 1
    cart.push(product)
  }

  setLocalStorage("so-cart", cart)
  // Dispatch a custom event to notify of cart changes
  window.dispatchEvent(new Event("cart-change"))
  updateCartCount()
  alert("Item added to cart successfully!")
}

function calculateDiscount(suggestedRetailPrice, finalPrice) {
  return suggestedRetailPrice - finalPrice
}

async function renderProductDetails(productId) {
  const product = await dataSource.findProductById(productId)
  document.querySelector(".product-detail").innerHTML = productTemplate(product)
  document.getElementById("addToCart").addEventListener("click", () => addProductToCart(product))
}

function productTemplate(product) {
  const discount = calculateDiscount(product.SuggestedRetailPrice, product.FinalPrice)
  const discountPercentage = (discount / product.SuggestedRetailPrice) * 100

  return `
    <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Image}"
      alt="${product.NameWithoutBrand}"
    />
    <div class="product-card__price-container">
      <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
      <p class="product-card__suggested-price">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
      ${
        discount > 0
          ? `
        <p class="product-card__discount">
          You save: $${discount.toFixed(2)} (${discountPercentage.toFixed(0)}% off)
        </p>
      `
          : ""
      }
    </div>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>`
}

const productId = getParam("product")
renderProductDetails(productId)

// Add listener for cart changes and update count
addCartListener(updateCartCount)
