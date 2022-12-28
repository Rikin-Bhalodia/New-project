import React, { useRef, useState } from "react";
import styled from "styled-components";
import studioInner5 from "../../assets/images/img/studioInner-1.jpg";
import studioInner3 from "../../assets/images/img/studioInner-3.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ShopHoverWrapper = styled.div`
  .hover-show-img {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100vw;
    position: relative;
  }
  .menu-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90vw;
    height: 100vh;
    overflow: auto;
    padding: 100px 0;
  }
  .menu-list::-webkit-scrollbar {
    display: none;
  }
  .menu-list div {
    /* border-bottom: 1px solid #fff; */
    position: relative;
    display: flex;
    justify-content: center;
  }
  .menu-list div h3 {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 45px;
    letter-spacing: -0.408px;
    color: #000000;
    text-transform: uppercase;
    position: relative;
    top: 24px;
    background: #fff;
    background: none;
    width: max-content;
    padding: 0 10px;
  }
  .menu-list div:hover {
    border-bottom: 1px solid #665e2f;
  }
  .menu-list div:hover h3 {
    color: #665e2f;
    background: #fff;
  }
  .leftImg {
    position: absolute !important;
    left: 50px;
    top: 190px;
  }
  .leftImg img {
    width: 270px;
    height: 350px;
    object-fit: cover;
    transition: transform 2s;
    transform: rotate(-35deg);
    opacity: 0;
    border-radius: 50%;
    z-index: 999;
  }

  .rightImg {
    position: absolute !important;
    right: 50px;
    top: 110px;
  }
  .rightImg img {
    width: 270px;
    height: 350px;
    object-fit: cover;
    transition: transform 2s;
    transform: rotate(35deg);
    opacity: 0;
    border-radius: 50%;
    z-index: 999;
  }
  .shop-hover-category {
    display: flex;
    width: 50%;
    margin: 0 auto;
  }
  .mystyle {
    transform: rotate(0deg) !important;
    opacity: 1 !important;
  }
  .mystyle1 {
    transform: rotate(0deg) !important;
    opacity: 1 !important;
  }

  @media (max-width: 1200px) {
    .menu-list div h3 {
      font-size: 40px;
      letter-spacing: -0.408px;
      top: 20px;
      padding: 0 10px;
    }
    .menu-list {
      gap: 15px;
      height: 100vh;
      overflow: auto;
      padding: 100px 0;
    }
    .leftImg img {
      width: 210px;
      height: 280px;
    }
    .leftImg {
      left: 30px;
    }
    .rightImg img {
      width: 210px;
      height: 280px;
    }
    .rightImg {
      right: 30px;
    }
  }

  @media (max-width: 1000px) {
    .menu-list div h3 {
      font-size: 30px;
      letter-spacing: -0.408px;
      top: 18px;
      padding: 0 10px;
    }
    .menu-list {
      gap: 13px;
      height: 100vh;
      overflow: auto;
      padding: 100px 0;
    }
    .leftImg img {
      width: 170px;
      height: 220px;
    }
    .leftImg {
      left: 30px;
    }
    .rightImg img {
      width: 170px;
      height: 220px;
    }
    .rightImg {
      right: 30px;
      top: 120px;
    }
  }

  @media (max-width: 830px) {
    .menu-list div h3 {
      font-size: 25px;
      letter-spacing: -0.408px;
      top: 18px;
      padding: 0 10px;
    }
    .menu-list {
      gap: 13px;
      height: 100vh;
      overflow: auto;
      padding: 100px 0;
    }
    .leftImg img {
      width: 150px;
      height: 200px;
    }
    .leftImg {
      left: 20px;
    }
    .rightImg img {
      width: 150px;
      height: 200px;
    }
    .rightImg {
      right: 20px;
      top: 120px;
    }
  }

  @media (max-width: 650px) {
    .menu-list div h3 {
      font-size: 20px;
      letter-spacing: -0.408px;
      top: 14px;
      padding: 0 10px;
    }
    .menu-list {
      gap: 13px;
      height: 100vh;
      overflow: auto;
      padding: 100px 0;
    }
    .leftImg img {
      width: 100px;
      height: 140px;
    }
    .leftImg {
      left: 30px;
    }
    .rightImg img {
      width: 100px;
      height: 140px;
    }
    .rightImg {
      right: 30px;
    }
  }

  @media (max-width: 530px) {
    .menu-list div h3 {
      font-size: 15px;
      letter-spacing: -0.408px;
      top: 10px;
      padding: 0 5px;
    }
    .menu-list {
      gap: 10px;
      height: 100%;
      overflow: auto;
      padding: 80px 0 50px;
    }
    .leftImg img {
      width: 70px;
      height: 90px;
    }
    .leftImg {
      left: 20px;
    }
    .rightImg img {
      width: 70px;
      height: 90px;
    }
    .rightImg {
      right: 20px;
    }
  }
  @media (max-width: 370px) {
    .menu-list div h3 {
      font-size: 13px;
      letter-spacing: -0.408px;
      top: 10px;
      padding: 0 5px;
    }
    .menu-list {
      gap: 10px;
      height: 100%;
      overflow: auto;
      padding: 80px 0 50px;
    }
    .leftImg img {
      width: 60px;
      height: 80px;
    }
    .leftImg {
      left: 20px;
    }
    .rightImg img {
      width: 60px;
      height: 80px;
    }
    .rightImg {
      right: 20px;
    }
  }
`;

const menuData = [
  {
    name: "ACCESSORIES",
    duration: 1,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "BEAUTY & FREGRANCE",
    duration: 1.2,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Fashion",
    duration: 1.4,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "Foods & Drinks (FMCG)",
    duration: 1.6,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Footwear",
    duration: 1.8,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "Fragrance",
    duration: 2,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Handbags & Travel Bags",
    duration: 2.2,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "HOME",
    duration: 2.4,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Jewelry",
    duration: 2.6,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "Luxury Games",
    duration: 2.8,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Kids",
    duration: 3,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "Luxury Gifting",
    duration: 3.2,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Pets (Shop)",
    duration: 3.4,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "Sports",
    duration: 3.6,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Tech & Electronics",
    duration: 3.8,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
];

export default function ShopHover() {
  const [showImage, setShowImage] = useState({
    leftImg: "",
    rightImg: "",
  });
  const imageRef = useRef(null);
  const imageRef1 = useRef(null);
  // console.log(imageRef.current, "llll");

  const fun = () => {
    imageRef.current.classList?.add("mystyle");
    imageRef1.current.classList?.add("mystyle1");
    // console.log("kkk");
  };
  const fun1 = () => {
    imageRef?.current?.classList?.remove("mystyle");
    imageRef1?.current?.classList?.remove("mystyle1");
    // console.log("helli");
  };

  return (
    <ShopHoverWrapper>
      <motion.section className="homeBanner overflow-hidden minHeightSec minBannerHeight ">
        <div className="hover-show-img">
          <div className="grid">
            <div className="menu-list">
              <div className="leftImg">
                <motion.img
                  ref={imageRef}
                  src={showImage.leftImg}
                  alt=""
                  id="img"
                  loading="lazy"
                />
              </div>
              {menuData.map(({ name, duration, leftImg, rightImg }, i) => {
                return (
                  <div className="shop-hover-category">
                    <motion.div
                      initial={{ y: "30vh", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: duration }}
                      className="menu_hover"
                    >
                      <h3
                        onMouseEnter={() => {
                          setShowImage({
                            leftImg,
                            rightImg,
                          });
                          fun();
                        }}
                        onMouseLeave={() => {
                          setShowImage({});
                          fun1();
                        }}
                      >
                        {name}
                      </h3>
                    </motion.div>
                  </div>
                );
              })}
              <div className="rightImg">
                <motion.img
                  ref={imageRef1}
                  src={showImage.rightImg}
                  alt=""
                  id="img1"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </ShopHoverWrapper>
  );
}
