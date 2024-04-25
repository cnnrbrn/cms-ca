import { BASE_URL } from "../../constants/api.js";

export async function fetchProducts() {
  const response = await fetch(BASE_URL);

  console.log(response);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();
  return json;
}
