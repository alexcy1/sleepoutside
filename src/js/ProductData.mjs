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






const baseURL = '../json';

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `${baseURL}/${this.category}.json`;
  }

  async getData() {
    try {
      const response = await fetch(this.path);
      if (!response.ok) {
        throw new Error('Bad Response');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching data:', err);
      throw err;
    }
  }

  async findProductById(id) {
    try {
      const products = await this.getData();
      return products.find((item) => item.Id === id);
    } catch (err) {
      console.error('Error finding product:', err);
      throw err;
    }
  }
}
