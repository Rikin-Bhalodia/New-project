import React, { useState } from "react";
import styled from "styled-components";
import Video from "../../assets/images/studio-material/s-video.svg";
import VideoHead from "../../assets/images/studio-material/video-text.svg";
import Title from "../../assets/images/studio-material/eiditors-text.svg";
import EImg from "../../assets/images/studio-material/editor-img.svg";
import Polygon from "../../assets/images/polygon-right.svg";
import Polygon2 from "../../assets/images/polygon-left.svg";
import { motion } from "framer-motion";
const SimillerVideoWrapper = styled.div`
  padding: 100px 100px;
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
  .video-box {
    padding-bottom: 20px;
  }
  .body {
    padding-left: 30px;
  }
  .left-side-area {
    .head {
      padding-bottom: 30px;
    }
  }
  .simillier-video-area {
    display: flex;
    justify-content: space-between;
    gap: 200px;
    .right-side-area {
      border-bottom: 3px solid #a75b41;
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
        padding-bottom: 40px;
        .details {
          width: 30%;
          h5 {
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            display: flex;
            align-items: center;
            color: #000000;
          }
          p {
            font-weight: 400;
            font-size: 14px;
            line-height: 25px;
            display: flex;
            align-items: center;
            color: #c6c6c6;
          }
        }
      }
    }
  }
`;

export default function SimillerVideo() {
  const [isInView, setIsInView] = useState(false);
  return (
    <SimillerVideoWrapper>
      <img loading="lazy" src={Polygon} alt="" className="polygon-right" />
      <div className="container-fluid">
        <div className="simillier-video-area">
          <div className="left-side-area">
            <div className="head">
              <img loading="lazy" src={VideoHead} alt="" />
            </div>
            <div className="body">
              {[1, 2, 3, 4, 5, 6].map((_) => {
                return (
                  <div className="video-box">
                    <img loading="lazy" src={Video} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right-side-area">
            <div className="head-box">
              <div className="box">
                <h5>ABOUT THE MATERIAL</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat.
                </p>
              </div>
            </div>
            <div className="title">
              <img loading="lazy" src={Title} alt="Title" />
            </div>
            <motion.div
              initial={{ x: "40vw" }}
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
                    <motion.div
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
                    </motion.div>
                    <div className="details">
                      <h5>
                        Sustainable Perfume: “Synthetic” Is Not a Dirty Word
                      </h5>
                      <p>Editor’s Pick</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <img loading="lazy" src={Polygon2} alt="" className="polygon-left" />
    </SimillerVideoWrapper>
  );
}
