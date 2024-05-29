import React, { useEffect } from "react";
import img2 from "../assets/img/banner/img-2.png"
import img1 from "../assets/img/banner/img-1.png"
import img3 from "../assets/img/banner/img-3.png"
import mbook1 from "../assets/img/most-popular/book-1.jpg"
import mbook2 from "../assets/img/most-popular/book-2.jpg";
import mbook3 from "../assets/img/most-popular/book-3.jpg"
import mbook4 from "../assets/img/most-popular/book-4.jpg"
import mbook5 from "../assets/img/most-popular/book-5.jpg"
import ucbook1 from "../assets/img/upcoming-popular/book-1.jpg"
import ucbook2 from "../assets/img/upcoming-popular/book-2.jpg"
import ucbook3 from "../assets/img/upcoming-popular/book-3.jpg"
import ucbook4 from "../assets/img/upcoming-popular/book-4.jpg"
import ucbook5 from "../assets/img/upcoming-popular/book-5.jpg"
import fiction from "../assets/img/home/category/artificial-intelligence.png";
import nonfiction from "../assets/img/home/category/open-book.png";
import litreture from "../assets/img/home/category/book.png";
import acadmics from "../assets/img/home/category/education.png";
import romance from "../assets/img/home/category/romance.png";
import politics from "../assets/img/home/category/politician.png";
import biography from "../assets/img/home/category/biography.png";
import motive from "../assets/img/home/category/team-support.png";
import poetry from "../assets/img/home/category/poetry.png";
import story from "../assets/img/home/category/reading-book.png";
import book1 from "../assets/img/book-1.jpg";
import book2 from "../assets/img/book-2.jpg";
import book3 from "../assets/img/book-3.jpg";
import book4 from "../assets/img/book-4.jpg";
import 'animate.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useLocation } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import { BsHandbag } from 'react-icons/bs';
import {  BsHeart } from 'react-icons/bs';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Home = () => {
return(
<>
<section className="banner-wapper pt-lg-5">
  <Carousel controls={false}>
    <Carousel.Item>
      <div className="container">
        <div className="row align-items-stretch flex-wrap-reverse">
          <div className="col-md-7 align-self-center">
            <div className="banner-content">
              <h6 className="sub-title animate__animated animate__fadeInRightBig">BEST SELLER</h6>
              <h1 className="title mb-2 fading">Pushing Clouds</h1>
              <ul className="dz-tags ps-0 list-unstyled">
                <li><a href="javascript:void(0);">Napoleon Hill</a></li>
                <li><a href="javascript:void(0);">Business &amp; Strategy</a></li>
              </ul>
              <p class="text mb-3 text-justify text-rale">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
            <div className="banner-btn pt-4 d-flex">
              <Link class="button-87"   to="/shop">
              Shop Now</Link>
            </div>
          </div>
          <div className="col-md-5 mb-3">
            <img className="img-fluid" src={img1} alt="Second slide"/>  
          </div>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="container">
        <div className="row  align-items-stretch flex-wrap-reverse">
          <div className="col-md-7  align-self-center">
            <div className="banner-content">
              <h6 className="sub-title animate__animated animate__fadeInRightBig">BEST SELLER</h6>
              <h1 className="title mb-2 fading">Pushing Clouds</h1>
              <ul className="dz-tags ps-0 list-unstyled">
                <li><a href="javascript:void(0);">Napoleon Hill</a></li>
                <li><a href="javascript:void(0);">Business &amp; Strategy</a></li>
              </ul>
              <p class="text mb-3 text-justify text-rale">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
            <div className="banner-btn pt-4 d-flex">
              <Link class="button-87"   to="/shop">
              Shop Now</Link>
            </div>
          </div>
          <div className="col-md-5 mb-3">
            <img className="img-fluid" src={img2} alt="Second slide"/>  
          </div>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="container">
        <div className="row align-items-stretch flex-wrap-reverse">
          <div className="col-md-7 align-self-center">
            <div className="banner-content">
              <h6 className="sub-title animate__animated animate__fadeInRightBig">BEST SELLER</h6>
              <h1 className="title mb-2 fading">Pushing Clouds</h1>
              <ul className="dz-tags ps-0 list-unstyled">
                <li><a href="javascript:void(0);">Napoleon Hill</a></li>
                <li><a href="javascript:void(0);">Business &amp; Strategy</a></li>
              </ul>
              <p class="text mb-3 text-justify text-rale">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
            <div className="banner-btn pt-4 d-flex">
              <Link class="button-87"   to="/shop">
              Shop Now</Link>
            </div>
          </div>
          <div className="col-md-5 mb-3">
            <img className="img-fluid" src={img3} alt="Second slide"/>  
          </div>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
</section>
<section className="category py-5">
<div className="container">
<OwlCarousel className='owl-theme' loop margin={10} autoplaySpeed={2000} autoplay={true} items={4} responsiveClass={true}   responsive={{ '0': { items: 1, nav: true }, '768': { items: 2, nav: true },'990': { nav: true },}} dots={false}  nav>
    <div class='item'>
    <Link to="/shop">
        <div className="card shadowc">
          <div className="card-body">
            <img src={fiction} alt="" className="img-fluid pb-4" />
            <h6 className="text-redc">Fiction</h6>
            <p className="text-rale">Best Collections</p>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/shop">
        <div className="card shadowc">
          <div className="card-body">
            <img src={nonfiction} alt="" className="img-fluid pb-4" />
            <h6 className="text-redc">Non Fiction</h6>
            <p className="text-rale">Best Collections</p>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/shop">
        <div className="card shadowc">
          <div className="card-body">
            <img src={litreture} alt="" className="img-fluid pb-4" />
            <h6 className="text-redc">Literature</h6>
            <p className="text-rale">Best Collections</p>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/shop">
        <div className="card shadowc">
          <div className="card-body">
            <img src={acadmics} alt="" className="img-fluid pb-4" />
            <h6 className="text-redc">Academics</h6>
            <p className="text-rale">Best Collections</p>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/shop">
        <div className="card shadowc">
          <div className="card-body">
            <img src={romance} alt="" className="img-fluid pb-4" />
            <h6 className="text-redc">Romance</h6>
            <p className="text-rale">Best Collections</p>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/shop">
        <div className="card shadowc">
          <div className="card-body">
            <img src={politics} alt="" className="img-fluid pb-4" />
            <h6 className="text-redc">politics</h6>
            <p className="text-rale">Best Collections</p>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/shop">
        <div className="card shadowc">
          <div className="card-body">
            <img src={biography} alt="" className="img-fluid pb-4" />
            <h6 className="text-redc">Biography</h6>
            <p className="text-rale">Best Collections</p>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/shop">
        <div className="card shadowc">
          <div className="card-body">
            <img src={motive} alt="" className="img-fluid pb-4" />
            <h6 className="text-redc">Motivational</h6>
            <p className="text-rale">Best Collections</p>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/shop">
        <div className="card shadowc">
          <div className="card-body">
            <img src={poetry} alt="" className="img-fluid pb-4" />
            <h6 className="text-redc">Poetry</h6>
            <p className="text-rale">Best Collections</p>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/shop">
        <div className="card shadowc">
          <div className="card-body">
            <img src={story} alt="" className="img-fluid pb-4" />
            <h6 className="text-redc">Short Stories</h6>
            <p className="text-rale">Best Collections</p>
          </div>
        </div>
        </Link>
    </div>
    
</OwlCarousel>
</div>
 
</section>
<section class="bg-light-blue py-5">
  <div class="container">
    <div className="d-flex align-items-baseline justify-content-between ">
      <h2 class="mb-5 heading-text mx-lg-auto">New Release</h2>
      <Link class="view-btn" to="/shop">
      View More 
      <span>
        <BsArrowRight className="viewbtn-icon"/>
      </span>
      </Link>
    </div>
    <OwlCarousel className='owl-theme books' loop margin={10} autoplaySpeed={2000} autoplay={true} items={6} responsiveClass={true}   responsive={{ '0': { items: 1, nav: false }, '768': { items: 2, nav: false },'990': { nav: false },}} dots={true}  >
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={book1} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={book1} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={book2} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={book2} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={book3} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={book3} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={book4} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={book4} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={book2} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={book2} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={book1} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={book1} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={book3} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={book3} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    
    
</OwlCarousel>
   
  </div>
</section>
<section class=" py-5">
  <div class="container">
    <div className="d-flex align-items-baseline justify-content-between">
      <h2 class="mb-5 heading-text mx-lg-auto">Most Popular</h2>
      <Link class="view-btn" to="/shop">
      View More 
      <span>
        <BsArrowRight className="viewbtn-icon"/>
      </span>
      </Link>
    </div>
    <OwlCarousel className='owl-theme books' loop margin={10} autoplaySpeed={2000} autoplay={true} items={6} responsiveClass={true}   responsive={{ '0': { items: 1, nav: false }, '768': { items: 2, nav: false },'990': { nav: false },}} dots={true}  >
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={mbook1} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={mbook1} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={mbook2} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={mbook2} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={mbook3} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={mbook3} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={mbook4} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={mbook4} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={mbook5} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={mbook5} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={mbook1} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={mbook1} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={mbook2} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={mbook2} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    
    
</OwlCarousel>

   
  </div>
</section>
<section class="upcoming-book bg-light-blue py-5">
  <div class="container">
    <div className="d-flex align-items-baseline justify-content-between">
      <h2 class="mb-5 heading-text mx-lg-auto">Upcoming Launches</h2>
      <Link class="view-btn" to="/shop">
      View More 
      <span>
        <BsArrowRight className="viewbtn-icon"/>
      </span>
      </Link>
    </div>
    <OwlCarousel className='owl-theme books' loop margin={10} autoplaySpeed={2000} autoplay={true} items={6} responsiveClass={true}   responsive={{ '0': { items: 1, nav: false }, '768': { items: 2, nav: false },'990': { nav: false },}} dots={true}  >
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={ucbook1} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={ucbook1} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={ucbook2} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={ucbook2} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={ucbook3} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={ucbook3} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={ucbook4} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={ucbook4} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={ucbook5} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={ucbook5} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={ucbook1} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={ucbook1} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div class='item'>
    <Link to="/product">
        <div class="team-3">
          <div class="member-thumb image-box position-relative">
            <img src={ucbook2} alt="team-3" class="img-fluid " />
            <div className="member-socials cart-btn">
              <Link to="/cart" class="text-center mb-4">
              <BsHandbag />
              </Link>
              <Link to="/cart" class="text-center">
              <BsHeart />
              </Link>
            </div>
          </div>
          <div class="team-hover-content">
            <div class="member-thumb">
              <img src={ucbook2} alt="team-3" class="img-fluid" />
            </div>
            <div class="member-name-designation">
            </div>
          </div>
        </div>
        </Link>
    </div>
    
    
</OwlCarousel>
   
  </div>
</section>
</>
)
}
export default Home;