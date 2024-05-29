import React from "react";
import book1 from "../assets/img/book-1.jpg";
import { HiStar } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { BsHandbag } from 'react-icons/bs';
import {AiOutlineHeart,AiOutlineShareAlt} from 'react-icons/ai';
const Product = () => {
return (
<>
<nav aria-label="breadcrumb" class="breadcrumbs large-font">
  <ol class="breadcrumb pt-2 ps-3">
    <li class="breadcrumb-item">
      <Link to="/">
      Home</Link>
    </li>
    <li class="breadcrumb-item active" aria-current="page">Product</li>
  </ol>
</nav>
<section className="py-5  ">
  <div className="container">
    <div className="row">
      <div className="col-md-3 mb-4">
        <img src={book1} alt="team-3" class="img-fluid rounded" />
      </div>
      <div className="col-md-6">
        <h3 className="">Kuchh Kuchh</h3>
        <div className="d-flex">
          <div className=" text-yellow-darker fs-5 fw-bold">
            <HiStar />
            4.2
          </div>
          <div className="ms-3 fs-6 pt-1"><b>By :</b> Anoop Upadhyay</div>
        </div>
        <hr />
        <b className="text-redc">Specification :</b>
        <ul className="pt-2">
          <li>Genre : Poetry</li>
          <li>Language : Hindi</li>
          <li>No. of Pages : 47</li>
        </ul>
        <hr />
        <p className="text-justify"><b>Description :</b><span className="descp"> The book Kuchh Kuchh is written by the debut author, AnoopUpadhyay. He was born in Ayodhya, Uttar Pradesh, and is currently a resident in Kanpur, Uttar Pradesh. He pursued mechanical engineering and during this time, he started writing shayaris and poems. He has attended several open mic events but his ambitions as a writer lifted up when he attended an open mic event that was organized by Nojoto social media app in Indore, Madhya Pradesh. In this book, the author has penned down his shayaris and poems about love life, broken heart, relationships and motivates readers in order to get through life.</span></p>
      </div>
      <div className="col-md-3 ">
        <div className="shadow-p text-center rounded">
          <h3 className="bg-light-blue  p-3">₹125</h3>
          <div className="py-3"><b className="text-redc">Format : </b> Paperback </div>
          <span className="badge badge-pill bg-info my-2">ISBN : 9789390478019</span>
          <div className="d-flex justify-content-center py-4">
            <a href="#" className="btn-quantity">
              <FaMinus />
            </a>
            <p className="px-4 pt-2"><b>  1 </b>  </p>
            <a href="#" className="btn-quantity">
              <FaPlus />
            </a>
          </div>
          <div className="d-flex justify-content-center py-4">
            <Link class="button-87" to="/cart">
              <BsHandbag className="me-2 fs-5"/>
              Add to Cart
            </Link>
          </div>
          <div className="py-4 share-s d-flex  justify-content-center">
            <Link to="/wishlist">
              <AiOutlineHeart className="me-1"/>
              Add to Wishlist
            </Link>
            <ul class="menu bottomRight">
              <li class="share top">
                <Link to="#" className="ms-3 share top">
                  <AiOutlineShareAlt className="me-1"/>
                  Share
                </Link>
                <ul class="submenu">
                  <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#" class="googlePlus"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="#" class="whatsapp"><i class="fa fa-whatsapp"></i></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
)
}
export default Product;