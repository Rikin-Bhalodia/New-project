import React from "react";
import styled from "styled-components";
import Sidebar from "../../commonComponents/SidebarOfProfilePage/index";
import Image from "../../assets/images/ProfilePage/RView/Image.svg";

const RecentlyViewedWrapper = styled.div`
  display: flex;
  .Viewer {
    margin-left: 25px;
    margin-top: 150px;
  }
  .Viewer-header {
    margin-left: 25px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
  }
  .omegas img {
    height: 200px;
    width: 200px;
  }
  .ViewImages {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
  }
  .footer {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #a65a40;
  }
`;

const RViewed = () => {
  return (
    <>
      <RecentlyViewedWrapper>
        <Sidebar />
        <div className="Viewer">
          <div className="Viewer-header">
            PRODUCTS BASED ON YOUR MOST SEARCHED
          </div>
          <div className="ViewImages">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => {
              return (
                <div className="omegas">
                  <img src={Image} alt="Images" />
                  <div className="footer">
                    <div className="footer1">PRODUCT</div>
                    <div className="footer2">RS.1890</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RecentlyViewedWrapper>
    </>
  );
};

export default RViewed;
