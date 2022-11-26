import React from "react";
import styled from "styled-components";
import ProfileImage from "../../assets/images/SidebarImage/profile.svg";
import { NavLink } from "react-router-dom";

const SideBarWrapper = styled.div`
  .sidebar-content {
    margin-top: 75px;
    height: 100%;
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
    padding-left: 70px;
  }
  .sidebar-routes {
    background: #a79586;
    align-items: start;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 0px 90px 0px 0px;
    color: #fff;
    padding: 15px;
    font-size: 22px;
  }
  .sidebar-link {
    height: 55px;
    color: #fff;
    font-family: "Coral Blush";
  }
  .sidebar-link:focus {
    background-color: #fff;
    color: #665e2f;
    border-radius: 30px 0px 0px 30px;
  }
  .sidebar-bottom {
    display: flex;
    align-items: center;
    background-color: #665e2f;
    font-size: 20px;
    margin: 20px 30px 0px 20px;
    padding: 12px;
    padding-left: 15px;
    border-radius: 30px;
    font-family: "Coral Blush";
  }
  .sidebar-link:hover {
    .sidebar-routes {
      color: #fff;
    }
    .virat {
      color: #665e2f;
      background-color: #fff;
      border-radius: 30px 0px 0px 30px;
    }
  }
  @media (max-width: 1000px) {
    .sidebar-content {
      height: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .sidebar-image {
      height: 150px;
    }
    .sidebar-routes {
      background: none;
      cursor: pointer;
      border-radius: none;
    }
    .sidebar-link:hover {
    .sidebar-routes {
      color: #fff;
    }
    .virat {
      color: #665e2f;
      background-color: #fff;
      border-radius: 30px 0px 0px 30px;
    }
  }
    .sidebar-link:focus {
    .sidebar-routes {
      color: #fff;
    }
    .virat {
      color: #665e2f;
      background-color: #fff;
      border-radius: 30px 0px 0px 30px;
    }
  }
    .sidebar-name {
      padding-left: 113px;
      font-size: 36px;
    }
    .sidebar-bottom {
      background: #fff;
      color: #665e2f;
      width: 60%;
    }
  }
`;

const index = () => {
  const SidebarRoutes = [
    {
      name: "ADDRESS",
      path: "/profilepage-address",
    },
    {
      name: "ORDER",
      path: "/profilepage-order",
    },
    {
      name: "RECENTLY VIEWED",
      path: "/profilepage-view",
    },
    {
      name: "LOYALTY POINTS",
      path: "/profilepage-points",
    },
    {
      name: "COUPONS",
      path: "/profilepage-coupons",
    },
    {
      name: "PREFERENCES",
      path: "/profilepage-preferance",
    },
    {
      name: "WALLET",
      path: "/profilepage-wallet",
    },
  ];
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
              {SidebarRoutes.map((ele) => {
                return (
                  <div style={{ paddingBottom: "20px", paddingLeft: "50px" }}>
                    <NavLink
                      className={`${(navData) =>
                        navData.isActive ? "active" : ""}
                          sidebar-link `}
                      to={ele.path}
                    >
                      <div className="virat">{ele.name}</div>
                    </NavLink>
                  </div>
                );
              })}
              <div className="sidebar-bottom">HAVING TROUBLE? CONTACT US</div>
            </div>
          </div>
        </div>
      </SideBarWrapper>
    </>
  );
};

export default index;
