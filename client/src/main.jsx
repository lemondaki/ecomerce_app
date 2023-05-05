import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle.jsx";
import { ProductProvider } from "./context/ProductContext";
import FilterProvider from "./context/FilterContext";
import CartProvider from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductProvider>
        <FilterProvider>
          <CartProvider>
            <GlobalStyle>
              <App />
            </GlobalStyle>
          </CartProvider>
        </FilterProvider>
      </ProductProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
