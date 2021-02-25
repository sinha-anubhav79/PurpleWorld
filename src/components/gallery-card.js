import glImg1 from "../assets/img/bedroom.jpg";
function GalleryCard() {
  return (
    <div class="card card-width m-5">
      <img src={glImg1} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default GalleryCard;
