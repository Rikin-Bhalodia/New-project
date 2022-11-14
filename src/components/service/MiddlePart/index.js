import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const MiddlePartWrapper = styled.div`
  padding-top: 50px;
  .middle-part {
    width: 100%;
    display: flex;
    text-align: center;
    position: relative;
    .left-middle {
      position: absolute;
      left: 0;
    }
    .right-middle {
      position: absolute;
      right: 0;
    }
  }
  .new-head {
    width: 100%;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .line {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .border-line {
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.27);
  }
`;
const MiddlePart = ({
  LeftMiddle,
  RightMiddle,
  first,
  second,
  third,
  Text,
}) => {
  const [isInView, setIsInView] = useState(false);
  return (
    <MiddlePartWrapper>
      <div className="middle-part">
        <motion.img
          loading="lazy"
          src={LeftMiddle}
          alt="left-middle"
          height={450}
          className="left-middle"
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ x: "-60vw", opacity: 0 }}
          animate={
            isInView && {
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.4,
              },
            }
          }
        />
        <div className="new-head">
          <motion.span
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "40vh", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                },
              }
            }
          >
            {first}
          </motion.span>
          <motion.span
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "45vh", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.3,
                },
              }
            }
          >
            {second}
          </motion.span>
          <motion.span
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "50vh", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.5,
                },
              }
            }
          >
            {third}
          </motion.span>
          <img loading="lazy" src={Text} alt="gift" height={200} />
        </div>
        <motion.img
          loading="lazy"
          src={RightMiddle}
          alt="left-middle"
          height={450}
          className="right-middle"
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ x: "60vw", opacity: 0 }}
          animate={
            isInView && {
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
              },
            }
          }
        />
      </div>
      <div className="line">
        <div className="border-line"></div>
      </div>
    </MiddlePartWrapper>
  );
};

export default MiddlePart;
