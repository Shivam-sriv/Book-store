import React from "react";
import book1 from "../assets/img/book-1.jpg";
import book2 from "../assets/img/book-2.jpg";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { BiTrash } from 'react-icons/bi';
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <nav aria-label="breadcrumb" class="breadcrumbs large-font">
        <ol class="breadcrumb pt-2 ps-3">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Cart</li>
        </ol>
      </nav>
      <section className="py-5  bg-light-blue">
        <div className="container px-4">
          <h2 class="mb-5 heading-text mx-lg-auto text-center"> Shopping Cart</h2>
          <div className="row">
            <div className="col-md-10  cart offset-md-1">
              {/* ===========Cart=========== */}


              <div className="row cart-shadaw py-2 bg-white align-items-stretch rounded">
                <div className="col-md-2">
                  <img src={book1} alt="team-3" class="img-fluid rounded" />
                </div>
                <div className="col-md-4 align-self-center mt-4 mt-lg-0 fsc-20">
                <h5>  <a href=""><b>Kuchh Kuchh</b></a></h5>
                  <p className="pt-2"><b>By :</b> Anoop Upadhyay</p>
                </div>

                <div className="col-md-3 d-flex align-self-center">
                  <a href="#" className="btn-quantity"><FaMinus /></a>

                  <p className="px-4 pt-2"><b>  1 </b>  </p>
                  <a href="#" className="btn-quantity"><FaPlus /></a>

                </div>
                <div className="col-md-2 align-self-center mt-4 mt-lg-0">
                  <p><b>₹ 249</b></p>
                </div>
                <div className="col-md-1 align-self-end textc-end">
                  <a href="#"><BiTrash className="fs-3 text-redc del" /></a>
                </div>
              </div>

              {/* ===========Cart=========== */}
              <div className="row cart-shadaw py-2 bg-white align-items-stretch rounded mt-4">
                <div className="col-md-2">
                  <img src={book2} alt="team-3" class="img-fluid rounded" />
                </div>
                <div className="col-md-4 align-self-center mt-4 mt-lg-0 fsc-20">
                <h5> <a href=""><b>The Incredible</b></a></h5> 
                  <p className="pt-2"><b>By :</b> Mehar Bijapur</p>
                </div>

                <div className="col-md-3 d-flex align-self-center">
                  <a href="#" className="btn-quantity "><FaMinus /></a>

                  <p className="px-4 pt-2"><b>  1 </b>  </p>
                  <a href="#" className="btn-quantity"><FaPlus /></a>

                </div>
                <div className="col-md-2 align-self-center mt-4 mt-lg-0">
                  <p><b>₹ 249</b></p>
                </div>
                <div className="col-md-1 align-self-end textc-end">
                  <a href="#"><BiTrash className="fs-3 text-redc del" /></a>
                </div>
              </div>
              {/* ===========Cart end=========== */}
              <hr />
              <div className="text-end">
                <ul className="list-unstyled d-flex justify-content-end">
                  <li><b>Shipping Items :</b></li>
                  <li><span className="ps-5"> 3 item</span></li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-end">
                  <li><b>Grand Total :</b></li>
                  <li><span className="ps-5">₹575</span></li>
                </ul>
                <hr />
                <div className="d-flex justify-content-end">
                  <Link class="button-87" to="/checkout">Checkout</Link>
                </div>

              </div>


            </div>
          </div>

        </div>
      </section>
    </>
  )
}
export default Cart; 