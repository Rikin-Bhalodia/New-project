import React from "react";
import styled from "styled-components";
import BackArrow from "../../assets/images/product/back-arrow.svg";
import Star from "../../assets/images/nfts/star.svg";

const FormWrapper = styled.div`
  .goback {
    margin-left: 40px;
    display: flex;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 100px;
  }
  .goback a{
    color: black;
    border-bottom: 2px solid black;
  }
  .topbar {
    justify-content: center;
    text-align: center;
    margin-top: 160px;
  }
  .checkout-header{
    color: #665e2f;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
  }
  .checkout-content {
    margin: 100px 150px 0px 120px;
  }
  .checkout-input {
    background: #fff;
    align-items: center;
    width: 100%;
    gap: 15px;
    margin-top: 20px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
  }
  .checkout-pointer {
    display: flex;
    justify-content: space-between;
  }
  .checkout-control{
    position: relative;
  }
  .checkout-control input {
    width: 294px;
    height: 60px;
    padding: 20px 114px 20px 12px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
  }
  .checkout-classes {
    position: relative;
    justify-content: space-between;
    display: flex;
  }
  .checkout-email {
    width: 690px;
  }
  input {
    border: 1px solid #665E2F;
    color: #665E2F;
  }
  .checkout-classes input {
    height: 60px;
    width:690px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
    padding: 20px 0px 20px 12px;
  }
  .checkout-contact {
    width: 294px;
  }
  .checkout-span input {
    padding-left: 10px;
    width: 100%;
    height: 60px;
  }
  .checkout-span {
    position: relative;
    margin-top: 20px;
  }
  .checkout-form-apartment input {
    width: 100%;
    height: 60px;
  }
  .checkout-apartment {
    padding-left: 10px;
    margin-top: 20px;
  }
  .checkout-form-state{
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-top: 20px;
  }
  .checkout-form-state input{
    height: 60px;
    width: 430px;
    padding-left: 10px;
  }
  .checkout-form-state select{
    height: 60px;
    width: 430px;
    padding-left: 10px;
  }
  .checkout-form-country{
    margin-top: 20px;
    position: relative;
  }
  .checkout-form-country select{
    width: 100%;
    height: 60px;
    padding-left: 10px;
  }
  .checkout-form-footer{
    display: flex;
    margin-top: 50px;
    color: black;
    padding-bottom: 50px;
  }
  .checkout-form-ship{
    margin-left: 20px;
  }
  .checkout-star{
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .checkout-postcode{
    display: flex;
    justify-content: space-between;
  }
  .checkout-allemails{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .checkout-allcontacts input{
    height: 60px;
  }
  .checkout-allcontacts{
    position: relative;
  }
  `;


const CheckoutForm = () => {
  return (
    <>
      <FormWrapper>
        <div className="goback">
          <img src={BackArrow} alt="back-arrow" />
          <a href="/">Go Back</a>
        </div>
        <div className="topbar">
          <div className="checkout-header">CHECKOUT</div>
        </div>
        <div className="checkout-content">
          <h3 className="header">1. BILLLING ADDRESS </h3>
          <div className="checkout-input">
            <div className="checkout-pointer">
              <div className="checkout-control">
                <input type="text" placeholder="FIRST NAME" />
                <img src={Star}  alt="STAR" className="checkout-star" />
              </div>
              <div className="checkout-control">
                <input type="text" placeholder="MIDDLE NAME" />
              </div>
              <div className="checkout-control">
                <input type="text" placeholder="LAST NAME" />
                <img src={Star}  alt="STAR" className="checkout-star" />
              </div>
            </div>
            {/* email-view */}
            <div className="checkout-allemails">
              <div className="checkout-classes">
                 <input
                type="email"
                className="checkout-email"
                placeholder="Email Address"
                />
               <img src={Star}  alt="STAR" className="checkout-star" />
              </div>
            <div className="checkout-allcontacts">
              <input
                type="number"
                className="checkout-contact"
                placeholder="CONTACT"
                />
              <img src={Star}  alt="STAR" className="checkout-star" />
             </div>
            </div>
            {/* address-view */}
            <div className="checkout-span">
              <input
                type="text"
                className="checkout-address"
                placeholder="ADDRESS"
              />
              <img src={Star}  alt="STAR" className="checkout-star" />
            </div>
            <div className="checkout-form-apartment">
              <input
                type="text"
                placeholder="APARTMENT NEARBY COLONY"
                className="checkout-apartment"
              />
            </div>
            <div className="checkout-postcode">
               <div className="checkout-form-state">
                  <select name="STATE" id="STATE" className="checkout-state">
                <option value="0">STATE</option>
                <option value="1">INDIA</option>
                <option value="2">UNITED STATES</option>
                <option value="3">UNITED KINGDOM</option>
                <option value="4">AUSTRALIA</option>
                <option value="5">NEW ZEALAND</option>
              </select>
                  <img src={Star}  alt="STAR" className="checkout-star" />
               </div>
               <div className="checkout-form-state">
                  <input type="text" className="checkout-postcode" placeholder="POSTCODE" />
               </div>
            </div>
            <div className="checkout-form-country">
              <select name="COUNTRY" id="COUNTRY">
                <option value="0">COUNTRY</option>
                <option value="1">INDIA</option>
                <option value="2">UNITED STATES</option>
                <option value="3">UNITED KINGDOM</option>
                <option value="4">AUSTRALIA</option>
                <option value="5">NEW ZEALAND</option>
              </select>
              <img src={Star}  alt="STAR" className="checkout-star" />
            </div>
            <div className="checkout-form-footer">
              <input type="checkbox" />
              <div className="checkout-form-ship">Ship To The Same Address</div>
            </div>
          </div>
        </div>
      </FormWrapper>
    </>
  );
};

export default CheckoutForm;
