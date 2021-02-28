import bathroom from "../assets/img/bathroom.jpg";
function Bathroom() {
  return (
    <div className="container">
      <div className="row" id="bathroom">
        <div className="text-center">
          <h1>Bathroom</h1>
          <p>
            Unique bathtubs, sleek vanity units and modern toilet designs come
            in all shapes and sizes, to suit spaces and budgets both large and
            small. Aside from the essential facilities, bathrooms can be
            accessorised with chic dispensers and storage.
          </p>
          <div className="row text-center">
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={bathroom}
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
                src={bathroom}
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
                src={bathroom}
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
                src={bathroom}
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
                src={bathroom}
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
                src={bathroom}
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
                src={bathroom}
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
                src={bathroom}
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
                src={bathroom}
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
                      <img src={bathroom} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                      <img src={bathroom} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                      <img src={bathroom} class="d-block w-100" alt="..." />
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

export default Bathroom;
