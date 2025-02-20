// import ProductData from './ProductData.mjs';

// const dataSource = new ProductData('tents');

// export async function performSearch(query) {
//   try {
//     const products = await dataSource.getData();
//     return products.filter(product =>
//       product.Name.toLowerCase().includes(query.toLowerCase()) ||
//       product.NameWithoutBrand.toLowerCase().includes(query.toLowerCase()) ||
//       product.Brand.Name.toLowerCase().includes(query.toLowerCase())
//     );
//   } catch (error) {
//     console.error('Error searching products:', error);
//     return [];
//   }
// }

// export function displaySearchResults(results) {
//   const productList = document.querySelector('.product-list');
//   if (!productList) return;

//   productList.innerHTML = '';

//   results.forEach(product => {
//     const li = document.createElement('li');
//     li.className = 'product-card';
//     li.innerHTML = `
//       <a href="../product_pages/product-detail.html?product=${product.Id}">
//         <img src="${product.Image}" alt="${product.Name}">
//         <h3 class="card__brand">${product.Brand.Name}</h3>
//         <h2 class="card__name">${product.NameWithoutBrand}</h2>
//         <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//       </a>
//     `;
//     productList.appendChild(li);
//   });
// }

// export function initializeSearch() {
//   // Use MutationObserver to detect when the header is loaded
//   const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//       if (mutation.type === 'childList') {
//         const searchInput = document.getElementById('search-input');
//         const searchForm = document.getElementById('search-form');

//         if (searchInput && searchForm) {
//           observer.disconnect(); // Stop observing once we find the search input

//           searchInput.addEventListener('input', debounce(async (e) => {
//             const query = e.target.value.trim();
//             if (query) {
//               const results = await performSearch(query);
//               displaySearchResults(results);
//             } else {
//               // If the search input is empty, display all products
//               const allProducts = await dataSource.getData();
//               displaySearchResults(allProducts);
//             }
//           }, 300));

//           searchForm.addEventListener('submit', (e) => {
//             e.preventDefault(); // Prevent form submission
//           });
//         }
//       }
//     });
//   });

//   // Start observing the document with the configured parameters
//   observer.observe(document.body, { childList: true, subtree: true });
// }

// // Debounce function to limit the rate of API calls
// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(this, args), delay);
//   };
// }






















// import ProductData from './ProductData.mjs';

// const dataSource = new ProductData('tents');

// function fixImagePath(imagePath) {
//   // Remove the leading '..' from the image path
//   return imagePath.replace(/^\.\./, '');
// }

// export async function performSearch(query) {
//   try {
//     const products = await dataSource.getData();
//     return products.filter(product =>
//       product.Name.toLowerCase().includes(query.toLowerCase()) ||
//       product.NameWithoutBrand.toLowerCase().includes(query.toLowerCase()) ||
//       product.Brand.Name.toLowerCase().includes(query.toLowerCase())
//     );
//   } catch (error) {
//     console.error('Error searching products:', error);
//     return [];
//   }
// }

// export function displaySearchResults(results) {
//   const productList = document.querySelector('.product-list');
//   if (!productList) return;

//   productList.innerHTML = '';

//   results.forEach(product => {
//     const li = document.createElement('li');
//     li.className = 'product-card';
//     li.innerHTML = `
//       <a href="../product_pages/product-detail.html?product=${product.Id}">
//         <img src="${fixImagePath(product.Image)}" alt="${product.Name}">
//         <h3 class="card__brand">${product.Brand.Name}</h3>
//         <h2 class="card__name">${product.NameWithoutBrand}</h2>
//         <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//       </a>
//     `;
//     productList.appendChild(li);
//   });
// }

// export function initializeSearch() {
//   const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//       if (mutation.type === 'childList') {
//         const searchInput = document.getElementById('search-input');
//         const searchForm = document.getElementById('search-form');

//         if (searchInput && searchForm) {
//           observer.disconnect();

//           searchInput.addEventListener('input', debounce(async (e) => {
//             const query = e.target.value.trim();
//             if (query) {
//               const results = await performSearch(query);
//               displaySearchResults(results);
//             } else {
//               const allProducts = await dataSource.getData();
//               displaySearchResults(allProducts);
//             }
//           }, 300));

//           searchForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//           });
//         }
//       }
//     });
//   });

//   observer.observe(document.body, { childList: true, subtree: true });
// }

// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(this, args), delay);
//   };
// }

















// ============================================================================



// import ProductData from './ProductData.mjs';

// const dataSource = new ProductData('tents');

// // Hardcoded Product IDs to Filter
// const hardcodedProductIds = ["880RR", "985RF", "985PR", "344YJ"];

// function fixImagePath(imagePath) {
//   // Remove the leading '..' from the image path
//   return imagePath.replace(/^\.\./, '');
// }

// export async function performSearch(query) {
//   try {
//     const products = await dataSource.getData();

//     // Filter products by query and hardcodedProductIds
//     return products.filter(product =>
//       hardcodedProductIds.includes(product.Id) && // Only include products with specified IDs
//       (
//         product.Name.toLowerCase().includes(query.toLowerCase()) ||
//         product.NameWithoutBrand.toLowerCase().includes(query.toLowerCase()) ||
//         product.Brand.Name.toLowerCase().includes(query.toLowerCase())
//       )
//     );
//   } catch (error) {
//     console.error('Error searching products:', error);
//     return [];
//   }
// }

// export function displaySearchResults(results) {
//   const productList = document.querySelector('.product-list');
//   if (!productList) return;

//   productList.innerHTML = '';

//   results.forEach(product => {
//     const li = document.createElement('li');
//     li.className = 'product-card';
//     li.innerHTML = `
//       <a href="../product_pages/product-detail.html?product=${product.Id}">
//         <img src="${fixImagePath(product.Image)}" alt="${product.Name}">
//         <h3 class="card__brand">${product.Brand.Name}</h3>
//         <h2 class="card__name">${product.NameWithoutBrand}</h2>
//         <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
//       </a>
//     `;
//     productList.appendChild(li);
//   });
// }

// export function initializeSearch() {
//   const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//       if (mutation.type === 'childList') {
//         const searchInput = document.getElementById('search-input');
//         const searchForm = document.getElementById('search-form');

//         if (searchInput && searchForm) {
//           observer.disconnect();

//           searchInput.addEventListener('input', debounce(async (e) => {
//             const query = e.target.value.trim();
//             if (query) {
//               const results = await performSearch(query);
//               displaySearchResults(results);
//             } else {
//               const allProducts = await dataSource.getData();

//               // Only display products matching the hardcoded IDs when no query is provided
//               const filteredProducts = allProducts.filter(product => hardcodedProductIds.includes(product.Id));
//               displaySearchResults(filteredProducts);
//             }
//           }, 300));

//           searchForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//           });
//         }
//       }
//     });
//   });

//   observer.observe(document.body, { childList: true, subtree: true });
// }

// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(this, args), delay);
//   };
// }














import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');

// Hardcoded Product IDs to Filter
const hardcodedProductIds = ["880RR", "985RF", "985PR", "344YJ"];

function fixImagePath(imagePath) {
  // Remove the leading '..' from the image path
  return imagePath.replace(/^\.\./, '');
}

export async function performSearch(query) {
  try {
    const products = await dataSource.getData();
    const lowercaseQuery = query.toLowerCase();
    const results = [];

    // Iterate through products using a for loop instead of filter
    for (const product of products) {
      if (
        hardcodedProductIds.includes(product.Id) && // Only include products with specified IDs
        (
          product.Name.toLowerCase().includes(lowercaseQuery) ||
          product.NameWithoutBrand.toLowerCase().includes(lowercaseQuery) ||
          product.Brand.Name.toLowerCase().includes(lowercaseQuery)
        )
      ) {
        results.push(product);
      }
    }

    return results;
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
}

export function displaySearchResults(results) {
  const productList = document.querySelector('.product-list');
  if (!productList) return;

  productList.innerHTML = '';

  results.forEach(product => {
    const li = document.createElement('li');
    li.className = 'product-card';
    li.innerHTML = `
      <a href="../product_pages/product-detail.html?product=${product.Id}">
        <img src="${fixImagePath(product.Image)}" alt="${product.Name}">
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
      </a>
    `;
    productList.appendChild(li);
  });
}

export function initializeSearch() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        const searchInput = document.getElementById('search-input');
        const searchForm = document.getElementById('search-form');

        if (searchInput && searchForm) {
          observer.disconnect();

          searchInput.addEventListener('input', debounce(async (e) => {
            const query = e.target.value.trim();
            if (query) {
              const results = await performSearch(query);
              displaySearchResults(results);
            } else {
              const allProducts = await dataSource.getData();
              const filteredProducts = [];

              // Use a for loop to filter products by hardcoded IDs
              for (const product of allProducts) {
                if (hardcodedProductIds.includes(product.Id)) {
                  filteredProducts.push(product);
                }
              }

              displaySearchResults(filteredProducts);
            }
          }, 300));

          searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
          });
        }
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
