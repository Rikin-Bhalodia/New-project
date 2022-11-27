import React, { useState } from "react";
import styled from "styled-components";
import BannerImage from "../../../assets/images/service/pets/banner.svg";
import mobileBannerImage from "../../../assets/images/service/pets/mobile-banner.svg";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import LeftMiddle from "../../../assets/images/service/pets/left-middle.svg";
import RightMiddle from "../../../assets/images/service/pets/right-middle.svg";
import LuxuryLife from "../../../assets/images/service/pets/luxury-life.svg";
import { ExploreMoreIcons, PetsIcons } from "../../../utils";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";
const MiddlePart = React.lazy(() => import("../MiddlePart"));
const WannaShop = React.lazy(() =>
  import("../../../commonComponents/WannaShop")
);
const Menu = React.lazy(() => import("../../../commonComponents/Menu"));
const AnimatedTextWord = React.lazy(() =>
  import("../../../commonComponents/Animation/FlipAnimation")
);

const TopTranding = React.lazy(() => import("../Common/TopTranding"));
const ExploreShop = React.lazy(() => import("../Common/ExploreShop"));
const YellowBarContent = React.lazy(() => import("../Common/YellowBarContent"));

const PetsWrapper = styled.div`
  width: 100%;
  .heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    width: 100%;
    font-weight: 400;
    font-size: 110px;
    display: flex;
    background-size: cover;
    color: white;
    height: 500px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${BannerImage});
  }
  .mb-heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    width: 100%;
    font-weight: 400;
    font-size: 70px;
    display: flex;
    object-fit: cover;
    color: white;
    height: 340px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${mobileBannerImage});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .icons {
    display: flex;
    column-gap: 15px;
    margin-top: 90px;
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
  .explore-mores {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .explore-more-icons {
    display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 50px;
    margin-top: 60px;
  }
  .image-name {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    text-align: center;
    color: #fff;
    height: 220px;
    width: 220px;
    border-radius: 50%;
    position: relative;
    top: 130px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1300px) {
    .explore-more-icons {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    .heading-part {
      font-size: 90px;
    }
    .icons {
      margin-top: 80px;
    }
    .explore-mores {
      font-size: 60px;
    }
  }
  @media (max-width: 800px) {
    .heading-part {
      font-size: 80px;
    }
    .icons {
      margin-top: 70px;
      column-gap: 10px;
    }
    .pets-icon {
      height: 35px;
      width: 50px;
    }
    .icon-name {
      font-size: 12px;
    }
    .explore-mores {
      font-size: 50px;
      margin-top: 40px;
    }
  }
  @media (max-width: 700px) {
    .pets-icon {
      height: 35px;
      width: 40px;
    }
    .icon-name {
      font-size: 10px;
    }
  }
  @media (max-width: 600px) {
    .pets-icon {
      height: 30px;
      width: 30px;
    }
    .icon-name {
      font-size: 8px;
    }
    .explore-mores {
      font-size: 45px;
      margin-top: 30px;
    }
  }
  @media (max-width: 500px) {
    .heading-part {
      font-size: 70px;
    }
    .icons {
      margin-top: 30px;
      column-gap: 20px;
      padding: 0 20px;
      flex-wrap: wrap;
      row-gap: 10px;
    }
    .pets-icon {
      height: 22px;
      width: 22px;
    }
    .icon-name {
      font-size: 7px;
    }
    .explore-mores {
      font-size: 40px;
      margin-top: 20px;
    }
    .line {
      margin-top: 30px;
    }
    /* .swiper {
      margin: 0 !important;
    } */
  }
`;
const Pets = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <PetsWrapper>
      <motion.div
      // initial={{ y: "200vh" }}
      // animate={{ y: 0 }}
      // transition={{ duration: 1 }}
      >
        <div className={`${isResponsive ? "mb-heading-part" : "heading-part"}`}>
          <AnimatedTextWord text="PETS" />
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
        <MiddlePart
          LeftMiddle={LeftMiddle}
          RightMiddle={RightMiddle}
          Text={LuxuryLife}
          first="GIVE YOUR"
          second="FURRY FRIENDS"
          third="THE BEST"
        />
        <WannaShop />
        <div className="icons">
          {PetsIcons.map((data) => {
            return (
              <div className="icon">
                <img
                  loading="lazy"
                  src={data.img}
                  alt="img"
                  height={40}
                  width={60}
                  className="pets-icon"
                />
                <div className="icon-name">{data.name}</div>
              </div>
            );
          })}
        </div>
        <div className="line">
          <div className="border-line"></div>
        </div>
        <div className="explore-mores">
          <AnimatedTextWord text="EXPLORE MORE" />
        </div>
        <Swiper
          breakpoints={{
            260: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            450: {
              slidesPerView: 1.5,
              spaceBetween: 60,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
            1075: {
              slidesPerView: 4,
              spaceBetween: 120,
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 130,
            },
          }}
          className="S"
          style={{ height: "300px", margin: "50px 0 0 0 " }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          speed={2500}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "30vh" }}
            animate={
              isInView && {
                y: 0,
                transition: {
                  duration: 0.4,
                },
              }
            }
            className="explore-more-icons"
          >
            {ExploreMoreIcons.map((data) => {
              return (
                <SwiperSlide>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    style={{
                      backgroundImage: `url(${data.img})`,
                      backgroundSize: "auto",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    className="explore-more-icon"
                  >
                    <div className="image-name">
                      <AnimatedTextWord text={data.name} />
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </motion.div>
        </Swiper>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ y: "30vh" }}
          animate={
            isInView && {
              y: 0,
              transition: {
                duration: 0.4,
              },
            }
          }
        >
          <TopTranding name="top tranding" isRequiredBackground={true} />
        </motion.div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ y: "30vh" }}
          animate={
            isInView && {
              y: 0,
              transition: {
                duration: 0.4,
              },
            }
          }
        >
          <ExploreShop />
        </motion.div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ y: "30vh" }}
          animate={
            isInView && {
              y: 0,
              transition: {
                duration: 0.4,
              },
            }
          }
        >
          <YellowBarContent requiredPersonalAssistance={false} />
        </motion.div>
      </motion.div>
    </PetsWrapper>
  );
};

export default Pets;
