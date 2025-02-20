
// import { displayBackpackProducts } from "./renderBackpackProducts.js"
// import BackpackData from "./BackpackData.mjs"

// const dataSource = new BackpackData()

// async function loadBackpacks() {
//   const urlParams = new URLSearchParams(window.location.search)
//   const page = Number.parseInt(urlParams.get("page")) || 1
//   const { products, pagination } = await dataSource.getData(page)
//   displayBackpackProducts(products, pagination)
// }

// loadBackpacks()











// import { displayBackpackProducts } from "./renderBackpackProducts.js"
// import BackpackData from "./BackpackData.mjs"
// import { initializeSearch } from "./searchProducts.js"

// const dataSource = new BackpackData()

// async function loadBackpacks() {
//   const urlParams = new URLSearchParams(window.location.search)
//   const page = Number.parseInt(urlParams.get("page")) || 1
//   const { products, pagination } = await dataSource.getData(page)
//   displayBackpackProducts(products, pagination)
// }

// document.addEventListener("DOMContentLoaded", () => {
//   loadBackpacks()
//   initializeSearch()
// })

























// import { displayBackpackProducts } from "./renderBackpackProducts.js"
// import BackpackData from "./BackpackData.mjs"
// import { initializeSearch } from "./searchProducts.js"

// const dataSource = new BackpackData()

// async function loadBackpacks(sortOption = "name-asc") {
//   const urlParams = new URLSearchParams(window.location.search)
//   const page = Number.parseInt(urlParams.get("page")) || 1
//   const { products, pagination } = await dataSource.getData(page, sortOption)
//   displayBackpackProducts(products, pagination)
// }

// function initializeSorting() {
//   const sortSelect = document.getElementById("sort-options")
//   if (sortSelect) {
//     sortSelect.addEventListener("change", (event) => {
//       loadBackpacks(event.target.value)
//     })
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   loadBackpacks()
//   initializeSearch()
//   initializeSorting()
// })















// FROM MAIN.JS
// import { displayBackpackProducts } from "./renderBackpackProducts.js"
// import BackpackData from "./BackpackData.mjs"
// import { initializeSearch } from "./searchProducts.js"

// const dataSource = new BackpackData()

// async function loadBackpacks() {
//   const urlParams = new URLSearchParams(window.location.search)
//   const page = Number.parseInt(urlParams.get("page")) || 1
//   const sortOption = urlParams.get("sort") || "name-asc"
//   const { products, pagination } = await dataSource.getData(page, sortOption)
//   displayBackpackProducts(products, pagination)
// }

// function initializeSorting() {
//   const sortSelect = document.getElementById("sort-options")
//   if (sortSelect) {
//     sortSelect.addEventListener("change", (event) => {
//       const urlParams = new URLSearchParams(window.location.search)
//       urlParams.set("sort", event.target.value)
//       urlParams.set("page", 1) // Reset to first page when sorting
//       window.location.search = urlParams.toString()
//     })
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const urlParams = new URLSearchParams(window.location.search)
//   const sortOption = urlParams.get("sort") || "name-asc"
//   document.getElementById("sort-options").value = sortOption

//   loadBackpacks()
//   initializeSearch()
//   initializeSorting()
// })









// import { initializeSorting, loadProducts, initializePage } from "./main.js";
// import { displayBackpackProducts } from "./renderBackpackProducts.js";
// import BackpackData from "./BackpackData.mjs";
// import { initializeSearch } from "./searchProducts.js";

// const dataSource = new BackpackData();

// function loadBackpacks() {
//   loadProducts(displayBackpackProducts, dataSource);
// }

// initializePage(loadBackpacks, initializeSearch, initializeSorting);








import { initializeSorting, loadProducts, initializePage } from "./main.js"
import { displayBackpackProducts } from "./renderBackpackProducts.js"
import BackpackData from "./BackpackData.mjs"
import { initializeSearch } from "./searchProducts.js"

const dataSource = new BackpackData()

function loadBackpacks(page = 1, sortOption = "name-asc") {
  loadProducts(displayBackpackProducts, dataSource, page, sortOption)
}

initializePage(loadBackpacks, initializeSorting)
initializeSearch("backpack");
