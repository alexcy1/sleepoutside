
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
import { setLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
  alert("Item added to cart successfully!"); // Added alert message
}

async function renderProductDetails(productId) {
  const product = await dataSource.findProductById(productId);
  document.querySelector(".product-detail").innerHTML = productTemplate(product);
  document.getElementById("addToCart").addEventListener("click", () => addProductToCart(product));
}

function productTemplate(product) {
  return `<h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Image}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>`;
}

const productId = getParam("product");
renderProductDetails(productId);
