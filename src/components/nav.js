import logo from "../assets/img/fullLogo.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img src={logo} width="70" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item fs-5 fw-bold px-3">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item fs-5 fw-bold px-3">
              <a className="nav-link" href="/#about">
                About
              </a>
            </li>
            <li className="nav-item fs-5 fw-bold px-3">
              <a className="nav-link" href="/#gallery">
                Portfolio
              </a>
            </li>
            <li className="nav-item fs-5 fw-bold px-3">
              <a className="nav-link" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
          <div>
            <Link to="/contact">
              <button className="btn btn-dark rounded-pill px-5">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
