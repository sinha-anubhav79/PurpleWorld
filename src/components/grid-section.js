function GridSection(props) {
  return (
    <div className="row">
      <h4>{props.heading}</h4>
      <div className="col-md-4 my-2">
        <img src={props.img} width="100" class="card-img-top" alt="..." />
      </div>
      <div className="col-md-4 my-2">
        <img src={props.img} width="100" class="card-img-top" alt="..." />
      </div>
      <div className="col-md-4 my-2">
        <img src={props.img} width="100" class="card-img-top" alt="..." />
      </div>
      <div className="col-md-4 my-2">
        <img src={props.img} width="100" class="card-img-top" alt="..." />
      </div>
      <div className="col-md-4 my-2">
        <img src={props.img} width="100" class="card-img-top" alt="..." />
      </div>
      <div className="col-md-4 my-2">
        <img src={props.img} width="100" class="card-img-top" alt="..." />
      </div>
      <div className="col-md-4 my-2">
        <img src={props.img} width="100" class="card-img-top" alt="..." />
      </div>
      <div className="col-md-4 my-2">
        <img src={props.img} width="100" class="card-img-top" alt="..." />
      </div>
      <div className="col-md-4 my-2">
        <img src={props.img} width="100" class="card-img-top" alt="..." />
      </div>
    </div>
  );
}

export default GridSection;
