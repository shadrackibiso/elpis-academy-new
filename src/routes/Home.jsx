import React from "react";
import "../css/home.css";
import heroMockUp from "../images/desktop/phone mockup 1.svg";
import layer1 from "../images/desktop/layer1.svg";
import layer2 from "../images/desktop/layer2.svg";
import layer3 from "../images/desktop/layer3.svg";
import layer4 from "../images/desktop/layer4.svg";
import layer5 from "../images/desktop/layer5.svg";
import circleBlue from "../images/desktop/circleBlue.svg";
import circleWhite from "../images/desktop/circleWhite.svg";
import send from "../images/send-icon.svg";
import logo from "../images/elpis.svg";
import phone1 from "../images/desktop/png/phone mockup 2.png";
import phone2 from "../images/desktop/png/phone mockup 3.png";
import phone3 from "../images/desktop/png/phone mockup 4.png";

function Home() {
  return (
    <div className="Home">
      <header className="pl-3 pl-md-5 pt-3">
        <img src={logo} alt="elpis" />
      </header>
      {/* ======
      HERO 
      ====== */}
      <div className="hero container-fluid p-0 pt-5 pt-md-0">
        {/* design elements */}
        <img src={circleWhite} className="circleWhite" alt="design" />
        <img src={circleWhite} className="circleWhite1" alt="design" />
        <img src={circleWhite} className="circleWhite2" alt="design" />
        <img src={circleWhite} className="circleWhite3" alt="design" />
        <img src={layer3} className="layer3" alt="design" />
        <img src={layer4} className="layer4" alt="design" />
        {/* <img src={circleBlue} className="layer1" alt="design" /> */}
        <img src={circleBlue} className="circleBlue" alt="design" />
        <img src={circleBlue} className="circleBlue2" alt="design" />
        {/* content */}
        <div className="row align-items-center no-gutters">
          <div className="col-md-5 p-3 p-md-5 mt-5 mt-md-0">
            <h1 className="font-weight-bold">Explore what excites you.</h1>
            <h5>Discover and Book online classes on anything.</h5>
            <p className="mt-3">Enter email to request beta access.</p>
            <form className="newsletterForm">
              <input type="email" placeholder="Enter email" required />
              <button>
                <img src={send} alt="send" />
              </button>
            </form>
          </div>
          <div className="col-md-7 p-0">
            <img src={heroMockUp} alt="phone" className="heroMockup" />
          </div>
        </div>
      </div>
      {/* ======
      FUN WAY TO LEARN
      ====== */}
      <div
        className="container-fluid section1 p-0"
        style={{ position: "relative" }}
      >
        {/* design elements */}
        <img src={circleWhite} className="circleWhite4" alt="design" />
        <img src={layer5} className="layer5" alt="design" />
        <img src={layer2} className="layer2" alt="design" />
        {/* content */}
        <div className="row no-gutters">
          <div className="col-md-7 p-0 phone1Container d-none d-md-flex">
            <img src={phone1} alt="phone" className="phone1" />
          </div>
          <div className="col-md-5 p-5 d-flex flex-column justify-content-center align-items-center mt-5 mt-md-0 section1Text">
            <h1 className="font-weight-bold">Fun Way To Learn</h1>
            <h5>Book a Live Class Anywhere, Anytime.</h5>
          </div>
          <div className="col-md-7 p-0 phone1Container d-md-none d-flex justify-content-center">
            <img src={phone1} alt="phone" className="phone1" />
          </div>
        </div>
      </div>
      {/* ======
      FUN WAY TO LEARN
      ====== */}
      <div
        className="container-fluid section2 p-0"
        style={{ position: "relative" }}
      >
        {/* content */}
        <div className="row no-gutters">
          <div className="col-md-5 p-5 d-flex flex-column justify-content-center align-items-center mt-5 mt-md-0">
            <div className="section2Text">
              <h1 className="font-weight-bold">Fun Way To Learn</h1>
              <h5>Book a Live Class Anywhere, Anytime.</h5>
            </div>
          </div>
          <div className="col-md-7 p-0 phone2Container">
            <img src={phone2} alt="phone" className="phone2" />
          </div>
        </div>
      </div>
      {/* ======
      JOIN OUR COMMUNITY
      ====== */}
      <div
        className="container-fluid section2 p-0 mt-5 mb-5"
        style={{ position: "relative" }}
      >
        {/* content */}
        <div className="row no-gutters">
          <div className="col-md-7 p-0 phone3Container d-none d-md-flex">
            <img src={phone3} alt="phone" className="phone3" />
          </div>
          <div className="col-md-5 p-5 d-flex flex-column justify-content-center align-items-center">
            <div className="section2Text">
              <h1 className="font-weight-bold">Join Our Community</h1>
              <h5>
                Build the right network of like-minded mentor and students.
              </h5>
            </div>
          </div>
          <div className="col-md-7 p-0 phone3Container d-md-none">
            <img src={phone3} alt="phone" className="phone3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
