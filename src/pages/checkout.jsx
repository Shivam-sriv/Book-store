import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import book1 from "../assets/img/book-1.jpg"
import { Link } from "react-router-dom";
const Check_Out = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <nav aria-label="breadcrumb" class="breadcrumbs large-font">
  <ol class="breadcrumb pt-2 ps-3">
    <li class="breadcrumb-item">
      <Link to="/">
      Home</Link>
    </li>
    <li class="breadcrumb-item active" aria-current="page"> Checkout</li>
  </ol>
</nav>
            <div className="py-5">
                <div className="container">
                <h4 class="mb-5 heading-text mx-lg-auto text-center">Product Checkout</h4>
                    <div className="row checkout-page">
                    <div className="col-md-7">
                            <h4 className="mt-3 mb-4">Your order</h4>
                            <Table>
                                <thead className="bg-light-blue">
                                    <tr>
                                    <th className='fw-semibold'>Image</th>
                                        <th className='fw-semibold'>Name & Quantity</th>
                                        <th className='fw-semibold'>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><div className="cart-product-img"><img src={book1} alt="" class="img-fluid" /></div></td>
                                        <td>Kuchh Kuchh<span className="ps-2">× 1</span> </td>
                                        <td>₹240.00</td>
                                    </tr>
                                    <tr>
                                        <td><div className="cart-product-img"><img src={book1} alt="" class="img-fluid" /></div></td>
                                        <td>Kahi Unkahi Samvedana<span className="ps-2">× 1</span> </td>
                                        <td>₹240.00</td>
                                    </tr>
                                    <tr>
                                    <td></td>
                                        <td className="text-end">Subtotal : </td>
                                       
                                        <td>₹380.00</td>
                                    </tr>
                                    <tr>
                                    <td></td>
                                        <td className="text-end">SHIPPING : </td>
                                       
                                        <td>₹ 100</td>
                                    </tr>
                                    <tr>
                                    <td></td>
                                        <td className="text-end">TOTAL : </td>
                                        
                                        <td className="fw-semibold">₹390.00</td>

                                    </tr>


                                </tbody>
                            </Table>
                            

                        </div>
                        <div className="col-md-5">
                            <div className="billing-details mb-3">
                                <div className="billing-details-title mt-3 mb-4">
                                    <h4>Billing Details</h4>
                                </div>
                                <div className="billing-address">
                                <p className="text-redc fs-12 mb-4">The shipments deliverable to our patrons are experiencing delays due to disruptions in the logistical supply chain, caused by the ongoing pandemic. We are working to get this resolved. In the meantime, please bear with us.</p>
                                <div className="">
                                <div className="add-billing-address-btn d-flex justify-content-between mb-4">
                                        <h5 className="fw-600">Select Address</h5>
                                        <span className="add-address" onClick={handleShow}>Add New Address</span>
                                    </div>
                                    <div className="billing-address-detail">
                                        <div class="form-check ">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label fw-semibold fs-14" for="flexRadioDefault1">
                                                Pranesh Kumar Singh
                                            </label>
                                        </div>
                                        <div className="billing-fulladdress ps-4">
                                            <p>C.P.-61, Viraj Khand-4, Viraj Khand, Gomti Nagar, Lucknow near sanjivani hospital </p>
                                            <p><span className="fw-semibold">Mobile:</span> 8840340199</p>
                                        </div>
                                    </div>
                                    <div className="billing-address-detail">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label fw-semibold fs-14" for="flexRadioDefault1">
                                                Pranesh Kumar Singh
                                            </label>
                                        </div>
                                        <div className="billing-fulladdress ps-4">
                                            <p>C.P.-61, Viraj Khand-4, Viraj Khand, Gomti Nagar, Lucknow near sanjivani hospital </p>
                                            <p><span className="fw-semibold">Mobile:</span> 8840340199</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <h4 className="mt-3 mb-4">Payment Method</h4>
                            <div className="payment">
                                <div className="payment-option">
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label fw-semibold fs-14" for="flexRadioDefault1">
                                            Cash on delivery
                                        </label>
                                        <p>Pay with cash upon delivery.</p>
                                    </div>
                                    <div class="form-check mb-3 border-top pt-3">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label fw-semibold fs-14" for="flexRadioDefault1">
                                            Credit Card/Debit Card/NetBanking <span><img src="assets/img/payment.svg" alt="" class="img-fluid mw-135" /></span>
                                        </label>
                                        {/* <p>Pay securely by Credit or Debit card or Internet Banking through Razorpay.</p> */}
                                    </div>
                                </div>
                                <div className="checkout-btn text-end pt-3">
                                <Link class="button-87" to="/place-order">Place order</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Address</Modal.Title>
                </Modal.Header>
                <Modal.Body className="checkout-popup">
                    <Form as={Row}>
                        <Form.Text className="mt-2 mb-3 fw-semibold">CONTACT DETAILS</Form.Text>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Name*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Mobile No*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="Email" placeholder="Email*" />
                        </Form.Group>
                        <Form.Text className="mb-3 fw-semibold">ADDRESS</Form.Text>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Address (House No, Building, Street, Area)*" />
                        </Form.Group>
                        <Form.Group sm="6" as={Col}  className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Town / City*" />
                        </Form.Group>

                        <Form.Group sm="6" as={Col} className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="State*" />
                        </Form.Group>
                        <Form.Group  sm="6" as={Col} className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Pin*" />
                        </Form.Group>
                        <Form.Group sm="6" as={Col} className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Pin*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Name this address ( Home, Office, Other)*" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-grid gap-2">
                    <Button variant="primary" onClick={handleClose}>
                        ADD ADDRESS
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Check_Out