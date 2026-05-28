import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { Shop } from "./components/pages/Shop";
import { ProductDetail } from "./components/pages/ProductDetail";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Cart } from "./components/pages/Cart";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Offers } from "./components/pages/Offers";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "product/:id", Component: ProductDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "cart", Component: Cart },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "offers", Component: Offers },
      { path: "*", Component: NotFound },
    ],
  },
]);