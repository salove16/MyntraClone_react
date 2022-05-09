import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext";
import { ContextProvider } from "./Components/CartComponents/contexts/cartcontext";
// import { CartContextProvider } from "./Context/CartContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <ContextProvider>
            {/* <CartContextProvider> */}
            <AuthContextProvider>
               <App />
            </AuthContextProvider>
            {/* </CartContextProvider> */}
         </ContextProvider>
      </BrowserRouter>
   </React.StrictMode>
);
