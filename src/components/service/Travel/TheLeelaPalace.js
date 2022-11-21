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
    text-align: left;
    margin-left: 20px;
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
    margin-top: -200px;
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
    padding: 0 60px;
    margin-top: 70px;
  }
  .left-image {
    position: absolute;
    left: 0;
    top: 0px;
    height: 100%;
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
    top: 0;
    height: 100%;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
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
  .name {
    font-size: 22px;
  }
  .home-rooms {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
  }

  .date {
    display: flex;
    gap: 15px;
    margin: 30px 0 0 20px;
  }

  @media (max-width: 1300px) {
    .part2 {
      gap: 0;
    }
  }
  @media (max-width: 1200px) {
    .the-leela-place {
      font-size: 70px;
    }
    .buttons {
      margin-top: 35px;
    }
    .heading-vip {
      font-size: 40px;
    }
    .description {
      margin: 0 50px 0 30px;
      font-size: 15px;
    }
    .para {
      font-size: 18px;
    }
    .wrapper {
      column-gap: 20px;
      row-gap: 20px;
      margin: 20px 0 0 20px;
      width: 50%;
    }
    .vips {
      width: 380px;
      height: 380px;
    }
  }
  @media (max-width: 1100px) {
    .the-leela-place {
      font-size: 60px;
    }
    .buttons {
      margin-top: 25px;
    }
    .heading-vip {
      font-size: 35px;
    }
    .description {
      margin: 0 40px 0 20px;
    }
    .para {
      font-size: 17px;
    }
    .wrapper {
      column-gap: 20px;
    }
    .name {
      font-size: 20px;
    }
  }
  @media (max-width: 1000px) {
    .the-leela-place {
      font-size: 55px;
    }
    .buttons {
      margin-top: 20px;
    }
    .heading-vip {
      font-size: 30px;
    }
    .description {
      margin: 0 40px 0 40px;
    }
    .para {
      font-size: 16px;
      padding: 20px;
    }
    .wrapper {
      column-gap: 20px;
      margin: 20px 0 20px 20px;
    }
    .dates {
      margin-left: 20px;
    }
    .name {
      font-size: 18px;
    }
    .content-part {
      width: 100%;
      margin-left: 0;
      text-align: center;
    }
    .vips {
      width: 100%;
      left: 0;
      text-align: unset;
      height: fit-content;
      padding: 20px;
    }
    .back {
      height: 100%;
    }
    .part2 {
      width: 100%;
      flex-direction: column;
      margin: 30px 0 0 0;
    }
  }
  @media (max-width: 850px) {
    .benefits-royclan {
      flex-direction: column;
      height: fit-content;
    }
  }
  @media (max-width: 800px) {
    .the-leela-place {
      font-size: 45px;
    }
    .buttons {
      gap: 30px;
    }
    .button {
      padding: 8px 15px;
      font-size: 16px;
    }
    .heading-vip {
      font-size: 26px;
    }
    .para {
      font-size: 15px;
      padding: 10px 20px 20px 20px;
    }
    .dates {
      margin-left: 20px;
    }
    .date {
      margin: 10px 0 0 20px;
    }
    .name {
      font-size: 17px;
    }
  }
  @media (max-width: 700px) {
    .buttons {
      gap: 20px;
    }
    .button {
      font-size: 14px;
    }
    .name {
      font-size: 16px;
    }
    .description {
      font-size: 14px;
      font-weight: 600;
    }
  }
  @media (max-width: 600px) {
    .buttons {
      gap: 10px;
    }
    .button {
      font-size: 13px;
    }
    .name {
      font-size: 15px;
    }
    .description {
      font-size: 13px;
      gap: 15px;
      font-weight: 600;
    }
    .parts {
      width: 90%;
    }
    .the-leela-place {
      font-size: 40px;
    }
    .delhi {
      font-size: 22px;
      padding-top: 20px;
    }
    .para {
      font-size: 14px;
    }
    .benefits {
      font-size: 30px;
    }
    .text-image {
      width: 250px;
    }
    ul {
      gap: 15px;
      font-size: 12px;
    }
    .right-image {
      width: 250px;
    }
    .left-image {
      width: 250px;
    }
  }
  @media (max-width: 500px) {
    .button {
      font-size: 10px;
      padding: 5px 10px;
    }
    .name {
      font-size: 12px;
    }
    .description {
      font-size: 11px;
      gap: 10px;
    }
    .wrapper {
      width: 100%;
      margin: 20px 0;
      padding: 0 10px;
    }
    .the-leela-place {
      font-size: 30px;
    }
    .delhi {
      font-size: 18px;
    }
    .para {
      font-size: 12px;
      padding: 0 10px 10px 10px;
    }
    .heading-vip {
      font-size: 20px;
    }
    .vips {
      padding: 10px;
    }
  }
  @media (max-width: 450px) {
    .right-image {
      width: 200px;
    }
    .left-image {
      width: 200px;
    }
    .benefits {
      font-size: 25px;
    }
    .text-image {
      width: 200px;
    }
    ul {
      gap: 10px;
      font-size: 11px;
    }
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
              <div className="date">
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
                    <div className="home-rooms">
                      <div className="name">{name}</div>
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
