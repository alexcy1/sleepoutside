// SleepingBagdata.mjs

// function convertToJson(res) {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
//     }
//   }

//   export default class SleepingBagData {
//     constructor() {
//       this.category = "sleeping-bags"; // Static category for backpacks
//       this.path = `../json/${this.category}.json`; // Path to the specific JSON file
//     }

//     async getData(page = 1, sortOption = "name-asc") {
//       try {
//         // Fetch the JSON data
//         const res = await fetch(this.path);
//         const data = await convertToJson(res);

//         // Sort the products
//         const sortedProducts = this.sortProducts(data.Result, sortOption);

//         // Calculate pagination
//         const startIndex = (page - 1) * data.PerPage;
//         const endIndex = startIndex + data.PerPage;

//         // Return paginated and sorted products along with pagination metadata
//         return {
//           products: sortedProducts.slice(startIndex, endIndex),
//           pagination: {
//             currentPage: page,
//             totalPages: Math.ceil(data.Count / data.PerPage),
//             nextPageUrl: data.NextPageUrl,
//             lastPageUrl: data.LastPageUrl,
//             perPage: data.PerPage,
//             totalCount: data.Count,
//           },
//         };
//       } catch (error) {
//         console.error("Error fetching backpack data:", error);
//         throw error; // Re-throw for further handling
//       }
//     }

//     sortProducts(products, sortOption) {
//       // Sort products based on the specified option
//       switch (sortOption) {
//         case "name-asc":
//           return products.sort((a, b) => a.Name.localeCompare(b.Name));
//         case "name-desc":
//           return products.sort((a, b) => b.Name.localeCompare(a.Name));
//         case "price-asc":
//           return products.sort((a, b) => a.FinalPrice - b.FinalPrice);
//         case "price-desc":
//           return products.sort((a, b) => b.FinalPrice - a.FinalPrice);
//         default:
//           return products;
//       }
//     }

//     async findProductById(id) {
//       try {
//         const res = await fetch(this.path);
//         const data = await convertToJson(res);

//         // Find and return the product with the matching ID
//         return data.Result.find((item) => item.Id === id);
//       } catch (error) {
//         console.error("Error finding product by ID:", error);
//         throw error;
//       }
//     }

//     async searchProducts(query) {
//       try {
//         const res = await fetch(this.path);
//         const data = await convertToJson(res);

//         const lowercaseQuery = query.toLowerCase();

//         // Filter products based on the search query
//         return data.Result.filter(
//           (product) =>
//             product.Name.toLowerCase().includes(lowercaseQuery) ||
//             product.NameWithoutBrand.toLowerCase().includes(lowercaseQuery) ||
//             product.Brand.Name.toLowerCase().includes(lowercaseQuery)
//         );
//       } catch (error) {
//         console.error("Error searching for products:", error);
//         throw error;
//       }
//     }
//   }







// SleepingBagData.mjs
import { BaseData } from "../js/main.js";

export default class SleepingBagData extends BaseData {
  constructor() {
    super("sleeping-bags"); // Pass "sleeping-bags" to the BaseData constructor
  }
}
