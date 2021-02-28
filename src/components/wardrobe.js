import wardrobe from "../assets/img/wardrobe.jpg";
function Wardrobe() {
  return (
    <div className="container">
      <div className="row" id="wardrobe">
        <div className="text-center">
          <h1>Wardrobe</h1>
          <p>
            A walk in wardrobe is an aspirational aspect of home
            design–especially when it is one that is spacious, well organised
            and kitted out with a closet system that is as stylish as the
            clothing collection it holds. Our curated gallery of designs feature
            beautiful finishes, attractive accent pieces, both stunning and
            practical lighting installations, and extensive closet organisation
            ideas.
          </p>
          <div className="row text-center">
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={wardrobe}
                width="100"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={wardrobe}
                width="100"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={wardrobe}
                width="100"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={wardrobe}
                width="100"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={wardrobe}
                width="100"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={wardrobe}
                width="100"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={wardrobe}
                width="100"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={wardrobe}
                width="100"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={wardrobe}
                width="100"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                {/* <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5> */}
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="false">
                      <img src={wardrobe} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                      <img src={wardrobe} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                      <img src={wardrobe} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wardrobe;
