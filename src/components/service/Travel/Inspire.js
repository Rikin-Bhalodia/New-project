import React, { useState } from "react";
import styled from "styled-components";
import { Cards } from "../../../utils";
import InspireImage from "../../../assets/images/service/travel/inspire.svg";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { motion } from "framer-motion";
const InspireWrapper = styled.div`
  background: #665e2f;
  z-index: 99;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .cards {
    display: flex;
    justify-content: center;
    column-gap: 50px;
    position: relative;
    z-index: 1;
  }
  .single-card {
    position: relative;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    display: flex;
    color: white;
    overflow: hidden;
    height: 250px;
    width: 250px;
    border-radius: 17px;
    object-fit: cover;
  }
  .content {
    position: absolute;
    z-index: 99;
    bottom: 0px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0px 0px 17px 17px;
    height: 80px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .time {
    position: absolute;
    z-index: 99;
    right: 5px;
    font-size: 8px;
    bottom: 90px;
  }
  .insipre {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    color: white;
    text-align: center;
    padding: 40px 0px;
  }
  .articles {
    background: #ffffff;
    border: 2px solid #665e2f;
    border-radius: 61px;
    color: #665e2f;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    padding: 0 20px;
    height: 50px;
    margin: 50px 0px;
    width: fit-content;
  }
  .inspire {
    position: absolute;
    height: 150%;
    top: 0;
  }
`;

const Inspire = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <InspireWrapper>
      <div className="insipre">
        <AnimatedTextWord text="INSPIRE" />
      </div>
      <motion.div
        whileInView={() => {
          setIsInView(true);
        }}
        initial={{ y: "40vh" }}
        animate={
          isInView && {
            y: 0,
            transition: {
              duration: 0.5,
            },
          }
        }
        className="cards"
      >
        {Cards.map(({ img, content, time }) => {
          return (
            <div className="single-card">
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.4,
                }}
                src={img}
                alt="img"
                loading="lazy"
              />
              <div className="time">{time}</div>
              <div className="content">{content}</div>
            </div>
          );
        })}
      </motion.div>
      <img src={InspireImage} alt="inspire" className="inspire" />
      <button className="articles">READ MORE ARTICLES</button>
    </InspireWrapper>
  );
};

export default Inspire;
