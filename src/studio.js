import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import BannerImage from "./assets/images/studio/banner.svg";
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
    height: 56px;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
  }
  .item {
    padding-right: 30px;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 0 30px;
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
      <Header />
      <motion.div
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        ref={wrapper}
      >
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
              <div className="list-unstyled d-flex mb-5 " id="blogSlider">
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
            </div>
            <div className="blogDetailsMenu">
              <div>
                <div>
                  <div className="sliderInerDetials">
                    <h3 className=" brwonColor font-22 mainColor  wow fadeIn">
                      15 second videos
                    </h3>
                  </div>
                  <Slider />
                </div>
                <div className="viewmore  wow fadeIn">
                  <a href="#">View More</a>
                </div>
              </div>
              <div>
                <div>
                  <div className="sliderInerDetials">
                    <h3 className=" brwonColor font-22 mainColor  wow fadeInUp">
                      60 second videos
                    </h3>
                  </div>
                  <Slider />
                </div>
                <div className="viewmore  wow fadeInUp">
                  <a href="#">View More</a>
                </div>
              </div>
              <div>
                <div>
                  <div className="sliderInerDetials">
                    <h3 className=" brwonColor font-22  wow fadeInUp mainColor">
                      behind the scenes
                    </h3>
                  </div>
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
          <div className="container-fluid">
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
              <div className="list-unstyled d-flex mb-5 " id="blogSlider">
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
            </div>
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
                    <img src={FirstImage} loading="lazy" alt="first-image" />
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
      </motion.div>
    </StudioWrapper>
  );
};

export default Studio;
