import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import BannerImage from "./assets/images/studio/banner.png";
import useWindowSize from "./components/useWindowSize";
import gsap from "gsap";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
import FirstImage from "./assets/images/studio/blog/first.svg";
const Slider = React.lazy(() => import("./slider"));
const AnimatedTextWord = React.lazy(() =>
  import("./commonComponents/Animation/FlipAnimation")
);
const StudioBanner = React.lazy(() => import("./commonComponents/studio"));
const Header = React.lazy(() => import("./commonComponents/Header"));

const StudioWrapper = styled.div`
  .studioBlogMenu {
    display: flex;
    text-transform: uppercase;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    margin-bottom: 30px;
  }
  .item {
    padding-right: 30px;
  }
  .sliderInerDetials {
    color: #a65a40;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    /* padding: 0 30px; */
  }
  .image-1 {
    width: 100% !important;
    overflow: hidden;
    img {
      width: 100% !important;
    }
  }
  .info-1 {
    h3 {
      font-size: 30px;
      padding: 5px 0;
    }
    p {
      font-size: 16px;
      text-align: justify;
    }
  }

  @media screen and (max-width: 1000px) {
    .studio-s3 h2 {
      font-size: 5rem;
    }
    .studio-s4 h2 {
      font-size: 4rem;
    }
    .studioBlogMenu {
      gap: 20px;
    }
    /* .blog-box {
      width: 350px;
      height: 300px;
    } */
    .explore-more a h3 {
      font-size: 3.5rem !important;
    }
    .blog-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    .image-1 {
      width: 100% !important;
      img {
        width: 100% !important;
      }
    }
    .info-1 {
      h3 {
        font-size: 24px;
      }
      p {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .studio-s3 h2 {
      font-size: 4rem;
    }
    .studio-s4 h2 {
      font-size: 4rem;
    }
    .sliderInerDetials {
      font-size: 24px;
    }
    .explore-more a h3 {
      font-size: 3rem !important;
    }
  }
  @media screen and (max-width: 670px) {
    .studio-s3 h2 {
      font-size: 3rem;
    }
    .studio-s4 h2 {
      font-size: 4rem;
    }
    .studioBlogMenu {
      font-size: 14px;
    }
    .explore-more a h3 {
      font-size: 2.5rem !important;
    }
  }
  @media screen and (max-width: 500px) {
    .studio-s3 h2 {
      font-size: 2.3rem;
    }
    .studio-s4 h2 {
      font-size: 4rem;
    }
    .studioBlogMenu {
      font-size: 13px;
    }
    .sliderInerDetials {
      font-size: 20px;
    }
    .explore-more a h3 {
      font-size: 2rem !important;
    }
    .blog-grid {
      gap: 10px;
      padding: 0 10px;
    }
    .info-1 {
      h3 {
        font-size: 16px;
      }
      p {
        font-size: 11px;
      }
    }
    .studioBlogMenu {
      gap: 15px;
    }
    .item {
      padding-right: 10px;
    }
  }
  @media screen and (max-width: 400px) {
    .studio-s3 h2 {
      font-size: 2rem;
    }
    .studio-s4 h2 {
      font-size: 4rem;
    }
    .studioBlogMenu {
      font-size: 12px;
    }
    .sliderInerDetials {
      font-size: 18px;
    }
  }
`;

const Studio = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [transitionText, setTransitionText] = useState(false);
  const [transitionForLuxury, setTransitionForLuxury] = useState(false);
  const [transitionForBlogs, setTransitionForBlogs] = useState(false);
  const [transitionForMore, setTransitionForMore] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // useEffect(() => {
  //   setAnimation(
  //     TweenMax.to(imgRef, 10, {
  //       rotation: 360,
  //       repeat: -1,
  //     }).pause()
  //   );
  // }, []);

  gsap.registerPlugin(ScrollTrigger);
  const windowSize = useWindowSize();
  const wrapper = useRef();
  const setBodyHeight = () => {
    document.body.style.height = `${
      wrapper.current.getBoundingClientRect().height
    }px`;
  };

  // 5.
  // useEffect(() => {
  //   requestAnimationFrame(() => smoothScrollingHandler());
  // }, []);

  const data = {
    ease: 0.9,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  // const smoothScrollingHandler = () => {
  //   data.current = window.scrollY;
  //   data.previous += (data.current - data.previous) * data.ease;
  //   data.rounded = Math.round(data.previous * 100) / 100;

  //   wrapper.current.style.transform = `translateY(-${data.previous}px)`;
  //   requestAnimationFrame(() => smoothScrollingHandler());
  // };

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeader(window.scrollY > 0);
      setTransitionText(window.scrollY === 0 || window.scrollY > 0);
      setTransitionForLuxury(window.scrollY > 1600);
      setTransitionForBlogs(window.scrollY > 2800);
      setTransitionForMore(window.scrollY > 3900);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    let smoother = ScrollTrigger.create({
      smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
    });
    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <StudioWrapper>
      <div ref={wrapper}>
        <StudioBanner />
        <section className="studio-s3">
          <div className="container-fluid">
            <p>STUDIO</p>
            <h2
              className="f-heading-m explore"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2rem 0",
              }}
            >
              <AnimatedTextWord text="EXPLORE" />
            </h2>

            <div className="studioBlogMenu">
              {/* <div className="list-unstyled d-flex mb-5 "> */}
              <div className="item">lifestyle</div>
              <div className="item">jewellery</div>
              <div className="item">beauty</div>
              <div className="item">vacation</div>
              <div className="item">new in</div>
              <div className="item">lifestyle</div>
              <div className="item">jewellery</div>
              <div className="item">beauty</div>
              <div className="item">vacation</div>
              {/* </div> */}
            </div>
            <div className="blogDetailsMenu">
              <div>
                <div>
                  <div className="sliderInerDetials">15 second videos</div>
                  <Slider />
                </div>
                <div className="viewmore  wow fadeIn">
                  <a href="#">View More</a>
                </div>
              </div>
              <div>
                <div>
                  <div className="sliderInerDetials">60 second videos</div>
                  <Slider />
                </div>
                <div className="viewmore  wow fadeInUp">
                  <a href="#">View More</a>
                </div>
              </div>
              <div>
                <div>
                  <div className="sliderInerDetials">behind the scenes</div>
                  <Slider />
                </div>
                <div className="viewmore  wow fadeInUp">
                  <a href="#">View More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="studio-s4">
          <div className="container">
            <h2
              className="f-heading-m explore"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2rem 0",
              }}
            >
              <AnimatedTextWord text="BLOGS" />
            </h2>

            <div className="studioBlogMenu">
              <div className="item">lifestyle</div>
              <div className="item">jewellery</div>
              <div className="item">beauty</div>
              <div className="item">vacation</div>
              <div className="item">new in</div>
              <div className="item">lifestyle</div>
              <div className="item">jewellery</div>
              <div className="item">beauty</div>
              <div className="item">vacation</div>
            </div>
            <div className="blog-grid">
              {[1, 2, 3, 4, 5, 6].map((_) => {
                return (
                  <motion.div
                    initial={{ y: "50vh" }}
                    whileInView={() => {
                      setIsInView(true);
                    }}
                    animate={
                      isInView && {
                        y: 0,
                        transition: {
                          duration: 1,
                        },
                      }
                    }
                    className="blog-box"
                  >
                    <div className="image-1">
                      <motion.img
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        src={FirstImage}
                        loading="lazy"
                        alt="first-image"
                      />
                    </div>
                    <div className="info-1">
                      <h3>LOREM IPSUM SET</h3>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever... <a href="#">Read More</a>
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* <div className="container-fluid blogs">
            <div className="row">
              <div className="col-md-4 wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} loading="lazy" alt="first-image" />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4  wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} loading="lazy" alt="image1" />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4  wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} loading="lazy" alt="image1" />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4  wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} loading="lazy" alt="image1" />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4  wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} loading="lazy" alt="image1" />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4  wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} loading="lazy" alt="image1" />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="explore-more container-fluid">
            <a href="#">
              <h3
                className="f-heading-m explore-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem 0",
                }}
              >
                <AnimatedTextWord text="EXPLORE MORE" />
              </h3>
            </a>
          </div>
        </section>
      </div>
    </StudioWrapper>
  );
};

export default Studio;
