import React from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";
import withus from "../../assets/images/homepage/with_us.svg";
import leave from "../../assets/images/homepage/leave.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import aboutSlider from "../../assets/images/img/about-slider.jpg";

const DiveIntoWrapper = styled.div`
  background: #665e2f;
  position: relative;
  height: 520px;
  padding: 50px 30px;
  /* top: -100px; */
  .leave {
    position: absolute;
    top: 0;
    width: 80%;
  }
  .dive_section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .dive_head {
      position: relative;
      margin-bottom: 20px;
      p {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        letter-spacing: 5px;
      }
      .flip_text {
        font-size: 50px;
        font-weight: 400;
        color: white;
        line-height: 70px;
        letter-spacing: 1.5px;
        font-family: "coralSerif", sans-serif;
      }
      img {
        position: absolute;
        bottom: 0px;
        left: 45%;
        width: 140px;
      }
    }
    .dive_body {
      .mySwiper {
        height: 225px;
      }
    }
  }

  @media (max-width: 630px) {
    height: 470px;
    .dive_section {
      .dive_head {
        margin-bottom: 20px;
        p {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 4px;
        }
        .flip_text {
          font-size: 45px;
          line-height: 60px;
          letter-spacing: 1.5px;
        }
        img {
          left: 45%;
          width: 120px;
        }
      }
      .dive_body {
        .mySwiper {
          height: 200px;
        }
      }
    }
  }
  @media (max-width: 550px) {
    padding: 30px;
    height: 390px;
    .dive_section {
      .dive_head {
        margin-bottom: 20px;
        p {
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 4px;
        }
        .flip_text {
          font-size: 38px;
          line-height: 50px;
          letter-spacing: 1.5px;
        }
        img {
          left: 45%;
          width: 110px;
        }
      }
      .dive_body {
        .mySwiper {
          height: 170px;
        }
      }
    }
  }
  @media (max-width: 450px) {
    height: 350px;
    .dive_section {
      .dive_head {
        margin-bottom: 10px;
        p {
          font-size: 12px;
          letter-spacing: 4px;
        }
        .flip_text {
          font-size: 30px;
          line-height: 40px;
          letter-spacing: 1.5px;
        }
        img {
          left: 50%;
          width: 100px;
        }
      }
      .dive_body {
        .mySwiper {
          height: 170px;
        }
      }
    }
  }
`;

export default function DiveInto() {
  return (
    <DiveIntoWrapper>
      <div className="dive_section">
        <div className="dive_head">
          <p>STUDIO</p>
          <div className="flip_text">
            <AnimatedTextWord text="DIVE INTO" />
            <AnimatedTextWord text="LUXURY" />
          </div>
          <img src={withus} alt="" />
        </div>
        <div className="dive_body">
          <Swiper
            slidesPerView={1}
            className="mySwiper"
            style={{ borderRadius: "30px" }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            speed={2500}
            modules={[Pagination, Navigation]}
          >
            {[1, 2, 3, 4, 5, 6].map((_) => {
              return (
                <SwiperSlide
                  style={{
                    backgroundImage: `url(${aboutSlider})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="c-about-slider-in">
                    {/* <div className="c-about-slider-con">
                      <span>
                        <img
                          src={aboutlogo}
                          loading="lazy"
                          alt="aboutlogo"
                          className="wow fadeInDown"
                        />
                      </span>
                      <h3 className="wow fadeInDown">
                        EXCEPTIONAL <span>READY-TO-WEAR</span>
                      </h3>
                    </div> */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <img src={leave} alt="" className="leave" />
    </DiveIntoWrapper>
  );
}
