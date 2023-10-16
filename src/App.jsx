import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./context/cart/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InterestsProvider from "./context/interests/InterestsProvider";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="bg-slate-200 dark:bg-main-gray">
      <ScrollToTop />
      <CartProvider>
        <InterestsProvider>
          <ToastContainer />
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.element} key={route.id} />
            ))}
          </Routes>
        </InterestsProvider>
      </CartProvider>
    </div>
  );
}

export default App;
