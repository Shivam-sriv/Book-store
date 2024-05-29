import React from "react";
import Porder from "../assets/img/place-order.png"

const PlaceOrder = () =>{
return(
    <>

    <section className="bg-lightblue py-3 position-relative">
        <div className="container vertical-center">
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <div className="place-order text-center">
                        <h2>Thank you for your order!</h2>
                        <p>We're processing it now. Shortly you will receive a confirmation email along with the content you ordered!</p>
                        <div className="succ-img">
                          <img src={Porder} />  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    </>
)
}
export default PlaceOrder;