import React from "react";
import styled from "styled-components";
import Rent from "./../../assets/images/homepage/rent_mobile.png";
import Resell from "./../../assets/images/homepage/resell_mobile.png";
import RentText from "./../../assets/images/homepage/Mobile_rent_text.svg";
import ResellText from "./../../assets/images/homepage/mobile_resell_text.svg";
import Right_Img from "./../../assets/images/homepage/Right_Img.png";
import Body_Img from "./../../assets/images/homepage/Body_Img.png";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Rent_ResellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;
  .rent_section {
    .rent_banner {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${Rent});
      height: 500px;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .rent_content {
      padding: 50px;
      height: -webkit-fill-available;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .head {
        display: flex;
        justify-content: center;
        h3 {
          font-family: "Coral Blush";
          font-style: normal;
          font-weight: 400;
          font-size: 70px;
          line-height: 56px;
          color: #ffffff;
        }
        img {
          width: 200px;
          margin-top: 20px;
        }
      }
      .footer {
        text-align: center;
        a {
          font-family: "Arial";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 46px;
          text-decoration-line: underline;
          color: #ffffff;
        }
      }
    }
  }
  .resell_section {
    .resell_banner {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${Resell});
      height: 320px;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .resell_content {
      padding: 50px 80px;
      display: flex;
      justify-content: space-between;
      height: -webkit-fill-available;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .d_text {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          h3 {
            font-family: "Coral Blush";
            font-style: normal;
            font-weight: 400;
            font-size: 80px;
            line-height: 86px;
            color: #ffffff;
          }
          img {
            width: 150px;
          }
        }
        a {
          font-family: "Arial";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 46px;
          text-decoration-line: underline;
          color: #ffffff;
        }
      }
      .right {
        height: 100%;
        img {
          height: inherit;
        }
      }
    }
  }
  @media (max-width: 650px) {
    .rent_section {
      .rent_banner {
        height: 400px;
      }
      .rent_content {
        padding: 50px;
        .head {
          h3 {
            font-size: 65px;
            line-height: 70px;
          }
        }
        .footer {
          a {
            font-size: 16px;
          }
        }
      }
    }
    .resell_section {
      .resell_banner {
        height: 300px;
      }
      .resell_content {
        padding: 30px 50px;
        .left {
          .d_text {
            h3 {
              font-size: 65px;
              line-height: 70px;
            }
          }
          a {
            font-size: 16px;
          }
        }
      }
    }
  }
  @media (max-width: 550px) {
    .rent_section {
      .rent_banner {
      }
      .rent_content {
        padding: 50px;
        .head {
          h3 {
            font-size: 55px;
            line-height: 60px;
          }
          img {
            width: 170px;
            margin-top: 20px;
          }
        }
        .footer {
          a {
            font-size: 15px;
          }
        }
      }
    }
    .resell_section {
      .resell_banner {
        height: 250px;
      }
      .resell_content {
        .left {
          .d_text {
            h3 {
              font-size: 55px;
              line-height: 60px;
            }
            img {
              width: 120px;
            }
          }
          a {
            font-size: 15px;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    gap: 40px;
    padding: 40px 0;
    .rent_section {
      .rent_banner {
        height: 340px;
      }
      .rent_content {
        padding: 40px;
        .head {
          h3 {
            font-size: 45px;
            line-height: 50px;
          }
          img {
            width: 150px;
            margin-top: 20px;
          }
        }
        .footer {
          a {
            font-size: 12px;
            line-height: 26px;
          }
        }
      }
    }
    .resell_section {
      .resell_banner {
        height: 250px;
      }
      .resell_content {
        .left {
          .d_text {
            h3 {
              font-size: 45px;
              line-height: 50px;
            }
            img {
              width: 100px;
            }
          }
          a {
            font-size: 12px;
          }
        }
      }
    }
  }
  @media (max-width: 430px) {
    gap: 30px;
    padding: 30px 0;
    .rent_section {
      .rent_banner {
        height: 300px;
      }
      .rent_content {
        padding: 30px;
        .head {
          h3 {
            font-size: 35px;
            line-height: 40px;
          }
          img {
            width: 130px;
            margin-top: 20px;
          }
        }
        .footer {
          a {
            font-size: 10px;
          }
        }
      }
    }
    .resell_section {
      .resell_banner {
        height: 200px;
      }
      .resell_content {
        padding: 30px 40px;
        .left {
          .d_text {
            h3 {
              font-size: 35px;
              line-height: 40px;
            }
            img {
              width: 80px;
            }
          }
          a {
            font-size: 10px;
          }
        }
      }
    }
  }
`;

export default function Rent_Resell() {
  return (
    <Rent_ResellWrapper>
      <div className="rent_section">
        <div className="rent_banner">
          <div className="rent_content">
            <div className="head">
              <h3>
                <AnimatedTextWord text="RENT" />
              </h3>
              <img src={RentText} alt="" />
            </div>
            <div className="body">
              <Swiper
                breakpoints={{
                  260: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  400: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  550: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                className="mySwiper round"
                // style={{ height: "250px" }}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                speed={2500}
                modules={[Autoplay, Pagination, Navigation]}
              >
                {[1, 2, 3, 4, 5, 6].map((_) => {
                  return (
                    <SwiperSlide style={{ background: "transparent" }}>
                      <img
                        src={Body_Img}
                        loading="lazy"
                        alt="image"
                        height="100%"
                        // width="100px"
                        className=""
                        // style={{ borderRadius: "40px" }}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="footer">
              <a href="">Show More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="resell_section">
        <div className="resell_banner">
          <div className="resell_content">
            <div className="left">
              <div className="d_text">
                <h3>
                  <AnimatedTextWord text="RESELL" />
                </h3>
                <img src={ResellText} alt="" />
              </div>
              <a href="">Know More</a>
            </div>
            <div className="right">
              <img src={Right_Img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Rent_ResellWrapper>
  );
}
