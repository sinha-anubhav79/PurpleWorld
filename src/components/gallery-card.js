import { Link } from "react-router-dom";
function GalleryCard(props) {
  return (
    <div className="card-out col-md-4 col-sm-6 my-3">
      <div class="card shadow">
        <img src={props.cardImage} width="100" class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.description}</p>
          <Link to={props.linkad} class="btn btn-outline-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
