function GalleryCard(props) {
  return (
    <div className="card-out col-md-4 col-sm-6 my-3">
      <div class="card shadow">
        <img src={props.cardImage} width="100" class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-outline-secondary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
