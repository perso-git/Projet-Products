import "./assets/main.css";

import { createApp } from "vue";
import Products from "./Products.vue";
import Product from "./Product.vue";

const app = createApp(Products);
app.component("Product", Product);

createApp(Products).mount("#app");
app.mount("#app");
