import glImg1 from "../assets/img/wardrobe.jpg";
import glImg2 from "../assets/img/bed2.jpg";
import glImg3 from "../assets/img/hall.jpg";
import glImg4 from "../assets/img/sofa.jpg";
import glImg5 from "../assets/img/bathroom.jpg";
import GalleryCard from "./gallery-card";
function Gallery() {
  return (
    <section id="gallery" className="bg-white container">
      <h1 className="text-center text-dark p-3">Gallery</h1>
      <div className="row">
        <GalleryCard cardImage={glImg1} />
        <GalleryCard cardImage={glImg2} />
        <GalleryCard cardImage={glImg3} />
        <GalleryCard cardImage={glImg4} />
        <GalleryCard cardImage={glImg5} />
      </div>
    </section>
  );
}

export default Gallery;
