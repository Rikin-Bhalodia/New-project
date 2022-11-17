import React from "react";
import styled from "styled-components";
import ProfileImage from "../../assets/images/SidebarImage/profile.svg";
import { Link } from "react-router-dom";

const SideBarWrapper = styled.div`
  .sidebar-content {
    margin-top: 75px;
    height: 100vh;
    width: 300px;
    background-color: #665e2f;
    border-radius: 0px 30px 30px 0px;
  }
  .sidebar-top {
  }
  .sidebar-image {
    margin: 50px 0px 14px 90px;
  }
  .sidebar-name {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 31px;
    color: #fff;
    margin-left: 85px;
  }
  .sidebar-routes {
    background: #a79586;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 0px 90px 0px 0px;
    color: #fff;
    padding: 15px;
    font-size: 22px;
  }
  .sidebar-middle {
    gap: 10px;
  }
  .sidebar-link {
    height: 55px;
    color: #fff;
    font-family: 'Coral Blush';
  }
  .sidebar-bottom {
    display: flex;
    align-items: center;
    background-color: #665e2f;
    font-size: 20px;
    margin: 20px 30px 0px 30px;
    padding: 12px;
    padding-left: 15px;
    border-radius: 30px;
    font-family: 'Coral Blush';
  }
`;

const index = () => {
  return (
    <>
      <SideBarWrapper>
        <div className="sidebar-content">
          <div className="sidebar-top">
            <img src={ProfileImage} className="sidebar-image" alt="" />
            <div className="sidebar-name">NAME</div>
          </div>
          <div className="sidebar-middle">
            <div className="sidebar-routes">
              <Link className="sidebar-link" to="/profilepage-address">
                ADDRESS
              </Link>
              <Link className="sidebar-link" to="/profilepage-order">
                ORDER
              </Link>
              <Link className="sidebar-link" to="/profilepage-view">
                INSURANCE VIEW
              </Link>
              <Link className="sidebar-link" to="/profilepage-preferences">
                PREFERENCES
              </Link>
              <Link className="sidebar-link" to="/profilepage-wallet">
                WALLET
              </Link>
              <div className="sidebar-bottom">HAVING TROUBLE?   CONTACT US</div>
            </div>
          </div>
        </div>
      </SideBarWrapper>
    </>
  );
};

export default index;
