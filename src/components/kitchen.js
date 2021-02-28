import kitchen from "../assets/img/kitchen.jpg";
function Kitchen() {
  return (
    <div className="container">
      <div className="row" id="kitchen">
        <div className="text-center">
          <h1>Kitchen</h1>
          <p>
            If your kitchen is indeed the heart of your home - or linked with
            your dining space - then you’ll want to fill it with the kind of
            luxury you’d expect at your very favourite restaurant. Our portfolio
            of inspirational kitchen designs are steeped with luxury for high
            end homes, or even suited for compact proportions alike.
          </p>
          <div className="row text-center">
            <div
              className="col-lg-3 col-md-4 col-sm-6 my-2 px-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={kitchen}
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
                src={kitchen}
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
                src={kitchen}
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
                src={kitchen}
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
                src={kitchen}
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
                src={kitchen}
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
                src={kitchen}
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
                src={kitchen}
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
                src={kitchen}
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
                      <img src={kitchen} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                      <img src={kitchen} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="false">
                      <img src={kitchen} class="d-block w-100" alt="..." />
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

export default Kitchen;
