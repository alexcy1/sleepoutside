// import { getLocalStorage, setLocalStorage } from "./utils.mjs"
// import { updateCartCount } from "./cartCount.js"

// export function displayBackpackProducts(products, pagination) {
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
//             <p class="product-card__discount">Save ${discountPercentage}% </p>
//           `
//               : ""
//           }
//         </div>
//       </a>

//     `
//     // <button class="product-card__add-to-cart" data-id="${product.Id}">Add to Cart</button>

//     productList.appendChild(productCard)
//   })

//   // Add event listeners for "Add to Cart" buttons
//   document.querySelectorAll(".product-card__add-to-cart").forEach((button) => {
//     button.addEventListener("click", (event) => addToCart(event, products))
//   })

//   // Add pagination controls
//   const paginationContainer = document.createElement("div")
//   paginationContainer.classList.add("pagination")
//   paginationContainer.innerHTML = `
//     <button id="prev-page" ${pagination.currentPage === 1 ? "disabled" : ""}>Previous</button>
//     <span>Page ${pagination.currentPage} of ${pagination.totalPages}</span>
//     <button id="next-page" ${pagination.currentPage === pagination.totalPages ? "disabled" : ""}>Next</button>
//   `
//   productList.after(paginationContainer)

//   // Add event listeners for pagination buttons
//   document.getElementById("prev-page").addEventListener("click", () => {
//     if (pagination.currentPage > 1) {
//       window.location.search = `?page=${pagination.currentPage - 1}`
//     }
//   })
//   document.getElementById("next-page").addEventListener("click", () => {
//     if (pagination.currentPage < pagination.totalPages) {
//       window.location.search = `?page=${pagination.currentPage + 1}`
//     }
//   })
// }

// function addToCart(event, products) {
//   const productId = event.target.dataset.id
//   const product = products.find((p) => p.Id === productId)

//   if (product) {
//     const cart = getLocalStorage("so-cart") || []
//     cart.push(product)
//     setLocalStorage("so-cart", cart)
//     updateCartCount()
//   }
// }

// function fixImagePath(imagePath) {
//   return imagePath.replace(/^\.\./, "")
// }

// function calculateDiscountPercentage(msrp, finalPrice) {
//   if (msrp <= 0 || finalPrice <= 0) return 0
//   return Math.round(((msrp - finalPrice) / msrp) * 100)
// }

// import { getLocalStorage, setLocalStorage } from "./utils.mjs"
// import { updateCartCount } from "./cartCount.js"
// import { clearSearch } from "./searchProducts.js"

// export function displayBackpackProducts(products, pagination, isSearchResult = false) {
//   const productList = document.querySelector(".product-list")

//   if (!productList) {
//     console.error("Product list element not found!")
//     return
//   }

//   productList.innerHTML = ""

//   if (isSearchResult) {
//     const searchResultsHeader = document.createElement("div")
//     searchResultsHeader.classList.add("search-results-header")
//     searchResultsHeader.innerHTML = `
//       <h2>Search Results (${products.length} items found)</h2>
//       <button id="clear-search">Clear Search</button>
//     `
//     productList.appendChild(searchResultsHeader)

//     document.getElementById("clear-search").addEventListener("click", clearSearch)
//   }

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
//     button.addEventListener("click", (event) => addToCart(event, products))
//   })

//   if (pagination && !isSearchResult) {
//     // Add pagination controls
//     const paginationContainer = document.createElement("div")
//     paginationContainer.classList.add("pagination")
//     paginationContainer.innerHTML = `
//       <button id="prev-page" ${pagination.currentPage === 1 ? "disabled" : ""}>Previous</button>
//       <span>Page ${pagination.currentPage} of ${pagination.totalPages}</span>
//       <button id="next-page" ${pagination.currentPage === pagination.totalPages ? "disabled" : ""}>Next</button>
//     `
//     productList.after(paginationContainer)

//     // Add event listeners for pagination buttons
//     document.getElementById("prev-page").addEventListener("click", () => {
//       if (pagination.currentPage > 1) {
//         window.location.search = `?page=${pagination.currentPage - 1}`
//       }
//     })
//     document.getElementById("next-page").addEventListener("click", () => {
//       if (pagination.currentPage < pagination.totalPages) {
//         window.location.search = `?page=${pagination.currentPage + 1}`
//       }
//     })
//   }
// }

// function addToCart(event, products) {
//   const productId = event.target.dataset.id
//   const product = products.find((p) => p.Id === productId)

//   if (product) {
//     const cart = getLocalStorage("so-cart") || []
//     cart.push(product)
//     setLocalStorage("so-cart", cart)
//     updateCartCount()
//   }
// }

// function fixImagePath(imagePath) {
//   return imagePath.replace(/^\.\./, "")
// }

// function calculateDiscountPercentage(msrp, finalPrice) {
//   if (msrp <= 0 || finalPrice <= 0) return 0
//   return Math.round(((msrp - finalPrice) / msrp) * 100)
// }

// import { getLocalStorage, setLocalStorage } from "./utils.mjs"
// import { updateCartCount } from "./cartCount.js"
// import { clearSearch } from "./searchProducts.js"

// export function displayBackpackProducts(products, pagination, isSearchResult = false) {
//   const productList = document.querySelector(".product-list")

//   if (!productList) {
//     console.error("Product list element not found!")
//     return
//   }

//   productList.innerHTML = ""

//   if (isSearchResult) {
//     const searchResultsHeader = document.createElement("div")
//     searchResultsHeader.classList.add("search-results-header")
//     searchResultsHeader.innerHTML = `
//       <h2>Search Results (${products.length} items found)</h2>
//       <button id="clear-search">Clear Search</button>
//     `
//     productList.insertAdjacentElement("beforebegin", searchResultsHeader)

//     document.getElementById("clear-search").addEventListener("click", clearSearch)
//   }

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
//     button.addEventListener("click", (event) => addToCart(event, products))
//   })

//   if (pagination && !isSearchResult) {
//     // Add pagination controls
//     const paginationContainer = document.createElement("div")
//     paginationContainer.classList.add("pagination")
//     paginationContainer.innerHTML = `
//       <button id="prev-page" ${pagination.currentPage === 1 ? "disabled" : ""}>Previous</button>
//       <span>Page ${pagination.currentPage} of ${pagination.totalPages}</span>
//       <button id="next-page" ${pagination.currentPage === pagination.totalPages ? "disabled" : ""}>Next</button>
//     `
//     productList.after(paginationContainer)

//     // Add event listeners for pagination buttons
//     document.getElementById("prev-page").addEventListener("click", () => {
//       if (pagination.currentPage > 1) {
//         window.location.search = `?page=${pagination.currentPage - 1}`
//       }
//     })
//     document.getElementById("next-page").addEventListener("click", () => {
//       if (pagination.currentPage < pagination.totalPages) {
//         window.location.search = `?page=${pagination.currentPage + 1}`
//       }
//     })
//   }
// }

// function addToCart(event, products) {
//   const productId = event.target.dataset.id
//   const product = products.find((p) => p.Id === productId)

//   if (product) {
//     const cart = getLocalStorage("so-cart") || []
//     cart.push(product)
//     setLocalStorage("so-cart", cart)
//     updateCartCount()
//   }
// }

// function fixImagePath(imagePath) {
//   return imagePath.replace(/^\.\./, "")
// }

// function calculateDiscountPercentage(msrp, finalPrice) {
//   if (msrp <= 0 || finalPrice <= 0) return 0
//   return Math.round(((msrp - finalPrice) / msrp) * 100)
// }

// import { getLocalStorage, setLocalStorage } from "./utils.mjs"
// import { updateCartCount } from "./cartCount.js"
// import { clearSearch } from "./searchProducts.js"

// export function displayBackpackProducts(products, pagination, isSearchResult = false) {
//   const productList = document.querySelector(".product-list")

//   if (!productList) {
//     console.error("Product list element not found!")
//     return
//   }

//   productList.innerHTML = ""

//   if (isSearchResult) {
//     const searchResultsHeader = document.createElement("div")
//     searchResultsHeader.classList.add("search-results-header")
//     searchResultsHeader.innerHTML = `
//       <h2>Search Results (${products.length} items found)</h2>
//       <button id="clear-search">Clear Search</button>
//     `
//     productList.insertAdjacentElement("beforebegin", searchResultsHeader)

//     document.getElementById("clear-search").addEventListener("click", clearSearch)
//   }

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
//     button.addEventListener("click", (event) => addToCart(event, products))
//   })

//   if (pagination && !isSearchResult) {
//     // Update the "Per page" information
//     const perPageInfo = document.querySelector(".sort-container span")
//     if (perPageInfo) {
//       perPageInfo.innerHTML = `<h4>Per page: ${pagination.perPage} | Total: ${pagination.totalCount}</h4>`
//     }

//     // Add pagination controls
//     const paginationContainer = document.createElement("div")
//     paginationContainer.classList.add("pagination")
//     paginationContainer.innerHTML = `
//       <button id="prev-page" ${pagination.currentPage === 1 ? "disabled" : ""}>Previous</button>
//       <span>Page ${pagination.currentPage} of ${pagination.totalPages}</span>
//       <button id="next-page" ${pagination.currentPage === pagination.totalPages ? "disabled" : ""}>Next</button>
//     `
//     productList.after(paginationContainer)

//     // Add event listeners for pagination buttons
//     document.getElementById("prev-page").addEventListener("click", () => {
//       if (pagination.currentPage > 1) {
//         window.location.search = `?page=${pagination.currentPage - 1}`
//       }
//     })
//     document.getElementById("next-page").addEventListener("click", () => {
//       if (pagination.currentPage < pagination.totalPages) {
//         window.location.search = `?page=${pagination.currentPage + 1}`
//       }
//     })
//   }
// }

// function addToCart(event, products) {
//   const productId = event.target.dataset.id
//   const product = products.find((p) => p.Id === productId)

//   if (product) {
//     const cart = getLocalStorage("so-cart") || []
//     cart.push(product)
//     setLocalStorage("so-cart", cart)
//     updateCartCount()
//   }
// }

// function fixImagePath(imagePath) {
//   return imagePath.replace(/^\.\./, "")
// }

// function calculateDiscountPercentage(msrp, finalPrice) {
//   if (msrp <= 0 || finalPrice <= 0) return 0
//   return Math.round(((msrp - finalPrice) / msrp) * 100)
// }

// import { getLocalStorage, setLocalStorage } from "./utils.mjs"
// import { updateCartCount } from "./cartCount.js"
// import { clearSearch } from "./searchProducts.js"

// export function displayBackpackProducts(products, pagination, isSearchResult = false) {
//   const productList = document.querySelector(".product-list")

//   if (!productList) {
//     console.error("Product list element not found!")
//     return
//   }

//   productList.innerHTML = ""

//   if (isSearchResult) {
//     const searchResultsHeader = document.createElement("div")
//     searchResultsHeader.classList.add("search-results-header")
//     searchResultsHeader.innerHTML = `
//       <h2>Search Results (${products.length} items found)</h2>
//       <button id="clear-search">Clear Search</button>
//     `
//     productList.insertAdjacentElement("beforebegin", searchResultsHeader)

//     document.getElementById("clear-search").addEventListener("click", clearSearch)
//   }

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
//     button.addEventListener("click", (event) => addToCart(event, products))
//   })

//   if (pagination && !isSearchResult) {
//     // Remove existing pagination
//     const existingPagination = document.querySelector(".pagination")
//     if (existingPagination) {
//       existingPagination.remove()
//     }

//     // Update the "Per page" information
//     const perPageInfo = document.querySelector(".sort-container span")
//     if (perPageInfo) {
//       perPageInfo.innerHTML = `<h4>Per page: ${pagination.perPage} | Total: ${pagination.totalCount}</h4>`
//     }

//     // Add pagination controls
//     const paginationContainer = document.createElement("div")
//     paginationContainer.classList.add("pagination")
//     paginationContainer.innerHTML = `
//       <button id="prev-page" ${pagination.currentPage === 1 ? "disabled" : ""}>Previous</button>
//       <span>Page ${pagination.currentPage} of ${pagination.totalPages}</span>
//       <button id="next-page" ${pagination.currentPage === pagination.totalPages ? "disabled" : ""}>Next</button>
//     `
//     productList.after(paginationContainer)

//     // Add event listeners for pagination buttons
//     document.getElementById("prev-page").addEventListener("click", () => {
//       if (pagination.currentPage > 1) {
//         const urlParams = new URLSearchParams(window.location.search)
//         urlParams.set("page", pagination.currentPage - 1)
//         window.location.search = urlParams.toString()
//       }
//     })
//     document.getElementById("next-page").addEventListener("click", () => {
//       if (pagination.currentPage < pagination.totalPages) {
//         const urlParams = new URLSearchParams(window.location.search)
//         urlParams.set("page", pagination.currentPage + 1)
//         window.location.search = urlParams.toString()
//       }
//     })
//   }
// }

// function addToCart(event, products) {
//   const productId = event.target.dataset.id
//   const product = products.find((p) => p.Id === productId)

//   if (product) {
//     const cart = getLocalStorage("so-cart") || []
//     cart.push(product)
//     setLocalStorage("so-cart", cart)
//     updateCartCount()
//   }
// }

// function fixImagePath(imagePath) {
//   return imagePath.replace(/^\.\./, "")
// }

// function calculateDiscountPercentage(msrp, finalPrice) {
//   if (msrp <= 0 || finalPrice <= 0) return 0
//   return Math.round(((msrp - finalPrice) / msrp) * 100)
// }

// import { getLocalStorage, setLocalStorage } from "./utils.mjs"
// import { updateCartCount } from "./cartCount.js"
// import { clearSearch } from "./searchProducts.js"

// export function displayBackpackProducts(products, pagination, isSearchResult = false) {
//   const productList = document.querySelector(".product-list")

//   if (!productList) {
//     console.error("Product list element not found!")
//     return
//   }

//   productList.innerHTML = ""

//   if (isSearchResult) {
//     const searchResultsHeader = document.createElement("div")
//     searchResultsHeader.classList.add("search-results-header")
//     searchResultsHeader.innerHTML = `
//       <h2>Search Results (${products.length} items found)</h2>
//       <button id="clear-search">Clear Search</button>
//     `
//     productList.insertAdjacentElement("beforebegin", searchResultsHeader)

//     document.getElementById("clear-search").addEventListener("click", clearSearch)
//   }

//   products.forEach((product) => {
//     const productCard = document.createElement("li")
//     productCard.classList.add("product-card")

//     const discountPercentage = calculateDiscountPercentage(product.SuggestedRetailPrice, product.FinalPrice)

//     productCard.innerHTML = `
//       <a href="../product_pages/backpacks-product-detail.html?product=${product.Id}">
//         <img src="${fixImagePath(product.Images.PrimaryMedium)}" alt="${product.Name}" />
//         <h3 class="card__brand">${product.Brand.Name}</h3>
//         <h2 class="card__name">${product.NameWithoutBrand}</h2>
//         <div class="product-card__price-container">
//           <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//           ${
//             discountPercentage > 0
//               ? `
//             <p class="product-card__msrp">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
//             <p class="product-card__discount">Saves ${discountPercentage}% </p>
//           `
//               : ""
//           }
//         </div>
//       </a>

//     `
//     // <button class="product-card__add-to-cart" data-id="${product.Id}">Add to Cart</button>

//     productList.appendChild(productCard)
//   })

//   // Add event listeners for "Add to Cart" buttons
//   document.querySelectorAll(".product-card__add-to-cart").forEach((button) => {
//     button.addEventListener("click", (event) => addToCart(event, products))
//   })

//   if (pagination && !isSearchResult) {
//     // Remove existing pagination
//     const existingPagination = document.querySelector(".pagination")
//     if (existingPagination) {
//       existingPagination.remove()
//     }

//     // Update the "Per page" information
//     const perPageInfo = document.querySelector(".sort-container span")
//     if (perPageInfo) {
//       perPageInfo.innerHTML = `<h4>Per page: ${pagination.perPage} | Total: ${pagination.totalCount}</h4>`
//     }

//     // Add pagination controls
//     const paginationContainer = document.createElement("div")
//     paginationContainer.classList.add("pagination")
//     paginationContainer.innerHTML = `
//       <button id="prev-page" ${pagination.currentPage === 1 ? "disabled" : ""}>Previous</button>
//       <span>Page ${pagination.currentPage} of ${pagination.totalPages}</span>
//       <button id="next-page" ${pagination.currentPage === pagination.totalPages ? "disabled" : ""}>Next</button>
//     `
//     productList.after(paginationContainer)

//     // Add event listeners for pagination buttons
//     document.getElementById("prev-page").addEventListener("click", () => {
//       if (pagination.currentPage > 1) {
//         const urlParams = new URLSearchParams(window.location.search)
//         urlParams.set("page", pagination.currentPage - 1)
//         window.location.search = urlParams.toString()
//       }
//     })
//     document.getElementById("next-page").addEventListener("click", () => {
//       if (pagination.currentPage < pagination.totalPages) {
//         const urlParams = new URLSearchParams(window.location.search)
//         urlParams.set("page", pagination.currentPage + 1)
//         window.location.search = urlParams.toString()
//       }
//     })
//   }
// }

// function addToCart(event, products) {
//   const productId = event.target.dataset.id
//   const product = products.find((p) => p.Id === productId)

//   if (product) {
//     const cart = getLocalStorage("so-cart") || []
//     cart.push(product)
//     setLocalStorage("so-cart", cart)
//     updateCartCount()
//   }
// }

// function fixImagePath(imagePath) {
//   return imagePath.replace(/^\.\./, "")
// }

// function calculateDiscountPercentage(msrp, finalPrice) {
//   if (msrp <= 0 || finalPrice <= 0) return 0
//   return Math.round(((msrp - finalPrice) / msrp) * 100)
// }

import {
  addToCart,
  fixImagePath,
  calculateDiscountPercentage,
  clearSearch,
  setupPagination,
} from "./main.js";

export function displayBackpackProducts(
  products,
  pagination,
  isSearchResult = false,
) {
  const productList = document.querySelector(".product-list");

  if (!productList) {
    console.error("Product list element not found!");
    return;
  }

  productList.innerHTML = "";

  if (isSearchResult) {
    const searchResultsHeader = document.createElement("div");
    searchResultsHeader.classList.add("search-results-header");
    searchResultsHeader.innerHTML = `
      <h2>Search Results (${products.length} items found)</h2>
      <button id="clear-search">Clear Search</button>
    `;
    productList.insertAdjacentElement("beforebegin", searchResultsHeader);

    document
      .getElementById("clear-search")
      .addEventListener("click", clearSearch);
  }

  products.forEach((product) => {
    const productCard = document.createElement("li");
    productCard.classList.add("product-card");

    const discountPercentage = calculateDiscountPercentage(
      product.SuggestedRetailPrice,
      product.FinalPrice,
    );

    productCard.innerHTML = `
      <a href="../product_pages/backpacks-product-detail.html?product=${product.Id}">
        <img src="${fixImagePath(product.Images.PrimaryMedium)}" alt="${product.Name}" />
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <div class="product-card__price-container">
          <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
          ${
            discountPercentage > 0
              ? `
            <p class="product-card__msrp">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
            <p class="product-card__discount">Saves ${discountPercentage}% </p>
          `
              : ""
          }
        </div>
      </a>

    `;

    // <button class="product-card__add-to-cart" data-id="${product.Id}">Add to Cart</button>

    productList.appendChild(productCard);
  });

  // Add event listeners for "Add to Cart" buttons
  document.querySelectorAll(".product-card__add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => addToCart(event, products));
  });

  setupPagination(pagination, productList);
}
