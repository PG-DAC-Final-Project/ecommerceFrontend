import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import MyOrders from "./component/profile/MyOrders";

import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Product from "./pages/Product";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProductView from "./pages/ProductView";
import UserCart from "./pages/UserCart";
import PaymentForm from "./pages/PaymentForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/product/:id" element={<ProductView />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/myProfile" element={<MyProfile />}></Route>
          <Route path="/myProfile/myOrders" element={<MyOrders />}></Route>
          <Route path="/cart" element={<UserCart />}></Route>
          <Route path="/payment" element={<PaymentForm />}></Route >
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
