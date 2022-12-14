import React, { useState } from "react";
import styled from "styled-components";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import BannerImage from "../../../assets/images/nfts/banner.png";
import Menu from "../../../commonComponents/Menu";
import YellowBarContent from "../Common/YellowBarContent";
import Insta from "../../../assets/images/nfts/insta.svg";
import Facebook from "../../../assets/images/nfts/facebook.svg";
import ShoppingListCard from "../ShopingListCard";
import { CompanyLogo } from "../../../utils";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { motion } from "framer-motion";
const AboutNft = React.lazy(() => import("./AboutNft"));
const AboutMetaverse = React.lazy(() => import("./AboutMetaverse"));
const BuySell = React.lazy(() => import("./BuySell"));

const NFTMetaVerseWrapper = styled.div`
  width: 100%;
  background: black;
  height: 100%;
  font-style: normal;
  color: #ffffff;

  font-weight: 400;
  .heading-part {
    font-family: "Coral Blush";
    width: 100vw;
    font-size: 110px;
    display: flex;
    object-fit: cover;
    height: 550px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
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
  .metaverse {
    font-family: "Coral Blush";
    font-size: 80px;
  }
  .content-metaverse {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .insta {
    position: absolute;
    left: 0;
  }
  .facebook {
    position: absolute;
    right: 0;
  }
  .des-meta {
    text-align: center;
    font-family: "Arial";
    font-size: 18px;
  }
  .des-nft-part {
    width: 55%;
  }
  .des-para-meta {
    font-family: "Arial";
    font-size: 16px;
    text-align: center;
    padding: 50px 29%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .lines {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .border-lines {
    width: 90%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .nft {
    font-family: "Coral Blush";
    font-size: 130px;
    margin: -30px 0 0 40%;
  }
  .nft-part {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 50px;
  }
  .heading-nft-part {
    width: 45%;
  }
  .about {
    margin-left: 30%;
  }
  .icons-nft {
    display: flex;
    gap: 30px;
    justify-content: end;
    margin-right: 150px;
  }
  .des-para-nft {
    font-family: "Arial";
    font-size: 16px;
    padding: 50px 15% 0 5%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .metaverse-part {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 100px;
  }
  .heading-meta-part {
    /* width: 60%; */
    display: flex;
    flex-direction: column;
    text-align: end;
    margin-top: 50px;
    align-items: flex-end;
  }
  .desc-meta {
    /* width: 40%; */
  }

  .meta-about {
    margin-right: 20%;
  }
  .meta {
    font-family: "Coral Blush";
    font-size: 130px;
    margin: 0;
  }
  /* .earth {
    margin-top: 150px;
    margin-left: 150px;
  } */
  .des-metas {
    font-family: "Arial";
    font-size: 16px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 54%;
    padding: 0 0 0 100px;
    text-align: left;
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 130px;
    padding-bottom: 150px;
  }
  .price {
    position: relative;
    right: 60px;
    top: 10px;
    height: 140px;
  }
  .cash {
    position: relative;
    left: 60px;
    height: 140px;
  }
  .para-content {
    padding-left: 50px;
    font-family: "Arial";
    font-size: 15px;
  }
  .para-content-right {
    font-family: "Arial";
    font-size: 15px;
    text-align: end;
    padding-right: 50px;
  }
  .brand-nfts {
    background: #fff;
    width: 100%;
    color: #000;
    height: fit-content;
    font-family: "Coral Blush";
    font-size: 80px;
    text-align: center;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nft-collection {
    background: #fff;
    margin-top: 130px;
    width: 100%;
    color: #000;
    height: fit-content;
    font-family: "Coral Blush";
    font-size: 80px;
    text-align: center;
    /* padding-bottom: 50px; */
  }
  .para-des {
    font-family: "Arial";
    font-size: 16px;
    padding-bottom: 20px;
  }
  .company-logo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 50px 0;
    gap: 50px;
  }

  @media (max-width: 1200px) {
    .earth {
      height: 60px;
    }
    .meta {
      font-size: 90px;
      margin: 0;
    }
    .des-metas {
      width: 70%;
    }
    .metaverse-part {
      padding: 0px 100px;
    }
  }
  @media (max-width: 850px) {
    .earth {
      height: 45px;
    }
    .des-metas {
      width: 100%;
      padding: 0 100px;
      text-align: center;
    }
    .meta {
      font-size: 70px;
    }
    .meta-about {
      margin-right: 0;
    }
    .metaverse-part {
      justify-content: center;
    }
    .nft-collection,
    .brand-nfts {
      font-size: 60px;
      padding-bottom: 50px;
    }
    .company-logo {
      margin: 40px 0;
      gap: 40px;
    }
  }
  @media (max-width: 600px) {
    .earth {
      height: 40px;
    }
    .des-nft-part {
      width: 100% !important;
    }
    .des-metas {
      padding: 0 50px;
      font-size: 14px;
    }
    .metaverse-part {
      padding: 0px 50px;
      flex-direction: column-reverse;
    }
    .meta {
      font-size: 50px;
    }
    .meta-about {
      width: 100px;
    }
    .nft-collection,
    .brand-nfts {
      font-size: 45px;
    }
    .company-logo {
      margin: 30px 0;
      gap: 30px;
    }
    .nft-collection {
      padding: 20px 0;
    }
  }
  @media (max-width: 500px) {
    .earth {
      height: 40px;
    }
    .des-nft-part {
      width: 100% !important;
    }
    .des-metas {
      padding: 0 50px;
      font-size: 14px;
    }
    .metaverse-part {
      padding: 0px 50px;
    }
    .meta {
      font-size: 50px;
    }
    .meta-about {
      width: 100px;
    }
    .nft-collection,
    .brand-nfts {
      font-size: 35px;
    }
    .company-logo {
      margin: 20px 0;
      gap: 20px;
    }
  }
  @media (max-width: 450px) {
    .earth {
      height: 35px;
    }
    .des-metas {
      padding: 0 30px;
      font-size: 12px;
    }
    .metaverse-part {
      padding: 0px 30px;
    }
  }

  @media (max-width: 1300px) {
    .nft {
      font-size: 100px;
    }
  }

  @media (max-width: 1200px) {
    .metaverse {
      font-size: 70px;
    }
    .insta {
      height: 200px;
    }
    .facebook {
      height: 200px;
    }
    .icons-nft {
      margin-right: 100px;
    }
  }

  @media (max-width: 1000px) {
    .metaverse {
      font-size: 60px;
    }
    .insta {
      height: 170px;
    }
    .facebook {
      height: 170px;
    }
    .des-para-meta {
      padding: 30px 25%;
    }
  }

  @media (max-width: 850px) {
    .metaverse {
      font-size: 50px;
    }
    .heading-part {
      height: 450px;
      background-size: center;
    }
    .des-para-meta {
      padding: 20px 20%;
    }
    .des-para-nft {
      padding: 20px 10% 0 5%;
      font-size: 14px;
    }
    .nft {
      font-size: 90px;
    }
    .icons-nft {
      margin-right: 50px;
      gap: 20px;
    }
  }

  @media (max-width: 600px) {
    .metaverse {
      font-size: 40px;
    }
    .insta {
      height: 140px;
    }
    .facebook {
      height: 140px;
    }
    .des-para-meta {
      padding: 20px 10%;
      font-size: 14px;
    }
    .des-para-nft {
      font-size: 13px;
    }
    .about {
      height: 50px;
    }
    .nft {
      font-size: 70px;
    }
    .nft-part {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .heading-nft-part {
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    .metaverse {
      font-size: 35px;
    }
    .insta {
      height: 120px;
    }
    .facebook {
      height: 120px;
    }
    .des-para-meta {
      font-size: 12px;
    }
    .nft {
      font-size: 65px;
    }
  }

  @media (max-width: 400px) {
    .insta {
      height: 100px;
    }
    .facebook {
      height: 100px;
    }
    .metaverse {
      font-size: 30px;
    }
    .nft {
      font-size: 55px;
    }
  }
`;

const NFTMetaVerse = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <>
      <NFTMetaVerseWrapper>
        <motion.div>
          <div className="heading-part">
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="goback"
            >
              <img src={BackArrow} alt="back-arrow" />
              <div>Go Back</div>
            </motion.div>
            <div className="metaverse">
              <AnimatedTextWord text="NFT & METAVERSE" />
            </div>
          </div>
          <div className="metaverse-part-1">
            <div className="content-metaverse">
              <img
                src={Insta}
                alt="insta"
                loading="lazy"
                height={250}
                className="insta"
              />
              <div className="metaverse">
                <AnimatedTextWord text="METAVERSE" />
              </div>
              <img
                src={Facebook}
                alt="facebook"
                loading="lazy"
                height={250}
                className="facebook"
              />
            </div>
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "20vh" }}
              animate={
                isInView && {
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                }
              }
              className="des-meta"
            >
              IS THE NEW UNIVERSE
            </motion.div>
            <div className="des-para-meta">
              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ y: "20vh" }}
                animate={
                  isInView && {
                    y: 0,
                    transition: {
                      duration: 1,
                    },
                  }
                }
                className="metaverse-para"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </motion.div>
              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ y: "20vh" }}
                animate={
                  isInView && {
                    y: 0,
                    transition: {
                      duration: 1.2,
                    },
                  }
                }
                className="metaverse-para"
              >
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </motion.div>
            </div>
          </div>

          <div className="lines">
            <div className="border-lines"></div>
          </div>

          <AboutNft />

          <div className="lines">
            <div className="border-lines"></div>
          </div>

          <AboutMetaverse />

          <div className="lines">
            <div className="border-lines"></div>
          </div>
          <BuySell />

          <div className="brand-nfts">
            <div>
              <AnimatedTextWord text="LUXE BRAND NFTS" />
            </div>
            <ShoppingListCard />
            <ShoppingListCard />
          </div>
          <div className="nft-collection">
            <div className="d-flex justify-content-center">
              <AnimatedTextWord text="NFT COLLECTIONS" />
            </div>
            <div className="para-des">
              Brands which have entered the metaverse
            </div>
            <div className="company-logo">
              {CompanyLogo.map(({ img, width }) => {
                return <img src={img} alt="img" width={width} height={100} />;
              })}
            </div>
            <div className="para-des">and many more!</div>
          </div>
          <YellowBarContent requiredPersonalAssistance={true} />
        </motion.div>
      </NFTMetaVerseWrapper>
    </>
  );
};

export default NFTMetaVerse;
