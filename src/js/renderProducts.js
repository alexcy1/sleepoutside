// // Hardcoded Product IDs to Filter
const hardcodedProductIds = ["880RR", "985RF", "985PR", "344YJ"];

// Function to dynamically render products
function displayProducts(tents) {
  const productList = document.querySelector('.product-list');

  if (!productList) {
    console.error("Product list element not found!");
    return;
  }

  // Filter products based on hardcoded IDs
  const filteredProducts = tents.filter(product => hardcodedProductIds.includes(product.Id));

  // Generate HTML for each product
  filteredProducts.forEach(product => {
    const productCard = document.createElement('li');
    productCard.classList.add('product-card');

    // Hardcoded URLs for the detail pages
    let productLink = '';
    if (product.Id === '880RR') {
      productLink = 'product_pages/marmot-ajax-3.html';
    } else if (product.Id === '985RF') {
      productLink = 'product_pages/northface-talus-4.html';
    } else if (product.Id === '985PR') {
      productLink = 'product_pages/northface-alpine-3.html';
    } else if (product.Id === '344YJ') {
      productLink = 'product_pages/cedar-ridge-rimrock-2.html';
    }

    productCard.innerHTML = `
      <a href="${productLink}">
        <img src="${product.Image}" alt="${product.NameWithoutBrand}" />
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
      </a>
    `;

    productList.appendChild(productCard);
  });
}

// Function to fetch JSON data using async/await
async function loadProducts() {
  try {
    const response = await fetch('../json/tents.json');
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.error('Error loading JSON data:', error);
  }
}

// Call the async function
loadProducts();
