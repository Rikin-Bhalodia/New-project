import React from "react";
import styled from "styled-components";
import Video from "../../assets/images/studio-product/video.svg";
import ReletedServices from "./RelatedSrevices";
import SimillerProduct from "./SimillierProduct";
import WatchMoreSlider from "./WatchMoreSlider";

const StudioProductWrapper = styled.div`
  .studio-product-head {
    display: flex;
    position: relative;
    height: 170px;
    align-items: center;
    justify-content: space-between;
    .leftside-area {
      .goback-link {
        a {
          font-size: 20px;
          text-decoration: underline;
          color: #000;
        }
      }
      .product-head {
        p {
          font-size: 18px;
          margin: 30px 0 10px;
        }
      }
    }
    .rightside-area {
      .homePageButtonSection {
        position: relative;
        right: 200px;
        bottom: -100px;
      }
    }
  }
  .studio-product-body {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    .studio-product-video {
      img {
        width: 1100px;
        height: 600px;
        object-fit: cover;
      }
    }
    .box-area {
      .product-box {
        width: 364px;
        height: 400px;
        background: #a75b41;
        border-radius: 44px;
        padding: 0 30px;
        p {
          font-weight: 400;
          font-size: 18px;
          line-height: 26px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #ffffff;
          height: 100%;
        }
      }
    }
  }
`;

export default function StudioProduct() {
  return (
    <>
      <StudioProductWrapper>
        <div className="container-fluid">
          <div className="studio-product-head">
            <div className="leftside-area">
              <div className="goback-link">
                <a href="/">Gp Back</a>
              </div>
              <div className="product-head">
                <p>STUDIO / CHANEL’S MOST EXPENSIVE PRODUCTS</p>
              </div>
            </div>
            <div className="rightside-area">
              <div className="homePageButtonSection">
                <div className="inenFixedBtn">
                  <a
                    href="/"
                    //   style="z-index: 99999;"
                    className="homeMenuDesign d-inline-block colorWhite text-center pt-3 coralScript font-60 position-absolute"
                  >
                    Menu
                  </a>
                  {/* <!-- menu close icon --> */}
                  <div className="menuCloseSec"></div>
                  {/* <!-- display menu sec --> */}
                  <div
                    className="centerMenu c-menu-w home d-flex align-items-center flex-column justify-content-between"
                    //   style="z-index: 999999;"
                  >
                    <div className="searchSecbanner position-relative w-100">
                      <form className="d-flex w-100 align-items-center my-4 menuSearch">
                        <a href="/" className="menurightBtn colorWhite">
                          <i className="fa fa-microphone"></i>
                        </a>
                        <input
                          type="text"
                          className="w-100 coralFont brightMainColor font-13"
                          placeholder="Search for products..."
                        />
                        <a href="/" className="menuleftBtn colorWhite">
                          <i className="fa fa-search"></i>
                        </a>
                      </form>
                    </div>
                    {/* <!-- inner menu design --> */}
                    <div className="dragbale-menu">
                      <ul className="list-unstyled text-center w-100 menuListBaner">
                        <li className="wow fadeInUp">
                          <a href="/">Our story </a>
                        </li>
                        <li className="wow fadeInUp">
                          <a href="/">Studio </a>
                        </li>
                        <li className="wow fadeInUp">
                          <a href="/">Avenue </a>
                        </li>
                        <li className="wow fadeInUp">
                          <a href="/">Services </a>
                        </li>
                        <li className="wow fadeInUp">
                          <a href="/">Rent </a>
                        </li>
                        <li className="wow fadeInUp">
                          <a href="/">Preowned </a>
                        </li>
                        <li className="wow fadeInUp">
                          <a href="/">Live </a>
                        </li>
                        <li className="wow fadeInUp">
                          <a href="/">BLOG </a>
                        </li>
                        <li className="wow fadeInUp">
                          <a href="/">Log in/Profile </a>
                        </li>
                        <li className="wow fadeInUp">
                          <a href="/">Home </a>
                        </li>
                        <li className="wow fadeInUp">
                          <a href="/">Contact </a>
                        </li>
                      </ul>
                      <ul className="c-social-w">
                        <li>
                          <a href="/">
                            <i
                              className="fa fa-pinterest"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i
                              className="fa fa-linkedin-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="studio-product-body">
            <div className="studio-product-video">
              <img src={Video} alt="" width={"500px"} />
            </div>
            <div className="box-area">
              <div className="product-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laboru
                </p>
              </div>
            </div>
          </div>
        </div>
      </StudioProductWrapper>
      <SimillerProduct />
      <WatchMoreSlider />
      <ReletedServices />
    </>
  );
}
