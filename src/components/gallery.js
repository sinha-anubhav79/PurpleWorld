import wardrobe from "../assets/img/wardrobe.jpg";
import bedroom from "../assets/img/bed2.jpg";
import hall from "../assets/img/hall.jpg";
import drawingroom from "../assets/img/sofa.jpg";
import bathroom from "../assets/img/bathroom.jpg";
import kitchen from "../assets/img/kitchen.jpg";
import GalleryCard from "./gallery-card";
function Gallery() {
  return (
    <section id="gallery" className="bg-white container">
      <h1 className="text-center text-dark p-3">Gallery</h1>
      <div className="row">
        <GalleryCard
          cardImage={wardrobe}
          name="Wardrobe"
          linkad="/image/wardrobe"
          description="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
        <GalleryCard
          cardImage={bedroom}
          name="Bedroom"
          linkad="/image/bedroom"
          description="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
        <GalleryCard
          cardImage={hall}
          name="Hall"
          linkad="/image/hall"
          description="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
        <GalleryCard
          cardImage={drawingroom}
          name="Drawing Room"
          linkad="/image/drawingroom"
          description="Some quick example text to build on the card title and make up the
          bulk of the card's content."
        />
        <GalleryCard
          cardImage={bathroom}
          name="Bathroom"
          linkad="/image/bathroom"
          description="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
        <GalleryCard
          cardImage={kitchen}
          name="Kitchen"
          linkad="/image/kitchen"
          description="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        />
      </div>
    </section>
  );
}

export default Gallery;
