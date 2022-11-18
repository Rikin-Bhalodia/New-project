import React, { useState } from "react";
import TopTrandingImage from "../../../assets/images/service/pets/top-tranding.svg";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const TopTrandingCardWrapper = styled.div`
  .flip-card {
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
  }
  .tranding-image {
    border-radius: 40px 40px 0 0;
    height: 230px;
    width: 430px;
    object-fit: cover;
  }
  .names {
    color: #a79586;
    display: flex;
    flex-direction: column;
    width: 430px;
    background: #fcf9f2;
    height: fit-content;
    padding: 0 15px;
    border: 1px solid #665e2f;
    box-shadow: 12px 12px 55px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 40px 40px;
  }
  .goa-name {
    font-size: 18px;
    text-align: left;
  }
  .destination-name {
    color: #665e2f;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 400;
    text-align: left;
  }
  .des {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: left;
  }
  .purpose {
    width: 100%;
    font-size: 16px;
  }
  .date {
    color: #665e2f;
    text-transform: uppercase;
  }
  .request {
    border: 3px solid #665e2f;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;
    width: 120px;
  }
  .btn {
    background: #a75b41;
    height: 40px;
    width: 150px;
    /* margin: 10px 0 0 5px; */
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: white;
  }
`;
const TopTrandingCard = () => {
  const [isInView, setIsInView] = useState(false);
  const location = useLocation();
  return (
    <TopTrandingCardWrapper>
      <motion.div
        whileInView={() => {
          setIsInView(true);
        }}
        initial={{ rotateY: "90deg" }}
        animate={
          isInView && {
            y: 0,
            rotateY: "0deg",
            transition: {
              duration: 1,
            },
          }
        }
        className="flip-card"
      >
        <img
          src={TopTrandingImage}
          loading="lazy"
          alt="image"
          className="tranding-image"
        />
        <div className="names">
          <div className="goa-name">Goa, India</div>
          <div className="destination-name">leela palace, goa</div>
          <div className="des">
            <div className="purpose">
              <div>luxury stay in goa with daily breakfast and dinner</div>
              <div className="date">travel until 31 march 2023</div>
              <div>2, 3, 4, 6 nights from</div>
              <div>including taxes and fees</div>
              {location.pathname !== "/service-travel-destination" ||
                (location.pathname !== "/service-travel-stays" && (
                  <button className="btn">KNOW MORE</button>
                ))}
            </div>

            <div className="request">Request To Book</div>
          </div>
        </div>
      </motion.div>
    </TopTrandingCardWrapper>
  );
};

export default TopTrandingCard;
