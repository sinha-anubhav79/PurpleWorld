import bedroom from "../assets/img/bed2.jpg";
function Bedroom() {
  return (
    <div className="container">
      <div className="row" id="bedroom">
        <div className="text-center">
          <h1>Bedroom</h1>
          <p>
            Wrap your tired eyes around this massive gallery of refreshing
            modern bedroom ideas and gorgeous bedroom accessories that are sure
            to wake you up. From ultra sleek minimalist style bedrooms to warm
            modern rustic decor schemes, and styles with a cacophony of
            colourful options, there is something here to suit everyone.
          </p>
          <div className="row text-center">
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={bedroom}
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
                src={bedroom}
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
                src={bedroom}
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
                src={bedroom}
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
                src={bedroom}
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
                src={bedroom}
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
                src={bedroom}
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
                src={bedroom}
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
                src={bedroom}
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
                      <img src={bedroom} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                      <img src={bedroom} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                      <img src={bedroom} class="d-block w-100" alt="..." />
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

export default Bedroom;
