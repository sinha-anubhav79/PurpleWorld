import React from "react";
import GalItem from "./gal-item";
import bd01 from "../assets/bedroom/bd01.jpg";
import bd02 from "../assets/bedroom/bd02.jpg";
import bd03 from "../assets/bedroom/bd03.jpg";
import bd04 from "../assets/bedroom/bd04.jpg";
import bd05 from "../assets/bedroom/bd05.jpg";
import bd06 from "../assets/bedroom/bd06.jpg";
import bd07 from "../assets/bedroom/bd07.jpg";
import bd08 from "../assets/bedroom/bd08.jpg";
import bd09 from "../assets/bedroom/bd09.jpg";
import bd10 from "../assets/bedroom/bd10.jpg";
import bd11 from "../assets/bedroom/bd11.jpg";
import bd12 from "../assets/bedroom/bd12.jpg";
import bd13 from "../assets/bedroom/bd13.jpg";
import bd14 from "../assets/bedroom/bd14.jpg";
import bd15 from "../assets/bedroom/bd15.jpg";
import bd16 from "../assets/bedroom/bd16.jpg";
import bd17 from "../assets/bedroom/bd17.jpg";
import bd18 from "../assets/bedroom/bd18.jpg";
import bd19 from "../assets/bedroom/bd19.jpg";
import bd20 from "../assets/bedroom/bd20.jpg";
import bd21 from "../assets/bedroom/bd21.jpg";
import bd22 from "../assets/bedroom/bd22.jpg";
import bd23 from "../assets/bedroom/bd23.jpg";
import bd24 from "../assets/bedroom/bd24.jpg";
import bd25 from "../assets/bedroom/bd25.jpg";
import bd26 from "../assets/bedroom/bd26.jpg";
import bd27 from "../assets/bedroom/bd27.jpg";
import bd28 from "../assets/bedroom/bd28.jpg";
import bd29 from "../assets/bedroom/bd29.jpg";
import bd30 from "../assets/bedroom/bd30.jpg";
import bd31 from "../assets/bedroom/bd31.jpg";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
  },
};

function Bedroom() {
  return (
    <div className="container">
      <div className="row" id="bedroom">
        <div className="text-center">
          <h1>Bedroom</h1>
          <p>
            Wrap your tired eyes around this massive gallery of refreshing
            modern bedroom ideas and gorgeous bedroom accessories that are sure
            to wake you up. From ultra sleek minimalist style bedrooms to warm
            modern rustic decor schemes, and styles with a cacophony of
            colourful options, there is something here to suit everyone.
          </p>
          <div className="row text-center">
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                <div className="row">
                  <GalItem imgAdd={bd01} />
                  <GalItem imgAdd={bd02} />
                  <GalItem imgAdd={bd03} />
                  <GalItem imgAdd={bd04} />
                  <GalItem imgAdd={bd05} />
                  <GalItem imgAdd={bd06} />
                  <GalItem imgAdd={bd07} />
                  <GalItem imgAdd={bd08} />
                  <GalItem imgAdd={bd09} />
                  <GalItem imgAdd={bd10} />
                  <GalItem imgAdd={bd11} />
                  <GalItem imgAdd={bd12} />
                  <GalItem imgAdd={bd13} />
                  <GalItem imgAdd={bd14} />
                  <GalItem imgAdd={bd15} />
                  <GalItem imgAdd={bd16} />
                  <GalItem imgAdd={bd17} />
                  <GalItem imgAdd={bd18} />
                  <GalItem imgAdd={bd19} />
                  <GalItem imgAdd={bd20} />
                  <GalItem imgAdd={bd21} />
                  <GalItem imgAdd={bd22} />
                  <GalItem imgAdd={bd23} />
                  <GalItem imgAdd={bd24} />
                  <GalItem imgAdd={bd25} />
                  <GalItem imgAdd={bd26} />
                  <GalItem imgAdd={bd27} />
                  <GalItem imgAdd={bd28} />
                  <GalItem imgAdd={bd29} />
                  <GalItem imgAdd={bd30} />
                  <GalItem imgAdd={bd31} />
                </div>
              </SRLWrapper>
            </SimpleReactLightbox>
          </div>
        </div>
        {/* <ModalDisplay /> */}
      </div>
    </div>
  );
}

export default Bedroom;
