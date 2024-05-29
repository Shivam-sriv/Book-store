import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser, FaAddressCard, FaExchangeAlt } from "react-icons/fa";
import user from "../assets/img/others/profile.png";
import { CgLogOff } from "react-icons/cg";
import { Link } from "react-router-dom";
const MyAccount = () => {
  return (
    <>
      <nav aria-label="breadcrumb" class="breadcrumbs large-font">
        <ol class="breadcrumb pt-2 ps-3">
          <li class="breadcrumb-item">
            <Link to="/">
              Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">My Account</li>
        </ol>
      </nav>
      <div className="account-main">
        <div className="container">
          {/* =================Tabs================ */}
          <Tabs>
            <div className="row mt-4 justify-content-around align-items-stretch">
              <div className="col-md-3">
                <div className="account-detail text-center">
                  <div className=" my-image">
                    <img src={user} alt="" className="img-fluid" />
                  </div>
                  <h5 className="mt-3">Lorem Ipsum</h5>
                  <p>Author</p>
                </div>
                <TabList className="d-grid ps-0 account-list">
                  <Tab>
                    <div className="d-flex align-items-baseline">
                      <span className="pe-3 fs-30">
                        <FaUser className="iconfa" />
                      </span>
                      <span>Profile</span>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="d-flex align-items-baseline">
                      <span className="pe-3 fs-30">
                        <AiOutlineShoppingCart className="iconfa" />
                      </span>
                      <span>My Order</span>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="d-flex align-items-baseline">
                      <span className="pe-3 fs-30">
                        <FaExchangeAlt className="iconfa" />
                      </span>
                      <span>Transaction</span>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="d-flex align-items-baseline">
                      <span className="pe-3 fs-30">
                        <FaAddressCard className="iconfa" />
                      </span>
                      <span>Address</span>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="d-flex align-items-baseline">
                      <span className="pe-3 fs-30">
                        <RiLockPasswordLine className="iconfa" />
                      </span>
                      <span>Change Password</span>
                    </div>
                  </Tab>
                  <div className="logout">
                    <div className="d-flex align-items-baseline">
                      <Link to="/signin" >
                        <span className="pe-3 fs-30">
                          <CgLogOff className="iconfa" />
                        </span>
                        <span className="text-black">Logout</span>
                      </Link>
                    </div>
                  </div>
                </TabList>
              </div>
              {/* =================Tabs end================ */}
              <div className="col-md-8 detail-info ">
                {/* =================BASIC INFORMATION================ */}
                <TabPanel>
                  <h4>BASIC INFORMATION</h4>
                  <hr />
                  <Form>
                    <div className="row ">
                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="p1">
                          <Form.Label>First Name </Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </div>
                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="p2">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder=" " />
                        </Form.Group>
                      </div>
                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="p3">
                          <Form.Label>Email Id</Form.Label>
                          <Form.Control type="email" placeholder="info@example.com" />
                        </Form.Group>
                      </div>
                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="p4">
                          <Form.Label>Mobile Number</Form.Label>
                          <Form.Control type="text" placeholder=" +91" />
                        </Form.Group>
                      </div>
                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="p6">
                          <Form.Label>Profile Picture</Form.Label>
                          <Form.Control type="file" placeholder=" +91" />
                        </Form.Group>
                      </div>
                    </div>
                    <Form.Group className="mb-3" controlId="p4">
                      <button class="button-87" role="button">Save changes</button>
                    </Form.Group>
                  </Form>
                </TabPanel>
                {/* =================BASIC INFORMATION End================ */}
                {/* =================Order List================ */}
                <TabPanel>
                  <h4>MY ORDER</h4>
                  <hr />
                  <div className="my-order shadow-custom">
                    <Table responsive>
                      <thead >
                        <tr >
                          <th className="text-redc">Order</th>
                          <th className="text-redc min-9">Date</th>
                          <th className="text-redc">Status</th>
                          <th className="text-redc">Total</th>
                          <th className="text-redc">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link to="/order-summary" >
                              #2492
                            </Link>
                          </td>
                          <td>April 4, 2023</td>
                          <td>Cancelled</td>
                          <td>5,000.00</td>
                          <td>
                          <a href="#" className=" orderc cancel-btn">Cancel order</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="" >
                              #2492
                            </Link>
                          </td>
                          <td>April 4, 2023</td>
                          <td>Cancelled</td>
                          <td>5,000.00</td>
                          <td>
                          <a href="#" className="orderc cancel-btn">Cancel order</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="" >
                              #2492
                            </Link>
                          </td>
                          <td>April 4, 2023</td>
                          <td>Cancelled</td>
                          <td>5,000.00</td>
                          <td>
                          <a href="#" className="orderc cancel-btn ">Cancel order</a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </TabPanel>
                {/* =================Order List End================ */}
                {/* =================TRANSACTIONS================ */}
                <TabPanel>
                  <h4>TRANSACTIONS</h4>
                  <hr />
                  <div className="my-transactions shadow-custom mt-5">
                    <Table responsive>
                      <thead className="bg-gray">
                        <tr className="text-start">
                          <th className="text-redc min-21">Transactions</th>
                          <th className="text-redc min-9">Date</th>
                          <th className="text-redc min-9">Status</th>
                          <th className="text-redc min-9">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-start">
                          <td className="d-flex flex-column">
                            <span>Paid for order at product Amla (500 g)</span>
                            <span>28 FEB, 12:19 PM</span>
                            <span>Order ID : 20455201020</span>
                            <span>Transaction ID 44485306739</span>
                          </td>
                          <td>28 FEB, 2023</td>
                          <td>SUCCESS</td>
                          <td> -₹580.65</td>
                        </tr>
                        <tr className="text-start">
                          <td className="d-flex flex-column">
                            <span>Paid for order at product Amla (500 g)</span>
                            <span>28 FEB, 12:19 PM</span>
                            <span>Order ID : 20455201020</span>
                            <span>Transaction ID 44485306739</span>
                          </td>
                          <td>28 FEB, 2023</td>
                          <td>SUCCESS</td>
                          <td> -₹580.65</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </TabPanel>
                {/* =================TRANSACTIONS End================ */}
                {/* =================ADDRESS================ */}
                <TabPanel>
                  <h4>ADDRESS</h4>
                  <hr />
                  <div className="billing-details">
                    <div className="billing-address">
                      <div className="add-billing-address-btn d-flex justify-content-between mb-4">
                        <h5 className="text-redc">Select Address</h5>
                      </div>
                      <div className="billing-address-detail">
                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label fw-bold"
                            for="flexRadioDefault1"
                          >
                            Shivam Shrivastav
                          </label>
                        </div>
                        <div className="billing-fulladdress ps-4">
                          <p>
                            C.P.-61, Viraj Khand-4, Viraj Khand, Gomti Nagar,
                            Lucknow near sanjivani hospital
                          </p>
                          <p>
                            <span className="fw-bold">Mobile:</span> 8840340199
                          </p>
                        </div>
                      </div>
                      <div className="billing-address-detail">
                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label fw-bold"
                            for="flexRadioDefault1"
                          >
                            Pranesh Kumar Singh
                          </label>
                        </div>
                        <div className="billing-fulladdress ps-4">
                          <p>
                            C.P.-61, Viraj Khand-4, Viraj Khand, Gomti Nagar,
                            Lucknow near sanjivani hospital
                          </p>
                          <p>
                            <span className="fw-bold">Mobile:</span> 8840340199
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                {/* =================ADDRESS End================ */}
                {/* =================CHANGE PASSWORD================ */}
                <TabPanel>
                  <h4>CHANGE PASSWORD</h4>
                  <hr />
                  <div className="change-pwd">
                    <div className="row justify-content-center">
                      <div className="col-md-6 shadow-custom py-4">
                        <Form as={Row}>
                          <Form.Group
                            className="mb-4"
                            controlId="formCuttentPassword"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Current Password*"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-4"
                            controlId="formNewPassword"
                          >
                            <Form.Control
                              type="text"
                              placeholder="New Password*"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-4"
                            controlId="formConfirmPassword"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Confirm Password*"
                            />
                          </Form.Group>
                          <Form.Group className="mb-5" controlId="formButtyon" >
                            <div className="d-grid gap-2">
                              <Button variant="success" className="button-87">Change Password</Button>
                            </div>
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                {/* =================CHANGE PASSWORD end================ */}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};
export default MyAccount;