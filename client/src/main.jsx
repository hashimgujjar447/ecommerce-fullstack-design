import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import { ContextProvider } from "./Context/EcommerceContext.jsx";
import ProductInfo from "./pages/ProductInfo/ProductInfo.jsx";
import Cart from "./pages/Cart/Cart.jsx";

import { Home, ProductList } from "./pages/index.js";
import Login from "./components/UserRegisterLogin/Login.jsx";
import SignUp from "./components/UserRegisterLogin/SignUp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/productInfo/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </>,
  ),
);

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    ,
  </ContextProvider>,
);
