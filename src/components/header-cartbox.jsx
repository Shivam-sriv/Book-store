import React from "react";
import Ecart from "../assets/img/empty-cart.svg";
import book1 from "../assets/img/book-1.jpg";
import {  RxCross2 } from 'react-icons/rx';
import { Link } from "react-router-dom";

const CartBox = () =>{
return(
    <>
    {/* <div className="cart-box">
            <div className="empty-cart empty-cart-box">
              <img src={Ecart} />
                <p>Cart is empty</p>
                </div>
             </div> */}
                 <div className="cart-box">
                      <div className="card-info position-relative">
                          <div className="d-flex p-3">
                            <img src={book1}  alt="image" className="img-fluid wd-80" />
                            <div className="product-title ps-4 pt-3">
                              <Link to="/product">
                                <h3 className="fs-18"> Kuchh Kuchh</h3>
                              </Link>
                              <span className="text-black fs-14"> 1 × <span> ₹ 300  </span>
                              </span>
                            </div>
                          </div>

                          <span
                            className="cartcut-icon"

                          >
                            <RxCross2 />
                          </span>
                        </div>
                        <div className="card-info position-relative mb-2">
                          <div className="d-flex p-3">
                            <img src={book1}  alt="image" className="img-fluid wd-80" />
                            <div className="product-title ps-4 pt-3">
                              <Link to="/product">
                                <h3 className="fs-18"> Kuchh Kuchh</h3>
                              </Link>
                              <span className="text-black fs-14"> 1 × <span> ₹ 300  </span>
                              </span>
                            </div>
                          </div>
                          <span className="cartcut-icon"><RxCross2 /></span>
                        </div>
                        <div className="card-total text-center mx-3 fs-14">
                          <span className="fw-semibold fs-11">Sub Total:</span>  ₹ 300 
                        </div>
                        <div className="d-flex justify-content-around my-2">
                          <Link to="/checkout" className="cart-btn bg-danger">Checkout </Link>
                          <Link to="/cart" className="cart-btn button-87">View Cart </Link>
                        </div>
                </div>
    </>
)
}
export default CartBox;