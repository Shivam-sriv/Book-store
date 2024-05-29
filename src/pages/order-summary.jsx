import React, { useState } from "react";
import { Link } from "react-router-dom";
import book1 from "../assets/img/book-1.jpg";
import { BiTrash } from 'react-icons/bi';
const OrderSummary = () => {
return (
<>
<nav aria-label="breadcrumb" class="breadcrumbs large-font">
  <ol class="breadcrumb pt-2 ps-3">
    <li class="breadcrumb-item">
      <Link to="/">
      Home</Link>
    </li>
    <li class="breadcrumb-item active" aria-current="page">Order Summary</li>
  </ol>
</nav>
<section className="mx-2">
  <div className="container mb-5 summary ">
    <div className="row pt-4 flex-wrap-reverse">
    <div className="col-md-7">

<div className="row mb-5 mx-lg-3  align-items-stretch">

<div className="col-6 fsc-12">
<p className="mb-0"><span  className="text-rale">OrderID:</span> #355864</p>
<p className="mb-0"><span  className="text-rale">Placed On:</span> 24 Aug ,2022</p>
<p className="mb-0"><span  className="text-rale">Delivery Date:</span> 09 Sep ,2022</p>
</div>
<div className="col-6 text-end align-self-center">
  <a href="#" className="cancel-btn">Cancel order</a>
</div>



</div>



    <div className="row cart-shadaw py-2 bg-white align-items-stretch rounded mx-lg-3 ">
                <div className="col-md-2">
                  <img src={book1} alt="team-3" class="img-fluid rounded" />
                </div>
                <div className="col-md-4 align-self-center mt-4 mt-lg-0 fsc-20">
                <h5>  <a href="">Kuchh Kuchh</a></h5>
                  <p className="mb-0"><span className="text-rale">By :</span> Anoop Upadhyay</p>
                  <p className="mb-0"><span  className="text-rale">Quantity:</span> 2</p>
                  <p className=""><span  className="text-rale">Price:</span> <b>₹ 249</b></p>
                </div>
              
                <div className="col-md-6 text-end align-self-center">
                 <p>Completed</p>
                 <p className="text-success"><b>Paid</b></p>
                </div>
                
              
              </div>
              <div className="row cart-shadaw py-2 bg-white align-items-stretch rounded mx-lg-3 mt-4">
                <div className="col-md-2">
                  <img src={book1} alt="team-3" class="img-fluid rounded" />
                </div>
                <div className="col-md-4 align-self-center mt-4 mt-lg-0 fsc-20">
                <h5>  <a href="">Kuchh Kuchh</a></h5>
                  <p className="mb-0"><span className="text-rale">By :</span> Anoop Upadhyay</p>
                  <p className="mb-0"><span  className="text-rale">Quantity:</span> 2</p>
                  <p className=""><span  className="text-rale">Price:</span> <b>₹ 249</b></p>
                </div>
               
                <div className="col-md-6 text-end align-self-center">
                 <p>Completed</p>
                 <p className="text-success"><b>Paid</b></p>
                </div>
                
              
              </div>

        
</div>

      <div className="col-md-5 shadow-order  p-4  rounded mb-4 mb-lg-0">
        <h4 class="mb-5 heading-text mx-auto text-center"> Order Summary</h4>


        <div className="row">
          <div className="col-4 fsc-12">Order Sub Total</div>
          <div className="col-1">=</div>
          <div className="col-7"><b>₹550</b></div>
          </div>
          <div className="row border-dash py-2">
          <div className="col-4 fsc-12 ">Discount</div>
          <div className="col-1">=</div>
          <div className="col-7"><b>₹550</b></div>
        </div>
        <div className="row border-dash py-2">
          <div className="col-4  fsc-12">Shipping</div>
          <div className="col-1">=</div>
          <div className="col-7"><b>₹30</b></div>
        </div>
        <div className="row border-dash py-2">
          <div className="col-4 fsc-12"><b className="text-redc">Total Amount</b></div>
          <div className="col-1">=</div>
          <div className="col-7"><b>₹480</b></div>
        </div>
        <h6 className=" py-3  font-c">Customer Info</h6>
           <p className="text-rale">Shivam Shrivastav</p>
           <p className="text-rale">shivam.bfcsofttech@gmail.com</p>
           <p className="text-rale">9856454645</p>
           <p className="text-rale">CP-61, Viraj Khand, Gomti Nagar,
Lucknow, Uttar Pradesh 226010</p>
      
       


       


      </div>

     
    </div>
  </div>
</section>
</>
);
};
export default OrderSummary;