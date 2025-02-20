import {
  addToCart,
  fixImagePath,
  calculateDiscountPercentage,
  clearSearch,
  setupPagination,
} from "./main.js";

export function displaySleepingBagProducts(
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
  <a href="../product_pages/sleeping-bags-product-detail.html?product=${product.Id}">
    <img src="${fixImagePath(product.Images.PrimaryMedium)}" alt="${product.Name}" />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <div class="product-card__price-container">
      <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
      ${
        discountPercentage > 0
          ? `
        <p class="product-card__msrp">MSRP: $${product.SuggestedRetailPrice.toFixed(2)}</p>
        <p class="product-card__discount">Saves ${discountPercentage}%</p>
      `
          : ""
      }
    </div>
  </a>

`;

{/* <button class="product-card__add-to-cart" data-id="${product.Id}">Add to Cart</button> */}

    productList.appendChild(productCard);
  });

  // Add event listeners for "Add to Cart" buttons
  document.querySelectorAll(".product-card__add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => addToCart(event, products));
  });

  setupPagination(pagination, productList);
}
