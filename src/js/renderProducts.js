// // // Hardcoded Product IDs to Filter
// const hardcodedProductIds = ["880RR", "985RF", "985PR", "344YJ"];

// // Function to dynamically render products
// function displayProducts(tents) {
//   const productList = document.querySelector('.product-list');

//   if (!productList) {
//     console.error("Product list element not found!");
//     return;
//   }

//   // Filter products based on hardcoded IDs
//   const filteredProducts = tents.filter(product => hardcodedProductIds.includes(product.Id));

//   // Generate HTML for each product
//   filteredProducts.forEach(product => {
//     const productCard = document.createElement('li');
//     productCard.classList.add('product-card');

//     // Hardcoded URLs for the detail pages
//     let productLink = '';
//     if (product.Id === '880RR') {
//       productLink = 'product_pages/marmot-ajax-3.html';
//     } else if (product.Id === '985RF') {
//       productLink = 'product_pages/northface-talus-4.html';
//     } else if (product.Id === '985PR') {
//       productLink = 'product_pages/northface-alpine-3.html';
//     } else if (product.Id === '344YJ') {
//       productLink = 'product_pages/cedar-ridge-rimrock-2.html';
//     }

//     productCard.innerHTML = `
//       <a href="${productLink}">
//         <img src="${product.Image}" alt="${product.NameWithoutBrand}" />
//         <h3 class="card__brand">${product.Brand.Name}</h3>
//         <h2 class="card__name">${product.NameWithoutBrand}</h2>
//         <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//       </a>
//     `;

//     productList.appendChild(productCard);
//   });
// }

// // Function to fetch JSON data using async/await
// async function loadProducts() {
//   try {
//     const response = await fetch('../json/tents.json');
//     const data = await response.json();
//     displayProducts(data);
//   } catch (error) {
//     console.error('Error loading JSON data:', error);
//   }
// }

// // Call the async function
// loadProducts();













// // Hardcoded Product IDs to Filter
// const hardcodedProductIds = ["880RR", "985RF", "985PR", "344YJ"];

// // Function to dynamically render products
// function displayProducts(tents) {
//   const productList = document.querySelector('.product-list');

//   if (!productList) {
//     console.error("Product list element not found!");
//     return;
//   }

//   // Clear existing content
//   productList.innerHTML = '';

//   // Filter products based on hardcoded IDs
//   const filteredProducts = tents.filter(product => hardcodedProductIds.includes(product.Id));

//   // Generate HTML for each product
//   filteredProducts.forEach(product => {
//     const productCard = document.createElement('li');
//     productCard.classList.add('product-card');

//     productCard.innerHTML = `
//       <a href="../product_pages/product-detail.html?product=${product.Id}">
//         <img src="${product.Image}" alt="${product.Name}" />
//         <h3 class="card__brand">${product.Brand.Name}</h3>
//         <h2 class="card__name">${product.NameWithoutBrand}</h2>
//         <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//       </a>
//     `;

//     productList.appendChild(productCard);
//   });
// }

// // Function to fetch JSON data using async/await
// async function loadProducts() {
//   try {
//     const response = await fetch('../json/tents.json');
//     const data = await response.json();
//     displayProducts(data);
//   } catch (error) {
//     console.error('Error loading JSON data:', error);
//   }
// }

// // Call the async function
// loadProducts();














// // Hardcoded Product IDs to Filter
// const hardcodedProductIds = ["880RR", "985RF", "985PR", "344YJ"]

// // Function to calculate discount percentage
// function calculateDiscountPercentage(suggestedRetailPrice, finalPrice) {
//   if (finalPrice < suggestedRetailPrice) {
//     const discount = suggestedRetailPrice - finalPrice
//     return Math.round((discount / suggestedRetailPrice) * 100)
//   }
//   return 0
// }

// // Function to dynamically render products
// function displayProducts(tents) {
//   const productList = document.querySelector(".product-list")

//   if (!productList) {
//     console.error("Product list element not found!")
//     return
//   }

//   // Clear existing content
//   productList.innerHTML = ""

//   // Filter products based on hardcoded IDs
//   const filteredProducts = tents.filter((product) => hardcodedProductIds.includes(product.Id))

//   // Generate HTML for each product
//   filteredProducts.forEach((product) => {
//     const productCard = document.createElement("li")
//     productCard.classList.add("product-card")

//     const discountPercentage = calculateDiscountPercentage(product.SuggestedRetailPrice, product.FinalPrice)

//     productCard.innerHTML = `
//       <a href="../product_pages/product-detail.html?product=${product.Id}">
//         <img src="${product.Image}" alt="${product.Name}" />
//         <h3 class="card__brand">${product.Brand.Name}</h3>
//         <h2 class="card__name">${product.NameWithoutBrand}</h2>
//         <div class="product-card__price-container">
//           <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//           ${
//             discountPercentage > 0
//               ? `
//             <p class="product-card__msrp">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
//             <p class="product-card__discount">${discountPercentage}% Off</p>
//           `
//               : ""
//           }
//         </div>
//       </a>
//     `

//     productList.appendChild(productCard)
//   })
// }

// // Function to fetch JSON data using async/await
// async function loadProducts() {
//   try {
//     const response = await fetch("../json/tents.json")
//     const data = await response.json()
//     displayProducts(data)
//   } catch (error) {
//     console.error("Error loading JSON data:", error)
//   }
// }

// // Call the async function
// loadProducts()






















// import Alert from "./Alert.js"

// // Hardcoded Product IDs to Filter
// const hardcodedProductIds = ["880RR", "985RF", "985PR", "344YJ"]

// // Function to calculate discount percentage
// function calculateDiscountPercentage(suggestedRetailPrice, finalPrice) {
//   if (finalPrice < suggestedRetailPrice) {
//     const discount = suggestedRetailPrice - finalPrice
//     return Math.round((discount / suggestedRetailPrice) * 100)
//   }
//   return 0
// }

// // Function to dynamically render products
// function displayProducts(tents) {
//   const productList = document.querySelector(".product-list")

//   if (!productList) {
//     console.error("Product list element not found!")
//     return
//   }

//   // Clear existing content
//   productList.innerHTML = ""

//   // Filter products based on hardcoded IDs
//   const filteredProducts = tents.filter((product) => hardcodedProductIds.includes(product.Id))

//   // Generate HTML for each product
//   filteredProducts.forEach((product) => {
//     const productCard = document.createElement("li")
//     productCard.classList.add("product-card")

//     const discountPercentage = calculateDiscountPercentage(product.SuggestedRetailPrice, product.FinalPrice)

//     productCard.innerHTML = `
//       <a href="../product_pages/product-detail.html?product=${product.Id}">
//         <img src="${product.Image}" alt="${product.Name}" />
//         <h3 class="card__brand">${product.Brand.Name}</h3>
//         <h2 class="card__name">${product.NameWithoutBrand}</h2>
//         <div class="product-card__price-container">
//           <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//           ${
//             discountPercentage > 0
//               ? `
//             <p class="product-card__msrp">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
//             <p class="product-card__discount">${discountPercentage}% Off</p>
//           `
//               : ""
//           }
//         </div>
//       </a>
//     `

//     productList.appendChild(productCard)
//   })
// }

// // Function to fetch JSON data using async/await
// async function loadProducts() {
//   try {
//     const response = await fetch("../json/tents.json")
//     const data = await response.json()
//     displayProducts(data)

//     // Initialize and display alerts
//     const alertSystem = new Alert()
//     await alertSystem.init()
//   } catch (error) {
//     console.error("Error loading JSON data:", error)
//   }
// }


// // Call the async function
// loadProducts()





















// import Alert from "./Alert.js"
// import { initializeSearch, displaySearchResults } from "./search.js"
// import ProductData from "./ProductData.mjs"

// const dataSource = new ProductData('tents');

// function calculateDiscountPercentage(suggestedRetailPrice, finalPrice) {
//   if (finalPrice < suggestedRetailPrice) {
//     const discount = suggestedRetailPrice - finalPrice
//     return Math.round((discount / suggestedRetailPrice) * 100)
//   }
//   return 0
// }

// function fixImagePath(imagePath) {
//   // Remove the leading '..' from the image path
//   return imagePath.replace(/^\.\./, '');
// }

// export function displayProducts(products) {
//   const productList = document.querySelector(".product-list")

//   if (!productList) {
//     console.error("Product list element not found!")
//     return
//   }

//   productList.innerHTML = ""

//   products.forEach((product) => {
//     const productCard = document.createElement("li")
//     productCard.classList.add("product-card")

//     const discountPercentage = calculateDiscountPercentage(product.SuggestedRetailPrice, product.FinalPrice)

//     productCard.innerHTML = `
//       <a href="../product_pages/product-detail.html?product=${product.Id}">
//         <img src="${fixImagePath(product.Image)}" alt="${product.Name}" />
//         <h3 class="card__brand">${product.Brand.Name}</h3>
//         <h2 class="card__name">${product.NameWithoutBrand}</h2>
//         <div class="product-card__price-container">
//           <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//           ${
//             discountPercentage > 0
//               ? `
//             <p class="product-card__msrp">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
//             <p class="product-card__discount">${discountPercentage}% Off</p>
//           `
//               : ""
//           }
//         </div>
//       </a>
//     `

//     productList.appendChild(productCard)
//   })
// }

// async function loadProducts() {
//   try {
//     const products = await dataSource.getData()
//     displayProducts(products)

//     initializeSearch()

//     const alertSystem = new Alert()
//     await alertSystem.init()
//   } catch (error) {
//     console.error("Error loading products:", error)
//   }
// }

// loadProducts()











// import Alert from "./Alert.js"
// import { initializeSearch } from "./search.js"
// import ProductData from "./ProductData.mjs"

// // Hardcoded Product IDs to Filter
// const hardcodedProductIds = ["880RR", "985RF", "985PR", "344YJ"]

// function calculateDiscountPercentage(suggestedRetailPrice, finalPrice) {
//   if (finalPrice < suggestedRetailPrice) {
//     const discount = suggestedRetailPrice - finalPrice
//     return Math.round((discount / suggestedRetailPrice) * 100)
//   }
//   return 0
// }

// function fixImagePath(imagePath) {
//   // Remove the leading '..' from the image path
//   return imagePath.replace(/^\.\./, '');
// }

// export function displayProducts(products) {
//   const productList = document.querySelector(".product-list")

//   if (!productList) {
//     console.error("Product list element not found!")
//     return
//   }

//   productList.innerHTML = ""

//   // Filter products based on hardcoded IDs
//   const filteredProducts = products.filter((product) =>
//     hardcodedProductIds.includes(product.Id)
//   )

//   filteredProducts.forEach((product) => {
//     const productCard = document.createElement("li")
//     productCard.classList.add("product-card")

//     const discountPercentage = calculateDiscountPercentage(
//       product.SuggestedRetailPrice,
//       product.FinalPrice
//     )

//     productCard.innerHTML = `
//       <a href="../product_pages/product-detail.html?product=${product.Id}">
//         <img src="${fixImagePath(product.Image)}" alt="${product.Name}" />
//         <h3 class="card__brand">${product.Brand.Name}</h3>
//         <h2 class="card__name">${product.NameWithoutBrand}</h2>
//         <div class="product-card__price-container">
//           <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//           ${
//             discountPercentage > 0
//               ? `
//             <p class="product-card__msrp">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
//             <p class="product-card__discount">${discountPercentage}% Off</p>
//           `
//               : ""
//           }
//         </div>
//       </a>
//     `

//     productList.appendChild(productCard)
//   })
// }

// async function loadProducts() {
//   try {
//     const dataSource = new ProductData('tents')
//     const products = await dataSource.getData()

//     displayProducts(products)

//     initializeSearch()

//     const alertSystem = new Alert()
//     await alertSystem.init()
//   } catch (error) {
//     console.error("Error loading products:", error)
//   }
// }

// // Call the async function
// loadProducts()
































import Alert from "./Alert.js"
import { initializeSearch } from "./search.js"
import ProductData from "./ProductData.mjs"

// Hardcoded Product IDs to Filter
const hardcodedProductIds = ["880RR", "985RF", "985PR", "344YJ"]

function calculateDiscountPercentage(suggestedRetailPrice, finalPrice) {
  if (finalPrice < suggestedRetailPrice) {
    const discount = suggestedRetailPrice - finalPrice
    return Math.round((discount / suggestedRetailPrice) * 100)
  }
  return 0
}

function fixImagePath(imagePath) {
  // Remove the leading '..' from the image path
  return imagePath.replace(/^\.\./, "")
}

function sortProducts(products, sortOption) {
  switch (sortOption) {
    case "name-asc":
      return products.sort((a, b) => a.Name.localeCompare(b.Name))
    case "name-desc":
      return products.sort((a, b) => b.Name.localeCompare(a.Name))
    case "price-asc":
      return products.sort((a, b) => a.FinalPrice - b.FinalPrice)
    case "price-desc":
      return products.sort((a, b) => b.FinalPrice - a.FinalPrice)
    default:
      return products
  }
}

export function displayProducts(products, sortOption = "name-asc") {
  const productList = document.querySelector(".product-list")

  if (!productList) {
    console.error("Product list element not found!")
    return
  }

  productList.innerHTML = ""

  // Filter products based on hardcoded IDs
  let filteredProducts = products.filter((product) => hardcodedProductIds.includes(product.Id))

  // Sort the filtered products
  filteredProducts = sortProducts(filteredProducts, sortOption)

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("li")
    productCard.classList.add("product-card")

    const discountPercentage = calculateDiscountPercentage(product.SuggestedRetailPrice, product.FinalPrice)

    productCard.innerHTML = `
      <a href="../product_pages/product-detail.html?product=${product.Id}">
        <img src="${fixImagePath(product.Image)}" alt="${product.Name}" />
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <div class="product-card__price-container">
          <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
          ${
            discountPercentage > 0
              ? `
            <p class="product-card__msrp">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
            <p class="product-card__discount">${discountPercentage}% Off</p>
          `
              : ""
          }
        </div>
      </a>
    `

    productList.appendChild(productCard)
  })
}

async function loadProducts() {
  try {
    const dataSource = new ProductData("tents")
    const products = await dataSource.getData()

    displayProducts(products)

    initializeSearch()

    const alertSystem = new Alert()
    await alertSystem.init()

    // Add event listener for sort dropdown
    const sortDropdown = document.getElementById("sort-options")
    if (sortDropdown) {
      sortDropdown.addEventListener("change", (event) => {
        displayProducts(products, event.target.value)
      })
    }
  } catch (error) {
    console.error("Error loading products:", error)
  }
}

// Call the async function
loadProducts()






















// import { getLocalStorage, setLocalStorage } from "./utils.mjs"

// export function displayProducts(products, category) {
//   const productList = document.querySelector(".product-list")

//   if (!productList) {
//     console.error("Product list element not found!")
//     return
//   }

//   productList.innerHTML = ""

//   products.forEach((product) => {
//     const productCard = document.createElement("li")
//     productCard.classList.add("product-card")

//     const discountPercentage = calculateDiscountPercentage(product.SuggestedRetailPrice, product.FinalPrice)

//     productCard.innerHTML = `
//       <a href="../product_pages/product-detail.html?product=${product.Id}">
//         <img src="${fixImagePath(product.Images.PrimaryMedium)}" alt="${product.Name}" />
//         <h3 class="card__brand">${product.Brand.Name}</h3>
//         <h2 class="card__name">${product.NameWithoutBrand}</h2>
//         <div class="product-card__price-container">
//           <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//           ${
//             discountPercentage > 0
//               ? `
//             <p class="product-card__msrp">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
//             <p class="product-card__discount">${discountPercentage}% Off</p>
//           `
//               : ""
//           }
//         </div>
//       </a>
//       <button class="product-card__add-to-cart" data-id="${product.Id}">Add to Cart</button>
//     `

//     productList.appendChild(productCard)
//   })

//   // Add event listeners for "Add to Cart" buttons
//   document.querySelectorAll(".product-card__add-to-cart").forEach((button) => {
//     button.addEventListener("click", addToCart)
//   })
// }

// function addToCart(event) {
//   const productId = event.target.dataset.id
//   const product = products.find((p) => p.Id === productId)

//   if (product) {
//     const cart = getLocalStorage("so-cart") || []
//     cart.push(product)
//     setLocalStorage("so-cart", cart)
//     updateCartCount()
//   }
// }

// // Add this function to fix image paths
// function fixImagePath(imagePath) {
//   return imagePath.replace(/^\.\./, "")
// }

// function calculateDiscountPercentage(msrp, finalPrice) {
//   if (msrp <= 0 || finalPrice <= 0) return 0
//   return Math.round(((msrp - finalPrice) / msrp) * 100)
// }

// function updateCartCount() {
//   //Implementation to update cart count
// }
