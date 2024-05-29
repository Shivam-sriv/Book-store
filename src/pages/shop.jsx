import React from "react";
import book1 from "../assets/img/book-1.jpg"
import { HiStar } from 'react-icons/hi';
import { BsHandbag,BsHeart } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom";
const Shop = () =>{
    return(
        <>
   <nav aria-label="breadcrumb" class="breadcrumbs large-font">
  <ol class="breadcrumb pt-2 ps-3">
    <li class="breadcrumb-item"><Link to="/">Home</Link></li>  
    <li class="breadcrumb-item active" aria-current="page">Book List</li>
  </ol>
</nav>
     <section className="py-5 bg-light-blue">
        <div className="container">
            <div className="row">
                <div className="col-md-3 mb-4">
                  <div className="filter mb-2">
                     <div className="filter-title">
                        <h5 className="text-redc">Genre</h5>
                        <div className="shop-search">
                        <input className="shop-search-input" type="text" placeholder="Search something.." />
                        <button className="shop-search-btn"><BiSearch /></button>
                        </div>
                        <div className="shop-cat">
                           <ul className="list-unstyled mt-4 mb-0">
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Fiction
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Non-Fiction
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Literature
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Academics
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Motivational
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Romance
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Biography
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Poetry
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Short Stories
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Others
                              </label>
                              </div>
                              </li>
                           </ul>
                        </div>
                        </div>
                      </div>
                        <div className="filter">
                        <div className="filter-title">
                        <h5 className="text-redc pb-2">More Filter</h5>
                        </div>
                        <div className="filter shop-cat mb-2">
                           <h6>Language</h6>
                           <ul className="list-unstyled mt-3 mb-0">
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Hindi
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              English
                              </label>
                              </div>
                              </li>
                              </ul>
                              </div>
                              <div className="filter shop-cat mb-2">
                           <h6>Binding</h6>
                           <ul className="list-unstyled mt-3 mb-0">
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Hardcover
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Paperback
                              </label>
                              </div>
                              </li>
                              </ul>
                              </div>
                              <div className="filter shop-cat">
                           <h6>Other</h6>
                           <ul className="list-unstyled mt-3 mb-0">
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Best sellers
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Trending this week
                              </label>
                              </div>
                              </li>
                              <li>
                              <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">
                              Upcoming Lauches
                              </label>
                              </div>
                              </li>
                              </ul>
                              </div>
                              </div>
                  
                </div>
                <div className="col-md-9">
                <div className="row">
                    <div className="col-md-3">
                    <Link to="/product">
                    <div className="product-cart">
                    <div className="poduct-img position-relative">
                     <img src={book1} alt="team-3" class="img-fluid " />
                     <div className="shop-btn text-center">
                        <div className="btnhover cart-btn">
                      <Link to="/cart" class="text-center mb-2"><BsHandbag /></Link>
                       <Link to="/cart" class="text-center"><BsHeart /></Link>
                       </div>
                       </div>
                    </div> 
                    <div className="product-desc pt-1">
                       <h5 className="title mb-0"><a href="">The Incredible </a></h5> 
                       <p className="author"><b>By :</b> Mehar Bijapur</p>
                       <div className="book-footer d-flex justify-content-between">
                        <div className="rate"><HiStar /> 4.2</div>
                        <div className="price">₹ 199</div>
                       </div>
                       
                       <div className="hot__box">
                        <span className="hot-label">Only Few Left</span>
                       </div>
                    </div>  
                    </div> 
                    </Link>   
                    </div>
                    <div className="col-md-3">
                    <Link to="/product">
                    <div className="product-cart">
                     <div className="poduct-img position-relative">
                     <img src={book1} alt="team-3" class="img-fluid " />
                     <div className="shop-btn text-center">
                        <div className="btnhover cart-btn">
                      <Link to="/cart" class="text-center mb-2"><BsHandbag /></Link>
                       <Link to="/cart" class="text-center"><BsHeart /></Link>
                       </div>
                       </div>
                    </div> 
                    <div className="product-desc pt-1">
                       <h5 className="title mb-0"><a href="">The Incredible </a></h5> 
                       <p className="author"><b>By :</b> Mehar Bijapur</p>
                       <div className="book-footer d-flex justify-content-between">
                        <div className="rate"><HiStar /> 4.2</div>
                        <div className="price">₹ 199</div>
                       </div>
                    </div>  
                    </div>
                    </Link>      
                    </div>
                    <div className="col-md-3">
                    <Link to="/product">
                    <div className="product-cart">
                    <div className="poduct-img position-relative">
                     <img src={book1} alt="team-3" class="img-fluid " />
                     <div className="shop-btn text-center">
                        <div className="btnhover cart-btn">
                      <Link to="/cart" class="text-center mb-2"><BsHandbag /></Link>
                       <Link to="/cart" class="text-center"><BsHeart /></Link>
                       </div>
                       </div>
                    </div> 
                    <div className="product-desc pt-1">
                       <h5 className="title mb-0"><a href="">The Incredible </a></h5> 
                       <p className="author"><b>By :</b> Mehar Bijapur</p>
                       <div className="book-footer d-flex justify-content-between">
                        <div className="rate"><HiStar /> 4.2</div>
                        <div className="price">₹ 199</div>
                       </div>
                       
                    </div>  
                    </div>
                    </Link>      
                    </div>
                    <div className="col-md-3">
                    <Link to="/product">
                    <div className="product-cart">
                    <div className="poduct-img position-relative">
                     <img src={book1} alt="team-3" class="img-fluid " />
                     <div className="shop-btn text-center">
                        <div className="btnhover cart-btn">
                      <Link to="/cart" class="text-center mb-2"><BsHandbag /></Link>
                       <Link to="/cart" class="text-center"><BsHeart /></Link>
                       </div>
                       </div>
                    </div> 
                    <div className="product-desc pt-1">
                       <h5 className="title mb-0"><a href="">The Incredible </a></h5> 
                       <p className="author"><b>By :</b> Mehar Bijapur</p>
                       <div className="book-footer d-flex justify-content-between">
                        <div className="rate"><HiStar /> 4.2</div>
                        <div className="price">₹ 199</div>
                       </div>
                     
                    </div>  
                    </div> 
                    </Link>     
                    </div>

                    <div className="col-md-3">
                    <Link to="/product">
                    <div className="product-cart">
                    <div className="poduct-img position-relative">
                     <img src={book1} alt="team-3" class="img-fluid " />
                     <div className="shop-btn text-center">
                        <div className="btnhover cart-btn">
                      <Link to="/cart" class="text-center mb-2"><BsHandbag /></Link>
                       <Link to="/cart" class="text-center"><BsHeart /></Link>
                       </div>
                       </div>
                    </div>  
                    <div className="product-desc pt-1">
                       <h5 className="title mb-0"><a href="">The Incredible </a></h5> 
                       <p className="author"><b>By :</b> Mehar Bijapur</p>
                       <div className="book-footer d-flex justify-content-between">
                        <div className="rate"><HiStar /> 4.2</div>
                        <div className="price">₹ 199</div>
                       </div>
                    </div>  
                    </div> 
                    </Link>     
                    </div>
                    <div className="col-md-3">
                    <Link to="/product">
                    <div className="product-cart">
                    <div className="poduct-img position-relative">
                     <img src={book1} alt="team-3" class="img-fluid " />
                     <div className="shop-btn text-center">
                        <div className="btnhover cart-btn">
                      <Link to="/cart" class="text-center mb-2"><BsHandbag /></Link>
                       <Link to="/cart" class="text-center"><BsHeart /></Link>
                       </div>
                       </div>
                    </div> 
                    <div className="product-desc pt-1">
                       <h5 className="title mb-0"><a href="">The Incredible </a></h5> 
                       <p className="author"><b>By :</b> Mehar Bijapur</p>
                       <div className="book-footer d-flex justify-content-between">
                        <div className="rate"><HiStar /> 4.2</div>
                        <div className="price">₹ 199</div>
                       </div>
                    </div>  
                    </div> 
                    </Link>     
                    </div>
                    <div className="col-md-3">
                    <Link to="/product">
                    <div className="product-cart">
                    <div className="poduct-img position-relative">
                     <img src={book1} alt="team-3" class="img-fluid " />
                     <div className="shop-btn text-center">
                        <div className="btnhover cart-btn">
                      <Link to="/cart" class="text-center mb-2"><BsHandbag /></Link>
                       <Link to="/cart" class="text-center"><BsHeart /></Link>
                       </div>
                       </div>
                    </div> 
                    <div className="product-desc pt-1">
                       <h5 className="title mb-0"><a href="">The Incredible </a></h5> 
                       <p className="author"><b>By :</b> Mehar Bijapur</p>
                       <div className="book-footer d-flex justify-content-between">
                        <div className="rate"><HiStar /> 4.2</div>
                        <div className="price">₹ 199</div>
                       </div>
                     
                    </div>  
                    </div> 
                    </Link>     
                    </div>
                    <div className="col-md-3">
                    <Link to="/product">
                    <div className="product-cart">
                    <div className="poduct-img position-relative">
                     <img src={book1} alt="team-3" class="img-fluid " />
                     <div className="shop-btn text-center">
                        <div className="btnhover cart-btn">
                      <Link to="/cart" class="text-center mb-2"><BsHandbag /></Link>
                       <Link to="/cart" class="text-center"><BsHeart /></Link>
                       </div>
                       </div>
                    </div> 
                    <div className="product-desc pt-1">
                       <h5 className="title mb-0"><a href="">The Incredible </a></h5> 
                       <p className="author"><b>By :</b> Mehar Bijapur</p>
                       <div className="book-footer d-flex justify-content-between">
                        <div className="rate"><HiStar /> 4.2</div>
                        <div className="price">₹ 199</div>
                       </div>
                      
                    </div>  
                    </div> 
                    </Link>  
                    </div>
                   
                   <div className="col-md-12 text-center">
                     <div className="shop-pagination">
                     <nav aria-label="...">
  <ul class="pagination justify-content-end align-item-center">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                     </div>
                   </div>

                </div>
                </div>
            </div>
        </div>
     </section>
        </>
    )
}
export default Shop; 