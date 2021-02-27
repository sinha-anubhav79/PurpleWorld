import "../css/styles.css";
import { Link } from "react-router-dom";
// import img1 from "../assets/img/mainshowcase.png";
// import img2 from "../assets/img/drawingroom.png";
// import img3 from "../assets/img/books.png";
function Home() {
  return (
    <section id="home" className="">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="img-gradient" id="img-carousel-1"></div>
            <div class="carousel-caption d-none d-md-block fw-bolder">
              <h1 className="fw-bolder">Purple World</h1>
              <p>Consult Our Interior Design Advisor</p>
              <Link to="/contact">
                <button className="btn btn-danger rounded-pill fw-bold px-4">
                  Consult our designer
                </button>
              </Link>
            </div>
          </div>
          <div class="carousel-item">
            <div className="img-gradient" id="img-carousel-2"></div>
            <div class="carousel-caption d-none d-md-block fw-bolder">
              <h1 className="fw-bolder">Purple World</h1>
              <p>Consult Our Interior Design Advisor</p>
              <Link to="/contact">
                <button className="btn btn-danger rounded-pill fw-bold px-4">
                  Consult our designer
                </button>
              </Link>
            </div>
          </div>
          <div class="carousel-item">
            <div className="img-gradient" id="img-carousel-3"></div>
            <div class="carousel-caption d-none d-md-block fw-bolder">
              <h1 className="fw-bolder">Purple World</h1>
              <p>Consult Our Interior Design Advisor</p>
              <Link to="/contact">
                <button className="btn btn-danger rounded-pill fw-bold px-4">
                  Consult our designer
                </button>
              </Link>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="circular-ring col-4 h-100"></div>
          <div className="circular-ring col-4 h-100"></div>
          <div className="circular-ring col-4 h-100"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
