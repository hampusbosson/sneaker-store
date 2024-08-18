import App from "../../App";
import ErrorPage from "./ErrorPage";
import ProductPage from "./ProductPage/ProductPage";
import Collections from "./Collections/Collections"

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "product/:item",
    element: <ProductPage />,
  },
  {
    path: "collections/:collection",
    element: <Collections />,
  }
];

export default routes;