import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import FirstImage from "./assets/images/studio/fifteensecslider/first-image.svg";
import { Autoplay, Pagination, Navigation } from "swiper";
import aboutSlider from "./assets/images/img/about-slider.jpg";
import aboutlogo from "./assets/images/img/about-logo.png";
import { studio2Images, sliderImage, avenues } from "./utils";
import { motion } from "framer-motion";
import TopTrandingCard from "./components/service/Common/TopTrandingCard";
import { useMediaQuery } from "react-responsive";

export default function Slider() {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      whileInView={() => {
        setIsInView(true);
      }}
      initial={{ y: "20vh" }}
      animate={
        isInView && {
          y: 0,
          transition: {
            duration: 0.3,
          },
        }
      }
    >
      <Swiper
        breakpoints={{
          260: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          360: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1075: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
        style={{ height: "150px" }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        speed={2500}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {sliderImage.map((image) => {
          return (
            <SwiperSlide style={{ overflow: "hidden" }}>
              <motion.img
                src={image}
                loading="lazy"
                alt="image"
                height="100px"
                width="100px"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.4,
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}

export function ServiceSlider() {
  return (
    <Swiper
      breakpoints={{
        260: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
      }}
      className="mySwiper round"
      style={{ height: "250px" }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      speed={2500}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {avenues.map((img) => {
        return (
          <SwiperSlide>
            <img
              src={img}
              loading="lazy"
              alt="image"
              height="100px"
              width="100px"
              className="radius"
              style={{ borderRadius: "40px" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export function RentSlider() {
  return (
    <Swiper
      breakpoints={{
        260: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
      }}
      className="mySwiper round"
      style={{ height: "250px" }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      speed={2500}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {avenues.map((img) => {
        return (
          <SwiperSlide>
            <img
              src={img}
              loading="lazy"
              alt="image"
              height="100px"
              width="100px"
              className="radius"
              style={{ borderRadius: "40px" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export function MainSlider() {
  return (
    <Swiper
      slidesPerView={1}
      className="mySwiper main_slider"
      style={{ borderRadius: "30px" }}
      // autoplay={{
      //   delay: 1500,
      //   disableOnInteraction: false,
      // }}
      loop={true}
      loopFillGroupWithBlank={true}
      //   speed={2500}
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
              <div className="c-about-slider-con">
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
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export function StudioS2() {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={50}
      className="mySwiper"
      style={{ height: "300px" }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      speed={2500}
      modules={[Autoplay, Pagination, Navigation]}
      onSlideChange={(s) => {
        console.log(s.activeIndex, "kkkk");
      }}
    >
      {studio2Images.map((data, i) => {
        const slideview1 = i === 0 && "col-md-2 level1 wow fadeInUp";
        const slideview2 = i === 1 && "col-md-2 level3 wow fadeInUp";
        const slideview3 = i === 2 && "col-md-2 level5 wow fadeInUp";
        const slideview4 = i === 3 && "col-md-2 level2 wow fadeInUp";
        const slideview5 = i === 4 && "col-md-2 level4 wow fadeInUp";
        console.log(i);
        return (
          <SwiperSlide
            className={
              slideview1 || slideview2 || slideview3 || slideview4 || slideview5
            }
          >
            <img src={data.img} loading="lazy" alt="studiob-01" />
            <div>{data.content}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export function TopTrandingSlider() {
  return (
    <Swiper
      breakpoints={{
        260: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 1.5,
          spaceBetween: 40,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        1075: {
          slidesPerView: 2.6,
          spaceBetween: 80,
        },
        1500: {
          slidesPerView: 2.8,
          spaceBetween: 100,
        },
      }}
      className="mySwiper"
      style={{ padding: "50px 0 " }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      speed={2500}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {[1, 2, 4, 56, 7, 89, 9].map((_) => {
        return (
          <SwiperSlide
            style={{
              height: "fit-content",
              width: "fit-content",
              borderRadius: "40px",
              background: "transparent",
            }}
          >
            <TopTrandingCard />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export function BlankSlider() {
  const [isInView, setIsInView] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <motion.div
      whileInView={() => {
        setIsInView(true);
      }}
      initial={{ y: "20vh" }}
      animate={
        isInView && {
          y: 0,
          transition: {
            duration: 0.9,
          },
        }
      }
    >
      <Swiper
        breakpoints={{
          260: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          360: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          700: {
            slidesPerView: 3.5,
            spaceBetween: 60,
          },
          1075: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 4.9,
          },
        }}
        className="mySwiper"
        centeredSlides={true}
        style={
          ({ height: "200px" },
          isResponsive ? { margin: " 30px 0 0 0" } : { margin: "0 0 0 30%" })
        }
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        speed={2500}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {[1, 2, , 4, , 56, , 7].map((_) => {
          return (
            <SwiperSlide style={{ width: "200px", height: "200px" }}>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "250px",
                  height: "250px",
                }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}

export function ExploreMoreSlider() {
  const isResponsive = useMediaQuery({ query: "(max-width: 450px)" });

  return (
    <Swiper
      slidesPerView={4.5}
      spaceBetween={130}
      className="mySwiper"
      style={
        isResponsive
          ? { height: "300px", margin: "30px 0 0 0" }
          : { height: "300px", margin: "50px 0 0 0" }
      }
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      speed={2500}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {avenues.map((img) => {
        return (
          <SwiperSlide>
            <img
              src={img}
              loading="lazy"
              alt="image"
              height="100px"
              width="100px"
              style={{ borderRadius: "40px" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
