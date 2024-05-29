import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import '../src/assets/css/responsive.css'
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Wrap from "./pages/wrap";
import Shop from "./pages/shop"; 
import Cart from "./pages/Cart";
import Product from "./pages/product";
import MyAccount from "./pages/myaccount";
import OrderSummary from "./pages/order-summary";
import Check_Out from "./pages/checkout";
import PlaceOrder from "./pages/place-order";

function App() {
 
  const location = useLocation()

  useEffect(()=>{
   window.scrollTo(0,0)
  },[location])

  return (

      <Routes>
       
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route element={<Wrap Component={Home} />} path="/" />
        <Route element={<Wrap Component={Shop} />} path="/shop" />
        <Route element={<Wrap Component={Cart} />} path="/cart" />
        <Route element={<Wrap Component={Product} />} path="/product" />
        <Route element={<Wrap Component={MyAccount} />} path="/my-account"/>
        <Route element={<Wrap Component={OrderSummary} />} path="/order-summary" />
        <Route element={<Wrap Component={Check_Out} />} path="/checkout" />
        <Route element={<Wrap Component={PlaceOrder} />} path="/place-order" />
   
      </Routes>


  );
}

export default App;
