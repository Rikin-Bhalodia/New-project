import React, { useState } from "react";
import styled from "styled-components";
import GoBackpart from "../Common/gobachpart";
import YellowBarContent from "../Common/YellowBarContent";
import { motion } from "framer-motion";
import BannerImage from "../../../assets/images/service/gift-for-him/gift-for-him.png";

import Filters from "../../../commonComponents/Filters";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import Product from "./Product";
import { useMediaQuery } from "react-responsive";

const GiftForHimWrapper = styled.div`
  padding: 100px 150px 0px 150px;
  .heading {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
  .background-pic {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${BannerImage});
    width: 100vw;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top;
    height: max-content;
  }
  @media (max-width: 850px) {
    padding: 0;
    .heading {
      color: #fff;
      font-size: 60px;
    }
    .background-pic {
      padding-bottom: 70px;
    }
  }
  @media (max-width: 650px) {
    .heading {
      font-size: 50px;
    }
  }
  @media (max-width: 550px) {
    .heading {
      font-size: 45px;
    }
  }
  @media (max-width: 450px) {
    .heading {
      font-size: 40px;
    }
    .background-pic {
      padding-bottom: 40px;
    }
  }
`;

const FullScreenWrapper = styled.div`
  width: 100%;
  .load-more {
    display: flex;
    width: 100%;
    margin-top: 120px;
  }
  .line {
    border-bottom: 2px solid #000000;
    width: 90%;
    margin-bottom: 30px;
  }
  .text {
    width: 20%;
    display: flex;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    justify-content: space-around;
    margin: 0px 10px;
    align-items: center;
  }
  .plus {
    height: 60px;
    width: 60px;
    border: 1px solid #000000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 700;
    position: relative;
    top: -5px;
  }
  @media (max-width: 850px) {
    .load-more {
      margin-top: 80px;
    }
    .text {
      font-size: 28px;
      width: 32%;
    }
    .line {
      width: 33%;
    }
  }
  @media (max-width: 650px) {
    .load-more {
      margin-top: 70px;
    }
    .text {
      font-size: 26px;
      width: 37%;
    }
    .line {
      width: 30%;
    }
  }
  @media (max-width: 550px) {
    .load-more {
      margin-top: 60px;
    }
    .line {
      margin-bottom: 23px;
    }
    .text {
      font-size: 24px;
      width: 42%;
    }
    .line {
      width: 27%;
    }
    .plus {
      height: 45px;
      width: 45px;
      border-radius: 50%;
      font-size: 30px;
    }
  }
  @media (max-width: 450px) {
    .load-more {
      margin-top: 40px;
    }
    .text {
      font-size: 20px;
      width: 50%;
    }
    .line {
      width: 25%;
    }
  }
`;

const FiltersName = [
  { name: "GIFT CARDS", option: ["Dry Food", "Wet Food"] },
  { name: "BY OCCASION", option: ["Veg", "Non-veg"] },
  {
    name: "CATEGORY",
    option: [
      "Acana",
      "Arden Grange",
      "BRUNO'S WILD Essentials",
      "Canine Creek",
      "Chappi",
      "Cesar",
      "Drools",
      "Farmina",
      "Fish4Dogs",
    ],
  },
  { name: "BY RECIPIENT", option: ["Cat", "Dog", "Others"] },
  { name: "PRICE RANGE", option: [], range: "SET RANGE" },
  { name: "COLOR", option: ["Puppy", "Adult Dog", "Senior Dog"] },
];

const GiftForHim = () => {
  const [isInView, setIsInView] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 850px)" });

  return (
    <>
      <div>
        <GiftForHimWrapper>
          <div className={isResponsive && "background-pic"}>
            <GoBackpart />
            <div className="heading">
              <AnimatedTextWord text="GIFTS FOR HIM" />
            </div>
          </div>
          <Filters FiltersName={FiltersName} />
          <Product />
          <Product />
          <Product />
        </GiftForHimWrapper>
        <FullScreenWrapper>
          <div className="load-more">
            <div className="line"></div>
            <div className="text">
              <div>LOAD</div>
              <div className="plus">+</div>
              <div>MORE</div>
            </div>
            <div className="line"></div>
          </div>
          <YellowBarContent requiredPersonalAssistance={true} />
        </FullScreenWrapper>
      </div>
    </>
  );
};

export default GiftForHim;
