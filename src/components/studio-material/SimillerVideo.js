import React, { useState } from "react";
import styled from "styled-components";
import Video from "../../assets/images/studio-material/s-video.png";
import VideoHead from "../../assets/images/studio-material/video-text.svg";
import Title from "../../assets/images/studio-material/eiditors-text.svg";
import EImg from "../../assets/images/studio-material/editor-img.png";
import Polygon from "../../assets/images/polygon-right.svg";
import Polygon2 from "../../assets/images/polygon-left.svg";
import { motion } from "framer-motion";
import WatchMoreSlider from "../studio-product/WatchMoreSlider";
import { useMediaQuery } from "react-responsive";
import EditorsPackSlider from "./EditorsPack";
import MenuIcon from "../../assets/images/studio/menu.svg";
import Menu from "../../commonComponents/Menu";

const SimillerVideoWrapper = styled.div`
  padding: 100px 100px;
  display: flex;
  justify-content: space-between;
  position: relative;
  .polygon-right {
    position: absolute;
    height: 1000px;
    z-index: -1;
    right: 0;
  }
  .polygon-left {
    position: absolute;
    height: 1000px;
    z-index: -1;
    left: 0;
    top: 500px;
  }

  .simillier-video-area {
    display: flex;
    justify-content: space-between;
    gap: 170px;
    .left-side-area {
      .head {
        padding-bottom: 30px;
      }
      .body {
        padding-left: 30px;
        .video-box {
          padding-bottom: 20px;
        }
      }
    }
    .right-side-area {
      border-bottom: 3px solid #a75b41;
      width: 450px;
      .head-box {
        .box {
          background: #a75b41;
          border-radius: 44px;
          padding: 30px 50px;
          h5 {
            padding-bottom: 20px;
            color: white;
            font-size: 20px;
            line-height: 30px;
          }
          p {
            color: white;
            font-size: 18px;
            line-height: 26px;
          }
        }
      }
      .title {
        padding: 50px 0 30px;
      }
      .editor-box {
        display: flex;
        align-items: center;
        gap: 30px;
        padding-bottom: 20px;
        img {
          width: 200px;
        }
        .details {
          width: 30%;
          h5 {
            font-weight: 700;
            font-size: 17px;
            line-height: 23px;
            display: flex;
            align-items: center;
            color: #000000;
          }
          p {
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            display: flex;
            align-items: center;
            color: #c6c6c6;
          }
        }
      }
    }
  }
  .menu-icon {
    display: none;
  }
  @media (max-width: 1200px) {
    padding: 60px 20px;
    .simillier-video-area {
      gap: 120px;
    }
  }
  @media (max-width: 1000px) {
    padding: 0;
    .simillier-video-area {
      flex-direction: column;
      position: relative;
      gap: 0;
      .left-side-area {
        display: none;
      }
      .right-side-area {
        width: 100%;
        text-align: center;
        .head-box {
          .box {
            border-radius: 0;
            padding: 30px 30px;

            h5 {
              padding-top: 30px;
              font-size: 20px;
            }
            p {
              text-align: justify;
              font-size: 18px;
            }
          }
        }
      }
    }
    .menu-width {
      width: 100%;
      position: absolute;
    }
    .menu-icon {
      display: flex;
      margin: auto;
    }
  }
  @media (max-width: 600px) {
    .simillier-video-area {
      top: -10px;
    }
  }
`;
const video = [
  {
    x: "-30vw",
    duration: "0.8",
  },
  {
    x: "-30vw",
    duration: "1",
  },
  {
    x: "-30vw",
    duration: "1.2",
  },
  {
    x: "-30vw",
    duration: "1.4",
  },
  {
    x: "-30vw",
    duration: "1.6",
  },
  {
    x: "-30vw",
    duration: "1.8",
  },
];

export default function SimillerVideo() {
  const [isInView, setIsInView] = useState(false);

  const [menuOpenModal, setMenuOpenModal] = useState(false);

  const isResponsive = useMediaQuery({ query: "(max-width: 1000px)" });

  console.log(isResponsive, "isResponsive");
  return (
    <>
      <SimillerVideoWrapper>
        <img loading="lazy" src={Polygon} alt="" className="polygon-right" />
        <div className={isResponsive ? " " : "container-fluid"}>
          <div className="simillier-video-area">
            <div className="left-side-area">
              <div className="head">
                <img loading="lazy" src={VideoHead} alt="" />
              </div>
              <div className="body">
                {video.map((ele) => {
                  return (
                    <div className="video-box">
                      <motion.img
                        whileInView={() => {
                          setIsInView(true);
                        }}
                        initial={{ x: ele.x }}
                        animate={
                          isInView && {
                            x: 0,
                            transition: {
                              duration: ele.duration,
                            },
                          }
                        }
                        // loading="lazy"
                        src={Video}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="menu-width">
              <div
                className="menu-icon"
                onClick={() => setMenuOpenModal(!menuOpenModal)}
              >
                <Menu
                  menuOpenModal={menuOpenModal}
                  onClick={(e) => e.stopPropagation()}
                />
                {menuOpenModal ? (
                  <img src={MenuIcon} loading="lazy" alt="menu" height={45} />
                ) : (
                  <img src={MenuIcon} loading="lazy" alt="menu" height={45} />
                )}
              </div>
            </div>
            <div className="right-side-area">
              <div className="head-box">
                <div className="box">
                  <h5>ABOUT THE MATERIAL</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
              {!isResponsive && (
                <>
                  <div className="title">
                    <img loading="lazy" src={Title} alt="Title" />
                  </div>
                  <motion.div
                    initial={{ x: "30vw" }}
                    whileInView={() => {
                      setIsInView(true);
                    }}
                    animate={
                      isInView && {
                        x: 0,
                        transition: {
                          duration: 1,
                        },
                      }
                    }
                  >
                    {[1, 2, 3, 4, 5].map((_) => {
                      return (
                        <div className="editor-box">
                          <div
                            style={{ overflow: "hidden", borderRadius: "25px" }}
                          >
                            <motion.img
                              whileHover={{
                                scale: 1.1,
                              }}
                              transition={{
                                duration: 0.4,
                              }}
                              loading="lazy"
                              src={EImg}
                              alt="EImg"
                            />
                          </div>
                          <div className="details">
                            <h5>
                              Sustainable Perfume: “Synthetic” Is Not a Dirty
                              Word
                            </h5>
                            <p>Editor’s Pick</p>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
        <img loading="lazy" src={Polygon2} alt="" className="polygon-left" />
      </SimillerVideoWrapper>
      <div style={isResponsive ? { display: "block" } : { display: "none" }}>
        <WatchMoreSlider slideImage={VideoHead} />
        <EditorsPackSlider />
      </div>
    </>
  );
}
