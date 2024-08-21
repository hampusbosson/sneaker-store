import { CartProvider } from '../CartProvider';
import App from "../../App";
import ErrorPage from "./ErrorPage";
import ProductPage from "./ProductPage/ProductPage";
import Collections from "./Collections/Collections";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="product/:item" element={<ProductPage />} />
          <Route path="collections/:collection" element={<Collections />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default AppRoutes;