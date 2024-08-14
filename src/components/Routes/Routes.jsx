import App from "../../App";
import ErrorPage from "./ErrorPage";
import ProductPage from "./ProductPage/ProductPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "product/:item",
    element: <ProductPage />,
  }
];

export default routes;