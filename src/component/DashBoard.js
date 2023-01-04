import React from "react";
import Home from "./Home/Home";
import Industries from "./Industries/Industries.js";
import Card from "./card/card.js";
import Testimonials from "./testimonials/testimonials";
import Footer from "./footer/footer";
import './Dash.css';
class DashBoard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Home />
        <Industries />
        <Card />
        <Testimonials />
        <Footer/>
      </div>
    );
  }
}
export default DashBoard;
