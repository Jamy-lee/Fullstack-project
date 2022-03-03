import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import register from "../views/register.vue";
import login from "../views/login.vue";
import products from "../views/products.vue";
import cart from "../views/cart.vue";
import addProduct from "../views/addProduct.vue";
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },

  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/products",
    name: "products",
    component: products,
  },
  {
    path: "/cart",
    name: "cart",
    component: cart,
  },
  {
    path: "/addProduct",
    name: "addProduct",
    component: addProduct,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
