// import { setLocalStorage } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";

// const dataSource = new ProductData("tents");

// function addProductToCart(product) {
//   setLocalStorage("so-cart", product);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);









// =================================================================

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


















import { setLocalStorage, qs } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

// Initialize ProductData with proper path handling
const dataSource = new ProductData("tents");

function addProductToCart(product) {
  try {
    if (!product) {
      throw new Error("Invalid product data");
    }
    setLocalStorage("so-cart", product);
    alert("Item added to cart successfully!");
  } catch (e) {
    console.error("Error adding product to cart:", e);
    alert("Error adding item to cart. Please try again.");
  }
}

// add to cart button event handler
async function addToCartHandler(e) {
  const addToCartButton = e.target;
  const productId = addToCartButton.dataset.id;

  if (!productId) {
    console.error("No product ID found");
    alert("Error: Could not find product ID");
    return;
  }

  try {
    // Disable button while processing
    addToCartButton.disabled = true;

    // Get product data
    const product = await dataSource.findProductById(productId);

    if (!product) {
      throw new Error(`Product not found with ID: ${productId}`);
    }

    // Fix image path if needed
    if (product.Image && product.Image.startsWith('..')) {
      const pathDepth = window.location.pathname.split('/').length - 2;
      const pathPrefix = '../'.repeat(pathDepth);
      product.Image = `${pathPrefix}${product.Image.replace(/^\.+\//, '')}`;
    }

    addProductToCart(product);
  } catch (e) {
    console.error("Error in add to cart handler:", e);
    alert("Error adding item to cart. Please try again.");
  } finally {
    // Re-enable button
    addToCartButton.disabled = false;
  }
}

// Initialize the page
function init() {
  try {
    const addToCartButton = qs("#addToCart");
    if (!addToCartButton) {
      console.error("Add to cart button not found");
      return;
    }

    addToCartButton.addEventListener("click", addToCartHandler);
  } catch (e) {
    console.error("Error initializing product page:", e);
  }
}

// Start the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
