import React from "react";
import "./navbar.css";
import Hero from "../images/hero.png";
import Logo from "../images/logo.png";
import Time from "../images/time.png";
import Phone from "../images/phone.png";
import Cart from "../images/cart.png";
import Search from "../images/search.png";
function Navbar() {
  return (
    <>
      <div className="hero__container">
        <LogoSection />
        <ServiceDetailContainer />
        <Herotext />
      </div>
    </>
  );
}

function LogoSection() {
  return (
    <>
      <div className="navbar__container">
        <div className="logo__container">
          <img className="logo__image" src={Logo} alt="" />
          <span className="logo__text">Dog-Care</span>
        </div>
        <div className="navbar__details__container">
          <div className="boarding__container">
            <img src={Time} alt="" />
            <div className="boarding__text">
              <div>BOARDING HOURS</div>
              <div>Mon-Sat 7:00am - 6:00 pm</div>
            </div>
          </div>
          <div className="call__container">
            <img src={Phone} alt="" />
            <div className="call__text">
              <div>CALL US</div>
              <div>(555) Pup-cares</div>
            </div>
          </div>
          <div>
            <button className="appointment__button">MAKE AN APPOINTMENT</button>
          </div>
        </div>
      </div>
    </>
  );
}

function ServiceDetailContainer() {
  return (
    <>
      <div className="service__container">
        <div className="list__container">
          <div className="list__items">Services</div>
          <div className="list__items">Specials</div>
          <div className="list__items">Facilities</div>
          <div className="list__items">Review</div>
          <div className="list__items">Shop</div>
          <div className="list__items">About</div>
        </div>
        <div className="search__and__cart__container">
          <img src={Search} alt="" />
          <img src={Cart} alt="" />
        </div>
      </div>
    </>
  );
}

function Herotext() {
  return (
    <>
      <div className="hero__text__container">
        <div className="hero__text">
          Premier dog boarding <br /> daycare & day spa
        </div>
        <div>
          <button
            style={{
              marginTop: "45px",
            }}
            className="appointment__button1"
          >
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
