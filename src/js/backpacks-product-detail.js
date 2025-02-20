// import { getParam } from "./utils.mjs"
// import BackpackData from "./BackpackData.mjs"
// import { getLocalStorage, setLocalStorage } from "./utils.mjs"
// import { updateCartCount } from "./cartCount.js"

// const dataSource = new BackpackData()

// function addProductToCart(product) {
//   const cart = getLocalStorage("so-cart") || []
//   const existingProductIndex = cart.findIndex((item) => item.Id === product.Id)

//   if (existingProductIndex !== -1) {
//     cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1
//   } else {
//     product.quantity = 1
//     cart.push(product)
//   }

//   setLocalStorage("so-cart", cart)
//   window.dispatchEvent(new Event("cart-change"))
//   updateCartCount()
//   alert("Item added to cart successfully!")
// }

// function calculateDiscount(suggestedRetailPrice, finalPrice) {
//   const discount = suggestedRetailPrice - finalPrice
//   const percentage = Math.round((discount / suggestedRetailPrice) * 100)
//   return { discount, percentage }
// }

// function setupImageMagnifier(imageContainer, image) {
//   const magnifier = document.createElement("div")
//   magnifier.className = "magnifier"
//   imageContainer.appendChild(magnifier)

//   imageContainer.addEventListener("mousemove", (e) => {
//     const rect = imageContainer.getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top

//     const magnifierSize = 150
//     const zoomFactor = 2

//     magnifier.style.left = `${x - magnifierSize / 2}px`
//     magnifier.style.top = `${y - magnifierSize / 2}px`

//     const backgroundX = x * zoomFactor - magnifierSize / 2
//     const backgroundY = y * zoomFactor - magnifierSize / 2
//     magnifier.style.backgroundImage = `url(${image.src})`
//     magnifier.style.backgroundPosition = `-${backgroundX}px -${backgroundY}px`
//     magnifier.style.backgroundSize = `${imageContainer.offsetWidth * zoomFactor}px`
//   })

//   imageContainer.addEventListener("mouseenter", () => {
//     magnifier.style.display = "block"
//   })

//   imageContainer.addEventListener("mouseleave", () => {
//     magnifier.style.display = "none"
//   })
// }

// function setupQuantityControls() {
//   const quantityInput = document.querySelector(".quantity-input")
//   const decreaseBtn = document.querySelector(".quantity-decrease")
//   const increaseBtn = document.querySelector(".quantity-increase")

//   decreaseBtn.addEventListener("click", () => {
//     const currentValue = Number.parseInt(quantityInput.value)
//     if (currentValue > 1) {
//       quantityInput.value = currentValue - 1
//     }
//   })

//   increaseBtn.addEventListener("click", () => {
//     const currentValue = Number.parseInt(quantityInput.value)
//     quantityInput.value = currentValue + 1
//   })
// }

// function renderProductDetails(product) {
//   if (!product) {
//     console.error("Product data is undefined")
//     return
//   }

//   const { discount, percentage } = calculateDiscount(product.SuggestedRetailPrice, product.FinalPrice)

//   // Main image container
//   const mainImageContainer = document.querySelector(".product-detail__main-image")
//   mainImageContainer.innerHTML = `
//     <img src="${product.Images?.PrimaryExtraLarge || ""}" alt="${product.Name || ""}" class="main-image" />
//     <span class="zoom-hint">Click to expand</span>
//   `

//   // Setup image magnifier
//   const mainImage = mainImageContainer.querySelector(".main-image")
//   setupImageMagnifier(mainImageContainer, mainImage)

//   // Thumbnails
//   const thumbnailsContainer = document.querySelector(".product-detail__thumbnails")
//   thumbnailsContainer.innerHTML = `
//     <img src="${product.Images?.PrimaryMedium || ""}" alt="${product.Name || ""}" class="thumbnail active" />
//     ${
//       product.Images?.ExtraImages?.map(
//         (image) => `
//       <img src="${image.Src || ""}" alt="${image.Title || ""}" class="thumbnail" />
//     `,
//       ).join("") || ""
//     }
//   `

//   // Product info
//   const productInfo = document.querySelector(".product-detail__info")
//   productInfo.innerHTML = `
//     <h1>${product.Name || ""}</h1>
//     <p class="product-id">Item #${product.Id || ""}</p>
//     ${
//       product.Reviews?.ReviewCount > 0
//         ? `
//       <div class="product-reviews">
//         <div class="stars" style="--rating: ${product.Reviews.AverageRating || 0}"></div>
//         <a href="#reviews">${product.Reviews.ReviewCount} Reviews</a>
//       </div>
//     `
//         : `<p class="no-reviews">Not Yet Reviewed</p>`
//     }
//     <div class="product-price">
//       <span class="current-price">$${(product.FinalPrice || 0).toFixed(2)}</span>
//       <span class="original-price">Compare at $${(product.SuggestedRetailPrice || 0).toFixed(2)}</span>
//       <span class="savings">Save ${percentage}%</span>
//     </div>
//     <div class="product-colors">
//       <h2>Colors Available:</h2>
//       <div class="color-options">
//         ${
//           product.Colors?.map(
//             (color) => `
//           <button class="color-swatch"
//             data-color="${color.ColorCode || ""}"
//             style="background-image: url('${color.ColorChipImageSrc || ""}')"
//             title="${color.ColorName || ""}">
//           </button>
//         `,
//           ).join("") || ""
//         }
//       </div>
//       <p class="selected-color">${product.Colors?.[0]?.ColorName || ""} (${product.Colors?.[0]?.ColorCode || ""})</p>
//     </div>
//     <div class="product-sizes">
//       <h2>Size:</h2>
//       <div class="size-options">
//         ${
//           product.SizesAvailable?.SIZE?.map(
//             (size) => `
//           <button class="size-option" data-size="${size}">${size}</button>
//         `,
//           ).join("") || ""
//         }
//       </div>
//     </div>
//     <div class="product-quantity">
//       <h2>Quantity:</h2>
//       <div class="quantity-controls">
//         <button class="quantity-decrease">-</button>
//         <input type="number" value="1" min="1" class="quantity-input" />
//         <button class="quantity-increase">+</button>
//       </div>
//     </div>
//     <button class="add-to-cart" data-id="${product.Id || ""}">ADD TO CART</button>
//     <button class="add-to-wishlist">Add to Wish List</button>
//   `

//   // Product description
//   const descriptionContainer = document.querySelector(".product-detail__description")
//   descriptionContainer.innerHTML = `
//     <div class="product-description">
//       ${product.DescriptionHtmlSimple || ""}
//     </div>
//   `

//   // Setup event listeners
//   setupQuantityControls()

//   // Thumbnail click handlers
//   document.querySelectorAll(".thumbnail").forEach((thumb) => {
//     thumb.addEventListener("click", () => {
//       mainImage.src = thumb.src.replace("~160", "~600")
//       document.querySelectorAll(".thumbnail").forEach((t) => t.classList.remove("active"))
//       thumb.classList.add("active")
//     })
//   })

//   // Add to cart handler
//   document.querySelector(".add-to-cart").addEventListener("click", () => {
//     const quantity = Number.parseInt(document.querySelector(".quantity-input").value)
//     const productToAdd = { ...product }
//     productToAdd.quantity = quantity
//     addProductToCart(productToAdd)
//   })
// }

// async function init() {
//   const productId = getParam("product")
//   if (!productId) {
//     document.querySelector(".product-detail").innerHTML = "Product not found"
//     return
//   }

//   try {
//     console.log("Fetching product with ID:", productId)
//     const product = await dataSource.findProductById(productId)
//     console.log("Fetched product data:", product)

//     if (!product) {
//       throw new Error("Product not found")
//     }

//     renderProductDetails(product)
//   } catch (error) {
//     console.error("Error loading product:", error)
//     document.querySelector(".product-detail").innerHTML = `Error loading product: ${error.message}`
//   }
// }

// init()






























// // backpacks-product-detail.js

// import { getParam } from "./utils.mjs"
// import BackpackData from "./BackpackData.mjs"
// import { getLocalStorage, setLocalStorage } from "./utils.mjs"
// import { updateCartCount } from "./cartCount.js"

// const dataSource = new BackpackData()

// function addProductToCart(product) {
//   const cart = getLocalStorage("so-cart") || []
//   const existingProductIndex = cart.findIndex((item) => item.Id === product.Id)

//   if (existingProductIndex !== -1) {
//     cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 0) + product.quantity
//   } else {
//     cart.push(product)
//   }

//   setLocalStorage("so-cart", cart)
//   window.dispatchEvent(new Event("cart-change"))
//   updateCartCount()
//   alert(`${product.quantity} item(s) added to cart successfully!`)
// }

// function calculateDiscount(suggestedRetailPrice, finalPrice) {
//   const discount = suggestedRetailPrice - finalPrice
//   const percentage = Math.round((discount / suggestedRetailPrice) * 100)
//   return { discount, percentage }
// }

// function setupImageMagnifier(imageContainer, image) {
//   const magnifier = document.createElement("div")
//   magnifier.className = "magnifier"
//   imageContainer.appendChild(magnifier)

//   imageContainer.addEventListener("mousemove", (e) => {
//     const rect = imageContainer.getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top

//     const magnifierSize = 150
//     const zoomFactor = 2

//     magnifier.style.left = `${x - magnifierSize / 2}px`
//     magnifier.style.top = `${y - magnifierSize / 2}px`

//     const backgroundX = x * zoomFactor - magnifierSize / 2
//     const backgroundY = y * zoomFactor - magnifierSize / 2
//     magnifier.style.backgroundImage = `url(${image.src})`
//     magnifier.style.backgroundPosition = `-${backgroundX}px -${backgroundY}px`
//     magnifier.style.backgroundSize = `${imageContainer.offsetWidth * zoomFactor}px`
//   })

//   imageContainer.addEventListener("mouseenter", () => {
//     magnifier.style.display = "block"
//   })

//   imageContainer.addEventListener("mouseleave", () => {
//     magnifier.style.display = "none"
//   })
// }

// function setupQuantityControls() {
//   const quantityInput = document.querySelector(".quantity-input")
//   const decreaseBtn = document.querySelector(".quantity-decrease")
//   const increaseBtn = document.querySelector(".quantity-increase")

//   decreaseBtn.addEventListener("click", () => {
//     const currentValue = Number.parseInt(quantityInput.value)
//     if (currentValue > 1) {
//       quantityInput.value = currentValue - 1
//     }
//   })

//   increaseBtn.addEventListener("click", () => {
//     const currentValue = Number.parseInt(quantityInput.value)
//     quantityInput.value = currentValue + 1
//   })
// }

// function renderProductDetails(product) {
//   if (!product) {
//     console.error("Product data is undefined")
//     return
//   }

//   const { discount, percentage } = calculateDiscount(product.SuggestedRetailPrice, product.FinalPrice)

//   // Main image container
//   const mainImageContainer = document.querySelector(".product-detail__main-image")
//   mainImageContainer.innerHTML = `
//     <img src="${product.Images?.PrimaryExtraLarge || ""}" alt="${product.Name || ""}" class="main-image" />
//     <span class="zoom-hint">Click to expand</span>
//   `

//   // Setup image magnifier
//   const mainImage = mainImageContainer.querySelector(".main-image")
//   setupImageMagnifier(mainImageContainer, mainImage)

//   // Thumbnails
//   const thumbnailsContainer = document.querySelector(".product-detail__thumbnails")
//   thumbnailsContainer.innerHTML = `
//     <img src="${product.Images?.PrimaryMedium || ""}" alt="${product.Name || ""}" class="thumbnail active" />
//     ${
//       product.Images?.ExtraImages?.map(
//         (image) => `
//       <img src="${image.Src || ""}" alt="${image.Title || ""}" class="thumbnail" />
//     `,
//       ).join("") || ""
//     }
//   `

//   // Product info
//   const productInfo = document.querySelector(".product-detail__info")
//   productInfo.innerHTML = `
//     <h1>${product.Name || ""}</h1>
//     <p class="product-id">Item #${product.Id || ""}</p>
//     ${
//       product.Reviews?.ReviewCount > 0
//         ? `
//       <div class="product-reviews">
//         <div class="stars" style="--rating: ${product.Reviews.AverageRating || 0}"></div>
//         <a href="#reviews">${product.Reviews.ReviewCount} Reviews</a>
//       </div>
//     `
//         : `<p class="no-reviews">Not Yet Reviewed</p>`
//     }
//     <div class="product-price">
//       <span class="current-price">$${(product.FinalPrice || 0).toFixed(2)}</span>
//       <span class="original-price">Compare at $${(product.SuggestedRetailPrice || 0).toFixed(2)}</span>
//       <span class="savings">Save ${percentage}%</span>
//     </div>
//     <div class="product-colors">
//       <h2>Colors Available:</h2>
//       <div class="color-options">
//         ${
//           product.Colors?.map(
//             (color) => `
//           <button class="color-swatch"
//             data-color="${color.ColorCode || ""}"
//             style="background-image: url('${color.ColorChipImageSrc || ""}')"
//             title="${color.ColorName || ""}">
//           </button>
//         `,
//           ).join("") || ""
//         }
//       </div>
//       <p class="selected-color">${product.Colors?.[0]?.ColorName || ""} (${product.Colors?.[0]?.ColorCode || ""})</p>
//     </div>
//     <div class="product-sizes">
//       <h2>Size:</h2>
//       <div class="size-options">
//         ${
//           product.SizesAvailable?.SIZE?.map(
//             (size) => `
//           <button class="size-option" data-size="${size}">${size}</button>
//         `,
//           ).join("") || ""
//         }
//       </div>
//     </div>
//     <div class="product-quantity">
//       <h2>Quantity:</h2>
//       <div class="quantity-controls">
//         <button class="quantity-decrease">-</button>
//         <input type="number" value="1" min="1" class="quantity-input" />
//         <button class="quantity-increase">+</button>
//       </div>
//     </div>
//     <button class="add-to-cart" data-id="${product.Id || ""}">ADD TO CART</button>
//     <button class="add-to-wishlist">Add to Wish List</button>
//   `

//   // Product description
//   const descriptionContainer = document.querySelector(".product-detail__description")
//   descriptionContainer.innerHTML = `
//     <div class="product-description">
//       ${product.DescriptionHtmlSimple || ""}
//     </div>
//   `

//   // Setup event listeners
//   setupQuantityControls()

//   // Thumbnail click handlers
//   document.querySelectorAll(".thumbnail").forEach((thumb) => {
//     thumb.addEventListener("click", () => {
//       mainImage.src = thumb.src.replace("~160", "~600")
//       document.querySelectorAll(".thumbnail").forEach((t) => t.classList.remove("active"))
//       thumb.classList.add("active")
//     })
//   })

//   // Add to cart handler
//   document.querySelector(".add-to-cart").addEventListener("click", () => {
//     const quantity = Number.parseInt(document.querySelector(".quantity-input").value)
//     const productToAdd = { ...product, quantity: quantity }
//     addProductToCart(productToAdd)
//   })
// }

// async function init() {
//   const productId = getParam("product")
//   if (!productId) {
//     document.querySelector(".product-detail").innerHTML = "Product not found"
//     return
//   }

//   try {
//     console.log("Fetching product with ID:", productId)
//     const product = await dataSource.findProductById(productId)
//     console.log("Fetched product data:", product)

//     if (!product) {
//       throw new Error("Product not found")
//     }

//     renderProductDetails(product)
//   } catch (error) {
//     console.error("Error loading product:", error)
//     document.querySelector(".product-detail").innerHTML = `Error loading product: ${error.message}`
//   }
// }

// init()








import { getParam } from "./utils.mjs"
import { renderProductDetails } from "../js/main.js"
import BackpackData from "./BackpackData.mjs"

const dataSource = new BackpackData()

async function init() {
  const productId = getParam("product")
  if (!productId) {
    document.querySelector(".product-detail").innerHTML = "Product not found"
    return
  }

  try {
    console.log("Fetching product with ID:", productId)
    const product = await dataSource.findProductById(productId)
    console.log("Fetched product data:", product)

    if (!product) {
      throw new Error("Product not found")
    }

    renderProductDetails(product)
  } catch (error) {
    console.error("Error loading product:", error)
    document.querySelector(".product-detail").innerHTML = `Error loading product: ${error.message}`
  }
}

init()
