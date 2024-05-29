import React, { useState } from "react";
import signin from "../assets/img/others/signup.png";
import logo from "../assets/img/logo/bfc-logo-removebg-preview.png"
import { GiArchiveRegister } from "react-icons/gi";


import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup =()=>
{
   
    return(



        <>
        <section className=" login-bg pt-3">
      
<div className="container">
    <div className="brand-logo ">
    <a href="/"><img src={logo} alt="" srcset=""  className="img-fluid"/></a>

    </div>
<div className="row align-items-stretch pt-3">


    <div className="col-md-7 ">
<img src={signin} alt="" srcset="" className="img-fluid" />

    </div>
    <div className="col-md-5 align-self-center">

        <h4 className="pb-2 pt-1 text-redc ">Take a First Step</h4>
<form action="">
    <div className="form-group mb-3">
    <input class="search-input si" type="text" placeholder="Enter Your Full Name"/>
    </div>
    <div className="form-group mb-3">
    <input class="search-input si" type="text" placeholder="Enter Your Email"/>
    </div>
    <div className="form-group mb-3">
    <input class="search-input si" type="text" placeholder="Enter Your Mobile Number"/>
    </div>
    <div className="form-group mb-3">
    <input class="search-input si" type="password" placeholder="Enter Your Password"/>
   
    </div>
    <div className="form-group mb-3">
    <input class="search-input si" type="password" placeholder="Confirm Password"/>
   
    </div>
    <div className="form-group mb-3">
    <input class="form-check-input " type="checkbox" value="" />
<span className="ms-3">I accept the terms and condition.</span>
    </div>
   

    <div className="form-group mt-4">
             <button class="button-86 fw-bold" role="button">Register <GiArchiveRegister className="ms-2 fs-5"/></button>
             </div>
             <hr />
             <p className="fs-14 text-rale">Already have an account? <Link to="/signin" className="login-a"><b>Sign-In</b></Link> </p>
</form>
        
        
</div>
</div>



</div>

        </section>
        
        
        
        
        </>
    )
}
export default Signup