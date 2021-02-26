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
          <div className="column col-xxl-6">
            <h1 className="text-center p-3">About Us</h1>
            <p className="fs-4 p-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <div className="text-center">
              <Link to="/contact">
                <button className="btn btn-outline-secondary">Contact</button>
              </Link>
            </div>
          </div>
          <div className="column col-xxl-6">
            <img src={abtImg} className="w-100 h-100 img-fluid" />
          </div>
        </div>
        <div>
          <h1 className="text-center pt-5">How it's Done</h1>
          <Process />
        </div>
        <div>
          <h1 className="text-center py-5">We work with the best</h1>
          <div className="row">
            <div className="col-md-3">
              <img src={century_ply} width="200" alt="..." />
            </div>
            <div className="col-md-3">
              <img src={hettich} width="200" alt="..." />
            </div>
            <div className="col-md-3">
              <img src={asianpaints} width="200" alt="..." />
            </div>
            <div className="col-md-3">
              <img src={bosch} width="200" alt="..." />
            </div>
            <div className="col-md-3">
              <img src={fabindia} width="200" alt="..." />
            </div>
            <div className="col-md-3">
              <img src={gulmohar_lane} width="200" alt="..." />
            </div>
            <div className="col-md-3">
              <img src={jaquar} width="200" alt="..." />
            </div>
            <div className="col-md-3">
              <img src={philips} width="200" alt="..." />
            </div>
            <div className="col-md-3">
              <img src={saint_gobain} width="200" alt="..." />
            </div>
            <div className="col-md-3">
              <img src={siemens} width="200" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
