import React from "react";
import civil from "../assets/img/civil-work.png";
import electrical from "../assets/img/electrical.png";
import painting from "../assets/img/painting.png";
import falseCeiling from "../assets/img/false-ceiling.png";
import plumbing from "../assets/img/plumbing.png";
import tiles from "../assets/img/flooring.png";
import design from "../assets/img/design1.jpg";
import turnkey from "../assets/img/design2.jpg";
import modular from "../assets/img/modular-furniture.jpg";

function Service() {
  return (
    <section className="container">
      <h1 className="text-center p-3 mt-5 sec-head">Our Services</h1>
      <div className="row">
        <div
          className="col-lg-4 col-sm-12 col-12 text-center py-3"
          data-aos="fade-up"
        >
          <img src={design} alt="..." className="w-100" />
          <br />
          <br />
          <h4>Designing</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className="col-lg-4 col-sm-12 col-12 text-center py-3"
          data-aos="fade-up"
        >
          <img src={turnkey} alt="..." className="w-100" />
          <br />
          <br />
          <h4>Turnkey Projects</h4>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div
          className="col-lg-4 col-sm-12 col-12 text-center py-3"
          data-aos="fade-up"
        >
          <img src={modular} alt="..." className="w-100" />
          <br />
          <br />
          <h4>Modular Furniture</h4>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.{" "}
          </p>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <img src={civil} alt="..." />
          <br />
          <h4>Civil Work</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <img src={electrical} alt="..." />
          <br />
          <h4>Electrical</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <img src={painting} alt="..." />
          <br />
          <h4>Painting</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <img src={falseCeiling} alt="..." />
          <br />
          <h4>False Ceiling</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <img src={plumbing} alt="..." />
          <br />
          <h4>Plumbing</h4>
        </div>
        <div
          className="col-md-4 col-sm-6 col-6 text-center py-3"
          data-aos="fade-up"
        >
          <img src={tiles} alt="..." />
          <br />
          <h4>Floor and wall tiling</h4>
        </div>
      </div>
    </section>
  );
}

export default Service;
