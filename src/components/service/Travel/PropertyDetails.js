import React, { useState } from "react";
import styled from "styled-components";
import Property1 from "../../../assets/images/service/travel/property1.png";
import Property2 from "../../../assets/images/service/travel/property2.png";
import Property3 from "../../../assets/images/service/travel/property3.png";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { motion } from "framer-motion";

const PropertyDetailsWrapper = styled.div``;

export default function PropertyDetails() {
  const [isInView, setIsInView] = useState(false);
  return (
    <PropertyDetailsWrapper>
      <div className="propety-details">
        <div className="details">
          <div className="head">
            <AnimatedTextWord text="property details" />
          </div>
          <div className="contents">
            <div className="item">
              <div className="title">property type</div>
              <div className="answer">available</div>
            </div>
            <div className="item">
              <div className="title">built in</div>
              <div className="answer">Rs. 1,00,000</div>
            </div>
            <div className="item">
              <div className="title">status</div>
              <div className="answer">available</div>
            </div>
            <div className="item">
              <div className="title">property taxes</div>
              <div className="answer">Rs. 1,00,000</div>
            </div>
            <div className="enquire-now">ENQUIRE NOW</div>
          </div>
        </div>
        <div className="property-images">
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "20vh", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                },
              }
            }
            style={{ overflow: "hidden" }}
            className="property-image"
          >
            <motion.img
              src={Property1}
              alt="Property1"
              loading="lazy"
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
            />
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "20vh", opacity: 0 }}
              animate={
                isInView && {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                  },
                }
              }
              style={{ overflow: "hidden" }}
              className="property1-image"
            >
              <motion.img
                src={Property2}
                alt="Property2"
                loading="lazy"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.4,
                }}
              />
            </motion.div>
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "20vh", opacity: 0 }}
              animate={
                isInView && {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.4,
                  },
                }
              }
              style={{ overflow: "hidden" }}
              className="property2-image"
            >
              <motion.img
                src={Property3}
                loading="lazy"
                alt="Property3"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.4,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </PropertyDetailsWrapper>
  );
}
