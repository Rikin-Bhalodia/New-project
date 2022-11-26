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
    font-size: 70px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
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
  @media (max-width: 1000px) {
    .left-middle {
      height: 400px;
    }
    .right-middle {
      height: 400px;
    }
    .new-head {
      font-size: 50px;
    }
    .luxuxry-life {
      width: 300px;
    }
  }
  @media (max-width: 700px) {
    .left-middle {
      height: 370px;
    }
    .right-middle {
      height: 370px;
    }
    .new-head {
      font-size: 40px;
    }
    .luxuxry-life {
      width: 250px;
    }
  }
  @media (max-width: 550px) {
    padding-top: 0;
    .left-middle {
      display: none;
    }
    .right-middle {
      height: 340px;
      width: 80px;
    }
    .new-head {
      font-size: 35px;
      width: auto;
    }
    .luxuxry-life {
      width: 230px;
    }
    .line {
      margin-top: 0;
    }
  }
  @media (max-width: 450px) {
    .left-middle {
      height: 300px;
      width: 70px;
    }
    .right-middle {
      height: 300px;
      width: 150px;
    }
    .new-head {
      font-size: 28px;
      margin-left: 30px;
    }
    .luxuxry-life {
      width: 210px;
    }
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
          height={500}
          className="left-middle"
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
          <img
            loading="lazy"
            src={Text}
            alt="gift"
            height={200}
            className="luxuxry-life"
          />
        </div>
        <motion.img
          loading="lazy"
          src={RightMiddle}
          alt="right-middle"
          height={500}
          className="right-middle"
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
        />
      </div>
      <div className="line">
        <div className="border-line"></div>
      </div>
    </MiddlePartWrapper>
  );
};

export default MiddlePart;
