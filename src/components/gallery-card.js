import { Link } from "react-router-dom";
function GalleryCard(props) {
  return (
    <div className="card-out col-md-4 col-sm-6 my-3" data-aos="fade-up">
      <div class="card shadow">
        <img src={props.cardImage} width="100" class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h3 className="pb-3">{props.name}</h3>
          <Link to={props.linkad} class="btn btn-outline-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
