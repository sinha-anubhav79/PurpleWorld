import React from "react";
import lr01 from "../assets/livingRoom/lr01.jpg";
function ModalDisplay(props) {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={lr01} alt="lr01" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDisplay;
