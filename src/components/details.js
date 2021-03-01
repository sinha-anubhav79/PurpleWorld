import React from "react";
import { Link } from "react-router-dom";
import abtImg from "../assets/img/yellowroom.jpg";
import century_ply from "../assets/img/century_ply.png";
import hettich from "../assets/img/hettich.png";
import asianpaints from "../assets/img/asianpaints.png";
import bosch from "../assets/img/bosch.png";
import fabindia from "../assets/img/fabindia.png";
import gulmohar_lane from "../assets/img/gulmohar_lane.png";
import jaquar from "../assets/img/jaquar.png";
import philips from "../assets/img/philips.png";
import saint_gobain from "../assets/img/saint_gobain.png";
import siemens from "../assets/img/siemens.png";
import Process from "./process";
function Details() {
  return (
    <section id="details">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-xxl-6"
            data-aos="fade-up-right"
            data-aos-duration="1500"
          >
            <h1 className="text-center p-3">About Us</h1>
            <p className="fs-4 p-3">
              Interior design will often embrace elements such as light, colour
              and the use of specific fabrics. At Purple World, we have moved
              past the notion of considering interiors to be just a decor
              addition to your home and entered a realm where we now understand
              how your home can be turned into an abode where you and your
              family does not just live; but are able to thrive, rejuvenate and
              eventually get in touch with their blissful self for a much more
              meaningful life. We understand you and your needs Understanding
              your personality, lifestyle, design preference and specific needs,
              we interpret your story and turn it to reality through design and
              delivery. We exceed expectations; our Designers & Design Mentors
              with expertise strive for perfection at every step. More
              importantly, we use only the best Superior quality materials for
              the best design output and built with the best brand associations
              - Hettich, Havells, Saint Gobain, etc with a team ensuring special
              products at best prices.
            </p>
            <div className="text-center">
              <Link to="/contact">
                <button className="btn btn-outline-secondary btn-lg mb-5">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div
            className="col-12 col-xxl-6"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <img src={abtImg} className="w-100 h-100 img-fluid" alt="..." />
          </div>
        </div>
        <div>
          <h1 className="text-center pt-5">How it's Done</h1>
          <Process />
        </div>
        <div className="container">
          <h1 className="text-center py-5">We work with the best</h1>
          <div className="row self-align-center">
            <div className="col-md-3 col-sm-6 col-12">
              <img src={century_ply} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img src={hettich} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img src={asianpaints} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img src={bosch} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img src={fabindia} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img
                src={gulmohar_lane}
                width="200"
                alt="..."
                className="col-12"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img src={jaquar} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img src={philips} width="200" alt="..." className="col-12" />
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img
                src={saint_gobain}
                width="200"
                alt="..."
                className="col-12"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <img src={siemens} width="200" alt="..." className="col-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
