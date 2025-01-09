// function convertToJson(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error("Bad Response");
//   }
// }

// export default class ProductData {
//   constructor(category) {
//     this.category = category;
//     this.path = `../json/${this.category}.json`;
//   }
//   getData() {
//     return fetch(this.path)
//       .then(convertToJson)
//       .then((data) => data);
//   }
//   async findProductById(id) {
//     const products = await this.getData();
//     return products.find((item) => item.Id === id);
//   }
// }









function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`Bad Response: ${res.status} ${res.statusText}`);
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    // Use window.location to determine the correct path depth
    const pathDepth = window.location.pathname.split('/').length - 2;
    const pathPrefix = '../'.repeat(pathDepth);
    this.path = `${pathPrefix}json/${this.category}.json`;
  }

  async getData() {
    try {
      const response = await fetch(this.path);
      const data = await convertToJson(response);
      return data;
    } catch (err) {
      console.error('Error loading data:', err.message);
      throw err;
    }
  }

  async findProductById(id) {
    try {
      const products = await this.getData();
      const product = products.find((item) => item.Id === id);
      if (!product) {
        throw new Error(`Product not found with id: ${id}`);
      }
      return product;
    } catch (err) {
      console.error('Error finding product:', err.message);
      throw err;
    }
  }
}
