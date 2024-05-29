import React from "react";
import logo from "../assets/img/logo/bfc-logo.png";
const Footer = () => {
    return(
        <>
<section class="footer-section ">
<footer>
  <div class="container">
    <div class="row pt-5 footer">
      <div class="col-md-3">
        <div class="mt-n20"> <img src={logo} alt='logo' class="img-fluid foot-logo"/></div>
        <p class="text-justify text-rale">Since its inception, BFC Publications has been fast gaining mileage over other self publishers in India. If online comparisons are to be believed, even the most prominent book publishers</p>
        <div class="social pb-smc-4">
          <a href="https://www.facebook.com/bfcpublications/" class="social-icon" target="_blank">
          <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/BfcPublications" class="social-icon" target="_blank">
          <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/bfc_publications/" class="social-icon" target="_blank">
          <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/bfc-publications/" class="social-icon" target="_blank">
          <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/channel/UC0Yi0oA1UDSoJjU20-1_brQ" class="social-icon" target="_blank">
          <i class="fab fa-youtube"></i>
          </a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=support@bfcpublications.com&body=BODY&tf=cm" class="social-icon" target="_blank">
          <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <ul class="col-md-2 foot-link">
       <li> <div class="h5"> OUR SERVICES</div></li>
       <li> <a href="editorial_services.php"><i class="fas fa-angle-right"></i> Editorial Services</a></li>
       <li> <a href="designing_services.php"><i class="fas fa-angle-right"></i> Designing Services</a></li>
       <li> <a href="marketing_services.php"><i class="fas fa-angle-right"></i> Marketing Services</a></li>
       <li> <a href="distribution_services.php"><i class="fas fa-angle-right"></i> Distribution Services</a></li>
       <li> <a href="author_support.php"><i class="fas fa-angle-right"></i> Author Support</a></li>
      </ul>
      <ul class="col-md-2 foot-link">
       <li> <div class="h5"> QUICK LINKS</div></li>
       <li>  <a href="ebookpackages.php"><i class="fas fa-angle-right"></i> Packages</a></li>
       <li> <a href="services.php"><i class="fas fa-angle-right"></i> Services</a></li>
       <li> <a href="ebook-publisher.php"><i class="fas fa-angle-right"></i> eBook Publisher</a></li>
       <li> <a href="book-publisher.php"><i class="fas fa-angle-right"></i> Book Publisher</a></li>
       <li> <a href="https://store.bfcpublications.com/"> <i class="fas fa-angle-right"></i> Book Store</a></li>
      </ul>
      <ul class="col-md-2 foot-link mt-lg-2 pt-lg-1">
      <li class="d-none d-md-block"> <div class="pb-4"></div></li>
        <li className=""><a href="https://bfcpublications.klf.bfcpublications.com/" ><i class="fas fa-angle-right"></i> KLF </a></li>
        <li> <a href="career.php"><i class="fas fa-angle-right"></i> Career</a></li>
        <li> <a href="royalty-calculator.php"><i class="fas fa-angle-right"></i> Royalty Calculator</a></li>
        <li> <a href="print-on-demand.php"><i class="fas fa-angle-right"></i> Print On Demand</a></li>
        <li> <a href="faqs.php"><i class="fas fa-angle-right"></i> FAQs</a></li>
      </ul>
      <ul class="col-md-3 foot-link ">
     <li>  <div class="h5">OFFICE ADDRESS</div></li>
     <li><a href="https://goo.gl/maps/2XGLU6FL84gL4jF48" target="_blank"><i class="fas fa-map-marker-alt me-2 text-red-c"></i> BFC Publications Pvt Ltd,<br/>CP-61, Viraj Khand, Gomti Nagar,<br/>Lucknow, Uttar Pradesh 226010</a></li>
     <li><a href="tel:5223514141"><i class="fa fa-phone me-2 text-red-c" target="_blank"></i> +915223514141</a></li>
     <li><a href="mailto:support@bfcpublications.com"><i class="fas fa-envelope me-2 text-red-c" target="_blank"></i> support@bfcpublications.com</a></li>
        
      </ul>
    </div>
  </div>
    <section class="copyright">
        <div class="row">
            <div class="col-md-4">
            <p class="text-white"><span>©</span>  All Rights Reserved.BFC Publications</p>
            </div>
            <div class="col-md-8 text-end">
            <p>
        <a href="terms-and-condition.php">Terms and Conditions</a>
        <span class="text-white"> | </span>
        <a href="privacy-policy.php">Privacy Policy</a>
        <span class="text-white"> | </span>
        <a href="legal-disclaimer.php"> Legal Disclaimer</a>
        <span class="text-white"> | </span>
        <a href="refund-and-cancellation-policy.php">Refund and Cancellation Policy</a>
      </p>
      
            </div>
        </div>
    </section>
    
  </footer>
 
  </section>

  </>

);
}
export default Footer;