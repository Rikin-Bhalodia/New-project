import React from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";
import follow6 from "./../../assets/images/img/follow6.png";
import follow5 from "./../../assets/images/img/follow5.png";
import follow4 from "./../../assets/images/img/follow4.png";
import follow1 from "./../../assets/images/img/follow1.png";
import follow2 from "./../../assets/images/img/follow2.png";

const FollowMobileWrapper = styled.div`
  .follow_section {
    height: 700px;
    padding: 70px 30px;
    .follow_grid {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
      grid-template-rows: repeat(7, 1fr);
      gap: 30px 20px;
      width: -webkit-fill-available;
      height: -webkit-fill-available;
      position: relative;
      .grid_1 {
        grid-area: 1/1/4/8;
        h3 {
          font-family: "Coral Blush";
          font-style: normal;
          font-weight: 400;
          font-size: 90px;
          line-height: 100px;
          color: #a65a40;
          margin-left: 30px !important;
        }
      }
      .grid_2 {
        grid-area: 1/8/4/12;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        img {
          width: inherit;
          height: inherit;
        }
      }
      .grid_3 {
        grid-area: 4/2/8/7;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        img {
          width: inherit;
          height: inherit;
        }
      }
      .grid_4 {
        grid-area: 4/7/7/11;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        img {
          width: inherit;
          height: inherit;
        }
      }
      .img_ab_1 {
        position: absolute;
        top: 200px;
        img {
          width: 180px;
        }
      }
      .img_ab_2 {
        position: absolute;
        left: 280px;
        top: 100px;
        img {
          width: 280px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .follow_section {
      height: 630px;
      padding: 40px 30px;
      .follow_grid {
        .img_ab_1 {
          img {
            width: 160px;
          }
        }
        .img_ab_2 {
          left: 260px;
          img {
            width: 250px;
          }
        }
      }
    }
  }
  @media (max-width: 700px) {
    .follow_section {
      height: 550px;
      padding: 40px 30px;
      .follow_grid {
        .grid_1 {
          h3 {
            font-size: 70px;
            line-height: 80px;
            margin-left: 30px !important;
          }
        }
        .img_ab_1 {
          top: 170px;
          left: 15px;
          img {
            width: 140px;
          }
        }
        .img_ab_2 {
          left: 215px;
          top: 80px;
          img {
            width: 220px;
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .follow_section {
      height: 480px;
      padding: 30px;
      .follow_grid {
        gap: 15px;
        .grid_1 {
          h3 {
            font-size: 60px;
            line-height: 70px;
            margin-left: 30px !important;
          }
        }
        .img_ab_1 {
          top: 150px;
          left: 15px;
          img {
            width: 130px;
          }
        }
        .img_ab_2 {
          left: 215px;
          top: 80px;
          img {
            width: 200px;
          }
        }
      }
    }
  }
  @media (max-width: 570px) {
    .follow_section {
      height: 450px;
      padding: 30px;
      .follow_grid {
        gap: 15px;
        .grid_1 {
          h3 {
            font-size: 58px;
            line-height: 62px;
          }
        }
        .img_ab_1 {
          top: 130px;
          left: 15px;
          img {
            width: 120px;
          }
        }
        .img_ab_2 {
          left: 200px;
          top: 80px;
          img {
            width: 170px;
          }
        }
      }
    }
  }
  @media (max-width: 520px) {
    .follow_section {
      height: 380px;
      padding: 30px;
      .follow_grid {
        gap: 15px;
        .grid_1 {
          h3 {
            font-size: 55px;
            line-height: 60px;
          }
        }
        .img_ab_1 {
          top: 120px;
          left: 15px;
          img {
            width: 95px;
          }
        }
        .img_ab_2 {
          left: 180px;
          top: 65px;
          img {
            width: 150px;
          }
        }
      }
    }
  }
  @media (max-width: 470px) {
    .follow_section {
      height: 350px;
      .follow_grid {
        gap: 15px;
        .grid_1 {
          h3 {
            font-size: 50px;
            line-height: 55px;
            margin-left: 20px !important;
          }
        }
        .img_ab_1 {
          top: 120px;
          left: 10px;
          img {
            width: 80px;
          }
        }
        .img_ab_2 {
          left: 160px;
          top: 65px;
          img {
            width: 140px;
          }
        }
      }
    }
  }
  @media (max-width: 430px) {
    .follow_section {
      height: 300px;
      padding: 20px;
      .follow_grid {
        gap: 15px;
        .grid_1 {
          h3 {
            font-size: 45px;
            line-height: 50px;
            letter-spacing: 2px;
          }
        }
        .img_ab_1 {
          top: 100px;
          img {
            width: 70px;
          }
        }
        .img_ab_2 {
          left: 160px;
          top: 65px;
          img {
            width: 120px;
          }
        }
      }
    }
  }
  @media (max-width: 390px) {
    .follow_section {
      height: 290px;
      padding: 20px 20px 20px 10px;
      .follow_grid {
        gap: 10px;
        .grid_1 {
          h3 {
            font-size: 40px;
            line-height: 45px;
            letter-spacing: 2px;
          }
        }
        .img_ab_1 {
          top: 95px;
          img {
            width: 75px;
          }
        }
        .img_ab_2 {
          left: 130px;
          top: 50px;
          img {
            width: 120px;
          }
        }
      }
    }
  }
`;

export default function FollowMobile() {
  return (
    <FollowMobileWrapper>
      <div className="follow_section">
        <div className="follow_grid">
          <div className="grid_1">
            <h3>
              <AnimatedTextWord text="FOLLOW" />
              <AnimatedTextWord text="US" />
            </h3>
          </div>
          <div className="grid_2">
            <img src={follow6} alt="" />
          </div>
          <div className="grid_3">
            <img src={follow5} alt="" />
          </div>
          <div className="grid_4">
            <img src={follow4} alt="" />
          </div>
          <div className="img_ab_1">
            <img src={follow1} alt="" />
          </div>
          <div className="img_ab_2">
            <img src={follow2} alt="" />
          </div>
        </div>
      </div>
    </FollowMobileWrapper>
  );
}
