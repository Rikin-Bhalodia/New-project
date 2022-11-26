import React from "react";
import styled from "styled-components";

const TermsWrapper = styled.div`
  main {
    background-color: #fff;
  }
  .terms {
    background: rgba(166, 90, 64, 0.19);
    backdrop-filter: blur(2px);
    height: 60vh;
    margin: 130px 30px 0px 30px;
    border-radius: 30px;
  }
  .terms-header {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #665e2f;
    text-align: center;
    position: relative;
    top: 30px;
  }
  .terms-content {
    position: relative;
    top: 70px;
    margin-left: 92px;
  }
  .terms-class {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #a79586;
  }
  .terms-footer {
    margin-top: 30px;
    text-align: center;
  }
  .terms-button {
    height: 60px;
    width: 260px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    background: #665e2f;
    color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: none;
  }
  @media(max-width:576px){
    .terms-content{
      padding-right: 40px;
    }
  }
  @media(max-width:1000px){
    .terms-content{
      padding-right: 40px;
    }
    .terms-class{
      font-size: 35px;
    }
  }
`;

const TermsAndConditions = () => {
  return (
    <>
      <TermsWrapper>
        <main>
          <div className="terms">
            <div className="terms-header">TERMS OF USAGE</div>
            <div className="terms-content">
              <div className="terms-class">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                elit velit, vulputate sit amet congue in, sagittis pellentesque
                sem. Cras justo urna, pulvinar sit amet luctus in, lacinia sed
                tellus. Phasellus auctor sed risus nec suscipit. Integer at
                elementum nisl. Morbi vitae ultricies eros.
              </div>
            </div>
          </div>
          <div className="terms-footer">
            <button className="terms-button">ALLOW</button>
          </div>
        </main>
      </TermsWrapper>
    </>
  );
};

export default TermsAndConditions;
