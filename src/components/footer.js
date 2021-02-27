import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center p-3 align-self-center">
            <h4>Get in touch </h4>
            <br />
            <p>
              Call us
              <br />
              +91 9148 484 666
              <br />
              <br />
              Email Us
              <br />
              care@livspace.com
            </p>
          </div>
          <div className="col-md-3 align-self-center">
            <div className="text-center p-3">
              <h4 className="py-3">Follow Us </h4>
              <div className="row">
                <div className="col">
                  <a href="#">
                    <i class="fa fa-instagram fa-2x mx-3 text-white"></i>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <i class="fa fa-facebook-square fa-2x mx-3 text-white"></i>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <i class="fa fa-twitter fa-2x mx-3 text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 align-self-center text-center p-3">
            <h4>Our Location </h4>
            <br />
            <p>
              Bonito Designs
              <br />
              #1182, 5th Main Road, Sector 7, HSR Layout, Bangalore – 560102.
            </p>
          </div>
          <div className="col-md-3 align-self-center text-center">
            <h4>Consult our Advisor</h4>
            <div>
              <Link to="/contact">
                <button className="btn btn-outline-light rounded-pill px-5">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="align-self-center text-center pb-3">
        Purple World &copy;All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
