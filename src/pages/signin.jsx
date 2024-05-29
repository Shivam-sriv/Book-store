import React, { useState } from "react";
import signin from "../assets/img/others/signin.png";
import logo from "../assets/img/logo/bfc-logo-removebg-preview.png"
import { ImArrowRight } from "react-icons/im";


import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signin =()=>
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

        <h4 className="pb-3 text-redc ">Login using your credential</h4>
<form action="">
    <div className="form-group mb-4">
    <input class="search-input si" type="text" placeholder="Enter Your Email"/>
    </div>
    <div className="form-group mb-4">
    <input class="search-input si" type="password" placeholder="Enter Your Password"/>
   
    </div>
    <a href="#" className="login-a">Forgot Password</a>

    <div className="form-group mt-4">
             <Link to="/my-account" class="button-86 fw-bold" role="button">Sign In <ImArrowRight className="ms-2"/></Link>
             </div>
             <hr />
             <p className="fs-14 text-rale">Don't have an account? New customer?<Link to="/signup" className="login-a"><b>Create your account</b></Link> </p>
</form>
        
        
</div>
</div>



</div>

        </section>
        
        
        
        
        </>
    )
}
export default Signin