import React, { useState } from "react";
import styled from "styled-components";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import BannerImage from "../../../assets/images/nfts/banner.png";
import { NftIcons } from "../../../utils";
import { motion } from "framer-motion";

const Menu = React.lazy(() => import("../../../commonComponents/Menu"));
const YellowBarContent = React.lazy(() => import("../Common/YellowBarContent"));
const WhyWithUs = React.lazy(() =>
  import("../../../commonComponents/WhyWithUs")
);
const Form = React.lazy(() => import("../../../commonComponents/Form"));
const Benefits = React.lazy(() => import("../../../commonComponents/Benefits"));
const SellWithUs = React.lazy(() =>
  import("../../../commonComponents/SellWithUs")
);
const AnimatedTextWord = React.lazy(() =>
  import("../../../commonComponents/Animation/FlipAnimation")
);

const SellNFTsWrapper = styled.div`
  width: 100%;
  .heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    width: 100vw;
    font-weight: 400;
    font-size: 110px;
    display: flex;
    object-fit: cover;
    color: white;
    height: 500px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.43)),
      url(${BannerImage});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .goback {
    margin-left: 40px;
    display: flex;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 100px;
  }
  .icons {
    display: flex;
    column-gap: 15px;
    margin-top: 50px;
    opacity: 0.6;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    justify-content: center;
  }
  .icon {
    text-align: center;
  }
  .icon-name {
    padding-top: 5px;
  }
  .title {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .content {
    font-family: "Arial";
    font-style: italic;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
  }
  .line {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .border-line {
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.27);
  }
  @media (max-width: 1200px) {
    .heading-part {
      font-size: 70px;
    }
  }

  @media (max-width: 1000px) {
    .heading-part {
      font-size: 60px;
    }
    .title {
      font-size: 60px;
    }
  }

  @media (max-width: 850px) {
    .heading-part {
      font-size: 50px;
    }
    .title {
      font-size: 50px;
    }
    .content {
      font-size: 25px;
    }
    .icons {
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 25px;
    }
  }

  @media (max-width: 600px) {
    .heading-part {
      font-size: 45px;
    }
    .title {
      font-size: 40px;
    }
    .content {
      font-size: 21px;
    }
  }

  @media (max-width: 450px) {
    .heading-part {
      font-size: 40px;
    }
    .title {
      font-size: 35px;
    }
  }

  @media (max-width: 400px) {
    .heading-part {
      font-size: 35px;
    }
    .title {
      font-size: 30px;
    }
    .content {
      font-size: 18px;
    }
  }
`;

const SellNFTs = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <SellNFTsWrapper>
      <div>
        <div className="heading-part">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className="goback"
          >
            <img src={BackArrow} alt="back-arrow" />
            <div>Go Back</div>
          </motion.div>
          <div>
            <AnimatedTextWord text="SELL YOUR NFT" />
          </div>
        </div>
        <div className="title">
          <AnimatedTextWord text="I WANNA SELL NFT" />
        </div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ rotateX: "-90deg" }}
          animate={
            isInView && {
              rotateX: 0,
              transition: {
                duration: 1,
              },
            }
          }
          className="content"
        >
          List your NFTs below!
        </motion.div>
        <div className="icons">
          {NftIcons.map(({ img, name }) => {
            return (
              <div className="icon">
                <img
                  loading="lazy"
                  src={img}
                  alt="icon"
                  height={40}
                  width={60}
                />
                <div className="icon-name">{name}</div>
              </div>
            );
          })}
        </div>
        <Form />
        <div className="line">
          <div className="border-line"></div>
        </div>
        <WhyWithUs />
        <Benefits />
        <SellWithUs />
        <YellowBarContent requiredPersonalAssistance={false} />
      </div>
    </SellNFTsWrapper>
  );
};

export default SellNFTs;
