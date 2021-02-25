import glImg1 from "../assets/img/bedroom.jpg";
import GalleryCard from "./gallery-card";
function Gallery() {
  return (
    <section id="gallery" className="bg-dark">
      <h1 className="text-center text-light">Gallery</h1>
      <div className="d-flex">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </section>
  );
}

export default Gallery;
