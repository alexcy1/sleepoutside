// document.addEventListener('DOMContentLoaded', async () => {
//     const loadComponent = async (url, selector) => {
//       try {
//         const response = await fetch(url);
//         const content = await response.text();
//         document.querySelector(selector).innerHTML = content;
//       } catch (error) {
//         console.error(`Error loading ${url}:`, error);
//       }
//     };

//     await loadComponent('../product_pages/header.html', 'header');
//     await loadComponent('../product_pages/footer.html', 'footer');
//   });














// // File: headerFooterLoader.js
// document.addEventListener("DOMContentLoaded", async () => {
//   const loadComponent = async (url, selector) => {
//     try {
//       const response = await fetch(url);
//       const content = await response.text();
//       document.querySelector(selector).innerHTML = content;

//       // If header is loaded, trigger cart count update
//       if (selector === "header") {
//         const { updateCartCount } = await import("./cartCount.js");
//         updateCartCount();
//       }
//     } catch (error) {
//       console.error(`Error loading ${url}:`, error);
//     }
//   };

//   await loadComponent("../product_pages/header.html", "header");
//   await loadComponent("../product_pages/footer.html", "footer");
// });

















document.addEventListener("DOMContentLoaded", async () => {
  const loadComponent = async (url, selector) => {
    try {
      const response = await fetch(url)
      const content = await response.text()
      document.querySelector(selector).innerHTML = content

      if (selector === "header") {
        const { updateCartCount } = await import("./cartCount.js")
        updateCartCount()
      }
    } catch (error) {
      console.error(`Error loading ${url}:`, error)
    }
  }

  await loadComponent("../product_pages/header.html", "header")
  await loadComponent("../product_pages/footer.html", "footer")
})


