// import BackpackData from "./BackpackData.mjs"
// import { displayBackpackProducts } from "./renderBackpackProducts.js"

// const dataSource = new BackpackData()

// export async function initializeSearch() {
//   document.addEventListener(
//     "submit",
//     async (e) => {
//       if (e.target.id === "search-form") {
//         e.preventDefault()
//         const searchInput = document.getElementById("search-input")
//         const query = searchInput.value.trim()
//         if (query) {
//           const searchResults = await dataSource.searchProducts(query)
//           displayBackpackProducts(searchResults, null, true)
//         }
//       }
//     },
//     true,
//   )
// }

// export async function clearSearch() {
//   const searchInput = document.getElementById("search-input")
//   if (searchInput) {
//     searchInput.value = ""
//   }
//   const { products, pagination } = await dataSource.getData(1)
//   displayBackpackProducts(products, pagination)
// }

















// import BackpackData from "./BackpackData.mjs"
// import { displayBackpackProducts } from "./renderBackpackProducts.js"

// const dataSource = new BackpackData()

// export async function initializeSearch() {
//   document.addEventListener(
//     "submit",
//     async (e) => {
//       if (e.target.id === "search-form") {
//         e.preventDefault()
//         const searchInput = document.getElementById("search-input")
//         const query = searchInput.value.trim()
//         if (query) {
//           const searchResults = await dataSource.searchProducts(query)
//           displayBackpackProducts(searchResults, null, true)
//         }
//       }
//     },
//     true,
//   )
// }

// export function clearSearch() {
//   // Instead of reloading products, we'll simply refresh the page
//   window.location.href = window.location.pathname
// }







// import SleepingBagData from "./SleepingBagData.mjs"
// import { displaySleepingBagProducts } from "./renderSleepingBagProducts.js"

// const dataSource = new SleepingBagData()

// export async function initializeSearch() {
//   document.addEventListener(
//     "submit",
//     async (e) => {
//       if (e.target.id === "search-form") {
//         e.preventDefault()
//         const searchInput = document.getElementById("search-input")
//         const query = searchInput.value.trim()
//         if (query) {
//           const searchResults = await dataSource.searchProducts(query)
//           displaySleepingBagProducts(searchResults, null, true)
//         }
//       }
//     },
//     true,
//   )
// }

// export function clearSearch() {
//   // Instead of reloading products, we'll simply refresh the page
//   window.location.href = window.location.pathname
// }

















import BackpackData from "./BackpackData.mjs";
import SleepingBagData from "./SleepingBagData.mjs";
import { displayBackpackProducts } from "./renderBackpackProducts.js";
import { displaySleepingBagProducts } from "./renderSleepingBagProducts.js";

export async function initializeSearch(productType) {
  let dataSource, displayFunction;

  // Determine the data source and display function based on the product type
  if (productType === "backpack") {
    dataSource = new BackpackData();
    displayFunction = displayBackpackProducts;
  } else if (productType === "sleepingbag") {
    dataSource = new SleepingBagData();
    displayFunction = displaySleepingBagProducts;
  } else {
    console.error(`Invalid product type: ${productType}`);
    return;
  }

  document.addEventListener("submit", async (e) => {
    if (e.target.id === "search-form") {
      e.preventDefault();
      const searchInput = document.getElementById("search-input");
      const query = searchInput.value.trim();

      if (query) {
        try {
          const searchResults = await dataSource.searchProducts(query);
          displayFunction(searchResults, null, true);
        } catch (error) {
          console.error(`Error during ${productType} search:`, error);
        }
      }
    }
  });
}
