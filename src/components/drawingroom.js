import React from "react";
import GalItem from "./gal-item";
import lr01 from "../assets/livingRoom/lr01.jpg";
import lr02 from "../assets/livingRoom/lr02.jpg";
import lr03 from "../assets/livingRoom/lr03.jpg";
import lr04 from "../assets/livingRoom/lr04.jpg";
import lr05 from "../assets/livingRoom/lr05.jpg";
import lr06 from "../assets/livingRoom/lr06.jpg";
import lr07 from "../assets/livingRoom/lr07.jpg";
import lr08 from "../assets/livingRoom/lr08.jpg";
import lr09 from "../assets/livingRoom/lr09.jpg";
import lr10 from "../assets/livingRoom/lr10.jpg";
import lr11 from "../assets/livingRoom/lr11.jpg";
import lr12 from "../assets/livingRoom/lr12.jpg";
import lr13 from "../assets/livingRoom/lr13.jpg";
import lr14 from "../assets/livingRoom/lr14.jpg";
import lr15 from "../assets/livingRoom/lr15.jpg";
import lr16 from "../assets/livingRoom/lr16.jpg";
import lr17 from "../assets/livingRoom/lr17.jpg";
import lr18 from "../assets/livingRoom/lr18.jpg";
import lr19 from "../assets/livingRoom/lr19.jpg";
import lr20 from "../assets/livingRoom/lr20.jpg";
import lr21 from "../assets/livingRoom/lr21.jpg";
import lr22 from "../assets/livingRoom/lr22.jpg";
import lr23 from "../assets/livingRoom/lr23.jpg";
import lr24 from "../assets/livingRoom/lr24.jpg";
import lr25 from "../assets/livingRoom/lr25.jpg";
import lr26 from "../assets/livingRoom/lr26.jpg";
import lr27 from "../assets/livingRoom/lr27.jpg";
import lr28 from "../assets/livingRoom/lr28.jpg";
import lr29 from "../assets/livingRoom/lr29.jpg";
import lr30 from "../assets/livingRoom/lr30.jpg";
import lr31 from "../assets/livingRoom/lr31.jpg";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
  },
};

function Drawingroom() {
  return (
    <div className="container">
      <div className="row" id="drawingroom">
        <div className="text-center">
          <h1>Drawing Room</h1>
          <p>
            The drawing room should be welcoming, well designed, comfortable and
            stylish enough to reflect your personality. All these come from
            furniture, lighting, curtains, wall decoration, etc. The interior
            designers of Purple World are here to inspire and impress you. Have
            a look!
          </p>
          <div className="row text-center">
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                <div className="row">
                  <GalItem imgAdd={lr01} />
                  <GalItem imgAdd={lr02} />
                  <GalItem imgAdd={lr03} />
                  <GalItem imgAdd={lr04} />
                  <GalItem imgAdd={lr05} />
                  <GalItem imgAdd={lr06} />
                  <GalItem imgAdd={lr07} />
                  <GalItem imgAdd={lr08} />
                  <GalItem imgAdd={lr09} />
                  <GalItem imgAdd={lr10} />
                  <GalItem imgAdd={lr11} />
                  <GalItem imgAdd={lr12} />
                  <GalItem imgAdd={lr13} />
                  <GalItem imgAdd={lr14} />
                  <GalItem imgAdd={lr15} />
                  <GalItem imgAdd={lr16} />
                  <GalItem imgAdd={lr17} />
                  <GalItem imgAdd={lr18} />
                  <GalItem imgAdd={lr07} />
                  <GalItem imgAdd={lr19} />
                  <GalItem imgAdd={lr20} />
                  <GalItem imgAdd={lr21} />
                  <GalItem imgAdd={lr22} />
                  <GalItem imgAdd={lr23} />
                  <GalItem imgAdd={lr24} />
                  <GalItem imgAdd={lr25} />
                  <GalItem imgAdd={lr26} />
                  <GalItem imgAdd={lr27} />
                  <GalItem imgAdd={lr28} />
                  <GalItem imgAdd={lr29} />
                  <GalItem imgAdd={lr30} />
                  <GalItem imgAdd={lr31} />
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

export default Drawingroom;
