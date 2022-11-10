import React, { useState } from "react";
import styled from "styled-components";
import LeelaBanner from "../../../assets/images/service/travel/leelaBanner.svg";
import Back from "../../../assets/images/service/travel/back.svg";
import EditIcon from "../../../assets/images/service/travel/green-edit-icon.svg";
import BenefitsImage from "../../../assets/images/service/travel/benefits.svg";
import BenefitsRightImage from "../../../assets/images/service/travel/benefits-right.svg";
import Royclan from "../../../assets/images/service/travel/royclan.svg";
import Property1 from "../../../assets/images/service/travel/property1.svg";
import Property2 from "../../../assets/images/service/travel/property2.svg";
import Property3 from "../../../assets/images/service/travel/property3.svg";

import Menu from "../../../commonComponents/Menu";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import { BlankBackgroundSlider } from "../Grooming/ReviewSlider";
import EventNear from "./EventNear";
import YellowBarContent from "../Common/YellowBarContent";

const TheLeelaPalaceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    width: 100vw;
    object-fit: cover;
    color: white;
    height: 80vh;
    position: relative;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
      url(${LeelaBanner});
    object-fit: cover;
    position: relative;
    z-index: 1;
  }
  .des {
    text-align: center;
    padding-top: 100px;
  }
  .menu-icon {
    position: absolute;
    right: 150px;
    top: 35%;
  }
  .vips {
    background: #665e2f;
    width: 420px;
    height: 420px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: relative;
    left: 10%;
  }
  .back {
    position: absolute;
    height: 350px;
    z-index: 99;
    top: 0;
    right: 0;
  }
  .heading-vip {
    padding-bottom: 20px;
    font-family: "Beatlys";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    margin-right: 60px;
  }
  .description {
    margin: 0 100px 0 40px;
  }
  .parts {
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    box-shadow: -38px 40px 250px rgba(0, 0, 0, 0.25);
    position: relative;
    top: -200px;
    z-index: 999;
    background: #fff;
  }
  .part2 {
    display: flex;
    gap: 40px;
    width: 100%;
    margin: 50px 0;
  }
  .content-part {
    display: flex;
    flex-direction: column;
    width: 55%;
    margin-left: 100px;
  }
  .delhi {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 38px;
    text-transform: capitalize;
    color: #a79586;
    padding-top: 30px;
  }
  .the-leela-place {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    color: #665e2f;
    text-transform: uppercase;
    text-align: center;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 60px;
  }
  .button {
    border: 1px solid #000000;
    border-radius: 34px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    padding: 10px 20px;
    text-decoration-line: underline;
    text-transform: uppercase;
  }
  .para {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
  }
  .dates {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #665e2f;
    width: fit-content;
    border-bottom: 1px solid #665e2f;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    column-gap: 150px;
    row-gap: 40px;
    margin-top: 40px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
  }
  .benefits-royclan {
    background: #a75b41;
    height: 270px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px 0 150px;
    margin-top: 70px;
  }
  .left-image {
    position: absolute;
    left: 0;
    top: -50px;
    height: 400px;
  }
  .benefits {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    text-transform: uppercase;
    padding-top: 30px;
  }
  .text-image {
    margin-left: 100px;
  }
  .right-image {
    position: absolute;
    right: 0;
    top: -50px;
    height: 400px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: white;
  }
  .property-image {
    height: 400px;
    margin-top: 200px;
    margin-right: 30px;
  }
  .property1-image {
    height: 300px;
    margin-top: 100px;
  }
  .property2-image {
    height: 200px;
    margin-top: 50px;
  }
  .propety-details {
    display: flex;
  }
  .head {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    text-transform: uppercase;
    margin-top: 80px;
  }
  .details {
    display: flex;
    flex-direction: column;
  }
  .contents {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    color: #a79586;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .title {
    font-size: 18px;
  }
  .answer {
    font-size: 30px;
  }
  .enquire-now {
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #665e2f;
    background: #ffffff;
    border: 2px solid #665e2f;
    border-radius: 61px;
    width: 230px;
    height: 70px;
  }
`;
const TheLeelaPalace = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <>
      <TheLeelaPalaceWrapper>
        <div className="heading-part">
          <div className="des">
            <div>KNOW THE WORLD OF LUXURY</div>
            <div>
              ROYCLAN IS THE PLACE WHERE YOU CAN BUY/RENT LUXURY PRODUCTS.
            </div>
          </div>
          <div
            className="menu-icon"
            onClick={() => setMenuOpenModal(!menuOpenModal)}
          >
            <Menu
              menuOpenModal={menuOpenModal}
              onClick={(e) => e.stopPropagation()}
            />
            {menuOpenModal ? (
              <img loading="lazy" src={MenuIcon} alt="menu" height={45} />
            ) : (
              <img loading="lazy" src={MenuIcon} alt="menu" height={45} />
            )}
          </div>
        </div>
        <div className="parts">
          <div className="delhi">hotel in delhi</div>
          <div className="the-leela-place">the leela palace</div>
          <div className="buttons">
            <div className="button">celebrate</div>
            <div className="button"> honeymoon</div>
            <div className="button">short break</div>
          </div>
          <div className="part2">
            <div className="content-part">
              <div className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
                urna velit adipiscing ultrices eu neque. Nunc, urna morbi
                venenatis sed pellentesque condimentum cursus. Arcu ac in tempor
                sollicitudin nec iaculis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Elit urna velit adipiscing ultrices
                eu neque. Nunc, urna morbi venenatis sed pellentesque
                condimentum cursus. Arcu ac in tempor sollicitudin nec iaculis.
              </div>
              <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
                <div className="dates">1/07/2022</div>
                <img
                  src={EditIcon}
                  alt="EditIcon"
                  height={20}
                  style={{ margin: "8px 0 0 0" }}
                />
              </div>
              <div className="wrapper">
                {[
                  { name: "bedrooms", value: "6" },
                  { name: "bathrooms", value: "5.5" },
                  { name: "interior", value: "1800 sq. ft" },
                  { name: "exterior", value: "2000 sq ft" },
                ].map(({ name, value }) => {
                  return (
                    <div
                      style={{
                        textAlign: "center",
                        padding: "20px 30px 0 0px",
                      }}
                    >
                      <div style={{ fontSize: "22px" }}>{name}</div>
                      <div>{value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="vips">
              <img src={Back} alt="Back" className="back" />
              <div className="heading-vip">VIP Benefits</div>
              <ul className="description">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <BlankBackgroundSlider />
        <div className="benefits-royclan">
          <img src={BenefitsImage} alt="BenefitsImage" className="left-image" />
          <div>
            <div className="benefits">benefits at</div>
            <img src={Royclan} alt="BenefitsImage" className="text-image" />
            <img
              src={BenefitsRightImage}
              alt="BenefitsImage"
              className="right-image"
            />
          </div>
          <div>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
        </div>
        <div className="propety-details">
          <div className="details">
            <div className="head">property details</div>
            <div className="contents">
              <div>
                <div className="title">property type</div>
                <div className="answer">available</div>
              </div>
              <div>
                <div className="title">built in</div>
                <div className="answer">Rs. 1,00,000</div>
              </div>
              <div>
                <div className="title">status</div>
                <div className="answer">available</div>
              </div>
              <div>
                <div className="title">property taxes</div>
                <div className="answer">Rs. 1,00,000</div>
              </div>
              <div className="enquire-now">ENQUIRE NOW</div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <img src={Property1} alt="Property1" className="property-image" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={Property2}
                alt="Property2"
                className="property1-image"
              />
              <img
                src={Property3}
                alt="Property3"
                className="property2-image"
              />
            </div>
          </div>
        </div>
      </TheLeelaPalaceWrapper>
      <EventNear isRequiredTopThings={false} />
      <YellowBarContent requiredPersonalAssistance={false} />
    </>
  );
};

export default TheLeelaPalace;
