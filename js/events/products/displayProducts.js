import { fetchProducts } from "../../api/products/fetchProducts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderProductThumbnails } from "../../ui/products/renderProductThumbnails.js";
import { renderProducts } from "../../ui/products/renderProducts.js";

export async function displayProducts() {
  console.log("displayProducts");
  try {
    const products = await fetchProducts();
    console.log(products);
    renderProducts("#products-container", products);
    renderProductThumbnails("#thumbnails-container", products);
    // display products
  } catch (error) {
    // display error to the user
    console.error(error);
    displayMessage(
      "#products-container",
      "error",
      "There was an error fetching the products"
    );
  }
}
