import React from "react";
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
      <h1 className="text-center text-dark p-3">Portfolio</h1>
      <div className="row">
        <GalleryCard
          cardImage={wardrobe}
          name="Wardrobe"
          linkad="/image/wardrobe"
        />
        <GalleryCard
          cardImage={bedroom}
          name="Bedroom"
          linkad="/image/bedroom"
        />
        <GalleryCard cardImage={hall} name="Hall" linkad="/image/hall" />
        <GalleryCard
          cardImage={drawingroom}
          name="Drawing Room"
          linkad="/image/drawingroom"
        />
        <GalleryCard
          cardImage={bathroom}
          name="Bathroom"
          linkad="/image/bathroom"
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
