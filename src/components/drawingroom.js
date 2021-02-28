import drawingroom from "../assets/img/drawingroom.jpg";
function Drawingroom() {
  return (
    <div className="container">
      <div className="row" id="drawingroom">
        <div className="text-center">
          <h1>Drawing Room</h1>
          <p>
            The drawing room should be welcoming, well designed, comfortable and
            stylish enough to reflect your personality. All these come from
            furniture, lighting, curtains, wall decoration, etc. The interior
            designers of Purple World are here to inspire and impress you. Have
            a look!
          </p>
          <div className="row text-center">
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={drawingroom}
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
                src={drawingroom}
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
                src={drawingroom}
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
                src={drawingroom}
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
                src={drawingroom}
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
                src={drawingroom}
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
                src={drawingroom}
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
                src={drawingroom}
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
                src={drawingroom}
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
                      <img src={drawingroom} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                      <img src={drawingroom} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                      <img src={drawingroom} class="d-block w-100" alt="..." />
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

export default Drawingroom;
