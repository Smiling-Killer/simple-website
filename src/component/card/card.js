/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./card.css";

import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";


function Card() {
  return (
    <div>
<div className="arrowrfirst "> <FaArrowLeft/><FaArrowRight/> </div>

    <div className="row " style={{padding:"20px 30px"}}>
  <div className="col-sm-3">
    <div className="card1">
      <div className="card-body">
        <h5 className="card-Box1"></h5>
        <p className="card-text">Eea elit quis exercitation culpaea elit quis exercitation culpaea elit quis exercitation culpa</p>
        <a href="#" className="btn1 btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card2">
      <div className="card-body">
        <h5 className="card-Box2"></h5>
        <p className="card-text">Company: ea elit quis exercitation culpa ea elit quis exercitation culpa</p>
        <a href="#" className="btn2 btn-primary">Read More</a>
      </div>
    </div>
      </div>
      
  <div className="col-sm-3">
    <div className="card3">
      <div className="card-body">
        <h5 className="card-Box3"></h5>
        <p className="card-text">Eea elit quis exercitation culpaea elit quis exercitation culpaea   quis exercitati  on culpa</p>
        <a href="#" className="btn3 btn-primary">Read More</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card4">
      <div className="card-body">
        <h5 className="card-Box4"></h5>
        <p className="card-text">Eea elit quis exercitation culpaea elit quis exercitation culpaea elit quis exercitation culpa</p>
        <a href="#" className="btn4 btn-primary">Read More</a>
      </div>
    </div>
  </div>
</div>
</div>
  );
}
export default Card;

