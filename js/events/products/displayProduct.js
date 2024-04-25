import { fetchProduct } from "../../api/products/fetchProduct.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderProduct } from "../../ui/products/renderProduct.js";

export async function displayProduct() {
  // get id from the query string
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");

  if (!id) {
    return (location.href = "/");
  }

  try {
    const product = await fetchProduct(id);
    console.log(product);
    renderProduct("#product-container", product);
  } catch (error) {
    // display error to the user
    console.error(error);
    displayMessage(
      "#product-container",
      "error",
      "There was an error fetching the product"
    );
  }
}
