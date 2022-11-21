import React from "react";
import styled from "styled-components";
import Sidebar from "../../commonComponents/SidebarOfProfilePage/index";
import Image1 from '../../assets/images/ProfilePage/Preferance/Image1.svg'

const PrefrencesWrapper = styled.div`
  display: flex;
  .preferenceContent {
    margin-top: 145px;
    margin-left: 25px;
  }
  .Topbar {
    display: flex;
    flex-direction: column;
  }
  .preferance {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
  }
  .preferance2 {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #a79586;
  }
  .Images{
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .images img{
    height: 130px;
    width: 150px;
  }
`;

const Prefrences = () => {
    return (
        <>
            <PrefrencesWrapper>
                <Sidebar />
                <div className="preferenceContent">
                    <div className="Topbar">
                        <div className="preferance">SELECT YOUR PREFERANCE FIRST</div>
                        <div className="preferance2">
                            FOR CUSTOMISED SUGGESTIONS FROM ROYCLAN
                        </div>
                    </div>
                    <div className="Images">

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 14, 15].map((_) => {
                        return (
                            <div className="images">
                                <img src={Image1} alt="NoImage" />
                            </div>
                        )
                    })}
                    </div>
                </div>
            </PrefrencesWrapper>
        </>
    );
};

export default Prefrences;
