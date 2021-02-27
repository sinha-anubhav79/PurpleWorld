import civil from "../assets/img/civil-work.png";
import electrical from "../assets/img/electrical.png";
import painting from "../assets/img/painting.png";
import falseCeiling from "../assets/img/false-ceiling.png";
import plumbing from "../assets/img/plumbing.png";
import tiles from "../assets/img/flooring.png";
function Service() {
  return (
    <section className="container">
      <h1 className="text-center p-3">Services</h1>
      <div className="row">
        <div className="col-md-4 col-sm-6 text-center py-5">
          <img src={civil} alt="..." />
          <br />
          <h4>Civil Work</h4>
        </div>
        <div className="col-md-4 col-sm-6 text-center py-5">
          <img src={electrical} alt="..." />
          <br />
          <h4>Electrical</h4>
        </div>
        <div className="col-md-4 col-sm-6 text-center py-5">
          <img src={painting} alt="..." />
          <br />
          <h4>Painting</h4>
        </div>
        <div className="col-md-4 col-sm-6 text-center py-5">
          <img src={falseCeiling} alt="..." />
          <br />
          <h4>False Ceiling</h4>
        </div>
        <div className="col-md-4 col-sm-6 text-center py-5">
          <img src={plumbing} alt="..." />
          <br />
          <h4>Plumbing</h4>
        </div>
        <div className="col-md-4 col-sm-6 text-center py-5">
          <img src={tiles} alt="..." />
          <br />
          <h4>Floor and wall tiling</h4>
        </div>
      </div>
    </section>
  );
}

export default Service;
