import React from "react";
import "./testimonials.css";
import Testi from "../../asset/testimonial.png";
import wave from "../../asset/wave3.png";

import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { GoDash } from "@react-icons/all-files/go/GoDash";

export default function Testimonials() {
  return (
    <div className="container text-center _testimonials_container">
      <div style={{ textAlign: "center" }}>
        <h2>Testimonials</h2>
      </div>
      <div className="test-actions">
        <button
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <FaArrowLeft />
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <FaArrowRight />
        </button>
      </div>
      <div
        id="carouselExampleInterval"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active eachItem col-12"
            data-bs-interval="10000"
          >
            <div className="d-flex testimobile">
              <div className="col-3 left-test">
                <img src={Testi} alt="a" className="imagepro" />
              </div>
              <div className="col-9 right-test">
                <div className="test-content">
                  <h6 className="test-right-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
                    elementum urna, libero, et aliquam convallis quis. Urna
                    sagittis, eget non purus cursus mauris et nullam lorem.
                    Facilisi nisl, aliquam dui suspendisse id vitae in. Aenean
                    elementum ipsum viverra purus.”
                  </h6>
                  <p className="p">- Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item eachItem col-12"
            data-bs-interval="10000"
          >
            <div className="d-flex">
              <div className="col-3 left-test">
              <img src={Testi} alt="a" className="imagepro" />
              </div>
              <div className="col-9 right-test">
                <div className="test-content">
                  <h6 className="test-right-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
                    elementum urna, libero, et aliquam convallis quis. Urna
                    sagittis, eget non purus cursus mauris et nullam lorem.
                    Facilisi nisl, aliquam dui suspendisse id vitae in. Aenean
                    elementum ipsum viverra purus.”
                  </h6>
                  <p>- Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item eachItem col-12"
            data-bs-interval="10000"
          >
            <div className="d-flex">
              <div className="col-3 left-test">
              <img src={Testi} alt="a" className="imagepro" />
              </div>
              <div className="col-9 right-test">
                <div className="test-content">
                  <h6 className="test-right-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
                    elementum urna, libero, et aliquam convallis quis. Urna
                    sagittis, eget non purus cursus mauris et nullam lorem.
                    Facilisi nisl, aliquam dui suspendisse id vitae in. Aenean
                    elementum ipsum viverra purus.”
                  </h6>
                  <p>- Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
