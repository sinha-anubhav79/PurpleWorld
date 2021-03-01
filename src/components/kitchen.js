import React from "react";
import GalItem from "./gal-item";
import kt01 from "../assets/kitchen/kt01.jpg";
import kt02 from "../assets/kitchen/kt02.jpg";
import kt03 from "../assets/kitchen/kt03.jpg";
import kt04 from "../assets/kitchen/kt04.jpg";
import kt05 from "../assets/kitchen/kt05.jpg";
import kt06 from "../assets/kitchen/kt06.jpg";
import kt07 from "../assets/kitchen/kt07.jpg";
import kt08 from "../assets/kitchen/kt08.jpg";
import kt09 from "../assets/kitchen/kt09.jpg";
import kt10 from "../assets/kitchen/kt10.jpg";
import kt11 from "../assets/kitchen/kt11.jpg";
import kt12 from "../assets/kitchen/kt12.jpg";
import kt13 from "../assets/kitchen/kt13.jpg";
import kt14 from "../assets/kitchen/kt14.jpg";
import kt15 from "../assets/kitchen/kt15.jpg";
import kt16 from "../assets/kitchen/kt16.jpg";
import kt17 from "../assets/kitchen/kt17.jpg";
import kt18 from "../assets/kitchen/kt18.jpg";
import kt19 from "../assets/kitchen/kt19.jpg";
import kt20 from "../assets/kitchen/kt20.jpg";
import kt21 from "../assets/kitchen/kt21.jpg";
import kt22 from "../assets/kitchen/kt22.jpg";
import kt23 from "../assets/kitchen/kt23.jpg";
import kt24 from "../assets/kitchen/kt24.jpg";
import kt25 from "../assets/kitchen/kt25.jpg";
import kt26 from "../assets/kitchen/kt26.jpg";
import kt27 from "../assets/kitchen/kt27.jpg";
import kt28 from "../assets/kitchen/kt28.jpg";
import kt29 from "../assets/kitchen/kt29.jpg";
import kt30 from "../assets/kitchen/kt30.jpg";
import kt31 from "../assets/kitchen/kt31.jpg";
import kt32 from "../assets/kitchen/kt32.jpg";
import kt33 from "../assets/kitchen/kt33.jpg";
import kt34 from "../assets/kitchen/kt34.jpg";
import kt35 from "../assets/kitchen/kt35.jpg";
import kt36 from "../assets/kitchen/kt36.jpg";
import kt37 from "../assets/kitchen/kt37.jpg";
import kt38 from "../assets/kitchen/kt38.jpg";
import kt39 from "../assets/kitchen/kt39.jpg";
import kt40 from "../assets/kitchen/kt40.jpg";
import kt41 from "../assets/kitchen/kt41.jpg";
import kt42 from "../assets/kitchen/kt42.jpg";
import kt43 from "../assets/kitchen/kt43.jpg";
import kt44 from "../assets/kitchen/kt44.jpg";
import kt45 from "../assets/kitchen/kt45.jpg";
import kt46 from "../assets/kitchen/kt46.jpg";
import kt47 from "../assets/kitchen/kt47.jpg";
import kt48 from "../assets/kitchen/kt48.jpg";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
  },
};

function Kitchen() {
  return (
    <div className="container">
      <div className="row" id="kitchen">
        <div className="text-center">
          <h1>Kitchen</h1>
          <p>
            If your kitchen is indeed the heart of your home - or linked with
            your dining space - then you’ll want to fill it with the kind of
            luxury you’d expect at your very favourite restaurant. Our portfolio
            of inspirational kitchen designs are steeped with luxury for high
            end homes, or even suited for compact proportions alike.
          </p>
          <div className="row text-center">
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                <div className="row">
                  <GalItem imgAdd={kt01} />
                  <GalItem imgAdd={kt02} />
                  <GalItem imgAdd={kt03} />
                  <GalItem imgAdd={kt04} />
                  <GalItem imgAdd={kt05} />
                  <GalItem imgAdd={kt06} />
                  <GalItem imgAdd={kt07} />
                  <GalItem imgAdd={kt08} />
                  <GalItem imgAdd={kt09} />
                  <GalItem imgAdd={kt10} />
                  <GalItem imgAdd={kt11} />
                  <GalItem imgAdd={kt12} />
                  <GalItem imgAdd={kt13} />
                  <GalItem imgAdd={kt14} />
                  <GalItem imgAdd={kt15} />
                  <GalItem imgAdd={kt16} />
                  <GalItem imgAdd={kt17} />
                  <GalItem imgAdd={kt18} />
                  <GalItem imgAdd={kt19} />
                  <GalItem imgAdd={kt20} />
                  <GalItem imgAdd={kt21} />
                  <GalItem imgAdd={kt22} />
                  <GalItem imgAdd={kt23} />
                  <GalItem imgAdd={kt24} />
                  <GalItem imgAdd={kt25} />
                  <GalItem imgAdd={kt26} />
                  <GalItem imgAdd={kt27} />
                  <GalItem imgAdd={kt28} />
                  <GalItem imgAdd={kt29} />
                  <GalItem imgAdd={kt30} />
                  <GalItem imgAdd={kt31} />
                  <GalItem imgAdd={kt32} />
                  <GalItem imgAdd={kt33} />
                  <GalItem imgAdd={kt34} />
                  <GalItem imgAdd={kt35} />
                  <GalItem imgAdd={kt36} />
                  <GalItem imgAdd={kt37} />
                  <GalItem imgAdd={kt38} />
                  <GalItem imgAdd={kt39} />
                  <GalItem imgAdd={kt40} />
                  <GalItem imgAdd={kt41} />
                  <GalItem imgAdd={kt42} />
                  <GalItem imgAdd={kt43} />
                  <GalItem imgAdd={kt44} />
                  <GalItem imgAdd={kt45} />
                  <GalItem imgAdd={kt46} />
                  <GalItem imgAdd={kt47} />
                  <GalItem imgAdd={kt48} />
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

export default Kitchen;
