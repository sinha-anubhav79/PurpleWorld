import React from "react";
import bedroom from "../assets/img/bed2.jpg";
import drawingroom from "../assets/img/sofa.jpg";
import kitchen from "../assets/img/kitchen.jpg";
import GalleryCard from "./gallery-card";
function Gallery() {
  return (
    <section id="gallery" className="bg-white container">
      <h1 className="text-center text-dark p-3 mt-5 sec-head">Gallery</h1>
      <div className="row">
        <GalleryCard
          cardImage={bedroom}
          name="Bedroom"
          linkad="/image/bedroom"
        />
        <GalleryCard
          cardImage={drawingroom}
          name="Living Room"
          linkad="/image/drawingroom"
        />
        <GalleryCard
          cardImage={kitchen}
          name="Kitchen"
          linkad="/image/kitchen"
        />
      </div>
    </section>
  );
}

export default Gallery;
