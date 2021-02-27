import { Link } from "react-router-dom";
import abtImg from "../assets/img/yellowroom.jpg";
function About() {
  return (
    <section id="about" className="container">
      <div className="row">
        <div className="column col-xxl-6" data-aos="fade-up-right">
          <h1 className="text-center p-3">Why Purple World</h1>
          <p className="fs-4 p-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <div className="text-center">
            <Link to="/details">
              <button className="btn btn-outline-secondary btn-lg mb-5">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="column col-xxl-6" data-aos="fade-up-left">
          <img src={abtImg} className="w-100 h-100 img-fluid shadow" />
        </div>
      </div>
    </section>
  );
}

export default About;
