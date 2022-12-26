import React, { useState } from "react";
import styled from "styled-components";
import BannerImage from "../../../assets/images/service/grooming/banner.svg";
import Text from "../../../assets/images/service/grooming/text.svg";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import { BlankSlider } from "../../../slider";
import { ReviewSlider } from "./ReviewSlider";
import { motion } from "framer-motion";
import YellowBarContent from "../Common/YellowBarContent";
import Menu from "../../../commonComponents/Menu";
import ExploreShop from "../Common/ExploreShop";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
const GroomingWrapper = styled.div`
  width: 100%;
  .heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    width: 100vw;
    font-weight: 400;
    font-size: 110px;
    display: flex;
    object-fit: cover;
    color: white;
    height: 90vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${BannerImage});
  }
  .goback {
    margin-left: 40px;
    display: flex;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 100px;
  }
  .desss {
    padding: 70px 200px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
  }
  .text {
    margin-left: 100px;
    position: relative;
    top: 80px;
  }
  .review {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    color: #665e2f;
    margin-top: 100px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }
  .button-review {
    background: #a75b41;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    text-align: center;
    text-transform: capitalize;
    color: #fff;
    border: none;
    width: 380px;
    height: 85px;
    margin-top: 80px;
  }
  .btn {
    width: 100%;
  }
  @media (max-width: 1200px) {
    .blank-slider {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .text {
      width: 400px;
      top: 0;
      margin-top: 30px;
      display: flex;
      align-self: center;
    }
  }
  @media (max-width: 1100px) {
    .button-review {
      width: 350px;
      font-size: 28px;
    }
    .desss {
      padding: 50px 150px;
    }
  }

  @media (max-width: 1000px) {
    .heading-part {
      font-size: 90px;
    }

    .button-review {
      width: 320px;
      font-size: 26px;
    }
    .desss {
      padding: 20px 100px;
    }
  }
  @media (max-width: 800px) {
    .heading-part {
      font-size: 80px;
    }

    .button-review {
      width: 290px;
      font-size: 24px;
      height: 70px;
      margin-top: 50px;
    }
    .desss {
      padding: 20px 70px;
      font-size: 18px;
    }
  }

  @media (max-width: 600px) {
    .button-review {
      width: 260px;
      font-size: 20px;
    }
    .desss {
      padding: 10px 50px;
      font-size: 16px;
    }
  }
  @media (max-width: 500px) {
    .heading-part {
      font-size: 70px;
    }

    .button-review {
      width: 240px;
      font-size: 18px;
    }
    .desss {
      padding: 0px 20px;
      font-size: 13px;
    }
  }
`;

const Grooming = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <GroomingWrapper>
      <div>
        <div className="heading-part">
          <div className="goback">
            <img src={BackArrow} alt="back-arrow" />
            <div>Go Back</div>
          </div>
          <div>
            <AnimatedTextWord text="GROOMING" />
          </div>
        </div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ y: "30vh" }}
          animate={
            isInView && {
              y: 0,
              transition: {
                duration: 0.7,
              },
            }
          }
          className="desss"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          aliquet porttitor lacus luctus accumsan tortor. Commodo ullamcorper a
          lacus vestibulum. Orci dapibus ultrices in iaculis nunc sed augue
          lacus viverra. Malesuada proin libero nunc consequat interdum varius
          sit. Imperdiet dui accumsan sit amet nulla facilisi morbi. Interdum
          posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Mattis
          nunc sed blandit libero volutpat sed. Eget aliquet nibh praesent
          tristique magna. Et netus et malesuada fames ac turpis egestas.
          Vestibulum sed arcu non odio. Duis at consectetur lorem donec. Luctus
          venenatis lectus magna fringilla urna porttitor rhoncus. A
          pellentesque sit amet porttitor eget dolor.
        </motion.div>
        <div className="blank-slider">
          <img src={Text} alt="text" loading="lazy" className="text" />
          <BlankSlider />
        </div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ y: "60vh" }}
          animate={
            isInView && {
              y: 0,
              transition: {
                duration: 0.7,
              },
            }
          }
        >
          <div className="review">
            <AnimatedTextWord text="REVIEWS" />
          </div>
          <ReviewSlider
            background="rgba(0, 0, 0, 0.43)"
            color="white"
            des="white"
          />
          <div className="btn">
            <button className="button-review">Request the service</button>
          </div>
        </motion.div>
        <ExploreShop />
        <div className="component-wrapper">
          <YellowBarContent requiredPersonalAssistance={false} />
        </div>
      </div>
    </GroomingWrapper>
  );
};

export default Grooming;
