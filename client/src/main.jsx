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

import { Home, ProductList } from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/productInfo/:id" element={<ProductInfo />} />
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
