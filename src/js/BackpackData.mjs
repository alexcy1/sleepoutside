
// function convertToJson(res) {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Bad Response");
//     }
//   }

//   export default class BackpackData {
//     constructor() {
//       this.category = "backpacks";
//       this.path = `../json/${this.category}.json`;
//     }

//     async getData(page = 1) {
//       const res = await fetch(this.path);
//       const data = await convertToJson(res);
//       const startIndex = (page - 1) * data.PerPage;
//       const endIndex = startIndex + data.PerPage;
//       return {
//         products: data.Result.slice(startIndex, endIndex),
//         pagination: {
//           currentPage: page,
//           totalPages: Math.ceil(data.Count / data.PerPage),
//           nextPageUrl: data.NextPageUrl,
//           lastPageUrl: data.LastPageUrl
//         }
//       };
//     }

//     async findProductById(id) {
//       const res = await fetch(this.path);
//       const data = await convertToJson(res);
//       return data.Result.find((item) => item.Id === id);
//     }
//   }














// function convertToJson(res) {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Bad Response");
//     }
//   }

//   export default class BackpackData {
//     constructor() {
//       this.category = "backpacks";
//       this.path = `../json/${this.category}.json`;
//     }

//     async getData(page = 1) {
//       const res = await fetch(this.path);
//       const data = await convertToJson(res);
//       const startIndex = (page - 1) * data.PerPage;
//       const endIndex = startIndex + data.PerPage;
//       return {
//         products: data.Result.slice(startIndex, endIndex),
//         pagination: {
//           currentPage: page,
//           totalPages: Math.ceil(data.Count / data.PerPage),
//           nextPageUrl: data.NextPageUrl,
//           lastPageUrl: data.LastPageUrl
//         }
//       };
//     }

//     async findProductById(id) {
//       const res = await fetch(this.path);
//       const data = await convertToJson(res);
//       return data.Result.find((item) => item.Id === id);
//     }

//     async searchProducts(query) {
//       const res = await fetch(this.path);
//       const data = await convertToJson(res);
//       const lowercaseQuery = query.toLowerCase();
//       return data.Result.filter(product =>
//         product.Name.toLowerCase().includes(lowercaseQuery) ||
//         product.NameWithoutBrand.toLowerCase().includes(lowercaseQuery) ||
//         product.Brand.Name.toLowerCase().includes(lowercaseQuery)
//       );
//     }
//   }

















// BackpackData.mjs ======================================

// function convertToJson(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error("Bad Response");
//   }
// }

// export default class BackpackData {
//   constructor() {
//     this.category = "backpacks";
//     this.path = `../json/${this.category}.json`;
//   }

//   async getData(page = 1, sortOption = 'name-asc') {
//     const res = await fetch(this.path);
//     const data = await convertToJson(res);
//     const sortedProducts = this.sortProducts(data.Result, sortOption);
//     const startIndex = (page - 1) * data.PerPage;
//     const endIndex = startIndex + data.PerPage;
//     return {
//       products: sortedProducts.slice(startIndex, endIndex),
//       pagination: {
//         currentPage: page,
//         totalPages: Math.ceil(data.Count / data.PerPage),
//         nextPageUrl: data.NextPageUrl,
//         lastPageUrl: data.LastPageUrl,
//         perPage: data.PerPage,
//         totalCount: data.Count
//       }
//     };
//   }

//   sortProducts(products, sortOption) {
//     switch (sortOption) {
//       case "name-asc":
//         return products.sort((a, b) => a.Name.localeCompare(b.Name));
//       case "name-desc":
//         return products.sort((a, b) => b.Name.localeCompare(a.Name));
//       case "price-asc":
//         return products.sort((a, b) => a.FinalPrice - b.FinalPrice);
//       case "price-desc":
//         return products.sort((a, b) => b.FinalPrice - a.FinalPrice);
//       default:
//         return products;
//     }
//   }

//   async findProductById(id) {
//     const res = await fetch(this.path);
//     const data = await convertToJson(res);
//     return data.Result.find((item) => item.Id === id);
//   }

//   async searchProducts(query) {
//     const res = await fetch(this.path);
//     const data = await convertToJson(res);
//     const lowercaseQuery = query.toLowerCase();
//     return data.Result.filter(product =>
//       product.Name.toLowerCase().includes(lowercaseQuery) ||
//       product.NameWithoutBrand.toLowerCase().includes(lowercaseQuery) ||
//       product.Brand.Name.toLowerCase().includes(lowercaseQuery)
//     );
//   }
// }



// BackpackData.mjs
import { BaseData } from "../js/main.js";

export default class BackpackData extends BaseData {
  constructor() {
    super("backpacks"); // Pass "backpacks" to the base class constructor
  }
}
