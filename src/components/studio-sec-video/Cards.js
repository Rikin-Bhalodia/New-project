import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import DummyVideoImage from "../../assets/images/studio-material/dummy-video.svg";

const CardWrapper = styled.div`
  padding-bottom: 50px;
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
  }
  .card {
    display: flex;
    flex-direction: column;
    border: none;
    font-family: "Arial";
    gap: 13px;
  }
  .title {
    text-transform: uppercase;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
  }
  .sub-title {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    font-style: italic;
  }
  .des {
    font-style: italic;
    font-weight: 500;
    font-size: 12px;
  }
`;

const Card = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <>
      <CardWrapper>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ y: "30vh" }}
          animate={
            isInView && {
              y: 0,
              transition: {
                duration: 0.5,
              },
            }
          }
        >
          <div className="cards">
            {[1, 2, 3].map((_) => {
              return (
                <div className="card">
                  <img loading="lazy" src={DummyVideoImage} alt="dummy-image" />
                  <div className="title">Charles Jeffrey Loverboy</div>
                  <div className="sub-title">SPRING 2023 READY-TO-WEAR</div>
                  <div className="des">
                    Jeffrey swerved, showing on the official schedule and as a
                    now established household name. the designer chose to
                    present the project in the form of a music video, a number
                    of talented artists are involved. A new, authetic vibe of
                    pop culture.
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </CardWrapper>
    </>
  );
};

export default Card;
