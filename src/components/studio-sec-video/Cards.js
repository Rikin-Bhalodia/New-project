import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import DummyVideoImage from "../../assets/images/studio-material/dummy-video.svg";
import { useMediaQuery } from "react-responsive";

const CardWrapper = styled.div`
  padding-bottom: 50px;
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    padding: 0 20px;
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
  .dummy-image1 {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 820px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
    .des {
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  @media (max-width: 500px) {
    .cards {
      gap: 20px;
    }
    .des {
      -webkit-line-clamp: 3;
    }
    .title {
      font-size: 14px;
    }
    .sub-title {
      font-size: 13px;
    }
    .dummy-image {
      width: 200px;
      height: 200px;
    }
  }
  @media (max-width: 450px) {
    .cards {
      gap: 10px;
    }
    .des {
      -webkit-line-clamp: 3;
    }
    .title {
      font-size: 13px;
    }
    .sub-title {
      font-size: 11px;
    }
    .dummy-image {
      width: 180px;
      height: 180px;
    }
  }
  @media (max-width: 450px) {
    .des {
      -webkit-line-clamp: 2;
    }
    .title {
      font-size: 12px;
    }
    .sub-title {
      font-size: 10px;
    }
    .dummy-image {
      width: 170px;
      height: 170px;
    }
  }
  @media (max-width: 400px) {
    .dummy-image {
      width: 160px;
      height: 160px;
    }
  }
`;

const Card = () => {
  const [isInView, setIsInView] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 820px)" });

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
            {(isResponsive ? [1, 2] : [1, 2, 3]).map((_) => {
              return (
                <div className="card">
                  <div style={{ overflow: "hidden" }} className="dummy-image">
                    <motion.img
                      whileHover={{
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      loading="lazy"
                      src={DummyVideoImage}
                      alt="dummy-image"
                      className="dummy-image1"
                    />
                  </div>
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
