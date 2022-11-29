import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { EventNearAndTopThings, Feelings } from "../../../utils";
import { motion } from "framer-motion";

const EventNearWrapper = styled.div`
  .event-near {
    display: flex;
    flex-wrap: wrap;
    gap: 150px;
    justify-content: center;
  }
  .single-event {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
  }
  .inspire-head {
    padding: 100px 0 50px 100px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    text-transform: uppercase;
  }
  .background {
    width: 200px;
    height: 200px;
    background: #d9d9d9;
    border-radius: 50%;
  }
  .feeling {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    padding-top: 15px;
  }
  .feelings {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 150px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    .inspire-head {
      padding: 20px;
      font-size: 28px;
      justify-content: center;
      display: flex;
    }
    .feelings, .event-near {
      gap: 30px;
    }
    .feeling {
      font-size: 18px;
    }
    .background {
      width: 140px;
      height: 140px;
    }
    .inspire-head {
      font-size: 25px;
    }
    .single-event {
      font-size: 20px;
    }
    .concert-img {
      width: 150px;
      height: 150px;
    }
  }
`;

const EventNear = ({ isRequiredTopThings }) => {
  const [isInView, setIsInView] = useState(false);
  return (
    <EventNearWrapper>
      {isRequiredTopThings && (
        <>
          <div className="inspire-head">
            <AnimatedTextWord text="top things to do" />
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
            className="feelings"
          >
            {Feelings.slice(0, 4).map((feeling) => {
              return (
                <div className="wrapper">
                  <div className="background"></div>
                  <div className="feeling">{feeling}</div>
                </div>
              );
            })}
          </motion.div>
        </>
      )}
      <div className="inspire-head">
        <AnimatedTextWord text="Events near the date" />
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
        className="event-near"
      >
        {EventNearAndTopThings.map(({ img, name }) => {
          return (
            <div className="single-event">
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.4,
                }}
                src={img}
                alt="image123"
                className="concert-img"
                height={200}
              />
              <div>{name}</div>
            </div>
          );
        })}
      </motion.div>
    </EventNearWrapper>
  );
};

export default EventNear;
