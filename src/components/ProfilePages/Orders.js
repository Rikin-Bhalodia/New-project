import React from "react";
import styled from "styled-components";
import Sidebar from "../../commonComponents/SidebarOfProfilePage/index";
import { Select } from "antd";

const DesktopWrapper = styled.div`
   display: flex;
   .desktop-content {
     width: 100%;
     margin-top: 165px;
  }
  .desktop-header {
    display: flex;
  }
  .desktop-header {
   font-family: 'Coral Blush';
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
  }
  .desktop-bar {
    font-family: "Coral Blush";
    display: flex;
    justify-content:space-between;
    width: 100%;
    margin-left: 30px;
  }
  .desktop-button{
    margin-right: 10px;
  }
  .desktop-fp{
    border: 1px solid #665E2F;
    background:#FCF9F2;
    padding-left: 25px;
  }
  .desktop-one{
    background-color: rgba(166, 90, 64, 0.25);
    display: flex;
    padding: 24px;
    font-family: 'Coral Blush';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    gap: 110px;
    color: #665E2F;
    align-items: center;
    margin-top: 30px;
  }
  .desktop-two{
    background: rgba(167, 149, 134, 0.22);
    display: flex;
    padding: 24px;
    font-family: 'Coral Blush';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    gap: 110px;
    color: #665E2F;
    align-items: center;
  }
  .desktop-three{
    background-color: rgba(166, 90, 64, 0.25);
    display: flex;
    padding: 24px;
    font-family: 'Coral Blush';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    gap: 110px;
    color: #665E2F;
    align-items: center;
  }
  .desktop-four{
    background: rgba(167, 149, 134, 0.22);
    display: flex;
    padding: 24px;
    font-family: 'Coral Blush';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    gap: 110px;
    color: #665E2F;
    align-items: center;
  }
  .empty-circle{
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background: #fff;
  }
`;

const Orders = () => {
  const items = [
    "DELIVERED",
    "PENDING",
    "RETURNED",
    "LAST 6 MONTHS",
    "LAST YEAR",
  ];
  return (
    <>
      <DesktopWrapper>
        <Sidebar />
        <div className="desktop-content">
          <div className="desktop-bar">
            <div className="desktop-header">
              <h4>SHOWING</h4>
              {/* <select name="ALL-ORDERS" className="desktop-select" id="">
                <option value="">DELIVERED</option>
                <option value="">PENDING</option>
                <option value="">RETURNED</option>
                <option value="">LAST 6 MONTHS</option>
                <option value="">LAST YEAR</option>
              </select> */}
              <Select
                placeholder="ALL ORDERS"
                style={{ width: "70%", marginLeft: "10px" }}
              >
                {items.map((items, index) => {
                  return (
                    <Select.Option key={index} value={items}>
                      {items}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
            <div className="desktop-button">
              <button className="desktop-fp">FILTERS</button>
            </div>
          </div>
          <div className="desktop-data">
            <div className="desktop-one">
              <div className="return">DELIVERED</div>
              <div className="date">MARCH-12, 2022</div>
              <div className="empty-circle"></div>
              <div className="desktop-country">NOIDA, UTTAR-PRADESH</div>
              <div className="desktop-track">TRACK</div>
            </div>
            <div className="desktop-two">
            <div className="return">DISPATCHED</div>
              <div className="date">MARCH-12, 2022</div>
              <div className="empty-circle"></div>
              <div className="desktop-country">BANGALORE, KARNATAKA</div>
              <div className="desktop-track">TRACK</div>
            </div>
            <div className="desktop-three">
            <div className="return">IN TRANSIST</div>
              <div className="date">MARCH-12, 2022</div>
              <div className="empty-circle"></div>
              <div className="desktop-country">BANGALORE, KARNATAKA</div>
              <div className="desktop-track">TRACK</div>
            </div>
            <div className="desktop-four">
            <div className="return">PENDING</div>
              <div className="date">MARCH-12, 2022</div>
              <div className="empty-circle"></div>
              <div className="desktop-country">NOIDA, UTTAR-PRADESH</div>
              <div className="desktop-track">TRACK</div>
            </div>
          </div>
        </div>
      </DesktopWrapper>
    </>
  );
};

export default Orders;
