function GridSection(props) {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>{props.heading}</h1>
        <p>{props.description}</p>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2 px-2">
          <img src={props.img} width="100" class="card-img-top" alt="..." />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2 px-2">
          <img src={props.img} width="100" class="card-img-top" alt="..." />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2 px-2">
          <img src={props.img} width="100" class="card-img-top" alt="..." />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2 px-2">
          <img src={props.img} width="100" class="card-img-top" alt="..." />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2 px-2">
          <img src={props.img} width="100" class="card-img-top" alt="..." />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2 px-2">
          <img src={props.img} width="100" class="card-img-top" alt="..." />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2 px-2">
          <img src={props.img} width="100" class="card-img-top" alt="..." />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2 px-2">
          <img src={props.img} width="100" class="card-img-top" alt="..." />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 my-2 px-2">
          <img src={props.img} width="100" class="card-img-top" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default GridSection;
