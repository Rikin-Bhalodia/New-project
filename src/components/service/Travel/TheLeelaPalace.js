import React, { useState } from "react";
import styled from "styled-components";
import LeelaBanner from "../../../assets/images/service/travel/leelaBanner.svg";
import Back from "../../../assets/images/service/travel/back.svg";
import EditIcon from "../../../assets/images/service/travel/green-edit-icon.svg";
import { motion } from "framer-motion";
import Menu from "../../../commonComponents/Menu";
import { BlankBackgroundSlider } from "../Grooming/ReviewSlider";
import { useMediaQuery } from "react-responsive";
import Benefits from "./Benefits";
const YellowBarContent = React.lazy(() => import("../Common/YellowBarContent"));
const EventNear = React.lazy(() => import("./EventNear"));
const AnimatedTextWord = React.lazy(() =>
  import("../../../commonComponents/Animation/FlipAnimation")
);
const PropertyDetails = React.lazy(() => import("./PropertyDetails"));

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
    top: 35% !important;
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
    padding: 0 250px;
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
    height: 430px;
    width: 250px;
    margin-top: 160px;
    margin-right: 30px;
    img {
      width: inherit;
      height: inherit;
    }
  }
  .property1-image {
    height: 300px;
    width: 250px;
    margin-top: 100px;
    img {
      width: inherit;
      height: inherit;
    }
  }
  .property2-image {
    height: 200px;
    width: 250px;
    margin-top: 30px;
    img {
      width: inherit;
      height: inherit;
    }
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
  .property-images {
    display: flex;
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
    .head {
      font-size: 40px;
      margin-top: 60px;
    }
    .contents {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .answer {
      font-size: 24px;
    }
    .title {
      font-size: 16px;
    }
    .item {
      text-align: center;
    }
    .details {
      text-align: center;
    }
    .benefits-royclan {
      padding: 0 200px;
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
    .benefits-royclan {
      padding: 0 150px;
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
      width: 100%;
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

    .property1-image {
      height: 250px;
      margin-top: 60px;
    }
    .property2-image {
      height: 160px;
    }
    .property-image {
      height: 350px;
      margin-top: 120px;
    }
    .benefits-royclan {
      padding: 0 70px;
    }
  }
  @media (max-width: 850px) {
    .benefits-royclan {
      flex-direction: column;
      height: fit-content;
      padding: 0 60px;
    }
    .property-images {
      display: none;
    }
    .details {
      justify-content: center;
      width: 100%;
      align-items: center;
    }
    .contents {
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      column-gap: 100px;
      padding: 20px 15%;
    }
    .head {
      text-align: center;
      font-size: 45px;
      margin-top: 60px;
    }
    .item {
      width: 40%;
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
    .menu-icon {
      right: 100px;
      height: 80px;
      width: 80px;
      border: 4px solid white;
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
    .contents {
      column-gap: 100px;
      padding: 20px 10%;
    }
    .enquire-now {
      width: 210px;
      height: 50px;
      font-size: 16px;
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
    .head {
      font-size: 40px;
      margin-top: 40px;
    }
    .answer {
      font-size: 24px;
    }
    .contents {
      column-gap: 30px;
      padding: 20px 5%;
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

    .head {
      font-size: 35px;
      margin-top: 30px;
    }
    .answer {
      font-size: 22px;
    }
    .enquire-now {
      width: 200px;
      height: 50px;
      font-size: 16px;
    }
    .title {
      font-size: 14px;
    }
    .item {
      width: 45%;
    }
    .menu-icon {
      right: 60px;
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
    .contents {
      column-gap: 30px;
      padding: 10px 2%;
    }
    .head {
      font-size: 30px;
      margin-top: 20px;
    }
    .answer {
      font-size: 17px;
    }
    .enquire-now {
      width: 180px;
      height: 40px;
      font-size: 14px;
    }
    .item {
      width: 30%;
    }
    .title {
      font-size: 12px;
    }
  }
`;
const TheLeelaPalace = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 850px)" });
  const [isInView, setIsInView] = useState(false);
  return (
    <>
      <TheLeelaPalaceWrapper>
        <div className="heading-part">
          <div className="des">
            <motion.div
              initial={{ y: "-2vh", rotateX: "-90deg", opacity: 0 }}
              animate={{ y: 0, rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              KNOW THE WORLD OF LUXURY
            </motion.div>
            <motion.div
              initial={{ y: "-2vh", rotateX: "-90deg", opacity: 0 }}
              animate={{ y: 0, rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              ROYCLAN IS THE PLACE WHERE YOU CAN BUY/RENT LUXURY PRODUCTS.
            </motion.div>
          </div>
        </div>
        <div className="parts">
          <div className="delhi">hotel in delhi</div>
          <div className="the-leela-place">
            <AnimatedTextWord text="the leela palace" />
          </div>
          <div className="buttons">
            <div className="button">celebrate</div>
            <div className="button"> honeymoon</div>
            <div className="button">short break</div>
          </div>
          <div className="part2">
            <div className="content-part">
              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ y: "10vh", opacity: 0 }}
                animate={
                  isInView && {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                    },
                  }
                }
                className="para"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
                urna velit adipiscing ultrices eu neque. Nunc, urna morbi
                venenatis sed pellentesque condimentum cursus. Arcu ac in tempor
                sollicitudin nec iaculis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Elit urna velit adipiscing ultrices
                eu neque. Nunc, urna morbi venenatis sed pellentesque
                condimentum cursus. Arcu ac in tempor sollicitudin nec iaculis.
              </motion.div>
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
                      <div className="name">
                        <AnimatedTextWord text={name} />
                      </div>
                      <div>{value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="vips">
              <img src={Back} alt="Back" className="back" />
              <div className="heading-vip">
                <AnimatedTextWord text="VIP Benefits" />
              </div>
              <ul className="description">
                <motion.li
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </motion.li>
                <motion.li
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </motion.li>
                <motion.li
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </motion.li>
                <motion.li
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
        <BlankBackgroundSlider />
        <Benefits />
        <PropertyDetails />
      </TheLeelaPalaceWrapper>
      <EventNear isRequiredTopThings={false} />
      <YellowBarContent requiredPersonalAssistance={false} />
    </>
  );
};

export default TheLeelaPalace;
