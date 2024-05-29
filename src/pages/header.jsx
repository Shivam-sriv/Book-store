import React,  { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../assets/img/logo/bfc-logo.png";
import Navbar from 'react-bootstrap/Navbar';
import {FaSearch, FaUser} from "react-icons/fa";
import { BsHandbag } from 'react-icons/bs';
import { NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CartBox from "../components/header-cartbox";


function Header (){
  const [scroll, setScroll] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <Navbar  expand="lg" sticky='top' className={scroll ? "header-shrink py-0 bg-white" : " py-0 bg-white showdow-h"}>
      <Container fluid>
        <Navbar.Brand > <Link to="/"><img src={logo} alt='logo' className="img-fluid logo"/></Link></Navbar.Brand>
        {/* mobile view  */}
        <ul className='lst-none d-flex align-items-center mb-0 d-block d-lg-none ps-0'>   
        <li className=''> <NavLink as={Link} to="/signin"><FaUser className='fs-3 text-redc'/></NavLink></li>  

            <li className='ms-3 position-relative'>  <NavLink as={Link} to="#" className="cart-info"><BsHandbag className='fs-3 text-redc'/>
            <CartBox />
            </NavLink>
            <span className="cart-item">8</span>
            </li>
            </ul>
             {/* mobile view  */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="mx-auto my-2 my-lg-0"  navbarScroll >
          
   <div class="search-box mb-2 mb-lg-0">
  <input class="search-input" type="text" placeholder="Search by Book Title or Author Name"/>
  <button class="search-btn"> <FaSearch className="fs-5 mtc-n2" /></button>
</div>
          </Nav>  

          <ul className='lst-none d-flex align-items-center  mt-3'>
            <li className='me-5 mt-3 mt-lg-0 d-none d-lg-block'> <NavLink as={Link} to="/signin" className='btn login-btn '>Login</NavLink></li>
            <li className='me-5 position-relative d-none d-lg-block'>  <NavLink as={Link} to="#" className="cart-info"><BsHandbag className='fs-3 text-redc'/>
            <CartBox />
             </NavLink>
             <span className="cart-item">8</span>
            </li>
            
         </ul>     
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;