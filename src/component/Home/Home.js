import React from "react";

import { BiMenuAltRight } from "@react-icons/all-files/bi/BiMenuAltRight";

import "./Home.css";
import HomeImg from "../../asset/Home.png";
function Home() {
  return (
    <div className="overall">
      <div className="header  col-12 ">
        <div className="headerRow">
          <div className="col-3 col-2-md">
            <div className="logo">
              <p>Logo</p>
            </div>
          </div>
          <div className="col-9">
            <div className="d-flex nav-right">
              <ul>
                <li>PLATFORM</li>
                <li>SOLUTIONS</li>
                <li>PARTNERS</li>
                <li>COMPANY</li>
                <li>BLOGS</li>
                <li>CAREERS</li>
                <li>SIGN IN</li>
              </ul>
              <button className="demoButton">REQUEST A DEMO</button>
              <button className="menuButton"><BiMenuAltRight/></button> 
            </div>
          </div>
        </div>
        <div className="HomeContainer container">
          <div className="col-6 contendhome">
            <div>
              <h1 className="heading">Quis ipsum Cea Lorem ipsum</h1>
            </div>
            <div>
              <p className="paragraph">
                Company provides lenders, businesses with actionable credit
                intelligence on private entities they need to improve trust and
                increase their lending and trading activity.
              </p>
            </div>
            <div>
              {" "}
              <p className="textEnd">
                Watch <br />
                in action
              </p>{" "}
            </div>
          </div>
          <div className="col-6 contendHomeImg">
            <img src={HomeImg} className="proImag"  />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
