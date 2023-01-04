/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./industries.css";
import BankImg from "../../asset/bank.png";
import WomenImage from "../../asset/women.png";
import SavingsBank from "../../asset/savings-bank.png";
import { BsDash } from "@react-icons/all-files/bs/BsDash";
class Industries extends React.Component{

  render() {
    return (
      <div className="overAll">
        <div className="container">
          <div className="subheading">
            <p>INDUSTRIES</p>
          </div>
          <div className="_container ">
            <input type="radio" id="tab1" name="tab" />
            <label htmlFor="tab1">
              <img src={BankImg} alt="bank image" className="bankiconheader" height={35} width={35} />
            </label>
            <input type="radio" id="tab2" name="tab" />
            <label htmlFor="tab2">
              <i className="fa fa-history"></i> CEea elit quis
            </label>
            <input type="radio" id="tab3" name="tab" />
            <label htmlFor="tab3">
              <i className="fa fa-pencil"></i> Eea elit quis
            </label>
            <input type="radio" id="tab4" name="tab" />
            <label htmlFor="tab4">
              <i className="fa fa-share-alt"></i> Eea elit quis
            </label>
            <div className="line"></div>
            <div className="content-container">
              <div className="content each-content" id="c1">
                <div className="d-flex maincontainerinte">
                  <div className="leftContainer col-6">
                    <h1 className="title"> Tagline Content Line Goes here</h1>
                    <p className="indParagraph">
                      Company provides lenders, businesses with actionable credit
                      intelligence on private entities they need to improve trust
                      and increase their lending and trading activity - 1.
                    </p>
                    <h5>
                      <a href="#">
                        VIEW SOLUTIONS{" "}
                        <span style={{ fontSize: "21px", padding: " 2px 1px" }}>
                          <BsDash />
                        </span>
                      </a>
                    </h5>
                  </div>
                  <div className="rightContainer col-6">
                    <img className="savingsbank"
                      src={SavingsBank}
                      alt="savings-bank"
                    
                    />
                    <div className="tabCard">
                      <p>solution name</p>
                      <h4 className="contendabsolute">Case Study Line Goes Here. Can be two lines also</h4>
                      <div className="d-flex">
                        <a
                          href="#"
                          className="cardLink"
                        >
                          Learn more
                        </a>
                        <a
                          href="#"
                          className="cardLink"
                        >
                          Watch Video
                        </a>
                      </div>
                    </div>
                    <img className="WomenImage"
                      src={WomenImage}
                      alt="women"
                    />
                  </div>
                </div>
              </div>
           
           
           
              <div className="content each-content" id="c2">
                <div className="d-flex maincontainerinte">
                  <div className="leftContainer col-6">
                    <h1 className="title"> Tagline Content Line Goes here</h1>
                    <p className="indParagraph">
                      Company provides lenders, businesses with actionable credit
                      intelligence on private entities they need to improve trust
                      and increase their lending and trading activity - 2.
                    </p>
                    <h5>
                      <a href="#">
                        VIEW SOLUTIONS{" "}
                        <span style={{ fontSize: "21px", padding: " 2px 1px" }}>
                          <BsDash />
                        </span>
                      </a>
                    </h5>
                  </div>
                  <div className="rightContainer col-6">
                    <img className="savingsbank"
                      src={SavingsBank}
                      alt="savings-bank"
                    
                    />
                    <div className="tabCard">
                      <p>solution name</p>
                      <h4 className="contendabsolute">Case Study Line Goes Here. Can be two lines also</h4>
                      <div className="d-flex">
                        <a
                          href="#"
                          className="cardLink"
                        >
                          Learn more
                        </a>
                        <a
                          href="#"
                          className="cardLink"
                        >
                          Watch Video
                        </a>
                      </div>
                    </div>
                    <img className="WomenImage"
                      src={WomenImage}
                      alt="women"
                    />
                  </div>
                </div>
              </div>
              <div className="content each-content" id="c3">
                <div className="d-flex maincontainerinte">
                  <div className="leftContainer col-6">
                    <h1 className="title"> Tagline Content Line Goes here</h1>
                    <p className="indParagraph">
                      Company provides lenders, businesses with actionable credit
                      intelligence on private entities they need to improve trust
                      and increase their lending and trading activity - 3.
                    </p>
                    <h5>
                      <a href="#">
                        VIEW SOLUTIONS{" "}
                        <span style={{ fontSize: "21px", padding: " 2px 1px" }}>
                          <BsDash />
                        </span>
                      </a>
                    </h5>
                  </div>
                  <div className="rightContainer col-6">
                    <img className="savingsbank"
                      src={SavingsBank}
                      alt="savings-bank"
                    
                    />
                    <div className="tabCard">
                      <p>solution name</p>
                      <h4 className="contendabsolute">Case Study Line Goes Here. Can be two lines also</h4>
                      <div className="d-flex">
                        <a
                          href="#"
                          className="cardLink"
                        >
                          Learn more
                        </a>
                        <a
                          href="#"
                          className="cardLink"
                        >
                          Watch Video
                        </a>
                      </div>
                    </div>
                    <img className="WomenImage"
                      src={WomenImage}
                      alt="women"
                    />
                  </div>
                </div>
              </div>
           
              <div className="content each-content" id="c4">
                <div className="d-flex maincontainerinte">
                  <div className="leftContainer col-6">
                    <h1 className="title"> Tagline Content Line Goes here</h1>
                    <p className="indParagraph">
                      Company provides lenders, businesses with actionable credit
                      intelligence on private entities they need to improve trust
                      and increase their lending and trading activity - 4.
                    </p>
                    <h5>
                      <a href="#">
                        VIEW SOLUTIONS{" "}
                        <span style={{ fontSize: "21px", padding: " 2px 1px" }}>
                          <BsDash />
                        </span>
                      </a>
                    </h5>
                  </div>
                  <div className="rightContainer col-6">
                    <img className="savingsbank"
                      src={SavingsBank}
                      alt="savings-bank"
                    
                    />
                    <div className="tabCard">
                      <p>solution name</p>
                      <h4 className="contendabsolute">Case Study Line Goes Here. Can be two lines also</h4>
                      <div className="d-flex">
                        <a
                          href="#"
                          className="cardLink"
                        >
                          Learn more
                        </a>
                        <a
                          href="#"
                          className="cardLink"
                        >
                          Watch Video
                        </a>
                      </div>
                    </div>
                    <img className="WomenImage"
                      src={WomenImage}
                      alt="women"
                    />
                  </div>
                </div>
              </div>
           
           
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Industries;
