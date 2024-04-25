import { displayProduct } from "./events/products/displayProduct.js";
import { displayProducts } from "./events/products/displayProducts.js";

const { pathname } = location;

console.log(pathname);

switch (pathname) {
  case "/":
  case "/index.html":
    displayProducts();
    break;
  case "/product.html":
    displayProduct();
    break;
}

// import { BASE_URL } from "./constants/api.js";

// console.log(BASE_URL);

// async function getProducts(name) {
//   try {
//     const response = await fetch(BASE_URL);
//     const json = await response.json();
//     console.log(json);

//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getProducts("Blob");
