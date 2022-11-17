import React, { useState } from "react";
import styled from "styled-components";
import BackArrow from "../../assets/images/product/back-arrow.svg";
import Visa from "../../assets/images/payment-card-images/VisaImage.svg";
import Rupay from "../../assets/images/payment-card-images/RupayImage.svg";
import GPay from "../../assets/images/payment-card-images/GooglePayImage.svg";
import PPal from "../../assets/images/payment-card-images/Paypal.svg";
import Paytm from "../../assets/images/payment-card-images/PaytmImage.svg";
import Phonepe from "../../assets/images/payment-card-images/Phonepe.svg";
import Polygon from "../../assets/images/polygon-right.svg"

const CheckoutCardWrapper = styled.div`
 position: relative;
  margin: auto;
  .polygon-left {
    position: absolute;
    height: 700px;
    z-index: -1;
    right: 0;
  }
  .goback {
    margin-left: 40px;
    display: flex;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 100px;
  }
  .goback a {
    color: black;
    border-bottom: 2px solid black;
  }
  .topbar {
    justify-content: center;
    text-align: center;
    margin-top: 160px;
  }
  .checkout-header {
    color: #665e2f;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
  }
  .checkout-content {
    margin: 70px 150px 0px 150px;
  }
  .checkout-contents {
     margin: 150px 0px 70px 0px;  
  }
    .checkout-card {
    display: flex;
    margin-top: 73.68px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  }
  .checkout-card-2 {
    display: flex;
    margin-top: 20.47px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  }
  .checkout-checkbox {
    width: 26.29px;
    height: 27.02px;
  }
  .checkout-input-checkbox {
    width: 26.29px;
    height: 27.02px;
  }
  .checkout-card-data {
    margin-left: 25.76px;
  }
  .checkout-card-rs {
    margin-left: 202px;
  }
  .checkout-payment {
    display: flex;
    margin-top: 20px;
  }
  .checkout-card-images {
    margin-left: 50px;
    margin-top: -7px;
  }
  .checkout-form-control {
    width: 550px;
    height: 60px;
  }
  .checkout-forms-data {
    margin-top: 55px;
    width: 550px;
  }
  .checkout-form-group {
    margin-bottom: 15px;
  }
  .checkout-checkbox-input{
      margin-left: 20px;
  }
  .checkout-form-group input {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
    padding-left: 10px;
  }
  .forms-submissions {
    display: flex;
    justify-content: space-between;
  }
  .form-controlers {
    width: 270px;
    height: 60px;
  }
  .form-control {
    height: 60px;
    border: 2px solid black;
  }
  .form-datas {
    width: 550px;
    margin-top: 50px;
  }
  .checkout-forms input {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
    height: 60px;
    margin-bottom: 15px;
  }
`;

const CheckoutCard = () => {
  const [type, setType] = useState("card");
  return (
    <>
      <CheckoutCardWrapper>
      <img
          src={Polygon}
          alt="triangle-lr"
          className="polygon-left"
          loading="lazy"
        />
        <div className="goback">
          <img src={BackArrow} alt="back-arrow" />
          <a href="/">Go Back</a>
        </div>
        <div className="topbar">
          <div className="checkout-header">CHECKOUT</div>
        </div>
        <div className="checkout-content">
          <h3 className="header">2. SHIPPING CARD </h3>
          <div className="checkout-card">
            <input type="checkbox" className="checkout-checkbox" />
            <div className="checkout-card-data">Regular (1-6 weeks)</div>
            <div className="checkout-card-rs">Rs. 100</div>
          </div>
          <div className="checkout-card-2">
            <input type="checkbox" className="checkout-checkbox" />
            <div className="checkout-card-data">Express (2-8 days)</div>
            <div className="checkout-card-rs">Rs. 300</div>
          </div>
          <div className="checkout-contents">
            <h3>3. PAYMENT METHOD</h3>
          </div>
          <div className="checkout-payment">
            <input
              id="card"
              className="checkout-input-checkbox"
              type="checkbox"
              value=""
              checked={true}
            />
            <label
              className="checkout-checkbox-input"
              for="card"
              onClick={() => setType("card")}
            >
              Card
            </label>
            <div className="checkout-card-images">
              <img src={Visa} alt="" for="card" />
              <img src={Rupay} alt="" />
            </div>
          </div>
          <div className="checkout-payment">
            <input
              id="upi"
              className="checkout-input-checkbox"
              type="checkbox"
              value=""
            />
            <label
              className="checkout-checkbox-input"
              for="upi"
              onClick={() => setType("upi")}
            >
              UPI
            </label>
            <div className="checkout-card-images">
              <img src={GPay} alt="" />
              <img src={Paytm} alt="" />
              <img src={Phonepe} alt="" />
              <img src={PPal} alt="" />
            </div>
          </div>
          {type === "card" ? (
            <div className="checkout-forms-data">
              <form>
                <div className="checkout-form-group">
                  <input
                    type="text"
                    className="checkout-form-control"
                    placeholder="CREDIT CARD TYPE"
                    name="firstname"
                  />
                </div>
                <div className="checkout-form-group">
                  <input
                    type="text"
                    className="checkout-form-control"
                    placeholder="CREDIT CARD NUMBER"
                    name="lastname"
                  />
                </div>

                <div className="forms-submissions">
                  <div className="checkout-form-group">
                    <input
                      type="text"
                      className="form-controlers"
                      placeholder="ENTRY DATE"
                      name="text"
                    />
                  </div>
                  <div className="checkout-form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="CVV"
                      name="text"
                    />
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="form-datas">
              <div className="checkout-forms">
                <input
                  type="text"
                  className="form-control"
                  placeholder="GOOGLEPAY"
                  name="text"
                />
              </div>
              <div className="checkout-forms">
                <input
                  type="text"
                  className="form-control"
                  placeholder="PHONEPE"
                  name="text"
                />
              </div>
              <div className="checkout-forms">
                <input
                  type="text"
                  className="form-control"
                  placeholder="PAYTM"
                  name="text"
                />
              </div>
              <div className="checkout-forms">
                <input
                  type="text"
                  className="form-control"
                  placeholder="PAYPAL"
                  name="text"
                />
              </div>
            </div>
          )}
        </div>
      </CheckoutCardWrapper>
    </>
  );
};

export default CheckoutCard;
