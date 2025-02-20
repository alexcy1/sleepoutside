import { initializeSorting, loadProducts, initializePage } from "./main.js";
import { displaySleepingBagProducts } from "./renderSleepingBagProducts.js";
import SleepingBagData from "./SleepingBagData.mjs";
import { initializeSearch } from "./searchProducts.js";

const dataSource = new SleepingBagData();

function loadSleepingBags() {
  loadProducts(displaySleepingBagProducts, dataSource);
}

initializePage(loadSleepingBags, initializeSorting);
initializeSearch("sleepingbag");
