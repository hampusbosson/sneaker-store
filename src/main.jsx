import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./components/Routes/AppRoutes.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
