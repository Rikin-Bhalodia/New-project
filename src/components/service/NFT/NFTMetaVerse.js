import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import BannerImage from "../../../assets/images/nfts/banner.svg";
import Menu from "../../../commonComponents/Menu";
import YellowBarContent from "../Common/YellowBarContent";
import Insta from "../../../assets/images/nfts/insta.svg";
import Facebook from "../../../assets/images/nfts/facebook.svg";
import About from "../../../assets/images/nfts/about.svg";
import Hammer from "../../../assets/images/nfts/hammer.svg";
import Cat from "../../../assets/images/nfts/cat.svg";
import Heart from "../../../assets/images/nfts/heart.svg";
import Earth from "../../../assets/images/nfts/earth.svg";
import Buy from "../../../assets/images/nfts/buy.svg";
import Sell from "../../../assets/images/nfts/sell-nft.svg";
import Cash from "../../../assets/images/nfts/cash.svg";
import Price from "../../../assets/images/nfts/price-icon.svg";
import ShoppingListCard from "../ShopingListCard";
import { CompanyLogo } from "../../../utils";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { motion } from "framer-motion";

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
    width: 55%;
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
    padding: 50px 15% 0 27%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .metaverse-part {
    width: 100%;
    display: flex;
  }
  .heading-meta-part {
    width: 60%;
    display: flex;
    flex-direction: column;
    text-align: end;
    margin-top: 50px;
    align-items: flex-end;
  }
  .desc-meta {
    width: 40%;
  }

  .meta-about {
    margin-right: 20%;
  }
  .meta {
    font-family: "Coral Blush";
    font-size: 130px;
    margin: -30px 20% 0 0;
  }
  .earth {
    margin-top: 150px;
    margin-left: 150px;
  }
  .des-metas {
    font-family: "Arial";
    font-size: 16px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 54%;
    padding-left: 180px;
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
    row-gap: 40px;
    gap: 50px;
  }
`;

const NFTMetaVerse = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <>
      <NFTMetaVerseWrapper>
        <motion.div
          initial={{ y: "200vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
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
            <div>
              <AnimatedTextWord text="SELL YOUR NFT" />
            </div>
          </div>
          <div
            className="menu-icon"
            onClick={() => setMenuOpenModal(!menuOpenModal)}
          >
            <Menu
              menuOpenModal={menuOpenModal}
              onClick={(e) => e.stopPropagation()}
            />
            {menuOpenModal ? (
              <img loading="lazy" src={MenuIcon} alt="menu" height={45} />
            ) : (
              <img loading="lazy" src={MenuIcon} alt="menu" height={45} />
            )}
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
              initial={{ y: "40vh" }}
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
                initial={{ y: "40vh" }}
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
                initial={{ y: "40vh" }}
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

          <div className="nft-part">
            <div className="heading-nft-part">
              <img src={About} alt="about" className="about" />
              <div className="nft">
                <AnimatedTextWord text="NFT" />
              </div>
            </div>
            <div className="des-nft-part">
              <div className="icons-nft">
                <img src={Hammer} alt="about" />
                <img src={Cat} alt="about" />
                <img src={Heart} alt="about" />
              </div>
              <div className="des-para-nft">
                <motion.div
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ x: "30vw" }}
                  animate={
                    isInView && {
                      x: 0,
                      transition: {
                        duration: 0.5,
                      },
                    }
                  }
                >
                  <div className="nft-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                  </div>
                </motion.div>
                <motion.div
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ x: "30vw" }}
                  animate={
                    isInView && {
                      x: 0,
                      transition: {
                        duration: 0.7,
                      },
                    }
                  }
                  className="nft-para"
                >
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lines">
            <div className="border-lines"></div>
          </div>

          <div className="metaverse-part">
            <div className="desc-meta">
              <img
                src={Earth}
                alt="about"
                className="earth"
                height={90}
                width={130}
              />
            </div>
            <div className="heading-meta-part">
              <img
                src={About}
                alt="about"
                className="meta-about"
                height={70}
                width={120}
              />
              <div className="meta">
                <AnimatedTextWord text="METAVERSE" />
              </div>
            </div>
          </div>
          <div className="des-metas">
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ x: "-40vw" }}
              animate={
                isInView && {
                  x: 0,
                  transition: {
                    duration: 0.7,
                  },
                }
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </motion.div>
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ x: "-40vw" }}
              animate={
                isInView && {
                  x: 0,
                  transition: {
                    duration: 0.7,
                  },
                }
              }
            >
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </motion.div>
          </div>
          <div className="lines">
            <div className="border-lines"></div>
          </div>
          <div className="buttons">
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ x: "-50vw" }}
              animate={
                isInView && {
                  x: 0,
                  transition: {
                    duration: 0.7,
                  },
                }
              }
              style={{ position: "relative" }}
            >
              <img src={Buy} alt="buy" height={130} />
              <img src={Price} alt="price" className="price" />
              <div className="para-content">Buy amazing collections of NFT</div>
            </motion.div>
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ x: "50vw" }}
              animate={
                isInView && {
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                }
              }
            >
              <img src={Cash} alt="price" className="cash" />
              <img src={Sell} alt="sell" height={130} />
              <div className="para-content-right">
                Put up your NFT Collections on Sale!
              </div>
            </motion.div>
          </div>
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
