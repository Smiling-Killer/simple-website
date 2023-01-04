/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall";

import { FiMail } from "@react-icons/all-files/fi/FiMail";


function Footer() {
  return (
    <div className="footerBackground">
      <div className="container">
        <div className="Details d-flex">
          <div className="leftFooter col-4">
            <div>
              <h6 className="footerlefthead">
                ea elit quis aute nulla sit exercitation
              </h6>
            </div>
            <div>
              <p className="footerleftpara">
                ea elit quis aute nulla sit exercitation culpa elit sit eu sunt
                ea id et laboris et enim deserunt nulla aliqua
              </p>
            </div>
            <div className="getStart" >
              <a href="#" className="getStart">
                GET STARTED
              </a>
            </div>
          </div>
          <div className="rightFooter ">
            <div className="comanyFeilds">
              <div className="col-5 detailList">
                <p>Investors</p>
                <p>News</p>
                <p>Blog s</p>
                <p>Case Study</p>
              </div>
              <div className="col-5">
                <p>Team</p>
                <p>pricing</p>
                <p>Support</p>
                <p>prodect portfolio</p>
              </div>
              <div className="col-5">
                <p>Compliance</p>
                <p>Security</p>
                <p>Contact Us</p>
              </div>
            </div>
            <div className="contactFeilds ">
              <p style={{padding:"5px"}}>Sales & support </p>
              <p><span className="spanIcon "><BiPhoneCall/></span>9343248857</p>
              <p><span className="spanIcon"><FiMail/></span>support@crediwatch.in</p>
            </div>
          </div>
          <div className="socialContact ">
            <div className="loginsection">
              <h6>Existing Users</h6>
              <button>LOGIN</button>
            </div>
            <div className="iconSection">
              <h6>Connect with us</h6>
              <div className="icons">
                <p>
                  <FaFacebookF />
                </p>
                <p>
                  <FaTwitter />
                </p>
                <p>
                  <FaLinkedinIn />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footerName">
          <p style={{fontSize:"12px"}}>2020 Crediwatch. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
